import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type ThemeMode = "dark" | "light";

type StatusBarProps = {
  theme: ThemeMode;
  onThemeToggle: () => void;
};

export default function StatusBar({ theme, onThemeToggle }: StatusBarProps) {
  const isLight = theme === "light";

  return (
    <header role="banner" className="sticky top-0 z-50 border-b border-paper bg-ink/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[820px] items-center gap-3 px-4 py-3 font-mono text-sm">
        <span className="text-accent">adib@portfolio</span>
        <span className="text-graphite">~</span>
        <span className="text-chalk">%</span>
        <span
          aria-hidden="true"
          className="inline-block h-4 w-2 animate-pulse bg-accent"
          style={{ animationDuration: "1.05s" }}
        />
        <span className="sr-only">prompt ready</span>
        <button
          type="button"
          onClick={onThemeToggle}
          aria-label={isLight ? "Switch to terminal mode" : "Switch to soft light mode"}
          aria-pressed={isLight}
          title={isLight ? "terminal mode" : "soft light mode"}
          className="ml-auto inline-flex min-w-[8.75rem] items-center justify-between gap-2 border border-paper bg-paper/70 px-2.5 py-1 text-xs text-graphite shadow-[inset_0_1px_0_rgb(var(--color-chalk)/0.06)] transition-colors hover:text-chalk"
        >
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className={`grid h-5 w-5 place-items-center border border-paper transition-colors ${
                isLight ? "bg-accent text-ink" : "bg-ink text-accent"
              }`}
            >
              <FontAwesomeIcon icon={isLight ? faSun : faMoon} className="h-3 w-3" />
            </span>
            <span>{isLight ? "soft light" : "terminal"}</span>
          </span>
          <span className="text-accent" aria-hidden="true">
            {isLight ? "on" : "off"}
          </span>
        </button>
      </div>
    </header>
  );
}
