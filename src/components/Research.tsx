import { faArrowUpRightFromSquare, faFilePdf, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { ResearchPaper } from "../data/researchData";

export default function Research({
  title,
  venue,
  date,
  tags,
  description,
  methodology,
  achievements,
  pdfLink,
  aclLink,
}: ResearchPaper) {
  return (
    <article className="border-b border-paper py-6 font-mono">
      <div className="mb-2 flex items-baseline gap-3 text-eyebrow uppercase text-graphite">
        <span className="text-accent">paper</span>
        <span>{date}</span>
      </div>

      <h3 className="mb-1 font-mono text-xl font-bold leading-tight text-chalk">{title}</h3>
      <p className="mb-3 text-sm italic text-graphite">{venue}</p>

      {tags.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="border border-paper px-2 py-0.5 text-xs text-graphite">
              {tag}
            </span>
          ))}
        </div>
      )}

      <p className="mb-4 font-sans leading-relaxed text-graphite">
        <span className="mr-2 text-accent">-&gt;</span>
        {description}
      </p>

      {methodology && (
        <div className="mb-4">
          <h4 className="mb-2 text-eyebrow uppercase text-graphite">methodology</h4>
          <p className="font-sans leading-relaxed text-graphite">{methodology}</p>
        </div>
      )}

      {achievements && achievements.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-2 text-eyebrow uppercase text-graphite">results</h4>
          <ul className="font-sans text-graphite">
            {achievements.map((achievement) => (
              <li key={achievement} className="flex gap-2">
                <span className="text-accent">-</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-6">
        {pdfLink && (
          <a
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-chalk"
          >
            <FontAwesomeIcon icon={faFilePdf} />
            <span>pdf</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </a>
        )}
        {aclLink && (
          <a
            href={aclLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-chalk"
          >
            <FontAwesomeIcon icon={faLink} />
            <span>anthology</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </a>
        )}
      </div>
    </article>
  );
}
