"use client"

import { motion, useInView, useMotionValue, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { CheckCircle2, Target, Users } from "lucide-react"
import { SectionHeader } from "./section-header"

function Counter({
  to,
  suffix = "",
  prefix = "",
}: {
  to: number
  suffix?: string
  prefix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const mv = useMotionValue(0)
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(mv, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.floor(v)),
    })
    return controls.stop
  }, [inView, to, mv])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  )
}

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Clients Protected",
    sub: "Across homes, businesses, and major events in Goa",
  },
  {
    icon: Target,
    value: 24,
    suffix: "/7",
    label: "Active Monitoring",
    sub: "Live operations centre with rapid response protocols",
  },
  {
    icon: CheckCircle2,
    value: 100,
    suffix: "%",
    label: "Verified Personnel",
    sub: "Background-checked, trained, and uniformed officers",
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-tactical-grid-sm opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="About Black Tigers"
              title="Goa's most disciplined private security force."
              description="Headquartered in Mapusa, we deploy verified, professionally trained guards across North and South Goa. Our operations are built on three pillars: discipline, vigilance, and rapid response."
            />

            <div className="mt-8 space-y-3">
              {[
                "Licensed and PSARA-compliant operations",
                "Recruitment, screening, and continuous training in-house",
                "Dedicated supervisors and night-patrol officers",
                "Liaison with local police and emergency services",
              ].map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex w-5 h-5 rounded-sm bg-olive items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-midnight-blue" strokeWidth={3} />
                  </span>
                  <span className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[5/4] rounded-lg overflow-hidden border border-white/10 bg-gunmetal">
              {/* Guard Formation Visualization */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-midnight-blue/50 flex items-center justify-center p-8">
                <svg
                  viewBox="0 0 280 360"
                  className="w-full h-full max-w-sm"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Central Guard Figure */}
                  <g id="centerGuard">
                    {/* Head */}
                    <circle cx="140" cy="60" r="12" stroke="currentColor" strokeWidth="1.5" className="text-olive" />
                    
                    {/* Body/Torso */}
                    <rect x="128" y="78" width="24" height="35" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-olive" fill="currentColor" fillOpacity="0.1" />
                    
                    {/* Left Arm - Alert Position */}
                    <line x1="128" y1="88" x2="110" y2="72" stroke="currentColor" strokeWidth="1.5" className="text-olive" strokeLinecap="round" />
                    
                    {/* Right Arm - Alert Position */}
                    <line x1="152" y1="88" x2="170" y2="72" stroke="currentColor" strokeWidth="1.5" className="text-olive" strokeLinecap="round" />
                    
                    {/* Left Leg */}
                    <line x1="132" y1="113" x2="128" y2="145" stroke="currentColor" strokeWidth="1.5" className="text-olive" strokeLinecap="round" />
                    
                    {/* Right Leg */}
                    <line x1="148" y1="113" x2="152" y2="145" stroke="currentColor" strokeWidth="1.5" className="text-olive" strokeLinecap="round" />
                    
                    {/* Equipment Belt */}
                    <rect x="126" y="105" width="28" height="3" fill="currentColor" className="text-cyan/70" />
                  </g>

                  {/* Left Guard Figure */}
                  <g id="leftGuard" opacity="0.6">
                    <circle cx="80" cy="90" r="10" stroke="currentColor" strokeWidth="1.5" className="text-olive" />
                    <rect x="71" y="104" width="18" height="28" rx="1.5" stroke="currentColor" strokeWidth="1.5" className="text-olive" fill="currentColor" fillOpacity="0.08" />
                    <line x1="71" y1="112" x2="58" y2="102" stroke="currentColor" strokeWidth="1.5" className="text-olive" strokeLinecap="round" />
                    <line x1="89" y1="112" x2="102" y2="102" stroke="currentColor" strokeWidth="1.5" className="text-olive" strokeLinecap="round" />
                    <line x1="76" y1="132" x2="72" y2="155" stroke="currentColor" strokeWidth="1.5" className="text-olive" strokeLinecap="round" />
                    <line x1="84" y1="132" x2="88" y2="155" stroke="currentColor" strokeWidth="1.5" className="text-olive" strokeLinecap="round" />
                  </g>

                  {/* Right Guard Figure */}
                  <g id="rightGuard" opacity="0.6">
                    <circle cx="200" cy="90" r="10" stroke="currentColor" strokeWidth="1.5" className="text-olive" />
                    <rect x="191" y="104" width="18" height="28" rx="1.5" stroke="currentColor" strokeWidth="1.5" className="text-olive" fill="currentColor" fillOpacity="0.08" />
                    <line x1="191" y1="112" x2="178" y2="102" stroke="currentColor" strokeWidth="1.5" className="text-olive" strokeLinecap="round" />
                    <line x1="209" y1="112" x2="222" y2="102" stroke="currentColor" strokeWidth="1.5" className="text-olive" strokeLinecap="round" />
                    <line x1="196" y1="132" x2="192" y2="155" stroke="currentColor" strokeWidth="1.5" className="text-olive" strokeLinecap="round" />
                    <line x1="204" y1="132" x2="208" y2="155" stroke="currentColor" strokeWidth="1.5" className="text-olive" strokeLinecap="round" />
                  </g>

                  {/* Protective Shield Arc */}
                  <path
                    d="M 60 140 Q 140 50 220 140"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-cyan"
                    fill="none"
                  />

                  {/* Perimeter Line - Security Boundary */}
                  <rect x="50" y="170" width="180" height="140" rx="8" stroke="currentColor" strokeWidth="1" className="text-cyan/50" fill="none" strokeDasharray="4,3" />

                  {/* Corner Markers */}
                  <circle cx="50" cy="170" r="3" fill="currentColor" className="text-cyan" />
                  <circle cx="230" cy="170" r="3" fill="currentColor" className="text-cyan" />
                  <circle cx="50" cy="310" r="3" fill="currentColor" className="text-cyan" />
                  <circle cx="230" cy="310" r="3" fill="currentColor" className="text-cyan" />

                  {/* Checkmark - Verified Protection */}
                  <g transform="translate(215, 200)">
                    <circle cx="0" cy="0" r="14" stroke="currentColor" strokeWidth="1.5" className="text-olive" fill="currentColor" fillOpacity="0.05" />
                    <path d="M -6 2 L -1 7 L 6 -2" stroke="currentColor" strokeWidth="2.5" className="text-olive" strokeLinecap="round" strokeLinejoin="round" />
                  </g>

                  {/* 24/7 Indicator */}
                  <text x="140" y="340" textAnchor="middle" fontSize="12" fontWeight="600" fill="currentColor" className="text-cyan" fontFamily="monospace" letterSpacing="1">
                    24/7 DEPLOYED
                  </text>
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue via-midnight-blue/30 to-transparent" />

              {/* Top tactical readout */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-cyan/80">
                <span className="px-2 py-1 rounded bg-midnight-blue/60 border border-cyan/30">
                  ▲ TEAM ALPHA
                </span>
                <span>STATUS · ACTIVE</span>
              </div>

              {/* Bottom badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-midnight-blue/70 backdrop-blur-md border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-olive-bright animate-pulse" />
                  <span className="text-xs font-medium text-foreground/90">
                    Mapusa HQ · Patrol units deployed
                  </span>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 p-4 rounded-lg bg-midnight-blue border border-cyan/30 shadow-xl shadow-midnight-blue/50 max-w-[200px]">
              <div className="font-display text-3xl font-bold text-cyan">
                <Counter to={12} suffix="+" />
              </div>
              <div className="text-xs uppercase tracking-wider text-foreground/70 mt-1">
                Years protecting Goa
              </div>
            </div>
          </motion.div>
        </div>

        {/* Counters row */}
        <div className="mt-20 grid sm:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-lg bg-gradient-to-b from-navy-800 to-navy-900 border border-white/10 corner-brackets"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-cyan/15 border border-cyan/30 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-cyan" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                  Metric · 0{i + 1}
                </span>
              </div>
              <div className="font-display text-4xl sm:text-5xl font-bold text-foreground">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm font-semibold uppercase tracking-wider text-cyan">
                {s.label}
              </div>
              <p className="mt-2 text-sm text-foreground/65 leading-relaxed">
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
