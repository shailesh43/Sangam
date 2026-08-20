// TeamsPanel.tsx
"use client";

import React, { useState } from "react";
import {
  X,
  Search,
  Bold,
  Paperclip,
  SendHorizontal,
} from "lucide-react";

interface Contact {
  name: string;
  role: string;
  status: "Available" | "Busy" | "Away";
  detail: string; // e.g. "Project Manager" or "10m ago"
  initials?: string; // if present, render initials instead of the generic icon
  highlighted?: boolean;
  messageCount?: number;
}

const STATUS_DOT: Record<Contact["status"], string> = {
  Available: "bg-emerald-500",
  Busy: "bg-red-500",
  Away: "bg-amber-500",
};

// Swap for your real directory/presence data source
const CONTACTS: Contact[] = [
  {
    name: "Anita Desai",
    role: "Project Manager",
    status: "Available",
    detail: "Project Manager",
  },
  {
    name: "Vikram Singh",
    role: "Engineering Lead",
    status: "Busy",
    detail: "Engineering Lead",
  },
  {
    name: "Sanjay Mehta",
    role: "Away",
    status: "Away",
    detail: "10m ago",
    initials: "SM",
    highlighted: true,
    messageCount: 3,
  },
];

interface TeamsPanelProps {
  onClose: () => void;
}

const TeamsPanel: React.FC<TeamsPanelProps> = ({ onClose }) => {
  const [query, setQuery] = useState("");

  const visibleContacts = CONTACTS.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-label="Microsoft Teams"
      className="flex h-[560px] w-[380px] max-w-[92vw] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl"
    >
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50 px-4 py-3.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-200">
          <img
            src="/assets/teams-logo.png"
            alt="Microsoft Teams"
            className="h-5 w-5 object-contain"
          />
        </span>

        <h2 className="text-base font-semibold text-zinc-800">
          Microsoft Teams
        </h2>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="ml-auto rounded-md p-1 text-zinc-500 hover:bg-zinc-100"
        >
          <X className="h-4.5 w-4.5" />
        </button>
      </div>

      {/* Search */}
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-zinc-500">
          <Search className="h-4 w-4 shrink-0" />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search people..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
          />
        </div>
      </div>

      {/* Contacts */}
      <div className="flex-1 space-y-2 overflow-y-auto px-4 py-4">
        {visibleContacts.map((contact) => (
          <button
            key={contact.name}
            type="button"
            className={`flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition-colors hover:bg-zinc-50 ${
              contact.highlighted ? "bg-zinc-50 border border-zinc-300" : ""
            }`}
          >
            {/* Avatar */}
            <span className="relative shrink-0">
              {contact.initials ? (
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                  {contact.initials}
                </span>
              ) : (
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-400">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5Z" />
                  </svg>
                </span>
              )}

              <span
                className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white ${
                  STATUS_DOT[contact.status]
                }`}
              />
            </span>

            {/* Contact information */}
            <div className="min-w-0 flex-1">
              <p
                className={`truncate text-sm text-zinc-800 ${
                  contact.highlighted ? "font-bold" : "font-semibold"
                }`}
              >
                {contact.name}
              </p>

              <p
                className={`truncate text-xs ${
                  contact.highlighted
                    ? "font-bold text-zinc-600"
                    : "font-normal text-zinc-500"
                }`}
              >
                {contact.status} • {contact.detail}
              </p>
            </div>

            {/* Message counter */}
            {contact.highlighted &&
              contact.messageCount !== undefined &&
              contact.messageCount > 0 && (
                <span className="shrink-0 text-sm font-semibold text-blue-700 bg-blue-200 px-1.5 rounded-full">
                  {contact.messageCount}
                </span>
              )}
          </button>
        ))}
      </div>

      {/* Message composer */}
      <div className="border-t border-zinc-100 px-4 py-3.5">
        <div className="flex items-center gap-2 rounded-full border border-zinc-200 px-3.5 py-2.5">
          <input
            type="text"
            placeholder="Type a new message"
            className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
          />

          <button
            type="button"
            aria-label="Bold"
            className="shrink-0 text-zinc-500 hover:text-zinc-700"
          >
            <Bold className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Attach file"
            className="shrink-0 text-zinc-500 hover:text-zinc-700"
          >
            <Paperclip className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Send"
            className="flex shrink-0 items-center justify-center rounded-full bg-blue-500 p-2 text-zinc-50 hover:bg-blue-400"
          >
            <SendHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamsPanel;