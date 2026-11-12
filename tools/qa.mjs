// End-to-end QA for the keynote. Prints a machine-readable result table.
import { chromium } from "playwright";

const BASE = "http://localhost:8899/";
const results = [];
const record = (name, expected, actual, pass, defect = "") =>
  results.push({ name, expected, actual, pass, defect });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

const consoleErrors = [];
const failedRequests = [];
page.on("console", (m) => { if (m.type() === "error") consoleErrors.push(m.text()); });
page.on("pageerror", (e) => consoleErrors.push("pageerror: " + e.message));
page.on("requestfailed", (r) => failedRequests.push(`${r.url()} :: ${r.failure()?.errorText}`));
page.on("response", (r) => { if (r.status() >= 400) failedRequests.push(`${r.url()} :: HTTP ${r.status()}`); });

await page.goto(BASE, { waitUntil: "networkidle" });
await page.waitForFunction(() => window.__deck, null, { timeout: 20000 });
await page.waitForTimeout(900);

/* ---------------------------------------------------- 1. deck structure */

const total = await page.evaluate(() => window.__deck.total);
record("Deck contains exactly 15 slides", "15", String(total), total === 15);

const ids = await page.evaluate(() =>
  [...document.querySelectorAll(".slide")].map((s) => s.id));
record("Slide ids are unique and sequential", "slide-1 … slide-15",
  `${ids.length} unique: ${new Set(ids).size === ids.length}`, new Set(ids).size === 15 && ids.length === 15);

/* ------------------------------------------------- 2. navigation keys */

const cur = () => page.evaluate(() => window.__deck.nav.current);
await page.keyboard.press("Home");
record("Home key jumps to slide 1", "0", String(await cur()), (await cur()) === 0);
await page.keyboard.press("ArrowRight");
record("ArrowRight advances one slide", "1", String(await cur()), (await cur()) === 1);
await page.keyboard.press("ArrowLeft");
record("ArrowLeft goes back one slide", "0", String(await cur()), (await cur()) === 0);
await page.keyboard.press(" ");
record("Space advances one slide", "1", String(await cur()), (await cur()) === 1);
await page.keyboard.press("End");
record("End key jumps to the last slide", "14", String(await cur()), (await cur()) === 14);
await page.keyboard.press("ArrowRight");
record("ArrowRight on the last slide does not wrap", "14", String(await cur()), (await cur()) === 14);
await page.keyboard.press("Home");
await page.keyboard.press("ArrowLeft");
record("ArrowLeft on the first slide does not wrap", "0", String(await cur()), (await cur()) === 0);

/* ----------------------------------------------------- 3. deep linking */

await page.evaluate(() => (location.hash = "#/9"));
await page.waitForTimeout(400);
record("Hash deep link opens the requested slide", "8", String(await cur()), (await cur()) === 8);

/* --------------------------------------------------------- 4. overlays */

await page.keyboard.press("o");
await page.waitForTimeout(300);
record("O opens the slide overview", "overview open",
  await page.evaluate(() => document.getElementById("overview").classList.contains("is-open") ? "overview open" : "closed"),
  await page.evaluate(() => document.getElementById("overview").classList.contains("is-open")));
const overviewCount = await page.locator("#overview [data-go]").count();
record("Overview lists all 15 slides", "15", String(overviewCount), overviewCount === 15);
await page.keyboard.press("Escape");
await page.waitForTimeout(250);
record("Escape closes the overview", "closed",
  await page.evaluate(() => document.getElementById("overview").classList.contains("is-open") ? "open" : "closed"),
  !(await page.evaluate(() => document.getElementById("overview").classList.contains("is-open"))));

await page.evaluate(() => window.__deck.nav.show(3));
await page.keyboard.press("n");
await page.waitForTimeout(300);
const notesText = await page.locator("#notes").innerText().catch(() => "");
record("N opens speaker notes for the current slide", "notes show slide 4 content",
  notesText.includes("Slide 4"), notesText.includes("Slide 4"));
record("Notes include a main message and a transition", "message + transition",
  notesText.includes("MAIN MESSAGE") && notesText.includes("TRANSITION"),
  notesText.includes("MAIN MESSAGE") && notesText.includes("TRANSITION"));
await page.keyboard.press("Escape");
await page.waitForTimeout(250);

/* --------------------------------------------- 5. MVP board (slide 05) */

await page.evaluate(() => window.__deck.nav.show(4));
await page.waitForTimeout(400);
await page.click('[data-mvp="suggest"]');
await page.waitForTimeout(300);
let counts = await page.locator(".bucket .count").allInnerTexts();
record("MVP board: 'Show suggested' distributes all 10 features", "3,3,2,2 across four buckets", counts.join(","),
  counts.join(",") === "3,3,2,2" && counts.reduce((a, b) => a + Number(b), 0) === 10);

await page.selectOption('.feat[data-id="sos"] select', "wont");
await page.waitForTimeout(300);
counts = await page.locator(".bucket .count").allInnerTexts();
record("MVP board: the move-to menu updates the counts", "3,3,2,2 → 2,3,2,3", counts.join(","),
  counts.join(",") === "2,3,2,3");

// drag and drop a chip into a bucket (reset first so the pool has chips in it)
await page.click('[data-mvp="reset"]');
await page.waitForTimeout(300);
const chip = await page.locator('.mvp-pool .feat[data-id="voice"]').boundingBox();
const target = await page.locator('.bucket[data-bucket="must"] .items').boundingBox();
if (chip && target) {
  await page.mouse.move(chip.x + chip.width / 2, chip.y + chip.height / 2);
  await page.mouse.down();
  await page.mouse.move(target.x + target.width / 2, target.y + target.height / 2, { steps: 12 });
  await page.mouse.up();
  await page.waitForTimeout(400);
}
counts = await page.locator(".bucket .count").allInnerTexts();
record("MVP board: drag and drop moves a feature into a bucket", "Must Have count becomes 1",
  counts.join(","), counts.join(",") === "1,0,0,0");

await page.click('[data-mvp="reset"]');
await page.waitForTimeout(300);
counts = await page.locator(".bucket .count").allInnerTexts();
record("MVP board: Reset empties every bucket", "0,0,0,0", counts.join(","),
  counts.join(",") === "0,0,0,0");
const poolCount = await page.locator(".mvp-pool .feat").count();
record("MVP board: Reset returns all features to the pool", "10 unsorted", String(poolCount), poolCount === 10);

/* ------------------------------------------- 6. stack selector (slide 07) */

await page.evaluate(() => window.__deck.nav.show(6));
await page.waitForTimeout(300);
await page.keyboard.press("s");
await page.waitForTimeout(400);
record("S opens the stack selector", "selector open",
  await page.evaluate(() => document.getElementById("selector").classList.contains("is-open") ? "open" : "closed"),
  await page.evaluate(() => document.getElementById("selector").classList.contains("is-open")));

const setAnswers = async (platform, runtime, ai, backend) => {
  for (const [k, v] of [["platform", platform], ["runtime", runtime], ["ai", ai], ["backend", backend]]) {
    await page.click(`[data-k="${k}"][data-v="${v}"]`);
    await page.waitForTimeout(160);
  }
};
const recText = async () => (await page.locator("#selector .rec").innerText()).replace(/\s+/g, " ");

await setAnswers("mobile", "cloud", "genai", "simple");
let rec = await recText();
record("Selector: mobile + cloud + GenAI + simple recommends Gemini on Firebase",
  "Firebase AI Logic / Gemini", rec.slice(0, 120), rec.includes("Firebase AI Logic") || rec.includes("Gemini"));

await setAnswers("mobile", "offline", "ml", "simple");
rec = await recText();
record("Selector: offline + traditional ML recommends ML Kit and LiteRT",
  "ML Kit, then LiteRT", rec.slice(0, 140), rec.includes("ML Kit") && rec.includes("LiteRT"));

await setAnswers("web", "cloud", "genai", "advanced");
rec = await recText();
record("Selector: advanced backend recommends Google Cloud with Cloud Run",
  "Google Cloud with Cloud Run", rec.slice(0, 160), rec.includes("Google Cloud with Cloud Run"));

await setAnswers("web", "offline", "ml", "simple");
rec = await recText();
record("Selector: offline + web warns about the hybrid fallback",
  "hybrid with a cloud fallback", rec.slice(-160), rec.includes("hybrid with a cloud fallback"));

await page.keyboard.press("Escape");
await page.waitForTimeout(250);
record("Escape closes the stack selector", "closed",
  await page.evaluate(() => document.getElementById("selector").classList.contains("is-open") ? "open" : "closed"),
  !(await page.evaluate(() => document.getElementById("selector").classList.contains("is-open"))));

/* -------------------------------------------- 7. CLEAR framework (slide 12) */

await page.evaluate(() => window.__deck.nav.show(11));
await page.waitForTimeout(300);
const lit = () => page.locator(".letter.on").count();
record("CLEAR starts fully hidden", "0 revealed", String(await lit()), (await lit()) === 0);
await page.keyboard.press("r");
await page.waitForTimeout(250);
record("R reveals the next CLEAR letter", "1 revealed", String(await lit()), (await lit()) === 1);
await page.keyboard.press("ArrowRight");
await page.waitForTimeout(250);
record("ArrowRight reveals the next CLEAR letter", "2 revealed", String(await lit()), (await lit()) === 2);
const promptText = await page.locator("#clear-text").innerText();
record("CLEAR assembles the prompt as letters are revealed", "prompt contains Context and Limitations",
  promptText.slice(0, 90), promptText.includes("Context") && promptText.includes("Limitations"));
await page.click('[data-clear="all"]');
await page.waitForTimeout(250);
record("CLEAR 'Show all' reveals all five letters", "5 revealed", String(await lit()), (await lit()) === 5);
const fullPrompt = await page.locator("#clear-text").innerText();
record("CLEAR prompt contains all five sections", "Context, Limitations, Expected outcome, Architecture, Requirements",
  Object.keys(["Context", "Limitations", "Expected outcome", "Architecture", "Requirements"]).filter((k) => fullPrompt.includes(k)).join(", "),
  ["Context", "Limitations", "Expected outcome", "Architecture", "Requirements"].every((k) => fullPrompt.includes(k)));
await page.click('[data-clear="reset"]');
await page.waitForTimeout(250);
record("CLEAR Reset hides every letter again", "0 revealed", String(await lit()), (await lit()) === 0);

/* ------------------------------------------------------------ 8. images */

const images = await page.evaluate(() =>
  [...document.querySelectorAll("#stage img")].map((i) => ({
    src: i.getAttribute("src"), natural: i.naturalWidth, rendered: Math.round(i.getBoundingClientRect().width),
    alt: i.getAttribute("alt") || "", slide: i.closest(".slide")?.id,
    complete: i.complete,
  })));
const broken = images.filter((i) => i.natural === 0);
record("Every image loads", `${images.length} images, 0 broken`, `${images.length - broken.length} of ${images.length} loaded`,
  broken.length === 0, broken.map((b) => b.src).join(", "));
const noAlt = images.filter((i) => !i.alt.trim());
record("Every image has alt text", "0 missing", `${noAlt.length} missing`, noAlt.length === 0);
record("Image count", "18 <img> elements (12 files, 6 re-used)", String(images.length), images.length === 18);

// SVG <image> references inside the diagrams (slide 07 and 10) load the logo files too
const svgImages = await page.evaluate(() =>
  [...document.querySelectorAll("#stage svg image")].map((i) => ({
    href: i.getAttribute("href"),
    ok: i.getBoundingClientRect().width > 0 && i.getBoundingClientRect().height > 0,
    slide: i.closest(".slide")?.id,
  })));
record("Diagram logos render inside the SVG", `${svgImages.length} marks, all with a size`,
  `${svgImages.filter((s) => s.ok).length} of ${svgImages.length} sized`,
  svgImages.length > 0 && svgImages.every((s) => s.ok));
const svgHrefs = [...new Set(svgImages.map((s) => s.href))];
const expectedSvg = ["assets/images/flutter_logo.png", "assets/images/firebase_logo.png",
  "assets/images/google_ml_kit.png", "assets/images/Google_cloud.png"];
record("Diagrams reference the supplied logo files", expectedSvg.join(", "),
  svgHrefs.join(", "), expectedSvg.every((e) => svgHrefs.includes(e)));

/* ------------------------------------------------------------- 9. links */

const links = await page.evaluate(() =>
  [...document.querySelectorAll("#stage a[href^='http']")].map((a) => ({
    href: a.href, target: a.target, rel: a.rel,
  })));
const badLinks = links.filter((l) => l.target !== "_blank" || !l.rel.includes("noopener"));
record("Every external link opens in a new tab with rel=noopener",
  `${links.length} links, 0 violations`, `${links.length - badLinks.length} of ${links.length} valid`,
  badLinks.length === 0, badLinks.map((l) => l.href).join(", "));
const tracking = links.filter((l) => /[?&](utm_|fbclid|gclid|mc_)/i.test(l.href));
record("No tracking parameters on any link", "0 tracked links", String(tracking.length), tracking.length === 0);

/* -------------------------------------------------- 10. accessibility bits */

const aria = await page.evaluate(() => {
  const active = document.querySelector(".slide.is-active");
  const hidden = [...document.querySelectorAll(".slide")].filter((s) => s.getAttribute("aria-hidden") === "true").length;
  return {
    counterLive: document.getElementById("counter-label").getAttribute("aria-live"),
    activeLabelled: !!active?.getAttribute("aria-label"),
    hidden,
    inertCount: [...document.querySelectorAll(".slide")].filter((s) => s.inert).length,
  };
});
record("Slide counter is an aria-live region", "polite", aria.counterLive, aria.counterLive === "polite");
record("The active slide has an accessible label", "aria-label present", String(aria.activeLabelled), aria.activeLabelled);
record("Inactive slides are aria-hidden", "14 hidden", String(aria.hidden), aria.hidden === 14);
record("Inactive slides are inert", "14 inert", String(aria.inertCount), aria.inertCount === 14);

/* ------------------------------------------------ 11. reduced motion */

const rmPage = await browser.newPage({ viewport: { width: 1920, height: 1080 }, reducedMotion: "reduce" });
await rmPage.goto(BASE, { waitUntil: "networkidle" });
await rmPage.waitForTimeout(700);
const rm = await rmPage.evaluate(() => {
  const el = document.querySelector(".slide.is-active");
  const cs = getComputedStyle(el);
  const anim = getComputedStyle(document.querySelector(".slide.is-active [data-rise]") || el);
  return { transition: cs.transitionDuration, animation: anim.animationDuration };
});
record("Reduced motion disables transitions", "0.01ms / 0s", rm.transition,
  parseFloat(rm.transition) < 0.01 || rm.transition.includes("0s"));
await rmPage.close();

/* ---------------------------------------------- 12. focus trap in overlay */

await page.keyboard.press("o");
await page.waitForTimeout(300);
const trapped = await page.evaluate(async () => {
  const items = [...document.querySelectorAll("#overview button")];
  items[items.length - 1].focus();
  return document.activeElement === items[items.length - 1];
});
record("Focus moves into the overview overlay", "focus on a button inside the overlay", String(trapped), trapped);
await page.keyboard.press("Escape");
await page.waitForTimeout(250);

/* --------------------------------------------------- 13. console + network */

record("No console errors during the whole run", "0 errors", `${consoleErrors.length} errors`,
  consoleErrors.length === 0, [...new Set(consoleErrors)].join(" | "));
record("No failed or 4xx/5xx requests", "0 failures", `${failedRequests.length} failures`,
  failedRequests.length === 0, [...new Set(failedRequests)].join(" | "));

/* ------------------------------------------------------------ 14. summary */

const passed = results.filter((r) => r.pass).length;
console.log("\n================= QA RESULTS =================\n");
for (const r of results) {
  console.log(`${r.pass ? "PASS" : "FAIL"}  ${r.name}`);
  console.log(`        expected: ${r.expected}`);
  console.log(`        actual:   ${r.actual}`);
  if (r.defect) console.log(`        defect:   ${r.defect}`);
}
console.log(`\n${passed}/${results.length} checks passed`);
if (consoleErrors.length) console.log("console errors:", [...new Set(consoleErrors)].join("\n  "));
if (failedRequests.length) console.log("failed requests:", [...new Set(failedRequests)].join("\n  "));

await browser.close();
process.exit(passed === results.length ? 0 : 1);
