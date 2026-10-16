"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, FileText } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { chatSuggestions, profile } from "@/content/site";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "assistant"; content: string; sources?: string[] };

// The chatbot runs on a Cloudflare Worker (worker/); `npm run dev:chat` serves it locally on :8787
const CHAT_API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL ?? "http://localhost:8787/chat";

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function ask(question: string) {
    const q = question.trim();
    if (!q || loading) return;
    const next: Message[] = [...messages, { role: "user", content: q }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: data.answer || data.error || "Something went wrong.",
          sources: data.sources,
        },
      ]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "I couldn't connect — please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="glass flex flex-col rounded-3xl p-4 md:p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="size-10 rounded-full bg-linear-135 from-electric to-teal" />
        <div>
          <p className="text-[15px] font-bold">Ask {profile.firstName}&apos;s assistant</p>
          <p className="text-xs text-muted">Answers from my CV &amp; notes</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex max-h-80 min-h-28 flex-col gap-2.5 overflow-y-auto pr-1 [scrollbar-width:thin]">
        {messages.length === 0 && (
          <div className="rounded-2xl rounded-bl-md bg-white/[0.07] px-4 py-3 text-[14.5px] leading-relaxed">
            Hi! I&apos;m trained on {profile.firstName}&apos;s CV and notes. Ask me about experience,
            projects or how I work.
          </div>
        )}
        {messages.map((m, i) =>
          m.role === "user" ? (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-electric px-4 py-2.5 text-[14.5px] text-white"
            >
              {m.content}
            </motion.div>
          ) : (
            <div key={i} className="max-w-[92%]">
              <div className="rounded-2xl rounded-bl-md bg-white/[0.07] px-4 py-3">
                {i === messages.length - 1 ? (
                  <TextGenerateEffect
                    words={m.content}
                    duration={0.3}
                    className="text-[14.5px] leading-relaxed font-normal"
                  />
                ) : (
                  <p className="text-[14.5px] leading-relaxed">{m.content}</p>
                )}
              </div>
              {!!m.sources?.length && (
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {m.sources.map((s) => (
                    <span
                      key={s}
                      className="flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 font-mono text-[11px] text-muted"
                    >
                      <FileText className="size-3" /> {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ),
        )}
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex w-fit gap-1 rounded-2xl rounded-bl-md bg-white/[0.07] px-4 py-3.5"
            >
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="size-1.5 rounded-full bg-muted"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: d * 0.15 }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
        className="mt-4 flex items-center gap-2 rounded-2xl bg-black/25 p-1.5 pl-4"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about my experience…"
          maxLength={500}
          className="min-w-0 flex-1 bg-transparent text-[15px] text-ink outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          aria-label="Send"
          className="grid size-9 shrink-0 place-items-center rounded-xl bg-ink text-navy-950 transition-opacity disabled:opacity-40"
        >
          <ArrowUp className="size-4" />
        </button>
      </form>

      <div className={cn("mt-3 flex flex-wrap gap-1.5", messages.length > 2 && "hidden")}>
        {chatSuggestions.map((s) => (
          <button
            key={s}
            onClick={() => ask(s)}
            className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-muted transition-colors hover:bg-white/10 hover:text-ink"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
