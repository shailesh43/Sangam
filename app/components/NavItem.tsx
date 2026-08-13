// NavItem.tsx
import React from "react";

interface NavItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isActive}
      className={`relative px-1 py-2 text-[16px] font-medium hover:cursor-pointer transition-colors ${
        isActive
          ? "text-emerald-800"
          : "text-zinc-500 hover:text-emarald-600"
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-emerald-800 transition-opacity ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
};

export default NavItem;
