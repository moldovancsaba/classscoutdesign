// ClassScout NYC Design System — post-import finisher (`npm run sync`).
//
// WHAT THIS IS NOT: this does not talk to Claude Design. Pulling the design
// source down (DesignSync list_files/get_file → reconcile into project/) is
// model-driven — an MCP tool only the interactive agent can call — and happens
// BEFORE this runs. See docs/SYNC-LOCALLY.md for that step.
//
// WHAT THIS DOES: the deterministic tail, as one command, once project/ already
// reflects the latest import —
//   1. build   — regenerate dist/ from project/
//   2. verify  — assert dist/ is self-contained, complete, serves 200s
//   3. stamp   — record the import point in .last-import.json
// then stops and prints the git commands, so the actual commit + push stays a
// deliberate, reviewable step.
//
// Usage (forward the remote project's updatedAt from DesignSync get_project):
//   npm run sync -- --updated-at="2026-07-09T12:34:56.000Z" --note="refreshed tokens"

import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const passthrough = process.argv.slice(2); // forwarded to the stamp step

function step(label, file, args = []) {
  console.log(`\n──▶ ${label}`);
  execFileSync('node', [path.join('scripts', file), ...args], { cwd: ROOT, stdio: 'inherit' });
}

try {
  step('build  — regenerate dist/ from project/', 'build.mjs');
  step('verify — check dist/ is complete and self-contained', 'verify.mjs');
  step('stamp  — record import point in .last-import.json', 'stamp-import.mjs', passthrough);
} catch {
  // Child steps already printed their own failure; keep the exit clean.
  console.error('\n✗ sync halted — fix the failure above and re-run `npm run sync`.');
  process.exit(1);
}

console.log(`
✓ sync finished: dist/ builds, verifies, and the import is stamped.

Next (deliberate, reviewable — not automated):
  git -C "${ROOT}" status                 # review what the import changed
  git -C "${ROOT}" add -A
  git -C "${ROOT}" commit -m "Sync design system from Claude Design"
  git -C "${ROOT}" push origin main       # Pages redeploys automatically

dist/ is gitignored and rebuilt in CI — do not commit it.`);
