// cards/TodayAtTPCard.tsx
"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import type { ArticleCard, FeedTab } from "../../types";

const TABS: FeedTab[] = [
  { label: "Today@TP" },
  { label: "Latest News" },
  { label: "WattsUp" },
  { label: "Newsletter" },
];

// Feed real image URLs via `imgUrl` on each item
const ARTICLES: ArticleCard[] = [
  {
    imgUrl: "https://placehold.co/400x260/94a3b8/ffffff?text=Image",
    category: "SUSTAINABILITY",
    categoryColor: "text-emerald-700",
    title: "Tata Power commissions 250 MW Solar Project",
    timeAgo: "2h ago",
  },
  {
    imgUrl: "https://placehold.co/400x260/94a3b8/ffffff?text=Image",
    category: "ACHIEVEMENT",
    categoryColor: "text-red-600",
    title: "Our Team Wins National Safety Award",
    timeAgo: "6h ago",
  },
  {
    imgUrl: "https://placehold.co/400x260/94a3b8/ffffff?text=Image",
    category: "BUSINESS",
    categoryColor: "text-blue-600",
    title: "Tata Power Q4 Results Announced",
    timeAgo: "1d ago",
  },
];

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

      {/* Article cards — horizontally scrollable on narrow widths */}
      <div className="relative flex-1">
        <div className="flex gap-4 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-thin">
          {ARTICLES.map((article) => (
            <a
              key={article.title}
              href="#"
              className="w-[220px] shrink-0 group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.imgUrl}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <p className={`mt-3 text-[11px] font-bold tracking-wide ${article.categoryColor}`}>
                {article.category}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-800 leading-snug line-clamp-2">
                {article.title}
              </p>
              <p className="mt-1 text-xs text-slate-400">{article.timeAgo}</p>
            </a>
          ))}
        </div>

        {/* Scroll affordance hint, mirrors the peeking-arrow in the reference */}
        <span className="hidden md:flex absolute right-0 top-[74px] h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 shadow-md text-slate-500 pointer-events-none">
          <ChevronRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
};

export default TodayAtTPCard;