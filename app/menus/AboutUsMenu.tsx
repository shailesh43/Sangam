// menus/AboutUsMenu.tsx
import React from "react";
import { ArrowUpRight } from "lucide-react";
import MegaMenuWrapper from "./MegaMenuWrapper";
import type { LeaderItem, LinkItem } from "../types";

const OUR_MENUS: LinkItem[] = [
  { label: "My Tata Power" },
  { label: "Our Vision" },
  { label: "Our Story" },
  { label: "Our Legacy" },
  { label: "Our Leadership" },
];

const CLUSTERS: LinkItem[] = [
  { label: "Generation" },
  { label: "T&D" },
  { label: "Corporate functions" },
  { label: "Renewables" },
];

// Swap avatarUrl for a real employee photo URL — placeholder used for now
const LEADERS: LeaderItem[] = [
  {
    name: "Praveen Sinha",
    title: "CEO & Managing Director",
    avatarUrl: "https://placehold.co/64x64/e2e8f0/94a3b8?text=%20",
  },
  {
    name: "Sanjeev Mehra",
    title: "Chief Financial Officer",
    avatarUrl: "https://placehold.co/64x64/e2e8f0/94a3b8?text=%20",
  },
  {
    name: "Dr. Ganesh Srinivasan",
    title: "Chief Strategy Officer",
    avatarUrl: "https://placehold.co/64x64/e2e8f0/94a3b8?text=%20",
  },
  {
    name: "Anjali Singh",
    title: "Head of Sustainability",
    avatarUrl: "https://placehold.co/64x64/e2e8f0/94a3b8?text=%20",
  },
  {
    name: "N. Chandrasekaran",
    title: "Chairman",
    avatarUrl: "https://placehold.co/64x64/e2e8f0/94a3b8?text=%20",
  },
];

const AboutUsMenu: React.FC = () => {
  return (
    <MegaMenuWrapper title="About Us">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* My Tata Power */}
        <div>
          <ul className="space-y-3">
            {OUR_MENUS.map((item) => (
              <li key={item.label}>
                <a href={item.href ?? "#"} className="text-slate-700 hover:text-emerald-800 text-md">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-1 text-sm text-slate-500 hover:text-emerald-800"
          >
            Company Resource Center
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Clusters */}
        <div>
          <h3 className="text-emerald-800 font-semibold text-lg border-b border-slate-100 pb-2 mb-3">
            Clusters
          </h3>
          <ul className="space-y-3">
            {CLUSTERS.map((item) => (
              <li key={item.label}>
                <a href={item.href ?? "#"} className="text-slate-700 hover:text-emerald-800 text-sm">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Leaders */}
        <div>
          <h3 className="text-emerald-800 font-semibold text-lg border-b border-slate-100 pb-2 mb-3">
            Our Leaders
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            {LEADERS.map((leader) => (
              <div key={leader.name} className="flex items-center gap-3">
                {/* Placeholder avatar — replace avatarUrl with the real photo */}
                <img
                  src={leader.avatarUrl}
                  alt={leader.name}
                  className="h-10 w-10 rounded-full object-cover border border-slate-200 shrink-0"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-800 leading-tight">
                    {leader.name}
                  </p>
                  <p className="text-xs text-slate-500 leading-tight">
                    {leader.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MegaMenuWrapper>
  );
};

export default AboutUsMenu;