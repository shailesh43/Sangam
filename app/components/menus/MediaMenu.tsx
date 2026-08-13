// menus/MediaMenu.tsx
import React from "react";
import {
  FileText,
  Paperclip,
  Images,
  UserCircle2,
  Rss,
  Megaphone,
  Share2,
} from "lucide-react";
import MegaMenuWrapper from "./MegaMenuWrapper";
import type { MediaCardItem, IconLinkItem } from "../types";

const CARDS: MediaCardItem[] = [
  {
    icon: FileText,
    title: "Our Updates & Announcement",
    subtitle: "Latest internal communications",
  },
  {
    icon: Paperclip,
    title: "Media Releases",
    subtitle: "Media release from tata power plants",
  },
  {
    icon: Images,
    title: "Media Kit",
    subtitle: "Logos, photos, and branding",
  },
];

const MORE_CONTENT: IconLinkItem[] = [
  { label: "Blogs", icon: Rss },
  { label: "Social Content", icon: Share2 },
  { label: "Leader Comms", icon: Megaphone },
  { label: "MD's Corner", icon: UserCircle2 },
];

const MediaMenu: React.FC = () => {
  return (
    <MegaMenuWrapper title="Media">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {CARDS.map(({ icon: Icon, title, subtitle }) => (
          <a
            href="#"
            key={title}
            className="rounded-xl bg-zinc-50 hover:bg-zinc-100 transition-colors p-4 flex flex-col gap-4"
          >
            <div className="bg-zinc-200/75 rounded-xl p-12 w-full flex items-center justify-center"><Icon className="h-10 w-10 text-zinc-500" /></div>
            <div>
              <p className="font-semibold text-md text-zinc-800">{title}</p>
              <p className="text-sm text-zinc-500 mt-1">{subtitle}</p>
            </div>
          </a>
        ))}

        <div className="rounded-xl p-6">
          <h3 className="text-emerald-800 text-lg font-semibold border-b border-zinc-200 pb-2 mb-3">
            More Content
          </h3>
          <ul className="space-y-3">
            {MORE_CONTENT.map(({ label, icon: Icon }) => (
              <li key={label}>
                <a
                  href="#"
                  className="flex items-center gap-2.5 text-md text-zinc-700 hover:text-emerald-800"
                >
                  <Icon className="h-4 w-4 text-zinc-500" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MegaMenuWrapper>
  );
};

export default MediaMenu;