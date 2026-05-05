"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

/**
 * CSS-based 3D shield with mouse parallax, floating motion, radar sweep,
 * and orbiting tactical rings. Pure SVG + CSS transforms — no WebGL needed.
 */
export function Shield3D() {
  const ref = useRef<HTMLDivElement>(null)
  const [reduced, setReduced] = useState(false)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotateY = useSpring(useTransform(mx, [-1, 1], [-18, 18]), {
    stiffness: 80,
    damping: 18,
  })
  const rotateX = useSpring(useTransform(my, [-1, 1], [12, -12]), {
    stiffness: 80,
    damping: 18,
  })

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(m.matches)
    const onChange = () => setReduced(m.matches)
    m.addEventListener("change", onChange)
    return () => m.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    if (reduced) return
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const x = (e.clientX - cx) / (window.innerWidth / 2)
      const y = (e.clientY - cy) / (window.innerHeight / 2)
      mx.set(Math.max(-1, Math.min(1, x)))
      my.set(Math.max(-1, Math.min(1, y)))
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [mx, my, reduced])

  return (
    <div
      ref={ref}
      className="relative w-full max-w-[480px] mx-auto aspect-square perspective-1000 select-none"
      aria-hidden="true"
    >
      {/* Outer rotating tactical ring */}
      <motion.div
        className="absolute inset-0"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#475569" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="190"
            fill="none"
            stroke="url(#ring-grad)"
            strokeWidth="1"
            strokeDasharray="2 8"
          />
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="rgba(148,163,184,0.15)"
            strokeWidth="1"
          />
          {/* Tick marks */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 360) / 24
            const isMajor = i % 6 === 0
            return (
              <line
                key={i}
                x1="200"
                y1="10"
                x2="200"
                y2={isMajor ? 24 : 18}
                stroke={isMajor ? "#f97316" : "rgba(148,163,184,0.45)"}
                strokeWidth={isMajor ? 2 : 1}
                transform={`rotate(${angle} 200 200)`}
              />
            )
          })}
        </svg>
      </motion.div>

      {/* Counter-rotating inner ring */}
      <motion.div
        className="absolute inset-8"
        animate={reduced ? undefined : { rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            stroke="rgba(77,124,15,0.3)"
            strokeWidth="1"
            strokeDasharray="6 12"
          />
        </svg>
      </motion.div>

      {/* Radar sweep */}
      {!reduced && (
        <div className="absolute inset-12 rounded-full overflow-hidden">
          <div className="absolute inset-0 animate-radar origin-center">
            <div
              className="absolute top-0 left-1/2 h-1/2 w-1/2 origin-bottom-left"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(34,211,238,0.45), rgba(34,211,238,0) 30%)",
                clipPath: "polygon(0 0, 100% 0, 0 100%)",
              }}
            />
          </div>
          <div className="absolute inset-0 rounded-full ring-1 ring-cyan/20" />
        </div>
      )}

      {/* Floating shield (3D parallax) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center preserve-3d"
        style={{ rotateX, rotateY }}
      >
        <motion.div
          className="relative w-[62%] aspect-[1/1.15] preserve-3d"
          animate={
            reduced
              ? undefined
              : { y: [0, -10, 0], rotateZ: [0, 1.5, 0] }
          }
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Glow */}
          <div className="absolute -inset-6 rounded-full bg-cyan/20 blur-3xl animate-pulse-glow" />

          <svg
            viewBox="0 0 200 230"
            className="relative w-full h-full drop-shadow-[0_20px_40px_rgba(34,211,238,0.35)]"
          >
            <defs>
              <linearGradient id="shield-body" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="55%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#050a14" />
              </linearGradient>
              <linearGradient id="shield-edge" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#9a3412" />
              </linearGradient>
              <linearGradient id="shield-shine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
              <filter id="inner-shadow">
                <feGaussianBlur stdDeviation="2" />
              </filter>
            </defs>

            {/* Shield outer */}
            <path
              d="M100 6 L188 38 L188 118 C188 168 152 208 100 224 C48 208 12 168 12 118 L12 38 Z"
              fill="url(#shield-edge)"
            />
            {/* Shield body */}
            <path
              d="M100 14 L180 44 L180 118 C180 162 148 198 100 214 C52 198 20 162 20 118 L20 44 Z"
              fill="url(#shield-body)"
            />
            {/* Shine */}
            <path
              d="M100 14 L180 44 L180 118 C180 162 148 198 100 214 C52 198 20 162 20 118 L20 44 Z"
              fill="url(#shield-shine)"
              opacity="0.5"
            />

            {/* Inner border */}
            <path
              d="M100 28 L168 52 L168 118 C168 156 142 188 100 202 C58 188 32 156 32 118 L32 52 Z"
              fill="none"
              stroke="rgba(34,211,238,0.35)"
              strokeWidth="1.2"
            />

            {/* Tiger silhouette stylized — using a stylized "BT" + tiger stripes */}
            <g transform="translate(100,118)">
              {/* Stripes */}
              {[-32, -22, -12].map((x, i) => (
                <path
                  key={`l-${i}`}
                  d={`M${x} -28 L${x - 10} 28`}
                  stroke="#f97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity={0.85 - i * 0.15}
                />
              ))}
              {[12, 22, 32].map((x, i) => (
                <path
                  key={`r-${i}`}
                  d={`M${x} -28 L${x + 10} 28`}
                  stroke="#f97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity={0.85 - i * 0.15}
                />
              ))}

              {/* Center monogram BT */}
              <text
                x="0"
                y="14"
                textAnchor="middle"
                fontFamily="Rajdhani, system-ui, sans-serif"
                fontSize="48"
                fontWeight="700"
                fill="#e5e7eb"
                letterSpacing="-1"
              >
                BT
              </text>
            </g>

            {/* Bottom banner */}
            <g transform="translate(100,178)">
              <rect
                x="-44"
                y="-8"
                width="88"
                height="16"
                fill="#4d7c0f"
                opacity="0.9"
              />
              <text
                x="0"
                y="4"
                textAnchor="middle"
                fontFamily="Rajdhani, system-ui, sans-serif"
                fontSize="10"
                fontWeight="700"
                fill="#0b1220"
                letterSpacing="2"
              >
                ALWAYS ALERT
              </text>
            </g>

            {/* Top star */}
            <g transform="translate(100,46)">
              <polygon
                points="0,-10 2.9,-3.1 10,-3.1 4.1,1.2 6.5,8 0,4 -6.5,8 -4.1,1.2 -10,-3.1 -2.9,-3.1"
                fill="#f97316"
              />
            </g>
          </svg>

          {/* Orbiting dot */}
          {!reduced && (
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan shadow-[0_0_16px_4px_rgba(34,211,238,0.6)]" />
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Coordinate readouts */}
      <div className="pointer-events-none absolute inset-0 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan/70">
        <span className="absolute top-3 left-3">N 15.5937°</span>
        <span className="absolute top-3 right-3">E 73.8142°</span>
        <span className="absolute bottom-3 left-3">SECTOR 04</span>
        <span className="absolute bottom-3 right-3">STATUS · LIVE</span>
      </div>
    </div>
  )
}
