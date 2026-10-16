"use client";

import { Download } from "lucide-react";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Reveal } from "@/components/reveal";
import { profile, socials } from "@/content/site";

const icons = {
  linkedin: IconBrandLinkedin,
  instagram: IconBrandInstagram,
  github: IconBrandGithub,
  mail: IconMail,
};

export function Contact() {
  const items = socials.map((s) => {
    const Icon = icons[s.icon];
    return { title: s.title, href: s.href, icon: <Icon className="size-full text-ink" /> };
  });

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-14 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute -bottom-40 -left-24 size-96 rounded-full bg-electric/50 blur-3xl" />
            <div className="pointer-events-none absolute -top-40 -right-20 size-96 rounded-full bg-teal/40 blur-3xl" />
            <div className="relative">
              <span className="font-mono text-xs tracking-[0.14em] text-accent uppercase">Contact</span>
              <h2 className="mx-auto mt-4 max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight md:text-6xl">
                Let&apos;s build{" "}
                <span className="font-serif text-[1.12em] font-normal text-accent italic">something</span>{" "}
                together.
              </h2>
              <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted">
                Open to conversations about forward deployed, solutions and product engineering roles.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={profile.cvUrl}
                  download
                  className="flex items-center gap-2 rounded-2xl bg-ink px-6 py-3.5 text-[15px] font-semibold text-navy-950"
                >
                  <Download className="size-4" /> Download CV
                </a>
                <a href={`mailto:${profile.email}`} className="glass-strong rounded-2xl px-6 py-3.5 text-[15px] font-semibold">
                  Email me
                </a>
              </div>

              <div className="mt-10 flex justify-center">
                <FloatingDock
                  items={items}
                  desktopClassName="bg-white/[0.06] dark:bg-white/[0.06] backdrop-blur-xl"
                  mobileClassName="hidden"
                />
                <div className="flex gap-3 md:hidden">
                  {items.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      aria-label={item.title}
                      className="grid size-12 place-items-center rounded-2xl bg-white/[0.08] p-3.5"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <footer className="mt-12 flex flex-col items-center justify-between gap-2 text-sm text-muted md:flex-row">
          <span>© {profile.name}</span>
          <span className="font-mono text-xs">Built with Next.js, Motion &amp; Aceternity UI</span>
        </footer>
      </div>
    </section>
  );
}
