// cards/EmployeeDirectoryCard.tsx
"use client";

import React, { useState } from "react";
import { Search, MessageSquare, UsersRound } from "lucide-react";

interface Employee {
  name: string;
  role: string;
  status: "Available" | "Busy" | "Away" | "Offline";
  initials: string;
}

const STATUS_DOT: Record<Employee["status"], string> = {
  Available: "bg-emerald-500",
  Busy: "bg-red-500",
  Away: "bg-amber-500",
  Offline: "bg-slate-300",
};

// Swap for your real employee directory / presence data source
const EMPLOYEES: Employee[] = [
  { name: "Anita Desai", role: "Project Manager", status: "Available", initials: "AD" },
  { name: "Vikram Singh", role: "Engineering Lead", status: "Busy", initials: "VS" },
  { name: "Sanjay Mehta", role: "Finance Controller", status: "Away", initials: "SM" },
  { name: "Priya Sharma", role: "UX Designer", status: "Available", initials: "PS" },
  { name: "Rahul Sharma", role: "Project Manager", status: "Offline", initials: "RS" },
];

const TABS = ["Teams", "Conversations"] as const;

// Square widget, same shell as PendingTasksCard/UpcomingEventsCard:
// fixed header, flexible middle (search + people list, Teams-panel style),
// fixed footer tabs.
const EmployeeDirectoryCard: React.FC = () => {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Teams");

  const results = EMPLOYEES.filter((e) =>
    e.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="aspect-square rounded-2xl border border-slate-200 bg-white flex flex-col overflow-hidden">
      <div className="shrink-0 flex items-center justify-between px-6 pt-6 pb-4 bg-slate-50 border-b border-slate-200">
        <h3 className="text-lg font-bold text-emerald-800">Employee Directory </h3>          
          <UsersRound className="h-4 w-4" />
      </div>

      <div className="flex-1 min-h-0 flex flex-col px-6 py-4">
        {/* Search row */}
        <div className="shrink-0 flex items-center gap-2">
          <div className="flex-1 flex items-center rounded-full border border-slate-200 px-4 py-2.5 text-slate-500">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search Employee..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>
          <button
            type="button"
            aria-label="Search"
            className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>

        {/* People list — mirrors TeamsPanel's contact rows, filtered by query */}
        <ul className="mt-3 flex-1 min-h-0 overflow-y-auto space-y-1">
          {results.map((employee) => (
            <li key={employee.name}>
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-1 py-2 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="relative shrink-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                    {employee.initials}
                  </span>
                  <span
                    className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white ${STATUS_DOT[employee.status]}`}
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-800 truncate">{employee.name}</p>
                  <p className="text-xs text-slate-500 truncate">
                    {employee.status} • {employee.role}
                  </p>
                </div>
                <MessageSquare className="h-4 w-4 shrink-0 text-slate-400" />
              </button>
            </li>
          ))}

          {results.length === 0 && (
            <li className="py-6 text-center text-sm text-slate-400">
              No employees found for &ldquo;{query}&rdquo;
            </li>
          )}
        </ul>
      </div>

      {/* Footer tabs */}
      <div className="shrink-0 flex items-center gap-6 border-t border-slate-100 px-6 py-3.5">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium transition-colors ${
              activeTab === tab ? "text-emerald-800" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDirectoryCard;