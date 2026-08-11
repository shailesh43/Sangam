// menus/PoliciesMenu.tsx
import React from "react";
import { Users, Briefcase, ShieldCheck, ClipboardList, Wallet } from "lucide-react";
import MegaMenuWrapper from "./MegaMenuWrapper";
import type { PolicyCardItem } from "../types";

const CARDS: PolicyCardItem[] = [
  {
    icon: Users,
    title: "HR Policies & Manuals",
    description: "Employee guidelines, conduct, and HR frameworks.",
  },
  {
    icon: Briefcase,
    title: "Corporate Policies",
    description: "Organizational standards and operational protocols.",
  },
  {
    icon: ShieldCheck,
    title: "Information Security",
    description: "Data protection, privacy, and IT security standards.",
  },
  {
    icon: ClipboardList,
    title: "Guide, Handbook & Templates",
    description: "Standardized documents and procedural guides.",
  },
  {
    icon: Wallet,
    title: "Payroll & Trust Management",
    description: "Compensation, benefits, and trust administration.",
  },
];

const PoliciesMenu: React.FC = () => {
  return (
    <MegaMenuWrapper title="Policies and Other Documents">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CARDS.map(({ icon: Icon, title, description }) => (
          <a
            href="#"
            key={title}
            className="rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors p-6"
          >
            <Icon className="h-6 w-6 text-emerald-800 mb-4" />
            <p className="font-semibold text-slate-800">{title}</p>
            <p className="text-sm text-slate-500 mt-1.5">{description}</p>
          </a>
        ))}
      </div>
    </MegaMenuWrapper>
  );
};

export default PoliciesMenu;