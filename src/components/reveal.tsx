"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  lead,
  accent,
  tail,
  className,
}: {
  eyebrow: string;
  lead: string;
  accent: string;
  tail?: string;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <span className="font-mono text-xs tracking-[0.14em] text-accent uppercase">{eyebrow}</span>
      <h2 className="mt-3 text-[2.1rem] leading-[1.05] font-bold tracking-tight md:text-5xl">
        {lead} <span className="font-serif text-[1.12em] font-normal text-accent italic">{accent}</span>
        {tail ? ` ${tail}` : null}
      </h2>
    </Reveal>
  );
}
