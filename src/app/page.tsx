"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

import AboutMe from "../components/AboutMe";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Project from "../components/Project";
import Research from "../components/Research";
import StatusBar, { type ThemeMode } from "../components/StatusBar";
import Tabs, { type TabId } from "../components/Tabs";
import TerminalHero from "../components/TerminalHero";
import { favoriteCategories } from "../data/aboutMeData";
import { experienceEntries } from "../data/experienceData";
import { projectData } from "../data/projectData";
import { researchData } from "../data/researchData";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("projects");
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const theme: ThemeMode = resolvedTheme === "dark" ? "dark" : "light";
  const reduceMotion = useReducedMotion();
  const animateTabs = mounted && !reduceMotion;

  useEffect(() => setMounted(true), []);

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
        theme={mounted ? theme : "light"}
        onThemeToggle={() => setTheme(theme === "light" ? "dark" : "light")}
        disabled={!mounted}
      />
      <Tabs activeTab={activeTab} onChange={setActiveTab} counts={counts} />

      <main className="mx-auto flex max-w-[820px] flex-col gap-16 px-4 pb-24 pt-12 md:w-3/4 lg:w-1/2">
        <TerminalHero />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id="portfolio-content"
            className="section-content"
            initial={animateTabs ? { opacity: 0, y: 10 } : false}
            animate={{ opacity: 1, y: 0 }}
            exit={animateTabs ? { opacity: 0, y: -6 } : undefined}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
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
                  <span className="font-mono text-sm text-graphite">cat research/*</span>
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
          </motion.div>
        </AnimatePresence>

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
