"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

const COMMAND = "whoami";
const NAME = "Ibnul Adib";

function MagneticLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18 });
  const springY = useSpring(y, { stiffness: 260, damping: 18 });

  function onMove(event: MouseEvent<HTMLAnchorElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.35);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: springX, y: springY }}
      className="inline-flex items-center gap-2 text-graphite transition-colors hover:text-accent"
    >
      {children}
    </motion.a>
  );
}

function TypeLine({
  text,
  active,
  skip,
  complete,
  onDone,
  className,
}: {
  text: string;
  active: boolean;
  skip: boolean;
  complete?: boolean;
  onDone?: () => void;
  className?: string;
}) {
  const [visible, setVisible] = useState(0);
  const onDoneRef = useRef(onDone);
  const finishedRef = useRef(false);
  onDoneRef.current = onDone;

  useEffect(() => {
    if (!active || finishedRef.current) return;

    if (skip || complete) {
      finishedRef.current = true;
      setVisible(text.length);
      if (!complete) onDoneRef.current?.();
      return;
    }

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setVisible(i);
      if (i >= text.length) {
        window.clearInterval(id);
        finishedRef.current = true;
        onDoneRef.current?.();
      }
    }, 55);

    return () => window.clearInterval(id);
  }, [active, skip, complete, text]);

  const shown = complete || skip ? text.length : visible;
  return <span className={className}>{text.slice(0, shown)}</span>;
}

export default function TerminalHero() {
  const reduceMotion = useReducedMotion();
  const [hydrated, setHydrated] = useState(false);
  const [phase, setPhase] = useState<"command" | "name" | "done">("command");

  useEffect(() => setHydrated(true), []);

  const skip = hydrated && !!reduceMotion;

  useEffect(() => {
    if (skip) setPhase("done");
  }, [skip]);

  const showName = phase === "name" || phase === "done";
  const showRest = phase === "done";

  return (
    <section className="terminal-hero relative overflow-hidden font-mono">
      <div className="terminal-hero__glow" aria-hidden="true" />
      <div className="terminal-hero__scan" aria-hidden="true" />

      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex items-center gap-3 text-eyebrow uppercase text-graphite">
          <span className="text-accent">$</span>
          <TypeLine
            text={COMMAND}
            active={hydrated}
            skip={skip}
            complete={phase !== "command"}
            onDone={() => {
              window.setTimeout(
                () => setPhase((current) => (current === "command" ? "name" : current)),
                skip ? 0 : 280,
              );
            }}
          />
          {phase === "command" && <span className="terminal-cursor" aria-hidden="true" />}
        </div>

        <h1
          aria-label={NAME}
          className="font-mono text-4xl font-bold leading-none tracking-tight text-chalk md:text-6xl"
        >
          <span aria-hidden="true">
            {showName ? (
              <>
                <TypeLine
                  text={NAME}
                  active={showName && hydrated}
                  skip={skip}
                  complete={showRest}
                  className="text-balance"
                  onDone={() => setPhase("done")}
                />
                <span
                  className={`terminal-cursor ml-1 align-baseline ${showRest ? "terminal-cursor--idle" : ""}`}
                />
              </>
            ) : (
              <span className="invisible">{NAME}</span>
            )}
          </span>
        </h1>

        <motion.p
          className={`max-w-prose font-sans text-xl leading-relaxed text-graphite ${showRest ? "" : "pointer-events-none"}`}
          aria-hidden={!showRest}
          initial={false}
          animate={showRest ? { opacity: 1, y: 0 } : { opacity: 0, y: skip ? 0 : 12 }}
          transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.05 }}
        >
          <span className="font-mono text-accent">cs student</span>{" "}
          <span className="text-graphite">|</span>{" "}
          <span className="font-mono text-accent">wannabe dev</span>. I build small tools,
          occasionally ship something useful, and keep a record of it here.
        </motion.p>

        <motion.div
          className={`flex items-center gap-6 pt-2 ${showRest ? "" : "pointer-events-none"}`}
          aria-hidden={!showRest}
          initial={false}
          animate={showRest ? { opacity: 1, y: 0 } : { opacity: 0, y: skip ? 0 : 10 }}
          transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.12 }}
        >
          <MagneticLink href="https://github.com/ibnuladib" label="GitHub">
            <FontAwesomeIcon size="lg" icon={faGithub} />
            <span className="font-mono text-sm">github</span>
          </MagneticLink>
          <MagneticLink
            href="https://www.linkedin.com/in/ibnul-adib-2264843b3/"
            label="LinkedIn"
          >
            <FontAwesomeIcon size="lg" icon={faLinkedin} />
            <span className="font-mono text-sm">linkedin</span>
          </MagneticLink>
        </motion.div>
      </div>
    </section>
  );
}
