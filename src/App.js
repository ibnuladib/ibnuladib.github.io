// App.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import Project from './components/Project';
import Research from './components/Research';
import StatusBar from './components/StatusBar';
import { projectData } from './data/projectData';
import { researchData } from './data/researchData';

function App() {
  const projects = Object.keys(projectData)
    .sort()
    .map((key) => ({ key, ...projectData[key] }));

  const papers = researchData.papers;

  return (
    <>
      <StatusBar />

      <main className="mx-auto px-4 md:w-3/4 lg:w-1/2 max-w-[820px] pt-12 pb-24 flex flex-col gap-16">
        {/* Hero */}
        <section className="flex flex-col gap-6 font-mono">
          <div className="flex items-center gap-3 text-eyebrow uppercase text-graphite">
            <span className="text-accent">$</span>
            <span>whoami</span>
          </div>

          <h1 className="font-mono text-4xl md:text-6xl font-bold text-chalk leading-none">
            Hi, I'm Adib.
          </h1>

          <p className="font-sans text-xl text-graphite leading-relaxed max-w-prose">
            <span className="text-accent font-mono">cs student</span>{' '}
            <span className="text-graphite">|</span>{' '}
            <span className="text-accent font-mono">wannabe dev</span>. I build small tools, occasionally
            ship something useful, and keep a record of it here.
          </p>

          <div className="flex items-center gap-6 pt-2">
            <a
              href="https://github.com/ibnuladib"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-graphite hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FontAwesomeIcon size="lg" icon={faGithub} />
              <span className="font-mono text-sm">github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ibnul-adib-2264843b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-graphite hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon size="lg" icon={faLinkedin} />
              <span className="font-mono text-sm">linkedin</span>
            </a>
          </div>

          {/* Anchor nav — reads as a filesystem ls */}
          <nav aria-label="Sections" className="flex flex-wrap gap-x-6 gap-y-2 pt-6 border-t border-paper">
            <a href="#projects" className="font-mono text-sm text-graphite hover:text-accent transition-colors">
              ~/projects <span className="text-accent">({projects.length})</span>
            </a>
            <a href="#experience" className="font-mono text-sm text-graphite hover:text-accent transition-colors">
              ~/experience
            </a>
            <a href="#research" className="font-mono text-sm text-graphite hover:text-accent transition-colors">
              ~/research <span className="text-accent">({papers.length})</span>
            </a>
          </nav>
        </section>

        {/* Projects */}
        <section id="projects" aria-labelledby="projects-heading" className="flex flex-col gap-2 scroll-mt-20">
          <div className="flex items-baseline gap-3 mb-4">
            <h2
              id="projects-heading"
              className="font-mono text-2xl font-bold text-chalk"
            >
              ~/projects
            </h2>
            <span className="font-mono text-sm text-graphite">ls -lt</span>
          </div>

          <div className="border-t border-paper">
            {projects.map((p, i) => (
              <Project key={p.key} index={i + 1} {...p} />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" aria-labelledby="experience-heading" className="flex flex-col gap-4 scroll-mt-20">
          <div className="flex items-baseline gap-3 mb-2">
            <h2
              id="experience-heading"
              className="font-mono text-2xl font-bold text-chalk"
            >
              ~/experience
            </h2>
            <span className="font-mono text-sm text-graphite">cat experience.txt</span>
          </div>

          <div className="border-t border-paper py-6 font-mono text-graphite leading-relaxed">
            <p className="mb-2">
              <span className="text-accent">$</span> no full-time experience yet.
            </p>
            <p className="mb-2">
              <span className="text-accent">$</span> looking for summer 2026 internships — backend, full-stack,
              or ml engineering.
            </p>
            <p>
              <span className="text-accent">$</span> open to interesting part-time or contract work in the meantime.
              <a
                href="mailto:adib.bdhk@gmail.com"
                className="ml-2 text-accent hover:text-chalk transition-colors"
              >
                get in touch →
              </a>
            </p>
          </div>
        </section>

        {/* Research */}
        {papers.length > 0 && (
          <section id="research" aria-labelledby="research-heading" className="flex flex-col gap-2 scroll-mt-20">
            <div className="flex items-baseline gap-3 mb-4">
              <h2
                id="research-heading"
                className="font-mono text-2xl font-bold text-chalk"
              >
                ~/research
              </h2>
              <span className="font-mono text-sm text-graphite">cat papers/*</span>
            </div>

            <div className="border-t border-paper">
              {papers.map((paper, i) => (
                <Research key={i} {...paper} />
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="font-mono text-sm text-graphite border-t border-paper pt-6">
          <p>
            <span className="text-accent">$</span> exit
          </p>
          <p className="mt-1 text-graphite/60">built with react + tailwind. deployed to github pages.</p>
        </footer>
      </main>
    </>
  );
}

export default App;
