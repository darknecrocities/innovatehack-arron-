// Builds standalone.html: one HTML file with the CSS and the bundled ES modules
// inlined, so the deck can be opened directly from the filesystem (file://).
// Images stay relative to the project folder; fonts load from Google Fonts.
import { build } from "esbuild";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(new URL("..", import.meta.url).pathname);
const indexPath = path.join(root, "index.html");
const outPath = path.join(root, "standalone.html");

let html = await readFile(indexPath, "utf8");

// 1. Drop the file:// guard so the standalone copy does not redirect to itself.
html = html.replace(/\s*<script>\s*\/\/ Browsers block ES modules[\s\S]*?<\/script>/, "");

// 2. Inline every local stylesheet, preserving print media.
const linkRe = /<link rel="stylesheet" href="(css\/[^"]+)"( media="print")?>/g;
const links = [...html.matchAll(linkRe)];
for (const match of links) {
  const css = await readFile(path.join(root, match[1]), "utf8");
  const media = match[2] || "";
  html = html.replace(match[0], `<style${media}>\n${css}\n</style>`);
}

// 3. Bundle the ES module graph into one classic script.
const result = await build({
  entryPoints: [path.join(root, "js/app.js")],
  bundle: true,
  format: "iife",
  target: "es2020",
  write: false,
  minify: false,
  legalComments: "none",
});
const js = result.outputFiles[0].text.replace(/<\/script/gi, "<\\/script");
const loaderRe = /<script>\s*\/\/ Load the module only over HTTP[\s\S]*?<\/script>/;
if (!loaderRe.test(html)) throw new Error("Could not find the module loader in index.html");
html = html.replace(loaderRe, `<script>\n${js}\n</script>`);

await writeFile(outPath, html, "utf8");
const kb = Math.round(Buffer.byteLength(html) / 1024);
console.log(`standalone.html written (${kb} KB)`);
