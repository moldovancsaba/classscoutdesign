// Generate ClassScout-branded favicons from the real pin mark.
//
// Why this exists: classscout.ai is a Lovable-built site, and the original
// "collect its logo" step scraped Lovable's favicon.ico into the design export.
// Deriving the favicon from the ClassScout pin mark (never a scraped .ico) is the
// durable fix — the build calls generateFavicons() so the deployed site's icon is
// always the brand pin, even if a future design sync reintroduces a stray favicon.
//
// Run directly (`node scripts/make-favicon.mjs`) to refresh the committed assets,
// or import generateFavicons() from the build.
import sharp from 'sharp';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const BLUESTONE = '#1F5E7A'; // --primary — matches the docs bundler thumbnail tile

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

// Write favicon.ico + PNG variants derived from the light pin on a bluestone
// tile (filled, legible at 16px, honoring the "light variant on dark" rule).
export async function generateFavicons(assetsDir) {
  const pinSrc = path.join(assetsDir, 'logo-pin-light.png');
  async function tile(size, pinRatio) {
    const pin = await sharp(pinSrc)
      .resize({ height: Math.round(size * pinRatio), fit: 'inside' })
      .toBuffer();
    return sharp({ create: { width: size, height: size, channels: 4, background: BLUESTONE } })
      .composite([{ input: pin, gravity: 'center' }])
      .png()
      .toBuffer();
  }
  const p256 = await tile(256, 0.7);
  await fs.writeFile(path.join(assetsDir, 'favicon.ico'), pngToIco(p256));
  await fs.writeFile(path.join(assetsDir, 'favicon-32.png'), await sharp(p256).resize(32, 32).png().toBuffer());
  await fs.writeFile(path.join(assetsDir, 'favicon-192.png'), await sharp(p256).resize(192, 192).png().toBuffer());
  await fs.writeFile(path.join(assetsDir, 'apple-touch-icon.png'), await tile(180, 0.66));
  return ['favicon.ico', 'favicon-32.png', 'favicon-192.png', 'apple-touch-icon.png'];
}

// CLI: refresh the committed source assets.
if (import.meta.url === `file://${process.argv[1]}`) {
  const assets = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'project', 'assets');
  const written = await generateFavicons(assets);
  console.log('✓ wrote ' + written.join(', '));
}
