"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import {
  Shield,
  Home,
  Building2,
  PartyPopper,
  Crown,
  Cctv,
  ArrowUpRight,
} from "lucide-react"
import { useRef } from "react"
import { SectionHeader } from "./section-header"

const services = [
  {
    icon: Shield,
    title: "Security Guards",
    desc: "Trained, uniformed personnel for static guarding, access control, and patrol duties.",
    tag: "Core",
  },
  {
    icon: Home,
    title: "Residential Protection",
    desc: "Round-the-clock protection for villas, apartments, and gated communities across Goa.",
    tag: "24/7",
  },
  {
    icon: Building2,
    title: "Commercial Security",
    desc: "Asset, premises, and personnel protection for offices, retail, and industrial sites.",
    tag: "B2B",
  },
  {
    icon: PartyPopper,
    title: "Event Security",
    desc: "Crowd management, bouncers, and access control for weddings, concerts, and parties.",
    tag: "On-Demand",
  },
  {
    icon: Crown,
    title: "VIP Protection",
    desc: "Discreet close-protection officers for high-profile clients, celebrities, and executives.",
    tag: "Premium",
  },
  {
    icon: Cctv,
    title: "24/7 Surveillance",
    desc: "CCTV monitoring, alarm response, and integrated remote security operations.",
    tag: "Tech",
  },
]

function TiltCard({
  children,
  index,
}: {
  children: React.ReactNode
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  })
  const rotY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
      className="perspective-1000"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      {children}
    </motion.div>
  )
}

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-gunmetal overflow-hidden"
    >
      <div className="absolute inset-0 bg-tactical-grid-sm opacity-40" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 0%, rgba(34,211,238,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Operational Services"
          title="Security solutions, engineered for every threat profile."
          description="From static guarding to executive protection — a full spectrum of services delivered with precision and discipline."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <TiltCard key={s.title} index={i}>
              <div
                className="group relative h-full p-6 rounded-lg bg-gradient-to-b from-midnight-blue to-gunmetal border border-white/10 hover:border-cyan/40 transition-colors duration-300"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(34,211,238,0.18), transparent 60%)",
                  }}
                />

                <div
                  className="relative flex items-start justify-between gap-4 mb-5"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan/30 blur-xl rounded-full" />
                    <div className="relative w-12 h-12 rounded-md bg-gradient-to-br from-cyan to-cyan-bright ring-1 ring-cyan/40 flex items-center justify-center shadow-lg shadow-cyan/20">
                      <s.icon className="w-6 h-6 text-midnight-blue" strokeWidth={2.2} />
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded border border-white/10 bg-white/5 text-foreground/65">
                    {s.tag}
                  </span>
                </div>

                <h3
                  className="relative font-display text-xl font-bold text-foreground mb-2"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="relative text-sm leading-relaxed text-foreground/70"
                  style={{ transform: "translateZ(15px)" }}
                >
                  {s.desc}
                </p>

                <div
                  className="relative mt-5 flex items-center gap-1.5 text-sm font-semibold text-cyan opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                  style={{ transform: "translateZ(25px)" }}
                >
                  Deploy team
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Corner brackets */}
                <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-cyan/50" />
                <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-cyan/50" />
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
