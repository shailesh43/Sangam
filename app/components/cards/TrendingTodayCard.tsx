// cards/TrendingTodayCard.tsx
import React from "react";
import type { TrendingArticle } from "../../types";

// Feed real image URLs via `imgUrl` on each item
const TRENDING = [
  {
    title: "Tata Power announces new renewable energy initiative",
    category: "Company News",
    readTime: "3 min read",
  },
  {
    title: "New employee benefits and wellness programs announced",
    category: "HR",
    readTime: "4 min read",
  },
  {
    title: "Sangam brings a refreshed experience for employees",
    category: "Sangam",
    readTime: "2 min read",
  },
];

const TrendingTodayCard: React.FC = () => {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-6 pt-6 pb-4 bg-slate-50 border-b border-slate-200">
        <h3 className="text-lg font-bold text-emerald-800">
          Trending Today
        </h3>
      </div>

      <ul className="flex-1 divide-y divide-slate-100 px-6">
        {TRENDING.map((article) => (
          <li
            key={article.title}
            className="py-4 flex items-center gap-4"
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-slate-800 leading-snug line-clamp-2">
                {article.title}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {article.readTime}
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
              {article.category}
            </span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="border-t border-slate-100 py-3.5 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
      >
        View All Articles
      </button>
    </div>
  );
};
export default TrendingTodayCard;