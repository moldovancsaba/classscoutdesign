// ClassScout NYC Design System — import stamper.
//
// Records WHEN the design source was last pulled down from the Claude Design
// project into `project/`, and — critically — the remote project's own
// `updatedAt` at that moment. That remote timestamp is the only thing that lets
// anything later answer "has the design changed since we last imported?" without
// re-authenticating to DesignSync: compare the live project's updatedAt against
// the value recorded here.
//
// The import itself is model-driven (DesignSync is an MCP tool only the
// interactive agent can call), so this script cannot read the remote timestamp
// on its own. The agent passes it in:
//
//   node scripts/stamp-import.mjs --updated-at="2026-07-09T12:34:56.000Z" --note="refreshed tokens"
//
// Run with no --updated-at to record an import whose remote timestamp is
// unknown (the value is stored as null and the reminder routine treats it as
// "always worth re-checking").

import { promises as fs } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STAMP = path.join(ROOT, '.last-import.json');
const PROJECT_ID = 'c4c0d3d0-ee1a-4b25-81f5-615dff01c0d3';

function arg(name) {
  const hit = process.argv.slice(2).find((a) => a.startsWith(`--${name}=`) || a === `--${name}`);
  if (!hit) return undefined;
  const eq = hit.indexOf('=');
  return eq === -1 ? '' : hit.slice(eq + 1);
}

function gitEmail() {
  try {
    return execFileSync('git', ['config', 'user.email'], { cwd: ROOT }).toString().trim() || null;
  } catch {
    return null;
  }
}

function normalizeIso(v) {
  if (v === undefined || v === '') return null;
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) {
    console.error(`✗ stamp: --updated-at="${v}" is not a valid date`);
    process.exit(1);
  }
  return d.toISOString();
}

const record = {
  projectId: PROJECT_ID,
  // The live design project's updatedAt at import time (from DesignSync get_project).
  remoteUpdatedAt: normalizeIso(arg('updated-at')),
  // When this local import was performed. Millisecond-precision UTC ISO 8601.
  importedAt: new Date().toISOString(),
  importedBy: gitEmail(),
  note: arg('note') || null,
};

await fs.writeFile(STAMP, JSON.stringify(record, null, 2) + '\n');

console.log('✓ stamped .last-import.json');
console.log(`  remoteUpdatedAt: ${record.remoteUpdatedAt ?? '(unknown)'}`);
console.log(`  importedAt:      ${record.importedAt}`);
if (record.note) console.log(`  note:            ${record.note}`);
