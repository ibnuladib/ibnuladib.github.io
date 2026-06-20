// src/components/Research.jsx
// Research entry — same log-row treatment, but the lead is a venue + paper title.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faLink, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function Research({ title, venue, date, tags, description, methodology, achievements, pdfLink, aclLink }) {
  return (
    <article className="border-b border-paper py-6 font-mono">
      <div className="flex items-baseline gap-3 text-eyebrow uppercase text-graphite mb-2">
        <span className="text-accent">paper</span>
        <span>{date}</span>
      </div>

      <h3 className="font-mono text-xl font-bold text-chalk mb-1 leading-tight">
        {title}
      </h3>
      <p className="text-sm text-graphite italic mb-3">{venue}</p>

      {Array.isArray(tags) && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs text-graphite border border-paper px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <p className="font-sans text-graphite leading-relaxed mb-4">
        <span className="text-accent mr-2">→</span>
        {description}
      </p>

      {methodology && (
        <div className="mb-4">
          <h4 className="text-eyebrow uppercase text-graphite mb-2">methodology</h4>
          <p className="font-sans text-graphite leading-relaxed">{methodology}</p>
        </div>
      )}

      {achievements && achievements.length > 0 && (
        <div className="mb-4">
          <h4 className="text-eyebrow uppercase text-graphite mb-2">results</h4>
          <ul className="font-sans text-graphite">
            {achievements.map((a, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-accent">·</span>
                <span>{a}</span>
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
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-chalk transition-colors"
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
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-chalk transition-colors"
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

export default Research;
