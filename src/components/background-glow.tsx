"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

/** Page-wide moving colour behind the glass. Strongest in the hero, calmer as you scroll. */
export function BackgroundGlow() {
  const { scrollY } = useScroll();
  const dim = useTransform(scrollY, [0, 700], [0.35, 0.78]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <BackgroundGradientAnimation
        containerClassName="absolute inset-0 h-full w-full"
        gradientBackgroundStart="rgb(6, 11, 24)"
        gradientBackgroundEnd="rgb(11, 21, 48)"
        firstColor="30, 91, 255"
        secondColor="18, 194, 176"
        thirdColor="63, 168, 255"
        fourthColor="255, 159, 90"
        fifthColor="14, 42, 107"
        size="70%"
        blendingValue="hard-light"
        interactive={false}
      />
      <motion.div style={{ opacity: dim }} className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.5)_0.6px,transparent_0.6px)] bg-size-[3px_3px] opacity-[0.06] mix-blend-overlay" />
    </div>
  );
}
