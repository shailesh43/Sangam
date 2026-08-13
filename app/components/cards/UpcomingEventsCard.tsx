// cards/UpcomingEventsCard.tsx
import React from "react";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import type { UpcomingEvent } from "../../types";

const EVENTS: UpcomingEvent[] = [
  {
    day: "24",
    month: "OCT",
    title: "Townhall Q4",
    time: "10:00 AM - 11:30 AM",
    location: "Main Hall / Zoom",
    person: "Speaker: Praveen Sinha (CEO)",
  },
  {
    day: "26",
    month: "OCT",
    title: "Tech Expo 2024",
    time: "09:00 AM - 05:00 PM",
    location: "Innovation Hub",
    person: "Speaker: Dr. Ganesh Srinivasan",
  },
];

const UpcomingEventsCard: React.FC = () => {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-emerald-800">Upcoming Events</h3>
        <a
          href="#"
          className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-emerald-800"
        >
          View Calendar
          <Calendar className="h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
        {EVENTS.map((event) => (
          <div key={event.title} className="rounded-xl bg-emerald-50/70 p-5 flex gap-4">
            <div className="shrink-0 flex flex-col items-center justify-center rounded-lg bg-white border border-slate-200 h-14 w-14">
              <span className="text-lg font-bold text-slate-800 leading-none">{event.day}</span>
              <span className="text-[10px] font-semibold tracking-wide text-slate-400 mt-1">
                {event.month}
              </span>
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-slate-800">{event.title}</p>
              <div className="mt-2 space-y-1.5 text-xs text-slate-600">
                <p className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                  {event.time}
                </p>
                <p className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                  {event.location}
                </p>
                <p className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                  {event.person}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventsCard;