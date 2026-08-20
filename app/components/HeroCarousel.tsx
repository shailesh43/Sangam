// HeroCarousel.tsx
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, SquareArrowOutUpRight } from "lucide-react";
import type { HeroSlide } from "../types";

// Feed real banner image URLs via `imgUrl` on each slide
const SLIDES: HeroSlide[] = [
  {
    imgUrl: "https://tatapower.sharepoint.com/_api/v2.0/sharePoint:/sites/Sangam/ImageGallery/CUSTOMER%20TALK-JUNE%202026%20EDITION%20SANGAM%20BANNER.jpg:/driveItem/thumbnails/0/large/content?preferNoRedirect=true",
    alt: "Tata Power sustainability story",
    ctaLabel: "Read Story",
    ctaHref: "#",
  },
  {
    imgUrl: "https://tatapower.sharepoint.com/_api/v2.0/sharePoint:/sites/Sangam/ImageGallery/THE%20JEH%20WAY%20QUIZ%20SANGAM%20BANNER%20POSTER%20(1).jpg:/driveItem/thumbnails/0/large/content?preferNoRedirect=true",
    alt: "Innovation hub launch",
    ctaLabel: "View Article",
    ctaHref: "#",
  },
  {
    imgUrl: "https://tatapower.sharepoint.com/_api/v2.0/sharePoint:/sites/Sangam/ImageGallery/Working%20at%20Height%20Safety%20Sangam%20Banner.jpg:/driveItem/thumbnails/0/large/content?preferNoRedirect=true",
    alt: "Employee wellness program",
    ctaLabel: "Visit Site",
    ctaHref: "#",
  },
];

const AUTOPLAY_INTERVAL_MS = 4000;

const HeroCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex((i + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Auto-repeat: advances every AUTOPLAY_INTERVAL_MS and loops back to the
  // first slide. Pauses while the pointer is over the carousel and resets
  // whenever the slide changes (manual nav or autoplay) so the timing stays
  // consistent.
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, index]);

  const slide = SLIDES[index];

  return (
    <div
      className="relative h-full min-h-[420px] w-full overflow-hidden rounded-2xl bg-slate-800"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={slide.imgUrl}
        alt={slide.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Legibility gradient for the CTA */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Prev / Next */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* CTA */}
      <a
        href={slide.ctaHref}
        className="absolute bottom-10 left-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 transition-colors"
      >
        {slide.ctaLabel}
        <SquareArrowOutUpRight className="h-4 w-4" />
      </a>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-4 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;