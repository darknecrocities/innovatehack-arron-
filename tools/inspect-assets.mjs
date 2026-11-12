// Inspects supplied images: real dimensions, dominant background colour, and QR payload.
import { chromium } from "playwright";

const FILES = [
  "arron_profile.png", "appbuilders_top1.png", "bitpyre_hackathon.jpg",
  "caffeine_hackathon.jpg", "skydev_hackathon.jpg", "helios_hf_downloadscount.png",
  "gemini_argon.png", "flutter_logo.png", "firebase_logo.png", "google_ml_kit.png",
  "Google_cloud.png", "Arron_qr_socials_links.png",
];

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("http://localhost:8899/");

const results = await page.evaluate(async (files) => {
  const out = [];
  for (const f of files) {
    const img = new Image();
    img.src = `assets/images/${f}`;
    await img.decode();
    const c = document.createElement("canvas");
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    const ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const d = ctx.getImageData(0, 0, c.width, c.height).data;
    const px = (x, y) => {
      const o = (y * c.width + x) * 4;
      return [d[o], d[o + 1], d[o + 2]];
    };
    const corners = {
      tl: px(2, 2), tr: px(c.width - 3, 2),
      bl: px(2, c.height - 3), br: px(c.width - 3, c.height - 3),
      c: px(Math.floor(c.width / 2), Math.floor(c.height / 2)),
    };
    // average luminance of the border ring
    let sum = 0, n = 0;
    for (let x = 0; x < c.width; x += Math.max(1, Math.floor(c.width / 60))) {
      for (const y of [1, 2, c.height - 3, c.height - 2]) {
        const p = px(x, y); sum += (p[0] + p[1] + p[2]) / 3; n++;
      }
    }
    out.push({ f, w: img.naturalWidth, h: img.naturalHeight, corners, borderLum: Math.round(sum / n) });
  }
  return out;
}, FILES);

console.log("=== IMAGE FACTS ===");
for (const r of results) {
  console.log(`${r.f.padEnd(32)} ${r.w}x${r.h}  AR=${(r.w / r.h).toFixed(3)}  borderLum=${r.borderLum}  corners=${JSON.stringify(r.corners)}`);
}

// QR decode
await page.goto("http://localhost:8899/assets/images/Arron_qr_socials_links.png");
const qr = await page.evaluate(async () => {
  const img = document.querySelector("img");
  await img.decode();
  const c = document.createElement("canvas");
  c.width = img.naturalWidth; c.height = img.naturalHeight;
  const ctx = c.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const d = ctx.getImageData(0, 0, c.width, c.height);
  await new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js";
    s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });
  const r = window.jsQR(d.data, c.width, c.height);
  return r ? r.data : null;
});
console.log("\n=== QR PAYLOAD ===\n", qr);

await browser.close();
