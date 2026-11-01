import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const outputPath = fileURLToPath(new URL("../assets/word-demo-bundle.js", import.meta.url));
const [vi, en, icons] = await Promise.all([
  readFile(new URL("../word-demo.vi.md", import.meta.url), "utf8"),
  readFile(new URL("../word-demo.en.md", import.meta.url), "utf8"),
  readFile(new URL("../assets/word-icons.svg", import.meta.url), "utf8")
]);

const bundle = `/* Generated from the Markdown and SVG sources by scripts/build-word-demo-bundle.mjs. */\nwindow.wordDemoAssets = ${JSON.stringify({ markdown: { vi, en }, icons })};\n`;

if (process.argv.includes("--check")) {
  const existing = await readFile(outputPath, "utf8");
  if (existing !== bundle) throw new Error("Word demo bundle is stale; run node scripts/build-word-demo-bundle.mjs");
  console.log("Word demo bundle is current");
} else {
  await writeFile(outputPath, bundle, "utf8");
  console.log(`Updated ${outputPath.slice(root.length)}`);
}
