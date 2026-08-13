// SearchBar.tsx
import React from "react";
import { Search } from "lucide-react";

const SearchBar: React.FC = () => {
  return (
    <div className="hidden md:flex items-center gap-2 w-full max-w-xs rounded-full bg-zinc-100/80 border border-zinc-200 px-3.5 py-2 text-zinc-500 focus-within:ring-2 focus-within:ring-emerald-700/30 transition-shadow">
      <Search className="h-4 w-4 shrink-0" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-transparent text-sm placeholder:text-zinc-400 outline-none"
      />
      <kbd className="hidden lg:inline-flex items-center rounded-md border border-zinc-300 bg-white px-1.5 py-0.5 text-[11px] font-medium text-zinc-400 shrink-0">
        Ctrl+K
      </kbd>
    </div>
  );
};

export default SearchBar;
