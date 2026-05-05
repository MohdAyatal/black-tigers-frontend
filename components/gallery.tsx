"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeader } from "./section-header"

const slides = [
  {
    src: "/gallery-1.jpg",
    title: "24/7 Vigilance",
    sub: "Static guarding at commercial premises",
  },
  {
    src: "/gallery-2.jpg",
    title: "Always Watching",
    sub: "Live CCTV operations centre",
  },
  {
    src: "/gallery-3.jpg",
    title: "Your Safety First",
    sub: "VIP and event close-protection",
  },
  {
    src: "/gallery-4.jpg",
    title: "Always Ready",
    sub: "Night patrol across residential zones",
  },
]

export function Gallery() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [paused])

  const go = (n: number) => setI((n + slides.length) % slides.length)

  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-tactical-grid-sm opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Field Operations"
          title="Inside the operation."
          description="A glimpse into how Black Tigers Goa keeps clients secure — on-site, on-camera, and on-call."
        />

        <div
          className="mt-12 relative rounded-xl overflow-hidden border border-white/10 bg-gunmetal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img
                  src={slides[i].src || "/placeholder.svg"}
                  alt={slides[i].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue via-midnight-blue/30 to-midnight-blue/10" />
                <div className="absolute inset-0 bg-tactical-grid-sm opacity-20 mix-blend-overlay" />
              </motion.div>
            </AnimatePresence>

            {/* Tactical overlay */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-cyan/90">
              <span className="px-2 py-1 rounded bg-midnight-blue/60 border border-cyan/30">
                ▲ FEED · 0{i + 1}/0{slides.length}
              </span>
              <span className="hidden sm:inline">REC ● LIVE</span>
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`txt-${i}`}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="font-mono text-xs uppercase tracking-[0.3em] text-cyan mb-2">
                    {slides[i].sub}
                  </div>
                  <div className="font-display text-3xl sm:text-5xl font-bold text-foreground">
                    {slides[i].title}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <button
              onClick={() => go(i - 1)}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-midnight-blue/60 backdrop-blur-md border border-white/15 hover:bg-cyan hover:text-midnight-blue hover:border-cyan flex items-center justify-center transition-colors text-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => go(i + 1)}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-midnight-blue/60 backdrop-blur-md border border-white/15 hover:bg-cyan hover:text-midnight-blue hover:border-cyan flex items-center justify-center transition-colors text-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots / thumbnails */}
          <div className="grid grid-cols-4 gap-px bg-white/5">
            {slides.map((s, idx) => (
              <button
                key={s.src}
                onClick={() => go(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`relative px-3 py-3 sm:py-4 text-left bg-gunmetal hover:bg-midnight-blue transition-colors ${
                  idx === i ? "bg-midnight-blue" : ""
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                  0{idx + 1}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-foreground/85 truncate mt-0.5">
                  {s.title}
                </div>
                {idx === i && (
                  <motion.span
                    layoutId="gallery-active"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
