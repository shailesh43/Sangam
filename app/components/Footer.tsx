// Footer.tsx
import React from "react";
import { Globe, Share2, Rss } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

// Each item carries its own href — update these to your real routes.
const COLUMNS: FooterColumn[] = [
  {
    heading: "WHO WE ARE",
    links: [
      { label: "Our legacy", href: "/who-we-are/legacy" },
      { label: "Our story", href: "/who-we-are/story" },
      { label: "Our vision", href: "/who-we-are/vision" },
      { label: "Our leadership", href: "/who-we-are/leadership" },
      { label: "Company resource center", href: "/who-we-are/resource-center" },
    ],
  },
  {
    heading: "WHAT WE DO",
    links: [
      { label: "EZ CHARGE", href: "/what-we-do/ez-charge" },
      { label: "Solar rooftop", href: "/what-we-do/solar-rooftop" },
      { label: "Energy solutions", href: "/what-we-do/energy-solutions" },
      { label: "Distribution", href: "/what-we-do/distribution" },
      { label: "Transmission", href: "/what-we-do/transmission" },
    ],
  },
  {
    heading: "PEOPLE",
    links: [
      { label: "People", href: "/people" },
      { label: "DEI", href: "/people/dei" },
      { label: "Career compass", href: "/people/career-compass" },
    ],
    // PEOPLE column also carries a second, separately-headed group below it
  },
];

// Rendered as its own sub-section under the PEOPLE column, matching the screenshot
const INVESTORS: FooterColumn = {
  heading: "INVESTORS",
  links: [
    { label: "Investor hub", href: "/investors/hub" },
    { label: "Corporate governance", href: "/investors/corporate-governance" },
  ],
};

const OTHER_ESSENTIAL_LINKS: FooterColumn = {
  heading: "OTHER ESSENTIAL LINKS",
  links: [
    { label: "Innovation hub", href: "/innovation-hub" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Regulatory", href: "/regulatory" },
    { label: "Blogs", href: "/blogs" },
    { label: "Media kit", href: "/media-kit" },
  ],
};

const SOCIAL_LINKS = [
  { icon: Globe, href: "https://www.tatapower.com", label: "Website" },
  { icon: Share2, href: "#", label: "Share" },
  { icon: Rss, href: "#", label: "RSS feed" },
];

const BOTTOM_LINKS: FooterLink[] = [
  { label: "Sitemap", href: "/sitemap" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Policies", href: "/policies" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f2e28] text-white">
      <div className="max-w-8xl mx-auto px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-extrabold tracking-tight">SANGAM</h2>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed max-w-[220px]">
            One Workplace. One Community. Infinite Possibilities.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* WHO WE ARE */}
        <FooterColumnBlock column={COLUMNS[0]} />

        {/* WHAT WE DO */}
        <FooterColumnBlock column={COLUMNS[1]} />

        {/* PEOPLE + INVESTORS stacked in one column */}
        <div>
          <FooterColumnBlock column={COLUMNS[2]} />
          <div className="mt-8">
            <FooterColumnBlock column={INVESTORS} />
          </div>
        </div>

        {/* OTHER ESSENTIAL LINKS */}
        <FooterColumnBlock column={OTHER_ESSENTIAL_LINKS} />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-300">
          <p>© Copyright 2026 Tata Power. All Rights Reserved</p>
          <ul className="flex items-center gap-6">
            {BOTTOM_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

const FooterColumnBlock: React.FC<{ column: FooterColumn }> = ({ column }) => (
  <div>
    <h3 className="text-sm font-bold tracking-wide">{column.heading}</h3>
    <ul className="mt-4 space-y-3">
      {column.links.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;