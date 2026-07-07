// One-off asset generator: build ClassScout-branded favicons from the real pin
// mark, replacing the Lovable favicon that was scraped from classscout.ai.
// Run manually (`node scripts/make-favicon.mjs`) when the brand mark changes;
// the outputs are committed assets, not part of the site build.
import sharp from 'sharp';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SRC = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'project', 'assets');
const BLUESTONE = '#1F5E7A'; // --primary — matches the docs bundler thumbnail tile

// Light pin on a solid bluestone square: filled, legible at 16px, on-brand
// (the "light variant on dark" rule), no redraw of the mark.
async function tile(size, pinRatio = 0.7) {
  const pin = await sharp(path.join(SRC, 'logo-pin-light.png'))
    .resize({ height: Math.round(size * pinRatio), fit: 'inside' })
    .toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: BLUESTONE } })
    .composite([{ input: pin, gravity: 'center' }])
    .png()
    .toBuffer();
}

// Wrap a 256×256 PNG as a single-image .ico (same container the old file used).
function pngToIco(png) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // count
  const entry = Buffer.alloc(16);
  entry.writeUInt8(0, 0);           // width 256 → 0
  entry.writeUInt8(0, 1);           // height 256 → 0
  entry.writeUInt16LE(1, 4);        // color planes
  entry.writeUInt16LE(32, 6);       // bits per pixel
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);      // offset to PNG
  return Buffer.concat([header, entry, png]);
}

const p256 = await tile(256);
await fs.writeFile(path.join(SRC, 'favicon.ico'), pngToIco(p256));
await fs.writeFile(path.join(SRC, 'favicon-32.png'), await sharp(p256).resize(32, 32).png().toBuffer());
await fs.writeFile(path.join(SRC, 'favicon-192.png'), await sharp(p256).resize(192, 192).png().toBuffer());
await fs.writeFile(path.join(SRC, 'apple-touch-icon.png'), await tile(180, 0.66));
console.log('✓ wrote favicon.ico, favicon-32.png, favicon-192.png, apple-touch-icon.png');
