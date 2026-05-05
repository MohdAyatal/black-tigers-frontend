"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { SectionHeader } from "./section-header"

const reviews = [
  {
    quote:
      "Black Tigers Goa transformed our resort security. Their guards are professional, alert, and extremely well-trained. Guests feel safe — that's everything.",
    name: "Rohan Mehta",
    role: "GM, Boutique Resort · Calangute",
    rating: 5,
  },
  {
    quote:
      "Hired them for a 1,500-guest wedding. Crowd control, VIP escort, parking — flawless. They handled everything before we even noticed.",
    name: "Priya Naik",
    role: "Event Producer · Panaji",
    rating: 5,
  },
  {
    quote:
      "We have used three security firms before. None come close. Response time, discipline, communication — Black Tigers is in a different league.",
    name: "Vikram Shetty",
    role: "Director, Logistics Co. · Verna",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-tactical-grid-sm opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Client Voices"
          title="Trusted by businesses, residents & event organisers."
          description="Real feedback from real operations across Goa."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative p-7 rounded-lg bg-gradient-to-b from-navy-800 to-navy-900 border border-white/10 hover:border-cyan/40 transition-colors"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-cyan/20" />

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 fill-signal text-cyan"
                    strokeWidth={1}
                  />
                ))}
              </div>

              <blockquote className="text-foreground/85 leading-relaxed text-pretty">
                {`"${r.quote}"`}
              </blockquote>

              <figcaption className="mt-6 pt-5 border-t border-white/10">
                <div className="font-display font-bold text-foreground">
                  {r.name}
                </div>
                <div className="text-xs uppercase tracking-wider text-foreground/55 mt-0.5">
                  {r.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
