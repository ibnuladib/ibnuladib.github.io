import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { ProjectEntry } from "../data/projectData";

type ProjectProps = ProjectEntry & {
  index: number;
};

export default function Project({ index, title, date, tags, description, githubLink }: ProjectProps) {
  return (
    <article className="border-b border-paper py-6 font-mono">
      <div className="mb-2 flex items-baseline gap-3 text-eyebrow uppercase text-graphite">
        <span className="text-accent">{String(index).padStart(2, "0")}</span>
        <span>{date}</span>
      </div>

      <h3 className="mb-3 font-mono text-xl font-bold leading-tight text-chalk">{title}</h3>

      {tags.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="border border-paper px-2 py-0.5 text-xs text-graphite">
              {tag}
            </span>
          ))}
        </div>
      )}

      <p className="mb-3 font-sans leading-relaxed text-graphite">
        <span className="mr-2 text-accent">-&gt;</span>
        {description}
      </p>

      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-chalk"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>view source</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
        </a>
      )}
    </article>
  );
}
