import knowledge from "../knowledge.generated.json";

export type Chunk = { source: string; heading: string; text: string };

const MAX_CHUNK_CHARS = 900;

const STOPWORDS = new Set(
  "a an and are as at be but by do does for from had has have how i if in into is it its me my of on or so that the their them there these they this to was what when where which who why will with you your about can did".split(
    " ",
  ),
);

function tokenize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t));
}

function chunkMarkdown(source: string, markdown: string): Chunk[] {
  const body = markdown.replace(/<!--[\s\S]*?-->/g, "");
  const chunks: Chunk[] = [];
  let heading = source;

  for (const section of body.split(/^(?=#{1,3}\s)/m)) {
    const match = section.match(/^#{1,3}\s+(.+)$/m);
    if (match) heading = match[1].trim();
    const text = section.replace(/^#{1,3}\s+.+$/m, "").trim();
    if (!text) continue;

    // Split long sections on paragraph boundaries
    let current = "";
    for (const para of text.split(/\n\s*\n/)) {
      if (current && current.length + para.length > MAX_CHUNK_CHARS) {
        chunks.push({ source, heading, text: current.trim() });
        current = "";
      }
      current += para + "\n\n";
    }
    if (current.trim()) chunks.push({ source, heading, text: current.trim() });
  }
  return chunks;
}

type Index = {
  chunks: Chunk[];
  tokens: string[][];
  df: Map<string, number>;
  avgLen: number;
};

let index: Index | null = null;

// The knowledge base is bundled at build time by scripts/build-knowledge.mjs
function getIndex(): Index {
  if (index) return index;
  const chunks = (knowledge as { source: string; markdown: string }[]).flatMap((d) =>
    chunkMarkdown(d.source, d.markdown),
  );
  const tokens = chunks.map((c) => tokenize(`${c.heading} ${c.text}`));
  const df = new Map<string, number>();
  for (const doc of tokens) {
    for (const term of new Set(doc)) df.set(term, (df.get(term) ?? 0) + 1);
  }
  const avgLen = tokens.reduce((sum, t) => sum + t.length, 0) / Math.max(tokens.length, 1);
  index = { chunks, tokens, df, avgLen };
  return index;
}

/** BM25 keyword retrieval over the markdown knowledge base. */
export function retrieve(query: string, k = 4): { chunks: Chunk[]; matched: boolean } {
  const { chunks, tokens, df, avgLen } = getIndex();
  const terms = tokenize(query);
  const N = chunks.length;
  const k1 = 1.4;
  const b = 0.75;

  const scored = tokens.map((doc, i) => {
    let score = 0;
    for (const term of terms) {
      const tf = doc.filter((t) => t === term).length;
      if (!tf) continue;
      const n = df.get(term) ?? 0;
      const idf = Math.log(1 + (N - n + 0.5) / (n + 0.5));
      score += idf * ((tf * (k1 + 1)) / (tf + k1 * (1 - b + (b * doc.length) / avgLen)));
    }
    return { chunk: chunks[i], score };
  });

  const hits = scored.filter((s) => s.score > 0).sort((a, b) => b.score - a.score);
  // No keyword match (e.g. "hi"): fall back to the first chunks so the model still has context
  return {
    chunks: (hits.length ? hits : scored).slice(0, k).map((s) => s.chunk),
    matched: hits.length > 0,
  };
}
