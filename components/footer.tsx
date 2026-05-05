import { Shield, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-midnight-blue border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-md bg-gradient-to-br from-cyan to-cyan/70 ring-1 ring-cyan/40 flex items-center justify-center">
                <Shield className="w-5 h-5 text-midnight-blue" strokeWidth={2.5} />
              </span>
              <span className="font-display font-bold text-lg tracking-wide">
                BLACK TIGERS<span className="ml-1.5 text-cyan">GOA</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-foreground/65 leading-relaxed max-w-md">
              Goa&apos;s most disciplined private security force. Background-verified
              guards, 24/7 monitoring, and rapid response — across residential,
              commercial, and event operations.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">
                Licensed · PSARA Compliant
              </span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-foreground mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Home", "#home"],
                ["Services", "#services"],
                ["About", "#about"],
                ["Gallery", "#gallery"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a
                    href={h}
                    className="text-foreground/65 hover:text-cyan transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-foreground mb-4">
              Operations Centre
            </h4>
            <ul className="space-y-3 text-sm text-foreground/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan mt-0.5 shrink-0" />
                <span>
                  Office no 3, 4th floor, Above Dominos Pizza building,
                  opposite Mapusa Police Station, Mapusa, Goa
                </span>
              </li>
              <li>
                <a
                  href="tel:+917785909090"
                  className="flex items-center gap-2.5 hover:text-cyan transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan shrink-0" />
                  +91 77859 09090
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@blacktigergoa.com"
                  className="flex items-center gap-2.5 hover:text-cyan transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan shrink-0" />
                  info@blacktigergoa.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-tactical my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/55">
          <p>
            © {new Date().getFullYear()} Black Tigers Goa. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.25em] text-foreground/45">
            Trained · Trusted · Always Alert
          </p>
        </div>
      </div>
    </footer>
  )
}
