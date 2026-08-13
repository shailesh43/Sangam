// cards/TrendingTodayCard.tsx
import React from "react";
import type { TrendingArticle } from "../../types";

// Feed real image URLs via `imgUrl` on each item
const TRENDING: TrendingArticle[] = [
  {
    imgUrl: "https://placehold.co/80x80/94a3b8/ffffff?text=<Img/>",
    title: "Tata Power expands solar portfolio by 2GW in Southern Region",
    readTime: "2 mins read",
  },
  {
    imgUrl: "https://placehold.co/80x80/94a3b8/ffffff?text=<Img/>",
    title: "New Cybersecurity Guidelines for remote site engineers",
    readTime: "5 mins read",
  },
  {
    imgUrl: "https://placehold.co/80x80/94a3b8/ffffff?text=<Img/>",
    title: "Sangam 2024: Register for the Annual Leadership Summit",
    readTime: "10 mins read",
  },
];

const TrendingTodayCard: React.FC = () => {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white flex flex-col overflow-hidden">
      <div className="px-6 pt-6 pb-4 bg-slate-50">
        <h3 className="text-lg font-bold text-emerald-800">Trending Today</h3>
      </div>

      <ul className="flex-1 divide-y divide-slate-100 px-6">
        {TRENDING.map((article) => (
          <li key={article.title} className="py-4 flex items-start gap-3">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.imgUrl} alt={article.title} className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-800 leading-snug line-clamp-2">
                {article.title}
              </p>
              <p className="mt-1 text-xs text-slate-400">{article.readTime}</p>
            </div>
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