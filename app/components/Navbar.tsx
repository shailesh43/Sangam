// Navbar.tsx
"use client";

import React, { useEffect, useState } from "react";
import { CircleUserRound, ChevronDown } from "lucide-react";

import NavItem from "./NavItem";
import SearchBar from "./SearchBar";
import AccessibilityMenu from "./menus/AccessibilityMenu";
import AboutUsMenu from "./menus/AboutUsMenu";
import EmployeeConnectMenu from "./menus/EmployeeConnectMenu";
import BusinessAppsMenu from "./menus/BusinessAppsMenu";
import MediaMenu from "./menus/MediaMenu";
import PoliciesMenu from "./menus/PoliciesMenu";
import type { MenuKey } from "./types";

const NAV_LINKS: { key: MenuKey; label: string }[] = [
  { key: "about", label: "About Us" },
  { key: "employee", label: "Employee Connect" },
  { key: "apps", label: "Business Apps" },
  { key: "media", label: "Media" },
  { key: "policies", label: "Policies" },
];



const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);

  // Escape still closes, for keyboard users
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setOpenMenu(null);

  return (
    <>
      {/* Dimmed page backdrop while a menu is open. pointer-events-none so it
          never captures hover/click — it's purely a visual dimmer and never
          interferes with the header's onMouseLeave detection below. */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-zinc-900/30 z-40 pointer-events-none"
          aria-hidden="true"
        />
      )}

      <header
        className="sticky top-0 z-50"
        onMouseLeave={closeMenu}
      >
        <div className="relative border border-zinc-200 bg-white shadow-sm">
          <nav className="flex items-center gap-6 px-4 md:px-6 py-3">
            {/* Logo — placeholder image, swap src for the real brand logo URL */}
            <a href="/" className="shrink-0">
              <img
                src="https://placehold.co/96x36/ffffff/1a5f4a?text=LOGO"
                alt="Company logo"
                className="h-9 w-auto rounded-sm"
              />
            </a>

            {/* Primary nav links — open their mega menu on hover */}
            <ul className="hidden lg:flex items-center gap-6 text-zinc-500 hover:text-zinc-700">
              {NAV_LINKS.map(({ key, label }) => (
                <li
                  key={key}
                  onMouseEnter={() => setOpenMenu(key)}
                  onFocus={() => setOpenMenu(key)}
                >
                  <NavItem
                    label={label}
                    isActive={openMenu === key}
                    onClick={() =>
                      setOpenMenu((current) => (current === key ? null : key))
                    }
                  />
                </li>
              ))}
            </ul>

            {/* Right-hand cluster */}
            <div className="ml-auto flex items-center gap-3">
              <SearchBar />
              <AccessibilityMenu />

              <button
                type="button"
                className="hidden sm:flex items-center gap-1 text-md font-medium text-zinc-700 hover:text-emerald-800 px-1.5 py-1 rounded-md hover:bg-zinc-100"
              >
                EN
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              <button
                type="button"
                aria-label="Profile"
                className="p-1 rounded-full text-emerald-800 hover:bg-zinc-100"
              >
                <CircleUserRound className="h-7 w-7" />
              </button>
            </div>
          </nav>

          {/* Mega menu panels — render only the one that's open. Each panel
              sits with zero gap under the nav row (see MegaMenuWrapper) so the
              pointer never crosses "dead" space while moving into the menu. */}
          {openMenu === "about" && <AboutUsMenu />}
          {openMenu === "employee" && <EmployeeConnectMenu />}
          {openMenu === "apps" && <BusinessAppsMenu />}
          {openMenu === "media" && <MediaMenu />}
          {openMenu === "policies" && <PoliciesMenu />}
        </div>
      </header>
    </>
  );
};

export default Navbar;