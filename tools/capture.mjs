// Capture every slide at a given viewport and report layout problems.
import { chromium } from "playwright";

const BASE = "http://localhost:8899/";
const width = +(process.argv[2] || 1920);
const height = +(process.argv[3] || 1080);
const tag = process.argv[4] || `${width}x${height}`;
const outDir = process.argv[5] || `/tmp/shots/${tag}`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });

const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
page.on("requestfailed", (r) => errors.push(`requestfailed: ${r.url()} ${r.failure()?.errorText}`));

await page.goto(BASE, { waitUntil: "networkidle" });
await page.waitForFunction(() => window.__deck, null, { timeout: 20000 });
await page.waitForTimeout(900);

const total = await page.evaluate(() => window.__deck.total);
const report = [];

for (let i = 1; i <= total; i++) {
  await page.evaluate((n) => window.__deck.nav.show(n - 1), i);
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${outDir}/slide-${String(i).padStart(2, "0")}.png` });

  const info = await page.evaluate((n) => {
    const el = document.querySelector(`.slide[data-index="${n - 1}"]`);
    const stage = document.getElementById("stage");
    const sr = stage.getBoundingClientRect();
    const overflow = [];
    const r = el.getBoundingClientRect();
    // any descendant sticking outside the 1920x1080 stage box
    el.querySelectorAll("*").forEach((c) => {
      const b = c.getBoundingClientRect();
      if (b.width === 0 || b.height === 0) return;
      if (b.bottom > sr.bottom + 1 || b.right > sr.right + 1 || b.top < sr.top - 1 || b.left < sr.left - 1) {
        overflow.push(`${c.tagName}.${c.className || ""}`.slice(0, 70));
      }
    });
    const scroller = [];
    el.querySelectorAll("*").forEach((c) => {
      if (c.scrollHeight > c.clientHeight + 2 && getComputedStyle(c).overflowY !== "visible") {
        scroller.push(`${c.tagName}.${c.className || ""}`.slice(0, 70));
      }
    });
    return {
      scrollH: el.scrollHeight, clientH: el.clientHeight,
      scrollW: el.scrollWidth, clientW: el.clientWidth,
      overflow: [...new Set(overflow)].slice(0, 6),
      scroller: [...new Set(scroller)].slice(0, 6),
    };
  }, i);
  report.push({ slide: i, ...info });
}

console.log(`=== LAYOUT REPORT ${tag} ===`);
for (const r of report) {
  const bad = r.scrollH > r.clientH + 2 || r.scrollW > r.clientW + 2 || r.overflow.length || r.scroller.length;
  console.log(
    `S${String(r.slide).padStart(2, "0")} scroll=${r.scrollW}x${r.scrollH} client=${r.clientW}x${r.clientH}` +
    (bad ? "  <-- ISSUE" : "  ok") +
    (r.overflow.length ? `\n     overflow: ${r.overflow.join(" | ")}` : "") +
    (r.scroller.length ? `\n     clipped: ${r.scroller.join(" | ")}` : "")
  );
}
console.log("\n=== CONSOLE / NETWORK ERRORS ===");
console.log(errors.length ? [...new Set(errors)].join("\n") : "none");
await browser.close();
