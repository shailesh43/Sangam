// types.ts
// Shared types used across the navbar components.
// types.ts
import type { LucideIcon } from "lucide-react";


export interface HeroSlide {
 /** Feed the real banner image URL here */
 imgUrl: string;
 alt: string;
 ctaLabel: string;
 ctaHref: string;
}

export interface FavoriteItem {
 icon: LucideIcon;
 iconBg: string; // tailwind bg color class for the icon tile
 iconColor: string; // tailwind text color class for the icon
 title: string;
 subtitle: string;
 href: string;
}

export interface PendingTask {
  title: string;
  meta: string; // e.g. "Due Today • Required Compliance"
  icon: LucideIcon;
  iconBg: string; // tailwind bg class for the icon tile
  iconColor: string; // tailwind text color class for the icon
}

export interface UpcomingEvent {
  day: string; // "24"
  month: string; // "OCT"
  title: string;
  time: string;
  location: string;
  person: string;
}

export interface ArticleCard {
  /** Feed the real image URL here */
  imgUrl: string;
  category: string;
  categoryColor: string; // tailwind text color class
  title: string;
  timeAgo: string;
}

export interface TrendingArticle {
  /** Feed the real image URL here */
  imgUrl: string;
  title: string;
  readTime: string;
}

export interface BirthdayPerson {
  name: string;
  role: string;
  initials: string;
  avatarBg: string; // tailwind bg color class for the initials circle
}

export interface FeedTab {
  label: string;
}

export type MenuKey =
  | "about"
  | "employee"
  | "apps"
  | "media"
  | "policies"
  | null;

export interface LinkItem {
  label: string;
  href?: string;
  external?: boolean;
  badge?: string; // e.g. "x3" tag seen next to some Business Apps items
}

export interface LeaderItem {
  name: string;
  title: string;
  /** Placeholder avatar URL — swap for a real employee photo URL */
  avatarUrl?: string;
}

export interface IconLinkItem extends LinkItem {
  icon: React.ComponentType<{ className?: string }>;
}

export interface MediaCardItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
}

export interface PolicyCardItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}