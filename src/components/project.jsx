// src/components/Project.jsx
// Project entry — reads as a log row: number, date stamp, title, tags, command, link.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

function Project({ index, title, date, tags, description, githubLink }) {
  return (
    <article className="border-b border-paper py-6 font-mono">
      <div className="flex items-baseline gap-3 text-eyebrow uppercase text-graphite mb-2">
        <span className="text-accent">{String(index).padStart(2, '0')}</span>
        <span>{date}</span>
      </div>

      <h3 className="font-mono text-xl font-bold text-chalk mb-3 leading-tight">
        {title}
      </h3>

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

      <p className="font-sans text-graphite leading-relaxed mb-3">
        <span className="text-accent mr-2">→</span>
        {description}
      </p>

      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-accent hover:text-chalk transition-colors"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>view source</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
        </a>
      )}
    </article>
  );
}

export default Project;
