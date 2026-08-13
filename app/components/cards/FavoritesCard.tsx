// FavoritesCard.tsx
import React from "react";
import { Star, Fingerprint, Headphones, Users, Wallet, Plus } from "lucide-react";
import type { FavoriteItem } from "./types";

const FAVORITES: FavoriteItem[] = [
  {
    icon: Fingerprint,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Emuster",
    subtitle: "MARK ATTENDANCE",
    href: "#",
  },
  {
    icon: Headphones,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    title: "iService",
    subtitle: "SERVICE REQUEST",
    href: "#",
  },
  {
    icon: Users,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    title: "HRONE",
    subtitle: "EMPLOYEE INFO",
    href: "#",
  },
  {
    icon: Wallet,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Benefits",
    subtitle: "EMPLOYEE BENEFITS",
    href: "#",
  },
];

const FavoritesCard: React.FC = () => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-emerald-800">Favorites</h3>
        <button type="button" aria-label="Toggle favorites" className="text-slate-400 hover:text-slate-600">
          <Star className="h-5 w-5" />
        </button>
      </div>

      <ul className="space-y-1">
        {FAVORITES.map(({ icon: Icon, iconBg, iconColor, title, subtitle, href }) => (
          <li key={title}>
            <a
              href={href}
              className="flex items-center gap-3 rounded-xl px-1 py-2.5 hover:bg-slate-50 transition-colors"
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
                <Icon className={`h-5 w-5 ${iconColor}`} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-800">{title}</p>
                <p className="text-[11px] font-medium tracking-wide text-slate-400">{subtitle}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-auto flex items-center justify-center gap-1.5 rounded-xl border border-dashed border-slate-300 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
      >
        <Plus className="h-4 w-4" />
        Add More
      </button>
    </div>
  );
};

export default FavoritesCard;