// BentoSection.tsx
import React from "react";
import PendingTasksCard from "./cards/PendingTasksCard";
import UpcomingEventsCard from "./cards/UpcomingEventsCard";
import EmployeeDirectoryCard from "./cards/EmployeeDirectoryCard";
import TodayAtTPCard from "./cards/TodayAtTPCard";
import TrendingTodayCard from "./cards/TrendingTodayCard";
import BirthdaysCard from "./cards/WorkAnniversariesCard";
import EnergyWorldCard from "./cards/EnergyWorldCard";
import WorkAnniversariesCard from "./cards/WorkAnniversariesCard";

const BentoSection: React.FC = () => {
  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-xl font-bold text-zinc-500 mb-5">Quick Actions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
        <PendingTasksCard />
        <UpcomingEventsCard />
        <EmployeeDirectoryCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <TodayAtTPCard />
        </div>
        <div className="lg:col-span-4">
          <TrendingTodayCard />
        </div>

        <div className="lg:col-span-4">
          <WorkAnniversariesCard />
        </div>
        <div className="lg:col-span-8">
          <EnergyWorldCard />
        </div>
      </div>
    </section>
  );
};

export default BentoSection;