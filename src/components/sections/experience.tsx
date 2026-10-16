import { Timeline } from "@/components/ui/timeline";
import { Reveal, SectionHeading } from "@/components/reveal";
import { experience } from "@/content/site";

export function Experience() {
  const data = experience.map((job) => ({
    title: job.period,
    content: (
      <Reveal>
        <div className="glass rounded-3xl p-6 md:p-7">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-bold tracking-tight md:text-2xl">{job.role}</h3>
            {job.current && (
              <span className="rounded-full bg-teal/15 px-2.5 py-0.5 font-mono text-[11px] text-teal">
                Current
              </span>
            )}
          </div>
          <p className="mt-1 font-semibold text-accent">{job.company}</p>
          <p className="mt-3 leading-relaxed text-muted">{job.summary}</p>
          {job.highlights.length > 0 && (
            <ul className="mt-4 space-y-2 text-[15px] text-muted">
              {job.highlights.map((h) => (
                <li key={h} className="flex gap-2.5">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky" />
                  {h}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {job.tags.map((t) => (
              <span key={t} className="rounded-lg bg-white/[0.08] px-2.5 py-1 text-xs text-ink/85">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    ),
  }));

  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow="Experience" lead="Where I've" accent="built" tail="things" />
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            From delivering client software end to end to teaching and mentoring at BINUS.
          </p>
        </Reveal>
        <Timeline data={data} />
      </div>
    </section>
  );
}
