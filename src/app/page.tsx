"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useMemo, useState } from "react";

import AboutMe from "../components/AboutMe";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Project from "../components/Project";
import Research from "../components/Research";
import StatusBar, { type ThemeMode } from "../components/StatusBar";
import Tabs, { type TabId } from "../components/Tabs";
import { favoriteCategories } from "../data/aboutMeData";
import { experienceEntries } from "../data/experienceData";
import { projectData } from "../data/projectData";
import { researchData } from "../data/researchData";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("projects");
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme") as ThemeMode | null;

    setTheme(savedTheme ?? "light");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const projects = useMemo(
    () =>
      Object.entries(projectData)
        .sort(([, projectA], [, projectB]) => {
          const dateA = new Date(`1 ${projectA.date}`).getTime();
          const dateB = new Date(`1 ${projectB.date}`).getTime();

          return dateB - dateA;
        })
        .map(([key, project]) => ({ key, ...project })),
    [],
  );

  const papers = researchData.papers;
  const counts = {
    projects: projects.length,
    research: papers.length,
    about: favoriteCategories.reduce((total, category) => total + category.items.length, 0),
  };

  return (
    <>
      <StatusBar
        theme={theme}
        onThemeToggle={() => setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))}
      />
      <Tabs activeTab={activeTab} onChange={setActiveTab} counts={counts} />

      <main className="mx-auto flex max-w-[820px] flex-col gap-16 px-4 pb-24 pt-12 md:w-3/4 lg:w-1/2">
        <section className="flex flex-col gap-6 font-mono">
          <div className="flex items-center gap-3 text-eyebrow uppercase text-graphite">
            <span className="text-accent">$</span>
            <span>whoami</span>
          </div>

          <h1 className="font-mono text-4xl font-bold leading-none text-chalk md:text-6xl">
            Ibnul Adib
          </h1>

          <p className="max-w-prose font-sans text-xl leading-relaxed text-graphite">
            <span className="font-mono text-accent">cs student</span>{" "}
            <span className="text-graphite">|</span>{" "}
            <span className="font-mono text-accent">wannabe dev</span>. I build small tools,
            occasionally ship something useful, and keep a record of it here.
          </p>

          <div className="flex items-center gap-6 pt-2">
            <a
              href="https://github.com/ibnuladib"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-graphite transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <FontAwesomeIcon size="lg" icon={faGithub} />
              <span className="font-mono text-sm">github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ibnul-adib-2264843b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-graphite transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon size="lg" icon={faLinkedin} />
              <span className="font-mono text-sm">linkedin</span>
            </a>
          </div>
        </section>

        {activeTab === "projects" && (
          <section aria-labelledby="projects-heading" className="flex flex-col gap-2">
            <div className="mb-4 flex items-baseline gap-3">
              <h2 id="projects-heading" className="font-mono text-2xl font-bold text-chalk">
                ~/projects
              </h2>
              <span className="font-mono text-sm text-graphite">ls -lt</span>
            </div>
            <div className="border-t border-paper">
              {projects.map(({ key, ...project }, i) => (
                <Project key={key} index={i + 1} {...project} />
              ))}
            </div>
          </section>
        )}

        {activeTab === "experience" && <ExperienceTimeline entries={experienceEntries} />}

        {activeTab === "research" && (
          <section aria-labelledby="research-heading" className="flex flex-col gap-2">
            <div className="mb-4 flex items-baseline gap-3">
              <h2 id="research-heading" className="font-mono text-2xl font-bold text-chalk">
                ~/research
              </h2>
              <span className="font-mono text-sm text-graphite">cat papers/*</span>
            </div>
            {papers.length === 0 ? (
              <div className="border-t border-paper py-6 font-mono text-graphite">
                <p>
                  <span className="text-accent">$</span> no papers to show yet.
                </p>
              </div>
            ) : (
              <div className="border-t border-paper">
                {papers.map((paper) => (
                  <Research key={`${paper.title}-${paper.date}`} {...paper} />
                ))}
              </div>
            )}
          </section>
        )}

        {activeTab === "about" && <AboutMe categories={favoriteCategories} />}

        <footer className="border-t border-paper pt-6 font-mono text-sm text-graphite">
          <p>
            <span className="text-accent">$</span> exit
          </p>
          <p className="mt-1 text-graphite/60">built with next.js + tailwind. deployed to github pages.</p>
        </footer>
      </main>
    </>
  );
}
