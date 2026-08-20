// cards/WorkAnniversariesCard.tsx
import React from "react";
import { Award, MessageSquareText } from "lucide-react";
import type { BirthdayPerson } from "../../types";

interface AnniversaryPerson extends BirthdayPerson {
  years: number;
}

const PEOPLE: AnniversaryPerson[] = [
  {
    name: "Parth Sharma",
    role: "Project Manager",
    initials: "RS",
    avatarBg: "bg-emerald-100",
    years: 10,
  },
  {
    name: "Ananya Patel",
    role: "Lead Engineer",
    initials: "AP",
    avatarBg: "bg-emerald-100",
    years: 7,
  },
  {
    name: "Vikram Singh",
    role: "Senior Engineer",
    initials: "VS",
    avatarBg: "bg-emerald-100",
    years: 5,
  },
  {
    name: "Priya Sharma",
    role: "UX Designer",
    initials: "PS",
    avatarBg: "bg-emerald-100",
    years: 3,
  },
];

const WorkAnniversariesCard: React.FC = () => {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-6 pt-6 pb-4 bg-slate-50 border-b border-slate-200">
        <h3 className="text-lg font-bold text-emerald-800">
          Work Anniversaries
        </h3>
        <Award className="h-5 w-5 text-slate-500" />
      </div>

      <ul className="flex-1 divide-y divide-slate-10 py-3 px-6">
        {PEOPLE.map((person) => (
          <li
            key={person.name}
            className="py-3.5 flex items-center gap-3"
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-emerald-700 ${person.avatarBg}`}
            >
              {person.initials}
            </span>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800">
                {person.name}
              </p>
              <p className="text-xs text-slate-500">
                {person.role}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-emerald-700">
                  {person.years}
                  {person.years === 1 ? " Year" : " Years"}
                </p>
              </div>

              <button
                type="button"
                aria-label={`Message ${person.name}`}
                className="text-slate-400 hover:text-emerald-700 transition-colors"
              >
                <MessageSquareText className="h-4.5 w-4.5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkAnniversariesCard;