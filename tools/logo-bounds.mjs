// Find the bounding box of the actual artwork inside logo images that carry a wordmark.
import { chromium } from "playwright";

const FILES = ["firebase_logo.png", "Google_cloud.png", "flutter_logo.png", "google_ml_kit.png"];
const b = await chromium.launch();
const p = await b.newPage();
await p.goto("http://localhost:8899/");

const out = await p.evaluate(async (files) => {
  const res = [];
  for (const f of files) {
    const img = new Image();
    img.src = `assets/images/${f}`;
    await img.decode();
    const c = document.createElement("canvas");
    c.width = img.naturalWidth; c.height = img.naturalHeight;
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(img, 0, 0);
    const d = ctx.getImageData(0, 0, c.width, c.height).data;
    let minX = c.width, minY = c.height, maxX = -1, maxY = -1;
    // row profile: fraction of ink per row, to find where the wordmark band starts
    const rows = [];
    for (let y = 0; y < c.height; y++) {
      let n = 0;
      for (let x = 0; x < c.width; x++) {
        const o = (y * c.width + x) * 4;
        const alpha = d[o + 3];
        const lum = (d[o] + d[o + 1] + d[o + 2]) / 3;
        if (alpha > 24 && (lum < 235 || alpha < 250)) n++;
      }
      rows.push(n / c.width);
      if (n > 0) { if (y < minY) minY = y; if (y > maxY) maxY = y; }
    }
    for (let x = 0; x < c.width; x++) {
      let n = 0;
      for (let y = 0; y < c.height; y++) {
        const o = (y * c.width + x) * 4;
        const alpha = d[o + 3];
        const lum = (d[o] + d[o + 1] + d[o + 2]) / 3;
        if (alpha > 24 && (lum < 235 || alpha < 250)) n++;
      }
      if (n > 0) { if (x < minX) minX = x; if (x > maxX) maxX = x; }
    }
    // find gaps (rows with no ink) to detect mark / wordmark separation
    const gaps = [];
    let run = -1;
    for (let y = 0; y < c.height; y++) {
      if (rows[y] < 0.004) { if (run < 0) run = y; }
      else { if (run >= 0 && y - run > c.height * 0.01) gaps.push([run, y - 1]); run = -1; }
    }
    if (run >= 0) gaps.push([run, c.height - 1]);
    // column profile: find gaps that separate the mark from the wordmark
    const colGaps = [];
    let crun = -1;
    for (let x = 0; x < c.width; x++) {
      let n = 0;
      for (let y = 0; y < c.height; y++) {
        const o = (y * c.width + x) * 4;
        const alpha = d[o + 3];
        const lum = (d[o] + d[o + 1] + d[o + 2]) / 3;
        if (alpha > 24 && (lum < 235 || alpha < 250)) n++;
      }
      const filled = n / c.height > 0.004;
      if (!filled) { if (crun < 0) crun = x; }
      else { if (crun >= 0 && x - crun > c.width * 0.008) colGaps.push([crun, x - 1]); crun = -1; }
    }
    if (crun >= 0) colGaps.push([crun, c.width - 1]);
    res.push({ f, w: c.width, h: c.height, bbox: [minX, minY, maxX, maxY], gaps: gaps.slice(0, 6), colGaps: colGaps.slice(0, 6) });
  }
  return res;
}, FILES);

for (const r of out) console.log(JSON.stringify(r));
await b.close();
