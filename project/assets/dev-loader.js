/* Dev fallback loader: used by specimen cards and UI kits when _ds_bundle.js
   has not been generated yet. Fetches .jsx sources, transpiles with Babel
   (already on the page), and wires relative imports. The real bundle, when
   present, always wins. */
(function () {
  const cache = {};
  const abs = (p, base) => new URL(p, base || location.href).href;

  async function loadModule(url) {
    url = abs(url);
    if (cache[url]) return cache[url].promise;
    let resolve;
    const promise = new Promise((r) => { resolve = r; });
    cache[url] = { promise };
    const src = await (await fetch(url)).text();
    const deps = [...src.matchAll(/(?:^|\n)\s*import\s[^;'"]*?from\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
    const depMap = { react: window.React };
    for (const d of deps) {
      if (d === 'react') continue;
      depMap[d] = await loadModule(abs(d, url));
    }
    const code = Babel.transform(src, { presets: [['env', { modules: 'commonjs' }], ['react', { runtime: 'classic' }]], filename: url }).code;
    const module = { exports: {} };
    const fn = new Function('require', 'module', 'exports', code);
    fn((p) => {
      if (!(p in depMap)) throw new Error('Unresolved import ' + p + ' in ' + url);
      return depMap[p];
    }, module, module.exports);
    resolve(module.exports);
    return promise;
  }

  // findBundleNS(...fnNames): returns the generated bundle namespace if present.
  window.findBundleNS = function (...names) {
    for (const k of Object.keys(window)) {
      const v = window[k];
      try {
        if (v && typeof v === 'object' && names.every((n) => typeof v[n] === 'function')) return v;
      } catch (e) { /* ignore cross-origin */ }
    }
    return null;
  };

  // loadDS(entries): loads entry .jsx files (relative to the page) and merges exports.
  window.loadDS = async function (entries) {
    const ns = {};
    for (const e of entries) Object.assign(ns, await loadModule(e));
    return ns;
  };

  // getDS(root, names, entries): prefer the generated bundle at `${root}_ds_bundle.js`,
  // fall back to transpiling the entry .jsx files directly.
  window.getDS = async function (root, names, entries) {
    let ns = window.findBundleNS(...names);
    if (ns) return ns;
    try {
      const r = await fetch(root + '_ds_bundle.js', { method: 'HEAD' });
      if (r.ok) {
        await new Promise((res, rej) => {
          const s = document.createElement('script');
          s.src = root + '_ds_bundle.js';
          s.onload = res; s.onerror = rej;
          document.head.appendChild(s);
        });
        ns = window.findBundleNS(...names);
        if (ns) return ns;
      }
    } catch (e) { /* no bundle yet */ }
    return window.loadDS(entries);
  };
})();
