// cards/UpcomingEventsCard.tsx
import React from "react";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import type { UpcomingEvent } from "../types";

const EVENTS: UpcomingEvent[] = [
  {
    day: "24",
    month: "OCT",
    title: "GET Induction Program",
    time: "10:00 AM - 11:30 AM",
    location: "Tata Colony Hall, Chembur",
    person: "Praveen Sinha (CEO)",
  },
  {
    day: "08",
    month: "NOV",
    title: "Tech Expo 2024",
    time: "09:00 AM - 05:00 PM",
    location: "Innovation Hub, Powai",
    person: "Dr. Ganesh Srinivasan",
  },
];

// Matches PendingTasksCard's square structure: fixed header, an
// internally-scrolling middle list, fixed footer button. Text content
// bumped up a size from the previous compact pass (titles, meta lines,
// icons, and the date tile all larger) while staying inside the square
// via the scrollable middle.
const UpcomingEventsCard: React.FC = () => {
  return (
    <div className="aspect-square rounded-2xl border border-slate-200 bg-white flex flex-col overflow-hidden">
      <div className="shrink-0 flex items-center justify-between px-6 pt-6 pb-4 bg-slate-50 border-b border-slate-200">
        <h3 className="text-lg font-bold text-emerald-800">Upcoming Events</h3>
        <a
          href="#"
          className="flex items-center gap-1.5 text-sm font-medium underline underline-offset-4 text-slate-600 hover:text-emerald-800"
        >
          View Calendar
          <Calendar className="h-4 w-4" />
        </a>
      </div>

      {/* min-h-0 lets this scroll internally instead of breaking the square */}
      <ul className="flex-1 min-h-0 overflow-y-auto space-y-3 px-6 py-4">
        {EVENTS.map((event) => (
          <li key={event.title} className="flex gap-4 rounded-xl bg-zinc-50 p-4">
            <div className="shrink-0 flex flex-col items-center justify-center rounded-lg bg-white border border-slate-200 h-16 w-16">
              <span className="text-xs font-semibold tracking-wide text-red-400 leading-none">
                {event.month}
              </span>
              <span className="text-xl font-bold text-slate-800 leading-tight">{event.day}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-base font-semibold text-slate-800 truncate">{event.title}</p>
              <div className="mt-1.5 space-y-1 text-sm text-slate-500">
                <p className="flex items-center gap-1.5 truncate">
                  <Clock className="h-4 w-4 shrink-0 text-slate-400" />
                  {event.time}
                </p>
                <p className="flex items-center gap-1.5 truncate">
                  <MapPin className="h-4 w-4 shrink-0 text-slate-400" />
                  {event.location}
                </p>
                <p className="flex items-center gap-1.5 truncate">
                  <User className="h-4 w-4 shrink-0 text-slate-400" />
                  {event.person}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="shrink-0 px-6 pb-6">
        <button
          type="button"
          className="w-full rounded-xl border border-slate-200 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
        >
          View All Events
        </button>
      </div>
    </div>
  );
};

export default UpcomingEventsCard;