"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  Shield,
  Users,
  Star,
  ChevronDown,
  CheckCircle2,
  Send,
  Briefcase,
  MapPin,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react"
import { SectionHeader } from "./section-header"

const openRoles = [
  {
    id: "guard",
    title: "Security Guard",
    type: "Full-Time",
    location: "North & South Goa",
    experience: "0–2 Years",
    tag: "HIGH DEMAND",
    tagColor: "cyan",
    description:
      "Static and mobile guarding at residential, commercial, and event sites. Uniformed duty, access control, patrol reporting.",
    requirements: [
      "Age 21–40 years",
      "Minimum 10th standard pass",
      "Physically fit — able to stand/walk 8+ hours",
      "Basic communication skills (Konkani/Hindi/English)",
      "No criminal record",
    ],
  },
  {
    id: "supervisor",
    title: "Security Supervisor",
    type: "Full-Time",
    location: "Mapusa / Pan-Goa",
    experience: "3+ Years",
    tag: "URGENT",
    tagColor: "amber",
    description:
      "Oversee a team of 5–15 guards across multiple sites. Conduct daily briefings, submit shift reports, liaise with clients.",
    requirements: [
      "Minimum 3 years as a security guard or supervisor",
      "Strong leadership and communication skills",
      "Valid driving licence (two-wheeler/four-wheeler)",
      "Proficient in written reporting",
      "PSARA training certificate preferred",
    ],
  },
  {
    id: "event",
    title: "Event Security Officer",
    type: "Part-Time / On-Call",
    location: "Goa (All Talukas)",
    experience: "1+ Year",
    tag: "FLEXIBLE",
    tagColor: "slate",
    description:
      "Crowd management, entry/exit control, and floor security for weddings, concerts, corporate events, and beach parties.",
    requirements: [
      "Experience in crowd management preferred",
      "Smart appearance and professional demeanour",
      "Available on weekends and short notice",
      "Physical fitness mandatory",
    ],
  },
  {
    id: "vip",
    title: "Close Protection Officer",
    type: "Full-Time",
    location: "Pan-Goa / Travel",
    experience: "5+ Years",
    tag: "PREMIUM",
    tagColor: "amber",
    description:
      "Discreet personal security for VIP clients, executives, and celebrities. Requires excellent observation, calm under pressure.",
    requirements: [
      "Minimum 5 years in security (military/police background preferred)",
      "Driving licence mandatory",
      "Excellent physical fitness and self-defence training",
      "Strict confidentiality and professional ethics",
      "English proficiency required",
    ],
  },
]

const perks = [
  { icon: Award,  label: "Uniform & Training Provided", desc: "Full kit on joining + ongoing certifications" },
  { icon: Clock,  label: "Fixed Shift Schedules",        desc: "8/12-hour shifts with proper rotations" },
  { icon: MapPin, label: "Local Postings Preferred",     desc: "Deployed near your area where possible" },
  { icon: Star,   label: "Performance Incentives",       desc: "Monthly bonuses for outstanding guards" },
  { icon: Shield, label: "PSARA Certification",          desc: "Company-funded licensing for eligible staff" },
  { icon: Users,  label: "Family Security Coverage",     desc: "Basic accidental insurance for all staff" },
]

const positions = [
  "Security Guard",
  "Security Supervisor",
  "Event Security Officer",
  "Close Protection Officer (VIP)",
  "CCTV Surveillance Operator",
  "Patrol Driver",
  "Other",
]

function RoleCard({ role, index }: { role: (typeof openRoles)[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group relative rounded-lg border border-white/10 bg-gradient-to-b from-[#0d1f3a] to-gunmetal hover:border-cyan/35 transition-colors duration-300 overflow-hidden"
    >
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(34,211,238,0.1), transparent 55%)" }}
      />
      <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan/50" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan/50" />

      <button onClick={() => setOpen(!open)} className="relative w-full text-left p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex-1 min-w-0">
            <span
              className={`inline-block font-mono text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 rounded mb-3
                ${role.tagColor === "cyan"
                  ? "bg-cyan/15 text-cyan border border-cyan/25"
                  : role.tagColor === "amber"
                  ? "bg-amber/10 text-amber border border-amber/25"
                  : "bg-white/5 text-white/50 border border-white/10"
                }`}
            >
              {role.tag}
            </span>
            <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan transition-colors duration-200">
              {role.title}
            </h3>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
              <span className="flex items-center gap-1.5 text-xs text-foreground/55">
                <Briefcase className="w-3.5 h-3.5 text-cyan/60" />{role.type}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-foreground/55">
                <MapPin className="w-3.5 h-3.5 text-cyan/60" />{role.location}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-foreground/55">
                <Clock className="w-3.5 h-3.5 text-cyan/60" />{role.experience} Experience
              </span>
            </div>
          </div>
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-md border flex-shrink-0 mt-1 transition-all duration-300
              ${open ? "border-cyan/50 bg-cyan/10 rotate-180" : "border-white/10 bg-white/[0.03]"}`}
          >
            <ChevronDown className={`w-4 h-4 transition-colors ${open ? "text-cyan" : "text-foreground/50"}`} />
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 border-t border-white/[0.07]">
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">{role.description}</p>
              <div className="mt-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan/70 mb-3">Requirements</div>
                <ul className="space-y-2">
                  {role.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm text-foreground/75">
                      <CheckCircle2 className="w-4 h-4 text-cyan/70 mt-0.5 shrink-0" strokeWidth={2} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              
                href="#join-form"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-cyan hover:bg-cyan-bright text-midnight-blue font-bold text-xs tracking-widest uppercase transition-all duration-200 hover:scale-[1.02]"
                style={{ boxShadow: "0 6px 20px -4px rgba(34,211,238,0.45)" }}
                Apply for This Role <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    try {
      const res = await fetch("https://formspree.io/f/YOUR_CAREERS_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      setLoading(false)
      if (res.ok) { setSubmitted(true); form.reset() }
      else alert("Submission failed. Please call us directly at +91 77859 09090.")
    } catch {
      setLoading(false)
      alert("Network error. Please call us directly at +91 77859 09090.")
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8 rounded-lg border border-cyan/30 bg-cyan/[0.05]"
      >
        <div className="w-16 h-16 rounded-full bg-cyan/15 border border-cyan/30 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-cyan" />
        </div>
        <h3 className="font-display text-2xl font-bold text-white mb-2">Application Received!</h3>
        <p className="text-foreground/65 max-w-md mx-auto text-sm leading-relaxed">
          Thank you for your interest in joining Black Tigers Goa. Our HR team will review your
          application and contact you within 3–5 business days.
        </p>
        <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan/60">
          Ref: BTG-{Math.random().toString(36).substring(2, 8).toUpperCase()}
        </div>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="join-form"
      className="relative rounded-lg border border-white/10 bg-gradient-to-b from-[#0d1f3a] to-gunmetal p-7 overflow-hidden"
    >
      <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan/50" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan/50" />

      <div className="flex items-center gap-3 mb-7 pb-5 border-b border-white/[0.07]">
        <div className="w-10 h-10 rounded-md bg-cyan/15 border border-cyan/30 flex items-center justify-center">
          <Shield className="w-5 h-5 text-cyan" />
        </div>
        <div>
          <div className="font-display font-bold text-white text-lg leading-none">Join the Force</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan/60 mt-0.5">
            ▲ Application · Encrypted · Confidential
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
            Full Name <span className="text-cyan">*</span>
          </label>
          <input name="full_name" type="text" required placeholder="Rahul Naik"
            className="bg-white/[0.04] border border-white/10 rounded-md px-3.5 py-2.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
            Phone Number <span className="text-cyan">*</span>
          </label>
          <input name="phone" type="tel" required placeholder="+91 98765 43210"
            className="bg-white/[0.04] border border-white/10 rounded-md px-3.5 py-2.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-colors" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">Email Address</label>
          <input name="email" type="email" placeholder="you@email.com"
            className="bg-white/[0.04] border border-white/10 rounded-md px-3.5 py-2.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
            Age <span className="text-cyan">*</span>
          </label>
          <input name="age" type="number" required min={18} max={55} placeholder="e.g. 28"
            className="bg-white/[0.04] border border-white/10 rounded-md px-3.5 py-2.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-colors" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
            Position Applied For <span className="text-cyan">*</span>
          </label>
          <div className="relative">
            <select name="position" required defaultValue=""
              className="w-full appearance-none bg-white/[0.04] border border-white/10 rounded-md px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-colors cursor-pointer">
              <option value="" disabled className="bg-[#1F2937]">Select a role…</option>
              {positions.map((p) => <option key={p} value={p} className="bg-[#1F2937]">{p}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
            Years of Experience <span className="text-cyan">*</span>
          </label>
          <div className="relative">
            <select name="experience" required defaultValue=""
              className="w-full appearance-none bg-white/[0.04] border border-white/10 rounded-md px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-colors cursor-pointer">
              <option value="" disabled className="bg-[#1F2937]">Select…</option>
              <option value="0" className="bg-[#1F2937]">Fresher (0 years)</option>
              <option value="1" className="bg-[#1F2937]">1 year</option>
              <option value="2-3" className="bg-[#1F2937]">2–3 years</option>
              <option value="4-5" className="bg-[#1F2937]">4–5 years</option>
              <option value="6+" className="bg-[#1F2937]">6+ years</option>
              <option value="military" className="bg-[#1F2937]">Ex-Military / Ex-Police</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">Preferred Location</label>
          <div className="relative">
            <select name="location_preference" defaultValue=""
              className="w-full appearance-none bg-white/[0.04] border border-white/10 rounded-md px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-colors cursor-pointer">
              <option value="" disabled className="bg-[#1F2937]">Select…</option>
              <option value="North Goa" className="bg-[#1F2937]">North Goa</option>
              <option value="South Goa" className="bg-[#1F2937]">South Goa</option>
              <option value="Mapusa"    className="bg-[#1F2937]">Mapusa</option>
              <option value="Panaji"    className="bg-[#1F2937]">Panaji</option>
              <option value="Any"       className="bg-[#1F2937]">Anywhere in Goa</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">Available From</label>
          <input name="available_from" type="date"
            className="bg-white/[0.04] border border-white/10 rounded-md px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-colors [color-scheme:dark]" />
        </div>
      </div>

      <div className="mt-5">
        <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50 block mb-3">
          Additional Skills (Select all that apply)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {["Valid Driving Licence","Two-Wheeler","Self-Defence Training","PSARA Certified","First Aid Trained","Firearms Licence"].map((skill) => (
            <label key={skill} className="flex items-center gap-2.5 p-2.5 rounded-md border border-white/[0.07] bg-white/[0.02] cursor-pointer hover:border-cyan/25 transition-colors group">
              <input type="checkbox" name="skills" value={skill} className="w-4 h-4 rounded accent-cyan-400 cursor-pointer" />
              <span className="text-xs text-foreground/65 group-hover:text-foreground/90 transition-colors">{skill}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-5">
        <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">Tell Us About Yourself</label>
        <textarea name="message" rows={4}
          placeholder="Previous employer, notable experience, why you want to join Black Tigers Goa…"
          className="bg-white/[0.04] border border-white/10 rounded-md px-3.5 py-2.5 text-white text-sm placeholder:text-white/25 resize-none focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-colors" />
      </div>

      <button type="submit" disabled={loading}
        className="mt-6 w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-cyan hover:bg-cyan-bright disabled:opacity-60 disabled:cursor-not-allowed text-midnight-blue font-bold text-sm tracking-widest uppercase rounded-md transition-all duration-200 hover:scale-[1.01]"
        style={{ boxShadow: "0 8px 28px -6px rgba(34,211,238,0.5)" }}
      >
        {loading ? (
          <><span className="w-4 h-4 border-2 border-midnight-blue/30 border-t-midnight-blue rounded-full animate-spin" />Submitting…</>
        ) : (
          <><Send className="w-4 h-4" />Submit Application</>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-foreground/35">
        By submitting, you consent to being contacted by Black Tigers Goa for recruitment purposes.
      </p>
    </form>
  )
}

export function Careers() {
  return (
    <section id="careers" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-tactical-grid-sm opacity-30" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% -10%, rgba(34,211,238,0.09), transparent 55%)" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Careers at Black Tigers"
          title="Join Goa's most trusted security force."
          description="We're always looking for disciplined, motivated individuals ready to serve and protect. Whether you're a fresher or a seasoned professional — there's a place for you here."
          className="mx-auto"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {perks.map((p, i) => (
            <motion.div key={p.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.055 }}
              className="flex items-start gap-4 p-5 rounded-lg bg-white/[0.025] border border-white/[0.07] hover:border-cyan/20 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-md bg-cyan/10 border border-cyan/25 flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-cyan" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-base leading-tight">{p.label}</div>
                <div className="text-xs text-foreground/55 mt-0.5 leading-relaxed">{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan/70 whitespace-nowrap">Open Positions</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            {openRoles.map((role, i) => <RoleCard key={role.id} role={role} index={i} />)}
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan/70 whitespace-nowrap">Apply Now</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4"
            >
              <h3 className="font-display text-2xl font-bold text-white leading-tight">Ready to join the ranks?</h3>
              <p className="mt-3 text-sm text-foreground/65 leading-relaxed">
                Fill in the form and our HR team will reach out within 3–5 working days.
                Walk-in interviews are also welcome at our Mapusa HQ.
              </p>
              <div className="mt-8 space-y-4">
                <div className="p-4 rounded-lg bg-white/[0.025] border border-white/[0.07]">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan/60 mb-1">Walk-In Hours</div>
                  <div className="text-sm text-foreground/80">Mon – Sat, 10:00 AM – 5:00 PM</div>
                </div>
                <div className="p-4 rounded-lg bg-white/[0.025] border border-white/[0.07]">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan/60 mb-1">HR Contact</div>
                  <a href="tel:+917785909090" className="text-sm text-white hover:text-cyan transition-colors">+91 77859 09090</a>
                </div>
                <div className="p-4 rounded-lg bg-white/[0.025] border border-white/[0.07]">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan/60 mb-1">Documents to Bring</div>
                  <ul className="mt-1 space-y-1">
                    {["Aadhaar / Voter ID","10th or 12th Marksheet","2 Passport Photos","Previous Experience Letter"].map(d => (
                      <li key={d} className="flex items-center gap-2 text-xs text-foreground/60">
                        <span className="w-1 h-1 rounded-full bg-cyan/50 shrink-0" />{d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <ApplicationForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
