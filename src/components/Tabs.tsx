export type TabId = "projects" | "experience" | "research" | "about";

type TabCounts = {
  projects: number;
  research: number;
  about: number;
};

type TabButtonProps = {
  id: TabId;
  label: string;
  count: number | null;
  active: boolean;
  onClick: (id: TabId) => void;
};

function TabButton({ id, label, count, active, onClick }: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      aria-current={active ? "page" : undefined}
      className={`group flex items-center gap-3 border-r border-paper px-4 py-2 font-mono text-sm transition-colors ${
        active ? "bg-paper text-chalk" : "bg-ink text-graphite hover:text-chalk"
      }`}
    >
      <span className="flex gap-1.5" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-fault/60" />
        <span className="h-2 w-2 rounded-full bg-[#EAB308]/60" />
        <span className="h-2 w-2 rounded-full bg-accent/60" />
      </span>
      <span>
        <span className={active ? "mr-1 text-accent" : "mr-1 text-graphite/50"}>
          {active ? ">" : " "}
        </span>
        {label}
        {count != null && <span className={`ml-2 ${active ? "text-accent" : "text-graphite/60"}`}>({count})</span>}
      </span>
    </button>
  );
}

type TabsProps = {
  activeTab: TabId;
  onChange: (id: TabId) => void;
  counts: TabCounts;
};

export default function Tabs({ activeTab, onChange, counts }: TabsProps) {
  const tabs: Array<{ id: TabId; label: string; count: number | null }> = [
    { id: "projects", label: "~/projects", count: counts.projects },
    { id: "experience", label: "~/experience", count: null },
    { id: "research", label: "~/research", count: counts.research },
    { id: "about", label: "~/about-me", count: counts.about },
  ];

  return (
    <div role="tablist" aria-label="Sections" className="sticky top-[44px] z-40 border-b border-paper bg-ink/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[820px] overflow-x-auto px-4">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            id={tab.id}
            label={tab.label}
            count={tab.count}
            active={activeTab === tab.id}
            onClick={onChange}
          />
        ))}
      </div>
    </div>
  );
}
