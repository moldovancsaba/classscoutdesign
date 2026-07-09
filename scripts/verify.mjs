// ClassScout NYC Design System — dist/ verifier.
//
// Deterministic acceptance checks over the BUILT site (`dist/`), runnable in a
// headless/CI context (no browser needed). Complements build.mjs's bundle
// self-check with the things a build alone does not catch:
//   1. Required entry files exist (docs page, both bundles, the UI kit).
//   2. No CDN references leaked in — the site must be fully self-contained.
//   3. Every locally-referenced asset in the two HTML entry points resolves on
//      disk (no 404s once Pages serves it verbatim).
//   4. The two generated bundles actually assemble and expose their globals
//      (re-validated here from the shipped files, so a stale/corrupt committed
//      bundle is caught even when the model forgot to rebuild).
//   5. An HTTP smoke test: serve dist/ and assert the key URLs return 200.
//
// Exits non-zero on the first failure so `npm run sync` and CI stop loudly.

import { createServer } from 'node:http';
import { promises as fs } from 'node:fs';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'dist');

const REQUIRED = [
  'index.html',
  '.nojekyll',
  'styles.css',
  '_ds_bundle.js',
  'assets/ds-static-bundle.js',
  'ui_kits/classscout-web/index.html',
];

// HTML entry points whose local src/href references must all resolve on disk.
const HTML_ENTRIES = ['index.html', 'ui_kits/classscout-web/index.html'];

// URLs the HTTP smoke test must serve with a 200.
const SMOKE_URLS = [
  '/',
  '/index.html',
  '/styles.css',
  '/_ds_bundle.js',
  '/assets/ds-static-bundle.js',
  '/ui_kits/classscout-web/index.html',
];

const fail = (msg) => {
  console.error(`✗ verify: ${msg}`);
  process.exit(1);
};

async function exists(rel) {
  try {
    await fs.access(path.join(OUT, rel));
    return true;
  } catch {
    return false;
  }
}

// Recursively collect text files under dist/ for the CDN-leak scan.
async function walkText(dir, base = OUT) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walkText(abs, base)));
    else if (/\.(html?|js|jsx|css|json|md)$/i.test(e.name))
      out.push(path.relative(base, abs));
  }
  return out;
}

// Minimal React shim — mirrors build.mjs's validateBundle so a shipped bundle
// is re-checked independently of whether the build just ran.
function bundleGlobals(code) {
  const win = {};
  const React = {
    createElement: () => ({}), cloneElement: () => ({}),
    useState: (v) => [typeof v === 'function' ? v() : v, () => {}],
    useRef: () => ({ current: null }), useEffect: () => {}, useLayoutEffect: () => {},
    useMemo: (f) => f(), useCallback: (f) => f, useContext: () => ({}),
    createContext: () => ({ Provider: () => ({}), Consumer: () => ({}) }),
    Fragment: 'Fragment', Children: { map: () => [], toArray: () => [] },
  };
  // eslint-disable-next-line no-new-func
  new Function('window', 'React', code)(win, React);
  return win;
}

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
  '.jsx': 'text/javascript; charset=utf-8', '.md': 'text/plain; charset=utf-8',
};

async function main() {
  if (!(await exists('.'))) fail('dist/ not found — run `npm run build` first.');

  // 1. Required files.
  for (const rel of REQUIRED) {
    if (!(await exists(rel))) fail(`missing required file: dist/${rel}`);
  }
  console.log(`  ✓ ${REQUIRED.length} required entry files present`);

  // 2. No CDN references (the site must pull nothing at runtime).
  const textFiles = await walkText(OUT);
  const leaks = [];
  for (const rel of textFiles) {
    const body = await fs.readFile(path.join(OUT, rel), 'utf8');
    if (/unpkg\.com|cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com/.test(body)) leaks.push(rel);
  }
  if (leaks.length) fail(`CDN reference(s) found (must be vendored): ${leaks.join(', ')}`);
  console.log(`  ✓ no CDN references across ${textFiles.length} shipped text files`);

  // 3. Local asset references resolve.
  let refCount = 0;
  for (const entry of HTML_ENTRIES) {
    const html = await fs.readFile(path.join(OUT, entry), 'utf8');
    const dir = path.dirname(entry);
    const refs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
      .map((m) => m[1])
      .filter((u) => !/^(https?:)?\/\/|^#|^mailto:|^data:|^javascript:/.test(u));
    for (const ref of refs) {
      const clean = ref.split(/[?#]/)[0];
      const rel = path.normalize(path.join(dir, clean));
      if (!(await exists(rel))) fail(`dangling reference in ${entry}: "${ref}" → dist/${rel}`);
      refCount++;
    }
  }
  console.log(`  ✓ ${refCount} local asset references resolve on disk`);

  // 4. Generated bundles assemble and expose their globals.
  const csds = bundleGlobals(await fs.readFile(path.join(OUT, 'assets/ds-static-bundle.js'), 'utf8'));
  for (const k of ['Button', 'ActivityCard', 'TrustBadge', 'TopNav', 'MapPin'])
    if (typeof csds.CSDS?.[k] !== 'function') fail(`CSDS missing export: ${k}`);
  const cskit = bundleGlobals(await fs.readFile(path.join(OUT, '_ds_bundle.js'), 'utf8'));
  for (const k of ['HomeScreen', 'ResultsScreen', 'DetailScreen', 'BottomNav'])
    if (typeof cskit.CSKIT?.[k] !== 'function') fail(`CSKIT missing export: ${k}`);
  console.log(`  ✓ bundles assemble (CSDS=${Object.keys(csds.CSDS).length}, CSKIT=${Object.keys(cskit.CSKIT).length})`);

  // 5. HTTP smoke test.
  const server = createServer((req, res) => {
    let rel = decodeURIComponent(req.url.split('?')[0]);
    if (rel.endsWith('/')) rel += 'index.html';
    const file = path.join(OUT, rel);
    if (!file.startsWith(OUT)) { res.writeHead(403).end(); return; }
    const stream = createReadStream(file);
    stream.on('open', () =>
      res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream' }));
    stream.on('error', () => res.writeHead(404).end('404'));
    stream.pipe(res);
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  try {
    for (const u of SMOKE_URLS) {
      const r = await fetch(`http://127.0.0.1:${port}${u}`);
      if (r.status !== 200) fail(`HTTP ${r.status} for ${u}`);
      if ((await r.text()).length === 0) fail(`empty body for ${u}`);
    }
  } finally {
    server.close();
  }
  console.log(`  ✓ ${SMOKE_URLS.length} URLs served 200`);

  console.log('\n✓ verify passed — dist/ is self-contained, complete, and serves clean.');
}

main().catch((err) => {
  console.error('\n✗ verify errored:', err.message);
  process.exit(1);
});
