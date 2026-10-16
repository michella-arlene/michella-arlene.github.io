"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Chat } from "@/components/chat";
import { profile } from "@/content/site";

const lines = [
  <>Hi, I&apos;m {profile.firstName}.</>,
  <>
    {profile.headlineLead}{" "}
    <span className="text-gradient pr-1 font-serif text-[1.1em] font-normal tracking-normal italic">
      {profile.headlineAccent}
    </span>
  </>,
  <>{profile.headlineTail}</>,
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section id="about" ref={ref} className="relative pt-28 pb-16 md:min-h-svh md:pt-40">
      <motion.div
        style={{ y, opacity }}
        className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:px-8 lg:grid-cols-[1.25fr_0.9fr] lg:gap-14"
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="glass inline-flex items-center gap-2.5 rounded-full px-3.5 py-2 text-[13px] text-muted"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {profile.role} @ {profile.company} · {profile.school}
          </motion.span>

          <h1 className="mt-6 text-[2.9rem] leading-[0.98] font-bold tracking-[-0.045em] sm:text-6xl lg:text-[5.2rem]">
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-2xl bg-ink px-6 py-3.5 text-[15px] font-semibold text-navy-950"
            >
              View my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="glass glass-strong rounded-2xl px-6 py-3.5 text-[15px] font-semibold">
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
        >
          <Chat />
        </motion.div>
      </motion.div>
    </section>
  );
}
