// FloatingChatWidgets.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { MessagesSquare, Bot } from "lucide-react";
import TeamsPanel from "./windows/TeamsPanel";
import SangamAIPanel from "./windows/SangamAIPanel";

type ActivePanel = "teams" | "sangam" | null;

/**
 * Mount this ONCE, high up in the tree (root layout.tsx is ideal) so the
 * two floating buttons and their panels persist across every page/route.
 * Only one panel is open at a time.
 */
const FloatingChatWidgets: React.FC = () => {
  const [active, setActive] = useState<ActivePanel>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActive(null);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggle = (panel: ActivePanel) => {
    setActive((current) => (current === panel ? null : panel));
  };

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4">
      {/* Open panel */}
      {active === "teams" && <TeamsPanel onClose={() => setActive(null)} />}
      {active === "sangam" && <SangamAIPanel onClose={() => setActive(null)} />}

      {/* Trigger buttons */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => toggle("teams")}
          aria-label="Open Microsoft Teams chat"
          aria-pressed={active === "teams"}
          className="flex items-center gap-2 rounded-full bg-indigo-400 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-indigo-500"
        >
          <img
            src="/assets/teams-logo.png"
            alt="Microsoft Teams"
            className="h-5 w-5 object-contain"
          />
          Chat
        </button>

        <button
          type="button"
          onClick={() => toggle("sangam")}
          aria-label="Open Sangam AI"
          aria-pressed={active === "sangam"}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-transform hover:scale-105 hover:bg-emerald-600"
        >
          <Bot className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default FloatingChatWidgets;