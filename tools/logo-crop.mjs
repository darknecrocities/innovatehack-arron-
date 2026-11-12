// Tight bounding box of a specific horizontal band inside a logo image.
import { chromium } from "playwright";

const JOBS = [
  { f: "firebase_logo.png", y0: 110, y1: 395 },
  { f: "Google_cloud.png", y0: 35, y1: 145 },
  { f: "flutter_logo.png", x0: 0, x1: 225 },
  { f: "google_ml_kit.png", x0: 0, x1: 505 },
];

const b = await chromium.launch();
const p = await b.newPage();
await p.goto("http://localhost:8899/");

const out = await p.evaluate(async (jobs) => {
  const res = [];
  for (const j of jobs) {
    const img = new Image();
    img.src = `assets/images/${j.f}`;
    await img.decode();
    const c = document.createElement("canvas");
    c.width = img.naturalWidth; c.height = img.naturalHeight;
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(img, 0, 0);
    const d = ctx.getImageData(0, 0, c.width, c.height).data;
    const ink = (x, y) => {
      const o = (y * c.width + x) * 4;
      const a = d[o + 3];
      const lum = (d[o] + d[o + 1] + d[o + 2]) / 3;
      return a > 24 && (lum < 235 || a < 250);
    };
    const y0 = j.y0 ?? 0, y1 = j.y1 ?? c.height - 1;
    const x0 = j.x0 ?? 0, x1 = j.x1 ?? c.width - 1;
    let minX = 1e9, minY = 1e9, maxX = -1, maxY = -1;
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        if (ink(x, y)) {
          if (x < minX) minX = x; if (x > maxX) maxX = x;
          if (y < minY) minY = y; if (y > maxY) maxY = y;
        }
      }
    }
    res.push({ f: j.f, crop: [minX, minY, maxX, maxY], w: maxX - minX + 1, h: maxY - minY + 1 });
  }
  return res;
}, JOBS);

for (const r of out) console.log(r.f, "crop=[", r.crop.join(", "), "]  size", r.w + "x" + r.h, " ar=" + (r.w / r.h).toFixed(3));
await b.close();
