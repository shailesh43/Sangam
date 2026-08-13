// menus/MegaMenuWrapper.tsx
import React from "react";

interface MegaMenuWrapperProps {
  title: string;
  children: React.ReactNode;
}

/**
 * Shared shell for every mega menu panel — just the white content panel.
 * The dimmed backdrop is rendered once at the Navbar level (see Navbar.tsx),
 * kept non-interactive so it never interferes with hover detection.
 * No gap (mt-0) between the nav row and the panel so the pointer never
 * crosses "dead" space while moving from a nav item down into the menu.
 */
const MegaMenuWrapper: React.FC<MegaMenuWrapperProps> = ({ title, children }) => {
  return (
    <div
      role="dialog"
      aria-label={title}
      className="absolute left-0 right-0 top-full mt-0 pt-2 z-50"
    >
      <div className="rounded-2xl border border-zinc-200 bg-white shadow-2xl p-8 animate-in fade-in slide-in-from-top-2">
        <h2 className="text-center text-2xl font-bold text-emerald-800 mb-8">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default MegaMenuWrapper;