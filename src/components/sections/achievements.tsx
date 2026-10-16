"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { Trophy } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Reveal, SectionHeading } from "@/components/reveal";
import { achievements } from "@/content/site";
import { cn } from "@/lib/utils";

function CountUp({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, count, value]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const glowColor = { electric: "bg-electric", teal: "bg-teal", amber: "bg-amber" } as const;
const sizeClass = {
  lg: "col-span-2 row-span-2",
  wide: "col-span-2",
  sm: "col-span-1",
} as const;

export function Achievements() {
  return (
    <section id="achievements" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow="Achievements" lead="Milestones &" accent="recognition" />
        <Reveal delay={0.1}>
          <BentoGrid className="mt-12 grid-cols-2 auto-rows-[minmax(10rem,auto)] md:auto-rows-[minmax(11rem,auto)] grid-flow-dense md:grid-cols-4">
            {achievements.map((a) => (
              <BentoGridItem
                key={a.title}
                className={cn(
                  "glass relative space-y-0 overflow-hidden rounded-3xl border-0 bg-white/[0.055] p-5 md:p-6 dark:border-0 dark:bg-white/[0.055]",
                  sizeClass[a.size ?? "sm"],
                )}
                header={
                  <>
                    {a.glow && (
                      <div
                        className={cn(
                          "pointer-events-none absolute -top-20 -right-20 size-64 rounded-full opacity-40 blur-3xl",
                          glowColor[a.glow],
                        )}
                      />
                    )}
                    {a.stat ? (
                      <div className="relative text-5xl font-bold tracking-[-0.04em]">
                        <CountUp value={a.stat.value} decimals={a.stat.decimals} suffix={a.stat.suffix} />
                      </div>
                    ) : (
                      <Trophy className={cn("relative text-accent", a.size === "lg" ? "size-10" : "size-6")} />
                    )}
                  </>
                }
                title={
                  <span className="relative block">
                    <span className="mb-1.5 block font-mono text-[11px] font-normal tracking-wider text-accent uppercase">
                      {a.kicker}
                    </span>
                    <span className={cn("block text-ink", a.size === "lg" ? "text-2xl md:text-3xl" : "text-base md:text-lg")}>
                      {a.title}
                    </span>
                  </span>
                }
                description={
                  a.description && <span className="relative block text-sm text-muted">{a.description}</span>
                }
              />
            ))}
          </BentoGrid>
        </Reveal>
      </div>
    </section>
  );
}
