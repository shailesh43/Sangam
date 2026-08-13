// cards/BirthdaysCard.tsx
import React from "react";
import { PartyPopper, MessageSquareText } from "lucide-react";
import type { BirthdayPerson } from "../../types";

const PEOPLE: BirthdayPerson[] = [
  { name: "Rahul Sharma", role: "Project Manager", initials: "RS", avatarBg: "bg-emerald-100" },
  { name: "Ananya Patel", role: "Lead Engineer", initials: "AP", avatarBg: "bg-emerald-100" },
  { name: "Vikram Singh", role: "Senior Engineer", initials: "VS", avatarBg: "bg-emerald-100" },
  { name: "Priya Sharma", role: "UX Designer", initials: "PS", avatarBg: "bg-emerald-100" },
];

const BirthdaysCard: React.FC = () => {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-emerald-800">Birthdays</h3>
        <PartyPopper className="h-5 w-5 text-slate-500" />
      </div>

      <ul className="flex-1 divide-y divide-slate-100">
        {PEOPLE.map((person) => (
          <li key={person.name} className="py-3.5 flex items-center gap-3">
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-emerald-700 ${person.avatarBg}`}
            >
              {person.initials}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800">{person.name}</p>
              <p className="text-xs text-slate-500">{person.role}</p>
            </div>
            <button
              type="button"
              aria-label={`Message ${person.name}`}
              className="shrink-0 text-slate-400 hover:text-emerald-700"
            >
              <MessageSquareText className="h-4.5 w-4.5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BirthdaysCard;