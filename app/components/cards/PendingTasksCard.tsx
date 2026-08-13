// cards/PendingTasksCard.tsx
import React from "react";
import { AlertTriangle, FileText, SquarePen, ArrowRight } from "lucide-react";
import type { PendingTask } from "../../types";

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
    <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-emerald-800">Pending Tasks</h3>
        <span className="text-xs font-medium text-zinc-500 bg-zinc-100 rounded-full px-3 py-1">
          5 Actions
        </span>
      </div>

      <ul className="space-y-4 flex-1">
        {TASKS.map(({ title, meta, icon: Icon, iconBg, iconColor }) => (
          <li key={title} className="flex items-start gap-3">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
              <Icon className={`h-4.5 w-4.5 ${iconColor}`} />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800">{title}</p>
              <p className="text-xs text-slate-500 mt-0.5">{meta}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-400 shrink-0 mt-1" />
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-5 w-full rounded-xl border border-slate-200 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
      >
        View All Tasks
      </button>
    </div>
  );
};

export default PendingTasksCard;