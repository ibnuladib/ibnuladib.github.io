// src/components/StatusBar.jsx
// Signature element: persistent terminal-style prompt at the top of the page.
// Anchors the page in the maker voice and is the single memorable thing.
import React from 'react';

function StatusBar() {
  return (
    <header
      role="banner"
      className="sticky top-0 z-50 bg-ink/90 backdrop-blur-sm border-b border-paper"
    >
      <div className="mx-auto max-w-[820px] px-4 py-3 flex items-center gap-3 font-mono text-sm">
        <span className="text-accent">adib@portfolio</span>
        <span className="text-graphite">~</span>
        <span className="text-chalk">%</span>
        <span
          aria-hidden="true"
          className="inline-block w-2 h-4 bg-accent animate-pulse"
          style={{ animationDuration: '1.05s' }}
        />
        <span className="sr-only">prompt ready</span>
      </div>
    </header>
  );
}

export default StatusBar;
