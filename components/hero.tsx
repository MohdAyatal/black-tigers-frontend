"use client"

import { motion } from "framer-motion"
import { ChevronRight, ShieldCheck, Phone } from "lucide-react"
import { Shield3D } from "./shield-3d"
import { RotatingQuotes } from "./rotating-quotes"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden pt-20 lg:pt-24"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-blue/85 via-gunmetal/85 to-midnight-blue" />
        <div className="absolute inset-0 bg-tactical-grid opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 30%, rgba(34,211,238,0.18), transparent 50%), radial-gradient(ellipse at 10% 80%, rgba(63,98,18,0.18), transparent 55%)",
          }}
        />
        {/* Scan line */}
        <div className="absolute inset-x-0 h-px bg-cyan/30 animate-scan" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/30 bg-cyan/10 backdrop-blur-sm"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-cyan animate-ping opacity-75" />
                <span className="relative w-2 h-2 rounded-full bg-cyan" />
              </span>
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-cyan">
                On Duty 24/7 · Goa
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 font-display font-bold tracking-tight text-balance text-4xl sm:text-5xl lg:text-7xl leading-[1.05] text-foreground"
            >
              Trained.{" "}
              <span className="text-foreground/90">Trusted.</span>
              <br />
              Always{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-cyan">Alert.</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-cyan/20 -z-0" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-foreground/75"
            >
              Professional security services for homes, businesses, and events
              in Goa. Background-verified personnel, rapid response, and round-the-clock
              monitoring you can rely on.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contact"
                className="btn-tactical inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-cyan hover:bg-cyan-bright text-midnight-blue font-semibold text-sm tracking-wide uppercase"
              >
                <ShieldCheck className="w-4 h-4" />
                Hire Guards Now
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="btn-ghost-tactical inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 hover:border-cyan/50 text-foreground font-semibold text-sm tracking-wide uppercase"
              >
                <Phone className="w-4 h-4" />
                Request Consultation
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <RotatingQuotes />
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 grid grid-cols-3 gap-3 max-w-lg"
            >
              {[
                { v: "500+", l: "Clients Protected" },
                { v: "24/7", l: "Active Monitoring" },
                { v: "<10m", l: "Response Time" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="relative px-3 py-3 rounded-md border border-white/10 bg-white/[0.03] backdrop-blur-sm corner-brackets"
                >
                  <div className="font-display text-xl sm:text-2xl font-bold text-cyan">
                    {s.v}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-foreground/65 mt-0.5">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D shield */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <Shield3D />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  )
}
