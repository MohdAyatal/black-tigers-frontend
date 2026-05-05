"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ChevronRight,
  CheckCircle2,
} from "lucide-react"
import { SectionHeader } from "./section-header"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission – wire to API/email service as needed
    await new Promise((r) => setTimeout(r, 700))
    setLoading(false)
    setSubmitted(true)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-gunmetal overflow-hidden"
    >
      <div className="absolute inset-0 bg-tactical-grid-sm opacity-30" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.1), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Deploy a Team"
          title="Request security. We respond fast."
          description="Reach out for a free consultation. We typically respond within 30 minutes during business hours."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <a
              href="tel:+917785909090"
              className="group flex items-start gap-4 p-5 rounded-lg bg-midnight-blue border border-white/10 hover:border-cyan/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-md bg-cyan/15 border border-cyan/30 flex items-center justify-center shrink-0 group-hover:bg-cyan group-hover:text-midnight-blue transition-colors">
                <Phone className="w-5 h-5 text-cyan group-hover:text-midnight-blue transition-colors" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-[0.2em] text-foreground/55">
                  Call · 24/7
                </div>
                <div className="font-display text-lg sm:text-xl font-bold text-foreground">
                  +91 77859 09090
                </div>
                <div className="mt-1 inline-flex items-center text-xs text-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                  Tap to call <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </a>

            <a
              href="mailto:info@blacktigergoa.com"
              className="group flex items-start gap-4 p-5 rounded-lg bg-midnight-blue border border-white/10 hover:border-cyan/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-md bg-cyan/15 border border-cyan/30 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-cyan" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-[0.2em] text-foreground/55">
                  Email
                </div>
                <div className="text-base sm:text-lg font-semibold text-foreground break-all">
                  info@blacktigergoa.com
                </div>
              </div>
            </a>

            <div className="flex items-start gap-4 p-5 rounded-lg bg-midnight-blue border border-white/10">
              <div className="w-11 h-11 rounded-md bg-cyan/15 border border-cyan/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-cyan" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-[0.2em] text-foreground/55">
                  Headquarters
                </div>
                <div className="text-sm sm:text-base font-medium text-foreground/90 leading-relaxed mt-0.5">
                  Office no 3, 4th floor, Above Dominos Pizza building,
                  opposite Mapusa Police Station, Mapusa, Goa
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-white/10 bg-midnight-blue">
              <div className="aspect-[16/10] w-full">
                <iframe
                  title="Black Tigers Goa — Mapusa office location"
                  src="https://www.google.com/maps?q=Mapusa+Police+Station,+Mapusa,+Goa&output=embed"
                  className="w-full h-full grayscale-[20%] contrast-110"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative p-6 sm:p-8 rounded-lg bg-midnight-blue border border-white/10 corner-brackets">
              <div className="flex items-center justify-between mb-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
                  ▲ Request · Form
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/45">
                  Encrypted · Confidential
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto w-14 h-14 rounded-full bg-olive/20 border border-olive/40 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-olive-bright" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                    Request received.
                  </h3>
                  <p className="mt-2 text-foreground/70">
                    A duty officer will contact you shortly. For urgent
                    deployment, call{" "}
                    <a href="tel:+917785909090" className="text-cyan font-semibold">
                      +91 77859 09090
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-cyan hover:text-cyan-bright"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full name" name="name" required placeholder="John Doe" />
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 ..."
                    />
                  </div>
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.2em] text-foreground/65 mb-2">
                      Service required
                    </label>
                    <select
                      name="service"
                      defaultValue=""
                      required
                      className="w-full px-4 py-3 rounded-md bg-gunmetal border border-white/10 focus:border-cyan focus:ring-1 focus:ring-cyan text-foreground outline-none transition-colors"
                    >
                      <option value="" disabled>
                        Select a service…
                      </option>
                      <option>Security Guards</option>
                      <option>Residential Protection</option>
                      <option>Commercial Security</option>
                      <option>Event Security</option>
                      <option>VIP Protection</option>
                      <option>24/7 Surveillance</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.2em] text-foreground/65 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your security requirement…"
                      className="w-full px-4 py-3 rounded-md bg-gunmetal border border-white/10 focus:border-cyan focus:ring-1 focus:ring-cyan text-foreground placeholder:text-foreground/40 outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-tactical w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-cyan hover:bg-cyan-bright disabled:opacity-60 text-midnight-blue font-semibold text-sm tracking-wide uppercase"
                  >
                    {loading ? (
                      "Submitting…"
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Request
                      </>
                    )}
                  </button>
                  <p className="text-xs text-foreground/55 text-center">
                    By submitting, you agree to be contacted regarding your
                    security inquiry.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-mono uppercase tracking-[0.2em] text-foreground/65 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-md bg-gunmetal border border-white/10 focus:border-cyan focus:ring-1 focus:ring-cyan text-foreground placeholder:text-foreground/40 outline-none transition-colors"
      />
    </div>
  )
}
