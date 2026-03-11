"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 scale-105"
        style={{
          background: `
            linear-gradient(105deg, rgba(14,14,14,0.94) 0%, rgba(14,14,14,0.65) 55%, rgba(14,14,14,0.25) 100%),
            url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1900&q=85') center/cover no-repeat
          `,
          animation: "heroZoom 14s ease-in-out infinite alternate",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Diagonal accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[35%] opacity-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 0%, var(--red) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-10 md:px-16 max-w-4xl pt-24">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 bg-[rgba(255,59,59,0.12)] border border-[rgba(255,59,59,0.28)] px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] animate-pulse-dot" />
          <span className="font-condensed font-semibold text-[11px] tracking-[3px] uppercase text-[var(--red2)]">
            Now Accepting New Members
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-bebas leading-[0.9] tracking-[2px]"
          style={{ fontSize: "clamp(72px, 11vw, 148px)" }}
        >
          TRAIN HARD.
          <br />
          <span className="text-[var(--red)]">TRANSFORM</span>
          <br />
          YOUR BODY.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/60 text-base md:text-[17px] leading-[1.8] max-w-[480px] mt-6 font-light"
        >
          State-of-the-art equipment, expert trainers, and a community that
          pushes you further than you ever imagined.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href="#membership"
            className="inline-flex items-center gap-2.5 bg-[var(--red)] text-white font-condensed font-bold text-sm tracking-[2px] uppercase px-10 py-4 hover:bg-[var(--red2)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,59,59,0.4)] transition-all duration-300 no-underline"
          >
            <span>⚡</span> Join Now
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-transparent text-white font-condensed font-bold text-sm tracking-[2px] uppercase px-10 py-4 border border-white/25 hover:border-white hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-300 no-underline"
          >
            Book Free Trial
          </a>
        </motion.div>
      </div>

      {/* Stats — bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-16 right-10 md:right-16 z-10 hidden md:flex gap-12"
      >
        {[
          { num: "500+", label: "Active Members" },
          { num: "10+", label: "Expert Trainers" },
          { num: "5+", label: "Years Strong" },
        ].map((s) => (
          <div key={s.label}>
            <div className="font-bebas text-[52px] leading-none">
              {s.num.replace("+", "")}
              <span className="text-[var(--red)]">+</span>
            </div>
            <div className="font-condensed text-[11px] tracking-[2px] uppercase text-white/50 mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="font-condensed text-[10px] tracking-[3px] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent animate-scroll-line" />
      </motion.div>

      <style jsx>{`
        @keyframes heroZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
