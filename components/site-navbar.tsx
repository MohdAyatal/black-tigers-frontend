"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-midnight-blue/75 border-b border-white/5 shadow-lg shadow-midnight-blue/40"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <div className="flex h-16 items-center justify-between gap-6">
          <a
            href="#home"
            className="flex items-center gap-2.5 group"
            aria-label="Black Tigers Goa — Home"
          >
            <span className="relative flex items-center justify-center w-9 h-9 rounded-md bg-gradient-to-br from-cyan to-cyan-bright ring-1 ring-cyan/40 shadow-md shadow-cyan/30">
              <Shield className="w-5 h-5 text-midnight-blue" strokeWidth={2.5} />
            </span>
            <span className="font-display font-bold text-base sm:text-lg tracking-wide text-foreground">
              BLACK TIGERS
              <span className="ml-1.5 text-cyan">GOA</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
                >
                  {l.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-cyan scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="tel:+917785909090"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-cyan text-midnight-blue font-semibold text-sm btn-tactical hover:bg-cyan-bright"
            >
              <Phone className="w-4 h-4" />
              +91 77859 09090
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 text-foreground"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-midnight-blue/95 backdrop-blur-xl border-t border-white/5"
          >
            <ul className="px-6 py-4 space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 rounded-md text-base font-medium text-foreground/85 hover:text-foreground hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                  <a
                    href="tel:+917785909090"
                    className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-cyan text-midnight-blue font-semibold btn-tactical"
                  >
                    <Phone className="w-4 h-4" />
                    Call +91 77859 09090
                  </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
