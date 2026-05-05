"use client"

import { useState, useEffect } from "react"
import { Shield, Phone, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { label: "Home",     href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About",    href: "/#about" },
  { label: "Gallery",  href: "/#gallery" },
  { label: "Contact",  href: "/#contact" },
  { label: "Join Us",  href: "/careers", highlight: true },
]

export function SiteNavbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300
          ${scrolled
            ? "bg-midnight-blue/82 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
            : "border-b border-transparent"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">

            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan to-cyan-bright ring-1 ring-cyan/40 flex items-center justify-center shadow-[0_0_16px_rgba(34,211,238,0.35)]">
                <Shield className="w-5 h-5 text-midnight-blue" strokeWidth={2.5} />
              </span>
              <span className="font-display font-bold text-[1.05rem] tracking-wide text-white">
                BLACK TIGERS<span className="text-cyan ml-1.5">GOA</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === "/careers" ? pathname === "/careers" : false
                if (link.highlight) {
                  return (
                    <Link key={link.href} href={link.href}
                      className={`relative ml-2 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200
                        ${isActive ? "bg-cyan text-midnight-blue" : "border border-cyan/35 text-cyan hover:bg-cyan hover:text-midnight-blue"}`}
                    >
                      <span className="relative flex w-2 h-2 shrink-0">
                        <span className="absolute inset-0 rounded-full bg-current animate-ping opacity-60" />
                        <span className="relative w-2 h-2 rounded-full bg-current" />
                      </span>
                      {link.label}
                    </Link>
                  )
                }
                return (
                  <Link key={link.href} href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-white/75 hover:text-white transition-colors duration-200 group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-cyan rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                )
              })}
            </nav>

            <a href="tel:+917785909090"
              className="hidden md:inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-cyan hover:bg-cyan-bright text-midnight-blue font-bold text-sm tracking-wide transition-all duration-200 hover:scale-[1.04]"
              style={{ boxShadow: "0 8px 24px -6px rgba(34,211,238,0.45)" }}
            >
              <Phone className="w-4 h-4 shrink-0" />
              +91 77859 09090
            </a>

            <button
              className="md:hidden w-10 h-10 rounded-md border border-white/10 bg-transparent flex items-center justify-center text-white hover:border-cyan/30 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-x-0 top-16 z-[99] bg-midnight-blue/95 backdrop-blur-xl border-t border-white/[0.06] shadow-xl md:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              if (link.highlight) {
                return (
                  <Link key={link.href} href={link.href}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-lg mt-1 bg-cyan/10 border border-cyan/25 text-cyan font-semibold text-sm"
                  >
                    <span className="relative flex w-2 h-2 shrink-0">
                      <span className="absolute inset-0 rounded-full bg-cyan animate-ping opacity-60" />
                      <span className="relative w-2 h-2 rounded-full bg-cyan" />
                    </span>
                    {link.label}
                  </Link>
                )
              }
              return (
                <Link key={link.href} href={link.href}
                  className="px-4 py-3 rounded-lg text-white/80 hover:bg-white/[0.04] hover:text-white font-medium text-sm transition-colors"
                >
                  {link.label}
                </Link>
              )
            })}
            <a href="tel:+917785909090"
              className="mt-2 flex items-center justify-center gap-2.5 px-4 py-3.5 bg-cyan text-midnight-blue rounded-full font-bold text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" />
              Call +91 77859 09090
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
