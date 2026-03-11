"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "./Shared";

const stats = [
  { num: "500+", label: "Active Members" },
  { num: "10+", label: "Expert Trainers" },
  { num: "98%", label: "Success Rate" },
];

export default function About() {
  return (
    <section id="about" className="bg-[var(--bg)] py-28 md:py-36 px-10 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80"
              alt="Gym training"
              fill
              className="object-cover grayscale-[20%]"
            />
          </div>
          {/* Accent box behind */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[var(--red)] -z-10" />
          {/* Floating badge */}
          <div className="absolute -left-6 bottom-10 bg-[var(--bg)] border border-[var(--border)] px-7 py-5">
            <div className="font-bebas text-5xl text-[var(--red)] leading-none">5+</div>
            <div className="font-condensed text-[11px] tracking-[2px] uppercase text-[var(--gray)] mt-1">
              Years of Excellence
            </div>
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader label="Our Story" title="BUILT FOR REAL RESULTS" highlight="REAL RESULTS" />

          <p className="text-white/55 text-base leading-[1.85] mt-6 font-light">
            IronForge Gym was founded on one belief: that everyone deserves
            access to world-class training. Our facility combines
            professional-grade equipment with science-driven programming —
            creating an environment where ordinary people achieve extraordinary
            things.
          </p>
          <p className="text-white/55 text-base leading-[1.85] mt-4 font-light">
            Whether you&apos;re just starting out or you&apos;re a seasoned
            athlete, our coaches will meet you exactly where you are and take
            you further than you thought possible.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="border-t-2 border-[var(--red)] pt-5"
              >
                <div className="font-bebas text-[44px] leading-none">{s.num}</div>
                <div className="font-condensed text-[11px] tracking-[1px] uppercase text-[var(--gray)] mt-1">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#membership"
              className="inline-flex items-center gap-2.5 bg-[var(--red)] text-white font-condensed font-bold text-sm tracking-[2px] uppercase px-10 py-4 hover:bg-[var(--red2)] hover:-translate-y-0.5 transition-all duration-300 no-underline"
            >
              Start Your Journey
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
