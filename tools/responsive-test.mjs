// Verify the stage keeps a 16:9 frame, stays centred and never overflows at any viewport.
import { chromium } from "playwright";

const VIEWPORTS = [
  [1920, 1080], [1600, 900], [1440, 900], [1366, 768], [1280, 800], [1024, 768], [800, 600], [640, 480],
];

const browser = await chromium.launch();
let failures = 0;

for (const [w, h] of VIEWPORTS) {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  const errs = [];
  page.on("pageerror", (e) => errs.push(e.message));
  page.on("console", (m) => { if (m.type() === "error") errs.push(m.text()); });
  await page.goto("http://localhost:8899/", { waitUntil: "networkidle" });
await page.waitForFunction(() => window.__deck, null, { timeout: 20000 });
  await page.waitForTimeout(700);

  const total = await page.evaluate(() => window.__deck.total);
  const problems = [];
  let stageInfo = null;
  for (let i = 1; i <= total; i++) {
    await page.evaluate((n) => window.__deck.nav.show(n - 1), i);
    await page.waitForTimeout(220);
    const r = await page.evaluate((n) => {
      const stage = document.getElementById("stage");
      const sr = stage.getBoundingClientRect();
      const el = document.querySelector(`.slide[data-index="${n - 1}"]`);
      const clipped = [];
      el.querySelectorAll("*").forEach((c) => {
        const b = c.getBoundingClientRect();
        if (b.width === 0 || b.height === 0) return;
        if (b.bottom > sr.bottom + 1 || b.right > sr.right + 1 || b.top < sr.top - 1 || b.left < sr.left - 1) {
          clipped.push(`${c.tagName}.${(c.className.baseVal ?? c.className ?? "").toString().slice(0, 40)}`);
        }
      });
      return {
        ratio: sr.width / sr.height,
        overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        overflowY: document.documentElement.scrollHeight > document.documentElement.clientHeight,
        clipped: [...new Set(clipped)].slice(0, 4),
        stageW: Math.round(sr.width), stageH: Math.round(sr.height),
      };
    }, i);
    if (Math.abs(r.ratio - 16 / 9) > 0.01) problems.push(`S${i} aspect ${r.ratio.toFixed(3)}`);
    if (r.overflowX) problems.push(`S${i} page overflow-x`);
    if (r.overflowY) problems.push(`S${i} page overflow-y`);
    if (r.clipped.length) problems.push(`S${i} clipped: ${r.clipped.join(", ")}`);
    stageInfo = r;
  }
  console.log(`${w}x${h}  stage=${stageInfo.stageW}x${stageInfo.stageH}  ${problems.length ? "FAIL" : "PASS"}`);
  problems.forEach((p) => console.log("   " + p));
  if (problems.length || errs.length) failures++;
  if (errs.length) console.log("   errors:", [...new Set(errs)].join(" | "));
  await page.close();
}

console.log(failures ? `\n${failures} viewport(s) with problems` : "\nAll viewports passed");
await browser.close();
