// AccessibilityMenu.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Accessibility,
  Type,
  SunMedium,
  Contrast,
  Link2,
  BookOpenCheck,
} from "lucide-react";

const TOOLS = [
  { label: "Font Size", icon: Type },
  { label: "Saturation", icon: SunMedium },
  { label: "Contrast", icon: Contrast },
  { label: "Link Highlights", icon: Link2 },
  { label: "Dyslexia friendly", icon: BookOpenCheck },
] as const;

const AccessibilityMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Accessibility tools"
        className="p-2 rounded-full text-zinc-700 hover:bg-zinc-100 transition-colors"
      >
        <Accessibility className="h-5 w-5" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-64 rounded-xl border border-zinc-200 bg-white shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-1"
        >
          <p className="px-2 pb-2 text-sm font-semibold text-emerald-800">
            Accessibility Tools
          </p>
          <ul>
            {TOOLS.map(({ label, icon: Icon }) => (
              <li key={label}>
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 text-sm text-zinc-700 hover:bg-zinc-50 transition-colors"
                >
                  <span>{label}</span>
                  <Icon className="h-4 w-4 text-zinc-500" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccessibilityMenu;
