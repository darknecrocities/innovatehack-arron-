// Exports the 15 slides to a 16:9 PDF backup using the print stylesheet.
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = new URL("../dist/from-idea-to-mvp.pdf", import.meta.url);
mkdirSync(new URL("../dist/", import.meta.url), { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("requestfailed", (r) => errors.push(`${r.url()} ${r.failure()?.errorText}`));

await page.goto("http://localhost:8899/", { waitUntil: "networkidle" });

// wait for every image (including the SVG <image> marks) to finish decoding
await page.evaluate(async () => {
  const imgs = [...document.querySelectorAll("#stage img")];
  await Promise.all(imgs.map((i) => (i.complete ? Promise.resolve() : new Promise((r) => {
    i.addEventListener("load", r, { once: true });
    i.addEventListener("error", r, { once: true });
  }))));
  await document.fonts.ready;
});
await page.waitForTimeout(1500);

const broken = await page.evaluate(() =>
  [...document.querySelectorAll("#stage img")].filter((i) => !i.naturalWidth).map((i) => i.src));
if (broken.length) {
  console.error("Images failed to load before export:", broken);
}

await page.emulateMedia({ media: "print" });
await page.pdf({
  path: OUT.pathname,
  width: "1920px",
  height: "1080px",
  printBackground: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
  preferCSSPageSize: true,
});

console.log("PDF written to", OUT.pathname);
if (errors.length) console.log("page errors:", [...new Set(errors)].join(" | "));
await browser.close();
