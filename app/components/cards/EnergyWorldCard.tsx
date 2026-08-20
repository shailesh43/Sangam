// cards/EnergyWorldCard.tsx
"use client";

import React, { useState } from "react";
import { Zap, Play, ArrowRight } from "lucide-react";
import type { FeedTab } from "../../types";

const TABS: FeedTab[] = [{ label: "Enerji TV" }, { label: "Enerji Talk" }, { label: "News Letters" }];

interface EnergyWorldCardProps {
  /** Feed the real video thumbnail URL here */
  videoThumbnailUrl?: string;
}

const EnergyWorldCard: React.FC<EnergyWorldCardProps> = ({
  videoThumbnailUrl = "https://placehold.co/640x360/9db3ad/9db3ad?text=+",
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-6 pt-6 pb-4 bg-slate-50 border-b border-slate-200">
        <h3 className="text-lg font-bold text-emerald-800">Energy World</h3>
        <Zap className="h-5 w-5 text-emerald-700" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Tabs */}
        <div className="flex items-center gap-6 border-b border-slate-100 mb-5">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center flex-1">
          {/* Video thumbnail */}
          <button
            type="button"
            aria-label="Play video"
            className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-300 group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={videoThumbnailUrl}
              alt="Video thumbnail"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white text-white group-hover:scale-105 transition-transform">
                <Play className="h-6 w-6 fill-white ml-0.5" />
              </span>
            </span>
          </button>

          {/* Copy */}
          <div>
            <p className="font-semibold text-slate-800">Mahseer Special</p>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Episode 50: A live look at our conservation efforts.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:underline"
            >
              Watch Video
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyWorldCard;