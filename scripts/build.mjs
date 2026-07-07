// ClassScout NYC Design System — site builder.
//
// Produces `dist/` — a self-contained static site that GitHub Pages serves.
// The whole point: the site is GENERATED FROM THE DESIGN-SYSTEM SOURCE, so a
// change to a token, a component, a screen, or the docs page is reflected on the
// next build/deploy. The generated artifacts — the component demo bundle
// (`assets/ds-static-bundle.js`) and the UI-kit bundle (`_ds_bundle.js`) — are
// regenerated here from the .jsx source with the exact Babel settings the design
// tool's dev-loader used, so the live demos and click-through always match the
// component source rather than a frozen snapshot.

import { transformSync } from '@babel/core';
import presetEnv from '@babel/preset-env';
import presetReact from '@babel/preset-react';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'project');
const OUT = path.join(ROOT, 'dist');

// Public component order — matches the design tool's original bundle epilogue.
// Later entries win when merging exports. This list drives the CSDS namespace
// the docs page (design-system.html) reads.
const COMPONENTS = [
  'components/core/Icon.jsx',
  'components/core/Button.jsx',
  'components/core/FilterChip.jsx',
  'components/core/SaveButton.jsx',
  'components/core/CompareButton.jsx',
  'components/core/TextInput.jsx',
  'components/core/SelectField.jsx',
  'components/trust/TrustBadge.jsx',
  'components/trust/PriceEstimateLabel.jsx',
  'components/trust/LastCheckedLabel.jsx',
  'components/trust/ReportOutdatedLink.jsx',
  'components/trust/SourceBlock.jsx',
  'components/search/HeroSearchPanel.jsx',
  'components/search/QuickStartCard.jsx',
  'components/search/FilterSheet.jsx',
  'components/listing/ActivityCard.jsx',
  'components/listing/DetailFactsTable.jsx',
  'components/listing/ConfirmChecklist.jsx',
  'components/scout/ScoutPromptCard.jsx',
  'components/scout/ScoutResultCard.jsx',
  'components/states/EmptyState.jsx',
  'components/states/ErrorState.jsx',
  'components/states/LoadingSkeleton.jsx',
  'components/navigation/TopNav.jsx',
  'components/navigation/BottomNav.jsx',
  'components/map/MapPin.jsx',
  'components/map/MapPreviewCard.jsx',
  'components/provider/ProviderCTA.jsx',
];

// Entry screens the UI-kit page (ui_kits/classscout-web/index.html) destructures
// via getDS(...). Merged into the CSKIT namespace the page's findBundleNS finds.
const KIT_ENTRIES = [
  'ui_kits/classscout-web/HomeScreen.jsx',
  'ui_kits/classscout-web/ResultsScreen.jsx',
  'ui_kits/classscout-web/DetailScreen.jsx',
  'ui_kits/classscout-web/Responsive.jsx',
  'components/navigation/BottomNav.jsx',
];

// Files/dirs we do NOT ship: the stale pre-inlined single-file exports, the
// print-only layout, the alternate _ds token bundle, and design-tool metadata.
const EXCLUDE = new Set([
  'design-system-standalone.html',
  'design-system-print-54dqh2.html',
  '_ds',
  '.thumbnail',
  'SKILL.md',
]);

async function walk(dir, base = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const abs = path.join(dir, e.name);
    const rel = path.relative(base, abs);
    if (EXCLUDE.has(rel) || EXCLUDE.has(e.name)) continue;
    if (e.isDirectory()) files.push(...(await walk(abs, base)));
    else files.push(rel);
  }
  return files;
}

async function listJsx(subdir) {
  const abs = path.join(SRC, subdir);
  const found = await walk(abs, SRC);
  return found.filter((f) => f.endsWith('.jsx')).map((f) => f.split(path.sep).join('/'));
}

// Transpile one .jsx exactly as the dev-loader does, then wrap it as a CommonJS
// module in the registry the bundle prelude understands.
async function compileModule(key) {
  const source = await fs.readFile(path.join(SRC, key), 'utf8');
  const { code } = transformSync(source, {
    filename: key,
    babelrc: false,
    configFile: false,
    presets: [
      [presetEnv, { modules: 'commonjs' }],
      [presetReact, { runtime: 'classic' }],
    ],
  });
  return `  registry[${JSON.stringify(key)}] = function (require, module, exports) {\n${code}\n};\n`;
}

// Build a bundle: register every module in `keys`, then expose one or more
// window globals, each merging the exports of its entry list. `note` avoids a
// literal star-slash in the header comment (it would close the block early).
async function buildBundle(keys, exposes, note) {
  const modules = [];
  for (const key of keys) modules.push(await compileModule(key));
  const prelude = `/* ClassScout NYC — ${note} (generated; do not edit).
   Regenerated from the .jsx source by scripts/build.mjs. No runtime transpile needed. */
(function () {
  var registry = {};
  var cache = {};
  function norm(path) {
    var parts = [];
    path.split('/').forEach(function (p) {
      if (p === '' || p === '.') return;
      if (p === '..') parts.pop(); else parts.push(p);
    });
    return parts.join('/');
  }
  function makeRequire(fromDir) {
    return function (spec) {
      if (spec === 'react') return window.React;
      var key = norm(spec.charAt(0) === '.' ? fromDir + '/' + spec : spec);
      if (cache[key]) return cache[key].exports;
      var fn = registry[key];
      if (!fn) throw new Error('CSDS: module not found: ' + key);
      var module = { exports: {} };
      cache[key] = module;
      fn(makeRequire(key.split('/').slice(0, -1).join('/')), module, module.exports);
      return module.exports;
    };
  }

`;
  const expose = exposes.map(({ global, entries }) => `
  (function () {
    var api = {};
    var req = makeRequire('');
    ${JSON.stringify(entries)}.forEach(function (f) {
      var m = req(f);
      Object.keys(m).forEach(function (k) { api[k] = m[k]; });
    });
    window[${JSON.stringify(global)}] = api;
  })();`).join('\n');
  return prelude + modules.join('\n') + expose + '\n})();\n';
}

// Sanity-check a generated bundle assembles its globals without throwing, using
// a minimal React shim. Fails the build loudly on an unresolved import or a
// module that throws at eval time.
function validateBundle(code, checks) {
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
  for (const { global, expect } of checks) {
    const ns = win[global];
    if (!ns) throw new Error(`bundle did not set window.${global}`);
    const missing = expect.filter((k) => typeof ns[k] !== 'function');
    if (missing.length) throw new Error(`${global} missing: ${missing.join(', ')}`);
  }
  return checks.map(({ global }) => `${global}=${Object.keys(win[global]).length}`).join(', ');
}

async function copyTree() {
  const files = await walk(SRC);
  for (const rel of files) {
    const to = path.join(OUT, rel);
    await fs.mkdir(path.dirname(to), { recursive: true });
    await fs.copyFile(path.join(SRC, rel), to);
  }
  return files.length;
}

async function main() {
  console.log('› Cleaning dist/');
  await fs.rm(OUT, { recursive: true, force: true });
  await fs.mkdir(OUT, { recursive: true });

  console.log('› Copying design-system source → dist/');
  const copied = await copyTree();

  const componentJsx = await listJsx('components');
  const kitJsx = await listJsx('ui_kits/classscout-web');

  console.log('› Regenerating component demo bundle (assets/ds-static-bundle.js)');
  const dsBundle = await buildBundle(
    componentJsx,
    [{ global: 'CSDS', entries: COMPONENTS }],
    'static component bundle',
  );
  await fs.writeFile(path.join(OUT, 'assets', 'ds-static-bundle.js'), dsBundle);
  console.log('  ✓ ' + validateBundle(dsBundle, [
    { global: 'CSDS', expect: ['Button', 'ActivityCard', 'TrustBadge', 'TopNav', 'MapPin'] },
  ]));

  console.log('› Regenerating UI-kit bundle (_ds_bundle.js)');
  const kitBundle = await buildBundle(
    [...componentJsx, ...kitJsx],
    [{ global: 'CSKIT', entries: KIT_ENTRIES }],
    'UI-kit screen bundle',
  );
  await fs.writeFile(path.join(OUT, '_ds_bundle.js'), kitBundle);
  console.log('  ✓ ' + validateBundle(kitBundle, [
    { global: 'CSKIT', expect: ['HomeScreen', 'ResultsScreen', 'DetailScreen', 'BottomNav'] },
  ]));

  console.log('› Writing index.html (= design-system docs page)');
  const docs = await fs.readFile(path.join(SRC, 'design-system.html'), 'utf8');
  await fs.writeFile(path.join(OUT, 'index.html'), docs);

  // Disable Jekyll so Pages serves every file verbatim and does no processing.
  await fs.writeFile(path.join(OUT, '.nojekyll'), '');

  console.log(`\n✓ Built dist/ (${copied} source files + generated bundles). Ready for GitHub Pages.`);
}

main().catch((err) => {
  console.error('\n✗ Build failed:', err.message);
  process.exit(1);
});
