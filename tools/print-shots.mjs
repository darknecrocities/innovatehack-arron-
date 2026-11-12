// Screenshots every slide in print media so the PDF rendering can be inspected.
import { chromium } from "playwright";

const outDir = process.argv[2] || "/tmp/shots/print";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
await page.goto("http://localhost:8899/", { waitUntil: "networkidle" });
await page.waitForFunction(() => window.__deck, null, { timeout: 20000 });
await page.evaluate(async () => {
  await Promise.all([...document.querySelectorAll("#stage img")].map((i) =>
    i.complete ? Promise.resolve() : new Promise((r) => { i.addEventListener("load", r, { once: true }); i.addEventListener("error", r, { once: true }); })));
  await document.fonts.ready;
});
await page.emulateMedia({ media: "print" });
await page.waitForTimeout(1200);

for (let i = 1; i <= 15; i++) {
  const el = page.locator(`.slide[data-index="${i - 1}"]`);
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  await el.screenshot({ path: `${outDir}/print-${String(i).padStart(2, "0")}.png` });
}
console.log("print screenshots written to", outDir);
await browser.close();
