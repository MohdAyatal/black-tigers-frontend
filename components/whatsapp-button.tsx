"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function WhatsAppButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <motion.a
      href="https://wa.me/917785909090?text=Hi%20Black%20Tigers%20Goa%2C%20I%27d%20like%20to%20enquire%20about%20your%20security%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={show ? { scale: 1, opacity: 1 } : {}}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] shadow-2xl shadow-[#25D366]/30 ring-2 ring-[#25D366]/40"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <svg
        className="relative w-7 h-7 sm:w-8 sm:h-8 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.45 0 .1 5.34.1 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.92 11.92 0 0 0 5.77 1.47h.01c6.59 0 11.94-5.34 11.94-11.93 0-3.19-1.24-6.18-3.47-8.42zM12.05 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.62-.23-.37a9.84 9.84 0 0 1-1.51-5.27c0-5.46 4.45-9.91 9.92-9.91a9.86 9.86 0 0 1 7.02 2.91 9.84 9.84 0 0 1 2.91 7.01c-.01 5.47-4.46 9.92-9.97 9.92zm5.43-7.42c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.49 1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35z" />
      </svg>
      <span className="sr-only">WhatsApp</span>
    </motion.a>
  )
}
