// HeroFavoritesSection.tsx
import React from "react";
import HeroCarousel from "./HeroCarousel";
import FavoritesCard from "./cards/FavoritesCard";

/**
 * Hero carousel + Favorites, side by side. `items-stretch` makes the
 * Favorites card match the carousel's height exactly (rather than sitting
 * short with dead space beneath it), and `mt-auto` on the "Add More"
 * button inside FavoritesCard keeps it flush at the bottom of whatever
 * height that ends up being.
 */
const HeroFavoritesSection: React.FC = () => {
  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-6">
        <div className="lg:flex-1 lg:min-w-0">
          <HeroCarousel />  
        </div>
        <div className="lg:w-[360px] lg:shrink-0">
          <FavoritesCard />
        </div>
      </div>
    </section>
  );
};

export default HeroFavoritesSection;