# Michella Arlene — Portfolio

Live at **https://michella-arlene.github.io**

Next.js (static export) + Tailwind, animated with [Motion](https://motion.dev) and
[Aceternity UI](https://ui.aceternity.com). The chatbot runs on a Cloudflare Worker.

```bash
npm install
npm run dev        # site on http://localhost:3000
npm run dev:chat   # chatbot Worker on http://localhost:8787 (add worker/.dev.vars for real answers)
```

## Editing content

| What | Where |
| --- | --- |
| Page copy (hero, experience, projects, achievements, socials) | `src/content/site.ts` |
| Chatbot knowledge base | `content/knowledge/*.md` — one topic per heading |
| CV download | `public/cv.pdf` |

Push to `main` and GitHub Actions rebuilds the site. After editing `content/knowledge`, also run
`npm run deploy:chat` so the chatbot picks up the changes.

## Chatbot

`worker/` is a Cloudflare Worker exposing `POST /chat`. It does keyword (BM25) retrieval over
`content/knowledge` (bundled at deploy time) and sends the top passages to any OpenAI-compatible
model — Groq's free tier by default. Input is sanitised, history is capped, requests are rate-limited
per IP, CORS only allows the live site, and the model is instructed to answer strictly from the
sources. Without `LLM_API_KEY` it falls back to quoting the best-matching passage.

```bash
npx wrangler secret put LLM_API_KEY --config worker/wrangler.jsonc   # set the Groq key
npm run deploy:chat
```

## Aceternity components

Copied into `src/components/ui/` via the shadcn registry and lightly restyled for the navy theme.
They're excluded from ESLint as vendored code.
