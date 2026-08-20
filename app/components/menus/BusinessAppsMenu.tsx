// menus/BusinessAppsMenu.tsx
import React from "react";
import {
  Scale,
  CheckCircle2,
  ShieldCheck,
  Landmark,
  UserSearch,
  BarChart3,
  MapPin,
  Building2,
  BookOpen,
  Home,
  FileText,
  Droplet,
  Wrench,
  FileOutput,
  Database,
  Store,
  FileSignature,
  FileTextIcon,
  ArrowUpRight,
} from "lucide-react";
import MegaMenuWrapper from "./MegaMenuWrapper";
import type { IconLinkItem } from "../types"
const RISK_COMPLIANCE: IconLinkItem[] = [
  { label: "Internal Audit (Auditors)", icon: Scale },
  { label: "IATS 1.0 & 2.0", icon: CheckCircle2 },
  { label: "RMS 2.0 - Risk Management", icon: ShieldCheck },
  { label: "Legatrix - Statutory Compliance", icon: Landmark },
  { label: "Designated Person Identification", icon: UserSearch },
  { label: "IRMS (Knowledge & Web)", icon: BarChart3 },
];

const CORE_APPS: IconLinkItem[] = [
  { label: "Pulse Check", icon: FileTextIcon },
  { label: "Office Locator", icon: MapPin },
  { label: "Corp Affairs", icon: Building2 },
  { label: "Gyanmanthan", icon: BookOpen },
  { label: "e-housing", icon: Home },
  { label: "eLRMS", icon: FileText },
  { label: "MIS Hydro", icon: Droplet },
];

const OPERATIONS: IconLinkItem[] = [
  { label: "Wrench", icon: Wrench },
  { label: "E log", icon: FileOutput },
  { label: "MDG", icon: Database },
  { label: "Vendor Portal", icon: Store },
  { label: "Tender Handling", icon: FileSignature },
];

const IconLinkList: React.FC<{ items: IconLinkItem[] }> = ({ items }) => (
  <ul className="space-y-3.5">
    {items.map(({ label, icon: Icon, badge }) => (
      <li key={label}>
        <a
          href="#"
          className="flex items-center gap-2.5 text-md text-zinc-700 hover:text-emerald-800"
        >                                       
          <Icon className="h-4 w-4 text-emerald-700 shrink-0" />
          <span>{label}</span>
          {badge && (
            <span className="ml-auto text-[11px] font-medium text-zinc-500 bg-zinc-100 rounded-md px-1.5 py-0.5">
              {badge}
            </span>
          )}
        </a>
      </li>
    ))}
  </ul>
);

const BusinessAppsMenu: React.FC = () => {
  return (
    <MegaMenuWrapper title="Business Apps">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-emerald-800 font-semibold text-lg">
          Business Applications
        </h3>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-md font-medium text-emerald-800 hover:underline"
        >
          View All Apps
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="text-xs font-semibold tracking-wide text-zinc-400 mb-3">
            RISK &amp; COMPLIANCE
          </p>
          <IconLinkList items={RISK_COMPLIANCE} />
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-zinc-400 mb-3">
            CORE APPS
          </p>
          <IconLinkList items={CORE_APPS} />
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-zinc-400 mb-3">
            OPERATIONS
          </p>
          <IconLinkList items={OPERATIONS} />
        </div>
      </div>
    </MegaMenuWrapper>
  );
};

export default BusinessAppsMenu;