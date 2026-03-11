"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./Shared";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Member since 2022",
    initials: "RS",
    stars: 5,
    text: "IronForge completely transformed how I train. The coaches pushed me past limits I didn't know I had. Lost 18kg in 5 months — best decision of my life.",
  },
  {
    name: "Priya Nair",
    role: "Member since 2023",
    initials: "PN",
    stars: 5,
    text: "As a beginner, I was nervous walking in. The trainers were welcoming, patient, and incredibly knowledgeable. Now I can't imagine life without this gym.",
  },
  {
    name: "Arjun Mehta",
    role: "Member since 2021",
    initials: "AM",
    stars: 5,
    text: "The 24/7 access, premium equipment, and the community here is unmatched. I've been to gyms across the city — IronForge is in a completely different league.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[var(--bg2)] py-28 md:py-36 px-10 md:px-16 overflow-hidden">
      <SectionHeader label="Success Stories" title="WHAT MEMBERS SAY" highlight="MEMBERS SAY" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[var(--bg)] border border-[var(--border)] p-10 hover:border-[rgba(255,59,59,0.28)] hover:-translate-y-1 transition-all duration-400 cursor-default"
          >
            {/* Quote mark */}
            <div className="font-bebas text-[80px] leading-[0.7] text-[var(--red)] opacity-25 mb-2 select-none">
              "
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, idx) => (
                <span key={idx} className="text-[var(--red)] text-base">★</span>
              ))}
            </div>

            {/* Text */}
            <p className="text-white/65 text-[15px] leading-[1.85] italic font-light mb-7">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full border-2 border-[rgba(255,59,59,0.3)] bg-[var(--bg2)] flex items-center justify-center font-bebas text-lg text-[var(--red)] flex-shrink-0">
                {t.initials}
              </div>
              <div>
                <div className="font-condensed font-bold text-[15px]">{t.name}</div>
                <div className="text-[var(--gray)] text-[12px] mt-0.5 tracking-[1px]">
                  {t.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
