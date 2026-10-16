"use client";

// Based on Aceternity's Expandable Card (grid variant)
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Reveal, SectionHeading } from "@/components/reveal";
import { projects, type Project } from "@/content/site";

function Cover({ project, className }: { project: Project; className?: string }) {
  const [base, a, b] = project.palette;
  if (project.image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={project.image} alt={project.title} className={`${className} object-cover object-top`} />;
  }
  return (
    <div className={`${className} relative overflow-hidden`} style={{ background: base }}>
      <div className="absolute -top-10 -left-10 size-56 rounded-full blur-3xl" style={{ background: a }} />
      <div className="absolute -right-8 -bottom-12 size-48 rounded-full opacity-80 blur-3xl" style={{ background: b }} />
      <div className="absolute inset-x-6 top-10 -bottom-3 rounded-xl bg-white/10 backdrop-blur-sm" />
    </div>
  );
}

const tabs = [
  { id: "client", label: "Client work" },
  { id: "research", label: "ML & research" },
] as const;

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [tab, setTab] = useState<Project["category"]>("client");
  const visible = projects.filter((p) => p.category === tab);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow="Selected projects" lead="Things I'm" accent="proud" tail="of" />

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active ? (
            <div className="fixed inset-0 z-[60] grid place-items-center p-0 sm:p-6">
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="flex h-full w-full max-w-[560px] flex-col overflow-hidden bg-navy-900 shadow-2xl sm:h-fit sm:max-h-[90%] sm:rounded-3xl"
              >
                <motion.div layoutId={`image-${active.title}-${id}`} className="relative">
                  <Cover project={active} className="h-64 w-full sm:h-72" />
                  <button
                    onClick={() => setActive(null)}
                    aria-label="Close"
                    className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-navy-950/60 text-ink backdrop-blur"
                  >
                    <X className="size-4" />
                  </button>
                </motion.div>
                <div className="overflow-auto p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] tracking-wider text-accent uppercase">{active.context}</p>
                      <motion.h3 layoutId={`title-${active.title}-${id}`} className="mt-1.5 text-xl font-bold">
                        {active.title}
                      </motion.h3>
                      <motion.p layoutId={`tagline-${active.title}-${id}`} className="mt-1 text-muted">
                        {active.tagline}
                      </motion.p>
                    </div>
                    {active.href && (
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex shrink-0 items-center gap-1 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-navy-950"
                      >
                        Visit <ArrowUpRight className="size-4" />
                      </motion.a>
                    )}
                  </div>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 leading-relaxed text-muted"
                  >
                    <p>{active.description}</p>
                    <ul className="mt-4 space-y-2 text-[15px]">
                      {active.points.map((point) => (
                        <li key={point} className="flex gap-2.5">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    {active.role && (
                      <p className="mt-4 text-sm">
                        <span className="text-ink">My role:</span> {active.role}
                      </p>
                    )}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {active.tags.map((t) => (
                        <span key={t} className="rounded-lg bg-white/[0.08] px-2.5 py-1 text-xs text-ink/85">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        <Reveal delay={0.1}>
          <div className="glass mt-8 inline-flex rounded-full p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${tab === t.id ? "text-ink" : "text-muted hover:text-ink"}`}
              >
                {tab === t.id && (
                  <motion.span
                    layoutId="project-tab"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <ul key={tab} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06} className="h-full">
              <motion.li
                layoutId={`card-${project.title}-${id}`}
                onClick={() => setActive(project)}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="glass h-full cursor-pointer list-none overflow-hidden rounded-3xl p-2.5"
              >
                <motion.div layoutId={`image-${project.title}-${id}`}>
                  <Cover project={project} className="h-52 w-full rounded-2xl" />
                </motion.div>
                <div className="px-3 pt-4 pb-3">
                  <p className="font-mono text-[11px] tracking-wider text-accent uppercase">{project.context}</p>
                  <motion.h3 layoutId={`title-${project.title}-${id}`} className="mt-1.5 text-lg font-bold">
                    {project.title}
                  </motion.h3>
                  <motion.p layoutId={`tagline-${project.title}-${id}`} className="mt-1.5 text-sm leading-relaxed text-muted">
                    {project.tagline}
                  </motion.p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span key={t} className="rounded-lg bg-white/[0.08] px-2.5 py-1 text-xs text-ink/85">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
