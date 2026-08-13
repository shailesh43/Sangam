// SangamAIPanel.tsx
"use client";

import React, { useState } from "react";
import { X, Maximize2, Minimize2, SendHorizontal, Bot } from "lucide-react";

interface SangamAIPanelProps {
  onClose: () => void;
}

const SangamAIPanel: React.FC<SangamAIPanelProps> = ({ onClose }) => {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div
      role="dialog"
      aria-label="Sangam AI"
      className={`flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl transition-all ${
        expanded ? "h-[640px] w-[460px]" : "h-[560px] w-[380px]"
      } max-w-[92vw]`}
    >
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-zinc-100 px-4 py-3.5">
        <span className="flex h-6 w-6 items-center justify-center rounded-md text-emerald-600">
          <Bot className="h-8 w-8 text-emerald-800" />
        </span>
        <h2 className="text-base font-semibold text-emerald-800">Sangam AI</h2>
        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-label={expanded ? "Collapse" : "Expand"}
            className="rounded-md p-1 text-zinc-500 hover:bg-zinc-100"
          >
            {expanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-1 text-zinc-500 hover:bg-zinc-100"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>

      {/* Prompt */}
      <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <p className="text-xl text-zinc-500">
          What can I help you find on Sangam?
        </p>
      </div>

      {/* Composer */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Ask Sangam AI..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
          />
          <button type="button" aria-label="Send" className="shrink-0 text-zinc-400 hover:text-emerald-700">
            <SendHorizontal className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-2 text-center text-xs text-zinc-400">
          Sangam AI uses AI. Verify results.
        </p>
      </div>
    </div>
  );
};

export default SangamAIPanel;