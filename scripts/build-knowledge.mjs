// Bundles content/knowledge/*.md into a JSON file the chat Worker imports.
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const dir = path.join(root, "content", "knowledge");
const files = (await readdir(dir)).filter((f) => f.endsWith(".md")).sort();

const docs = await Promise.all(
  files.map(async (source) => ({ source, markdown: await readFile(path.join(dir, source), "utf8") })),
);

await writeFile(path.join(root, "worker", "knowledge.generated.json"), JSON.stringify(docs, null, 2) + "\n");
console.log(`Bundled ${docs.length} knowledge files`);
