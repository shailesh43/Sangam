// menus/EmployeeConnectMenu.tsx
import React from "react";
import MegaMenuWrapper from "./MegaMenuWrapper";
import type { LinkItem } from "../types";

const CORE_SERVICES: LinkItem[] = [
  { label: "HRONE" },
  { label: "Trust Management (PF & SAF)" },
  { label: "Hospital Management System" },
  { label: "Housing Perk Calculator" },
  { label: "Mediclaim" },
];

const TRAVEL_LOGISTICS: LinkItem[] = [
  { label: "OLA Approval" },
  { label: "Mobile Reimbursement" },
  { label: "Guest House Reckoner" },
  { label: "Self Booking Travel & Expenses" },
];

const ENGAGEMENT: LinkItem[] = [
  { label: "Climate Crew" },
  { label: "Arpan Volunteering" },
];

const HELP_SUPPORT: LinkItem[] = [
  { label: "iService - IT Support" },
  { label: "Suraksha - Safety Portal" },
  { label: "Connect To Solve" },
  { label: "Visitor Gate Pass" },
  { label: "Access Control" },
];

const CAREER_GROWTH: LinkItem[] = [
  { label: "Performance Management" },
  { label: "Vantage Reward Points" },
  { label: "Manager Connect" },
  { label: "Internal Referrals" },
  { label: "Learning Management (LMS)" },
];

const LinkList: React.FC<{ items: LinkItem[] }> = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item.label}>
        <a href={item.href ?? "#"} className="text-slate-700 hover:text-emerald-800 text-sm">
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);

const EmployeeConnectMenu: React.FC = () => {
  return (
    <MegaMenuWrapper title="Employee Connect">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Core Services */}
        <div>
          <h3 className="text-emerald-800 font-semibold text-lg border-b border-slate-100 pb-2 mb-3">
            Core Services
          </h3>
          <LinkList items={CORE_SERVICES} />
        </div>

        {/* Travel & Logistics + Engagement */}
        <div>
          <h3 className="text-emerald-800 font-semibold text-lg border-b border-slate-100 pb-2 mb-3">
            Travel & Logistics
          </h3>
          <LinkList items={TRAVEL_LOGISTICS} />

          <h3 className="text-emerald-800 font-semibold text-lg border-b border-slate-100 pb-2 mb-3 mt-6">
            Engagement
          </h3>
          <LinkList items={ENGAGEMENT} />
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="text-emerald-800 font-semibold text-lg border-b border-slate-100 pb-2 mb-3">
            Help & Support
          </h3>
          <LinkList items={HELP_SUPPORT} />
        </div>

        {/* Career & Growth */}
        <div>
          <h3 className="text-emerald-800 font-semibold text-lg border-b border-slate-100 pb-2 mb-3">
            Career & Growth
          </h3>
          <LinkList items={CAREER_GROWTH} />
        </div>
      </div>
    </MegaMenuWrapper>
  );
};

export default EmployeeConnectMenu;