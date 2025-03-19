"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";

const screenshots = [
  {
    src: "/extension_ss_1.png",
    alt: "UpGuard Extension Screenshot 1",
  },
  {
    src: "/extension_ss_2.png",
    alt: "UpGuard Extension Screenshot 2",
  },
  {
    src: "/extension_ss_3.png",
    alt: "UpGuard Extension Screenshot 3",
  },
  {
    src: "/extension_ss_4.png",
    alt: "UpGuard Extension Screenshot 4",
  },
  {
    src: "/extension_ss_5.png",
    alt: "UpGuard Extension Screenshot 5",
  },
];

export default function ScreenshotsCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [AutoPlay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="flex-[0_0_85%] md:flex-[0_0_45%] min-w-0"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  quality={95}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-gray-800 transition"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-gray-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:-translate-x-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-gray-800 transition"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-gray-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-indigo-600 w-8"
                : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
