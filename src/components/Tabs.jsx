// src/components/Tabs.jsx
// Tab bar styled as terminal windows: each tab has three dots, a path label,
// and a count. Active tab gets an accent prompt prefix and a top border in accent.
import React from 'react';

function TabButton({ id, label, count, active, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      aria-current={active ? 'page' : undefined}
      className={`group flex items-center gap-3 px-4 py-2 font-mono text-sm border-r border-paper transition-colors ${
        active
          ? 'bg-paper text-chalk'
          : 'bg-ink text-graphite hover:text-chalk'
      }`}
    >
      <span className="flex gap-1.5" aria-hidden="true">
        <span className="w-2 h-2 rounded-full bg-fault/60" />
        <span className="w-2 h-2 rounded-full bg-[#EAB308]/60" />
        <span className="w-2 h-2 rounded-full bg-accent/60" />
      </span>
      <span>
        <span className={active ? 'text-accent mr-1' : 'text-graphite/50 mr-1'}>{active ? '>' : ' '}</span>
        {label}
        {count != null && (
          <span className={`ml-2 ${active ? 'text-accent' : 'text-graphite/60'}`}>({count})</span>
        )}
      </span>
    </button>
  );
}

function Tabs({ activeTab, onChange, counts }) {
  const tabs = [
    { id: 'projects', label: '~/projects', count: counts.projects },
    { id: 'experience', label: '~/experience', count: null },
    { id: 'research', label: '~/research', count: counts.research },
  ];

  return (
    <div
      role="tablist"
      aria-label="Sections"
      className="sticky top-[44px] z-40 bg-ink/95 backdrop-blur-sm border-b border-paper"
    >
      <div className="mx-auto max-w-[820px] px-4 flex overflow-x-auto">
        {tabs.map((t) => (
          <TabButton
            key={t.id}
            id={t.id}
            label={t.label}
            count={t.count}
            active={activeTab === t.id}
            onClick={onChange}
          />
        ))}
      </div>
    </div>
  );
}

export default Tabs;
