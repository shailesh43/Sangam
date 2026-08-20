// cards/PendingTasksCard.tsx
import React from "react";
import { AlertTriangle, FileText, SquarePen, ArrowRight } from "lucide-react";
import type { PendingTask } from "../types";

const TASKS: PendingTask[] = [
  {
    title: "Ethics Training",
    meta: "Due Today • Required Compliance",
    icon: AlertTriangle,
    iconBg: "bg-red-300",
    iconColor: "text-white",
  },
  {
    title: "Expense Report",
    meta: "Draft • Project Sangam",
    icon: FileText,
    iconBg: "bg-zinc-100",
    iconColor: "text-slate-500",
  },
  {
    title: "Performance Review",
    meta: "Pending Signature",
    icon: SquarePen,
    iconBg: "bg-zinc-100",
    iconColor: "text-slate-500",
  },
];

const PendingTasksCard: React.FC = () => {
  return (
    <div className="aspect-square rounded-2xl border border-slate-200 bg-white flex flex-col overflow-hidden">
      <div className="shrink-0 flex items-center justify-between px-6 pt-6 pb-4 bg-slate-50 border-b border-slate-200">
        <h3 className="text-lg font-bold text-emerald-800">Pending Tasks</h3>
        <span className="text-xs font-medium text-zinc-500 bg-zinc-100 rounded-full px-3 py-1">
          5 Actions
        </span>
      </div>

      {/* min-h-0 lets this scroll internally instead of breaking the square */}
      <ul className="flex-1 min-h-0 overflow-y-auto space-y-6 px-6 py-5">
        {TASKS.map(({ title, meta, icon: Icon, iconBg, iconColor }) => (
          <li key={title} className="flex items-start gap-4">
            <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
              <Icon className={`h-6 w-6 ${iconColor}`} />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-base font-semibold text-slate-800">{title}</p>
              <p className="text-sm text-slate-500 mt-1">{meta}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-slate-400 shrink-0 mt-1.5" />
          </li>
        ))}
      </ul>

      <div className="shrink-0 px-6 pb-6">
        <button
          type="button"
          className="w-full rounded-xl border border-slate-200 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
        >
          View All Tasks
        </button>
      </div>
    </div>
  );
};

export default PendingTasksCard;