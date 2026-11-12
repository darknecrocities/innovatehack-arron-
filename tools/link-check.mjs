// HTTP status check for every external documentation link on the slides.
import { chromium } from "playwright";

const URLS = [
  "https://stitch.withgoogle.com", "https://m3.material.io", "https://fonts.google.com",
  "https://ai.google.dev/gemini-api/docs", "https://aistudio.google.com",
  "https://firebase.google.com/docs/ai-logic", "https://developers.google.com/ml-kit",
  "https://ai.google.dev/edge", "https://github.com/google-ai-edge/gallery",
  "https://docs.flutter.dev", "https://firebase.google.com/docs",
  "https://cloud.google.com/run/docs", "https://cloud.google.com/vertex-ai/docs",
  "https://cloud.google.com/bigquery/docs",
  "https://ai.google.dev/gemini-api/docs/function-calling",
  "https://ai.google.dev/gemini-api/docs/structured-output",
  "https://ai.google.dev/gemini-api/docs/vision",
  "https://www.linkedin.com/in/arron-parejas/",
  "https://docs.google.com/document/d/1hxBY6auIP5fya0ir9FhvKsGnrCcVYjRnaIrMpx8I9Nw/edit",
  "https://github.com/darknecrocities/Helios",
  "https://huggingface.co/Darknecrocities/Helios",
  "https://domodomo.site",
];

const browser = await chromium.launch();
const ctx = await browser.newContext({
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/158.0.0.0 Safari/537.36",
});
const rows = [];
for (const url of URLS) {
  const page = await ctx.newPage();
  let status = "ERR";
  try {
    const res = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 40000 });
    status = res?.status() ?? "no-response";
  } catch (e) {
    status = "ERR " + e.message.split("\n")[0];
  }
  rows.push({ url, status });
  console.log(`${String(status).padEnd(6)} ${url}`);
  await page.close();
}
const bad = rows.filter((r) => Number(r.status) >= 400 || String(r.status).startsWith("ERR"));
console.log(`\n${rows.length - bad.length}/${rows.length} links reachable`);
await browser.close();
