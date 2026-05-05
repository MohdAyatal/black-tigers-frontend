"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const quotes = [
  "Your Safety Is Our Mission.",
  "Protecting Lives. Securing Futures.",
  "Always Watching. Always Ready.",
  "Security You Can Trust.",
]

export function RotatingQuotes() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % quotes.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="h-7 sm:h-8 overflow-hidden flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-display text-sm sm:text-base font-semibold text-cyan tracking-[0.18em] uppercase"
        >
          {quotes[i]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
