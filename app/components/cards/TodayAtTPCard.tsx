// cards/TodayAtTPCard.tsx
"use client";

import React, { useState } from "react";
import { ChevronRight, Mail } from "lucide-react";
import type { ArticleCard, FeedTab } from "../types";

const TABS: FeedTab[] = [
  { label: "Today@TP" },
  { label: "Latest News" },
  { label: "WattsUp" },
  { label: "Newsletter" },
];

// --- Today@TP — image cards, horizontal scroll ---------------------------
// `categoryColor` now carries a full badge class (bg + text) since the
// category is rendered as a rounded pill over the image.
const ARTICLES: ArticleCard[] = [
  {
    imgUrl: "https://placehold.co/400x260/94a3b8/ffffff?text=<img/>",
    category: "SUSTAINABILITY",
    categoryColor: "bg-emerald-50 text-emerald-700",
    title: "Tata Power commissions 250 MW Solar Project",
    timeAgo: "2 hours ago",
  },
  {
    imgUrl: "https://placehold.co/400x260/94a3b8/ffffff?text=<img/>",
    category: "ACHIEVEMENT",
    categoryColor: "bg-red-50 text-red-700",
    title: "Our Team Wins National Safety Award",
    timeAgo: "6 hours ago",
  },
  {
    imgUrl: "https://placehold.co/400x260/94a3b8/ffffff?text=<img/>",
    category: "BUSINESS",
    categoryColor: "bg-blue-50 text-blue-700",
    title: "Tata Power Q4 Results Announced",
    timeAgo: "1 day ago",
  },
];

// --- Latest News — list rows with a small thumbnail ----------------------
interface NewsListItem {
  imgUrl: string;
  category: string;
  categoryColor: string;
  title: string;
  timeAgo: string;
  href: string;
}

const LATEST_NEWS: NewsListItem[] = [
  {
    imgUrl: "https://placehold.co/120x120/94a3b8/ffffff?text=<img/>",
    category: "SUSTAINABILITY",
    categoryColor: "bg-emerald-50 text-emerald-700",
    title: "Tata Power partners with IIT Bombay for clean-energy R&D",
    timeAgo: "3 days ago",
    href: "#",
  },
  {
    imgUrl: "https://placehold.co/120x120/94a3b8/ffffff?text=<img/>",
    category: "POLICY",
    categoryColor: "bg-amber-50 text-amber-700",
    title: "New Travel Reimbursement Policy effective from November",
    timeAgo: "1 week ago",
    href: "#",
  },
  {
    imgUrl: "https://placehold.co/120x120/94a3b8/ffffff?text=<img/>",
    category: "SAFETY",
    categoryColor: "bg-red-50 text-red-700",
    title: "Mandatory safety refresher rolled out for site engineers",
    timeAgo: "2 weeks ago",
    href: "#",
  },
];

// --- WattsUp — compact text-only list, no thumbnails ----------------------
interface WattsUpItem {
  category: string;
  categoryColor: string;
  title: string;
  timeAgo: string;
  href: string;
}

const WATTSUP: WattsUpItem[] = [
  {
    category: "TECH",
    categoryColor: "bg-sky-50 text-sky-700",
    title: "New iService ticketing flow goes live next Monday",
    timeAgo: "5 hours ago",
    href: "#",
  },
  {
    category: "HR",
    categoryColor: "bg-orange-50 text-orange-700",
    title: "Vantage Reward Points catalogue has been refreshed",
    timeAgo: "1 day ago",
    href: "#",
  },
  {
    category: "FACILITIES",
    categoryColor: "bg-teal-50 text-teal-700",
    title: "Chembur cafeteria menu updated for the winter season",
    timeAgo: "4 days ago",
    href: "#",
  },
  {
    category: "IT",
    categoryColor: "bg-blue-50 text-blue-700",
    title: "Scheduled system maintenance window this weekend",
    timeAgo: "1 week ago",
    href: "#",
  },
  {
    category: "EVENTS",
    categoryColor: "bg-pink-50 text-pink-700",
    title: "Photo booth returns for the Diwali office celebrations",
    timeAgo: "2 weeks ago",
    href: "#",
  },
];

// --- Newsletter — icon rows, formal editions ------------------------------
interface NewsletterItem {
  title: string;
  description: string;
  timeAgo: string;
  href: string;
}

const NEWSLETTERS: NewsletterItem[] = [
  {
    title: "Tata Power Digest — November 2024 Edition",
    description: "Monthly roundup of company news and announcements",
    timeAgo: "2 weeks ago",
    href: "#",
  },
  {
    title: "WattsUp Quarterly — Q3 FY25",
    description: "Quarterly performance and culture highlights",
    timeAgo: "1 month ago",
    href: "#",
  },
  {
    title: "Sustainability Chronicle — Issue 12",
    description: "ESG milestones and green-energy initiatives",
    timeAgo: "2 months ago",
    href: "#",
  },
];

const CategoryBadge: React.FC<{ label: string; className: string }> = ({ label, className }) => (
  <span
    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${className}`}
  >
    {label}
  </span>
);

const TodayAtTPCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 flex flex-col">
      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-slate-100 mb-5 overflow-x-auto">
        {TABS.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => setActiveTab(i)}
            className={`relative pb-3 text-sm font-semibold whitespace-nowrap transition-colors ${
              activeTab === i ? "text-emerald-800" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {tab.label}
            {activeTab === i && (
              <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-emerald-800 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Today@TP — card grid, horizontal scroll */}
      {activeTab === 0 && (
        <div className="relative flex-1">
          <div className="flex gap-4 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-thin">
            {ARTICLES.map((article) => (
              <a key={article.title} href="#" className="w-[220px] shrink-0 group">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.imgUrl}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2">
                    <CategoryBadge label={article.category} className={`${article.categoryColor} backdrop-blur bg-white/90`} />
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-800 leading-snug line-clamp-2">
                  {article.title}
                </p>
                <p className="mt-1 text-xs text-slate-400">{article.timeAgo}</p>
              </a>
            ))}
          </div>

          {/* Scroll affordance hint */}
          <span className="hidden md:flex absolute right-0 top-[74px] h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 shadow-md text-slate-500 pointer-events-none">
            <ChevronRight className="h-4 w-4" />
          </span>
        </div>
      )}

      {/* Latest News — list rows with a small thumbnail */}
      {activeTab === 1 && (
        <ul className="flex-1 min-h-0 overflow-y-auto divide-y divide-slate-100">
          {LATEST_NEWS.map((item) => (
            <li key={item.title}>
              <a href={item.href} className="flex items-center gap-4 py-3.5 group">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.imgUrl} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <CategoryBadge label={item.category} className={item.categoryColor} />
                  <p className="mt-1.5 text-sm font-semibold text-slate-800 leading-snug line-clamp-2 group-hover:text-emerald-800">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{item.timeAgo}</p>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-slate-300 group-hover:text-slate-500" />
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* WattsUp — compact text-only list */}
      {activeTab === 2 && (
        <ul className="flex-1 min-h-0 overflow-y-auto divide-y divide-slate-100">
          {WATTSUP.map((item) => (
            <li key={item.title}>
              <a href={item.href} className="flex items-center gap-4 py-3.5 group">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <CategoryBadge label={item.category} className={item.categoryColor} />
                    <span className="text-xs text-slate-400">{item.timeAgo}</span>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-slate-800 leading-snug group-hover:text-emerald-800">
                    {item.title}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-slate-300 group-hover:text-slate-500" />
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Newsletter — icon rows, formal editions */}
      {activeTab === 3 && (
        <ul className="flex-1 min-h-0 overflow-y-auto divide-y divide-slate-100">
          {NEWSLETTERS.map((item) => (
            <li key={item.title}>
              <a href={item.href} className="flex items-center gap-4 py-4 group">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-800 leading-snug group-hover:text-emerald-800">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{item.description}</p>
                  <p className="mt-1 text-xs text-slate-400">{item.timeAgo}</p>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-slate-300 group-hover:text-slate-500" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodayAtTPCard;