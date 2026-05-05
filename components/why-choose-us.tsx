"use client"

import { motion } from "framer-motion"
import { UserCheck, Zap, Clock, Wallet, Radio, Lock } from "lucide-react"
import { SectionHeader } from "./section-header"

const features = [
  {
    icon: UserCheck,
    title: "Background Verified Guards",
    desc: "Every officer is vetted, ID-verified, and continuously evaluated for performance.",
  },
  {
    icon: Zap,
    title: "Rapid Response Team",
    desc: "Mobile units stationed across Goa for sub-10-minute response in priority zones.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Round-the-clock operations centre. We pick up the phone, day or night.",
  },
  {
    icon: Wallet,
    title: "Affordable Plans",
    desc: "Transparent pricing for individuals, businesses, and one-off event coverage.",
  },
  {
    icon: Radio,
    title: "Real-Time Coordination",
    desc: "Radio-equipped patrols with central dispatch and supervisor escalation.",
  },
  {
    icon: Lock,
    title: "Confidential & Discreet",
    desc: "Strict NDAs, professional conduct, and discreet operations for sensitive clients.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32 bg-gunmetal overflow-hidden">
      <div className="absolute inset-0 bg-tactical-grid-sm opacity-30" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 100%, rgba(77,124,15,0.1), transparent 60%), radial-gradient(ellipse at 100% 0%, rgba(249,115,22,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Why Choose Us"
          title="Built different. Trained harder. Always alert."
          description="Six reasons clients across Goa trust Black Tigers to protect what matters most."
          className="mx-auto"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-lg overflow-hidden border border-white/10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative p-7 bg-gunmetal hover:bg-midnight-blue transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-cyan/0 group-hover:bg-cyan/20 blur-xl rounded-full transition-all duration-500" />
                  <div className="relative w-11 h-11 rounded-md border border-white/15 bg-white/[0.04] group-hover:border-cyan/50 group-hover:bg-cyan/10 flex items-center justify-center transition-all duration-300">
                    <f.icon className="w-5 h-5 text-foreground/85 group-hover:text-cyan transition-colors" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/65">
                    {f.desc}
                  </p>
                </div>
              </div>
              {/* Bottom accent on hover */}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-cyan transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
