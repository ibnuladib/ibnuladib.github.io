import type { ExperienceEntry } from "../data/experienceData";

type ExperienceTimelineProps = {
  entries: ExperienceEntry[];
};

export default function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <section aria-labelledby="experience-heading" className="flex flex-col gap-4">
      <div className="mb-2 flex items-baseline gap-3">
        <h2 id="experience-heading" className="font-mono text-2xl font-bold text-chalk">
          ~/experience
        </h2>
        <span className="font-mono text-sm text-graphite">cat experience.txt</span>
      </div>

      <div className="border-t border-paper py-6">
        <ol className="relative border-l border-paper pl-6">
          {entries.map((entry) => (
            <li key={`${entry.role}-${entry.organization}`} className="relative pb-8 last:pb-0">
              <span className="absolute -left-[31px] top-1 h-3 w-3 border border-accent bg-ink" aria-hidden="true" />
              <div className="font-mono">
                <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-bold text-chalk">{entry.role}</h3>
                  <span className="text-sm text-accent">{entry.period}</span>
                </div>
                <p className="text-graphite">
                  {entry.organization} · {entry.type}
                </p>
                <p className="mt-1 text-sm text-graphite/80">{entry.location}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
