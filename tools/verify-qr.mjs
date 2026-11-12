// Verify the QR code still decodes from the live, rendered slide 15.
import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto("http://localhost:8899/", { waitUntil: "networkidle" });
await page.evaluate(() => window.__deck.nav.show(14));
await page.waitForTimeout(900);

const result = await page.evaluate(async () => {
  const img = document.querySelector(".s15 .qr img");
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
  const box = img.getBoundingClientRect();
  return { decoded: r ? r.data : null, renderedWidth: Math.round(box.width), naturalWidth: img.naturalWidth };
});

console.log("QR on slide 15 ->", JSON.stringify(result));
await browser.close();
