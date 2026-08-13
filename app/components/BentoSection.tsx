// BentoSection.tsx
"use client";

import React from "react";
import PendingTasksCard from "./cards/PendingTasksCard";
import UpcomingEventsCard from "./cards/UpcomingEventsCard";
import TodayAtTPCard from "./cards/TodayAtTPCard";
import TrendingTodayCard from "./cards/TrendingTodayCard";
import BirthdaysCard from "./cards/BirthdaysCard";
import EnergyWorldCard from "./cards/EnergyWorldCard";

/**
 * Bento-style dashboard grid: "Quick Actions" heading plus six cards
 * arranged 12-col on desktop, collapsing to a single column on mobile.
 *
 * NOTE on `max-w-8xl`: Tailwind's default scale stops at `max-w-7xl`
 * (80rem). `8xl` isn't a built-in utility, so add it to your
 * tailwind.config.js first:
 *
 *   theme: { extend: { maxWidth: { '8xl': '90rem' } } }
 *
 * Until then this will silently no-op; swap to `max-w-[90rem]` if you'd
 * rather not touch the config.
 */
const BentoSection: React.FC = () => {
  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-xl font-bold text-emerald-800 mb-5">Quick Actions</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Row 1 */}
        <div className="lg:col-span-4">
          <PendingTasksCard />
        </div>
        <div className="lg:col-span-8">
          <UpcomingEventsCard />
        </div>

        {/* Row 2 */}
        <div className="lg:col-span-8">
          <TodayAtTPCard />
        </div>
        <div className="lg:col-span-4">
          <TrendingTodayCard />
        </div>

        {/* Row 3 */}
        <div className="lg:col-span-4">
          <BirthdaysCard />
        </div>
        <div className="lg:col-span-8">
          <EnergyWorldCard />
        </div>
      </div>
    </section>
  );
};

export default BentoSection;