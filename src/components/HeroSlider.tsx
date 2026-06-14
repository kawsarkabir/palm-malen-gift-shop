import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";

const slides = [
  {
    image: hero1,
    kicker: "New Arrivals",
    title: "Curated Gifts\nfor Every Moment",
    subtitle: "Handpicked collections from artisans and direct manufacturers worldwide. Discover something truly special.",
    cta: "Shop New Arrivals",
    ctaHref: "#new",
  },
  {
    image: hero2,
    kicker: "Bestsellers",
    title: "Stories That\nInspire",
    subtitle: "From timeless classics to page-turning discoveries — find your next favorite read in our carefully curated book collection.",
    cta: "Explore Books",
    ctaHref: "#books",
  },
  {
    image: hero3,
    kicker: "The Gift of Giving",
    title: "Thoughtful Gifts\nThey'll Remember",
    subtitle: "Every gift tells a story. Make yours unforgettable with our premium selection of handpicked treasures for everyone you love.",
    cta: "Shop All Gifts",
    ctaHref: "#catalog",
  },
];

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, scale: 1.05, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, scale: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, scale: 0.98, x: dir > 0 ? -60 : 60 }),
};

const textVariants = {
  enter: { opacity: 0, y: 30 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const goTo = useCallback((i: number, dir = 1) => {
    setDirection(dir);
    setIndex((prev) => {
      let next = i;
      if (next < 0) next = slides.length - 1;
      if (next >= slides.length) next = 0;
      return next;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goTo(index + 1, 1), 6000);
    return () => clearInterval(timer);
  }, [index, goTo]);

  const slide = slides[index];

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden bg-warm-900">
      {/* Background images */}
      {mounted ? (
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover ken-burns"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-warm-900/80 via-warm-900/40 to-transparent" />
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="absolute inset-0">
          <img
            src={slides[0].image}
            alt={slides[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/80 via-warm-900/40 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto px-6 lg:px-12 w-full max-w-7xl">
          {mounted ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="max-w-xl"
              >
                <motion.span
                  variants={textVariants}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-block text-xs uppercase tracking-[0.25em] text-terracotta-light font-body font-semibold mb-4"
                >
                  {slide.kicker}
                </motion.span>
                <motion.h1
                  variants={textVariants}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="font-display text-5xl sm:text-6xl lg:text-7xl text-warm-50 leading-[1.05] mb-6 whitespace-pre-line"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  variants={textVariants}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="text-warm-200/90 text-base sm:text-lg leading-relaxed mb-8 max-w-md font-body font-light"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.a
                  variants={textVariants}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  href={slide.ctaHref}
                  className="group inline-flex items-center gap-3 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-4 rounded-sm text-sm font-body font-semibold uppercase tracking-wider transition-all duration-300 hover:gap-4"
                >
                  {slide.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="max-w-xl">
              <span className="inline-block text-xs uppercase tracking-[0.25em] text-terracotta-light font-body font-semibold mb-4">
                {slides[0].kicker}
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-warm-50 leading-[1.05] mb-6 whitespace-pre-line">
                {slides[0].title}
              </h1>
              <p className="text-warm-200/90 text-base sm:text-lg leading-relaxed mb-8 max-w-md font-body font-light">
                {slides[0].subtitle}
              </p>
              <a
                href={slides[0].ctaHref}
                className="group inline-flex items-center gap-3 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-4 rounded-sm text-sm font-body font-semibold uppercase tracking-wider transition-all duration-300 hover:gap-4"
              >
                {slides[0].cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        <button
          onClick={() => goTo(index - 1, -1)}
          className="w-10 h-10 rounded-full border border-warm-400/40 flex items-center justify-center text-warm-100 hover:bg-warm-100/10 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              className="group relative w-12 h-1 overflow-hidden rounded-full bg-warm-400/30"
              aria-label={`Go to slide ${i + 1}`}
            >
              {i === index && mounted && (
                <motion.div
                  className="absolute inset-0 bg-warm-100 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
              {i === index && !mounted && (
                <div className="absolute inset-0 bg-warm-100/40 rounded-full w-0" />
              )}
              {i !== index && (
                <div
                  className={`absolute inset-0 bg-warm-100/40 rounded-full ${
                    i < index ? "w-full" : "w-0"
                  }`}
                />
              )}
            </button>
          ))}
        </div>
        <button
          onClick={() => goTo(index + 1, 1)}
          className="w-10 h-10 rounded-full border border-warm-400/40 flex items-center justify-center text-warm-100 hover:bg-warm-100/10 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll indicator */}
      {mounted && (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-warm-300 font-body rotate-90 origin-center translate-y-8">
            Scroll
          </span>
        </motion.div>
      )}
    </section>
  );
}
