"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "./Shared";

const trainers = [
  {
    name: "Alex Carter",
    spec: "Strength Coach",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80",
    bio: "NSCA-certified strength coach with 8 years of competitive powerlifting experience.",
  },
  {
    name: "Maya Singh",
    spec: "Personal Trainer",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
    bio: "ACE-certified personal trainer specializing in body recomposition and functional fitness.",
  },
  {
    name: "Daniel Lee",
    spec: "CrossFit Coach",
    img: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=600&q=80",
    bio: "CrossFit Level 2 coach and former collegiate athlete passionate about athletic performance.",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="bg-[var(--bg2)] py-28 md:py-36 px-10 md:px-16">
      <SectionHeader label="Meet the Team" title="EXPERT TRAINERS" highlight="TRAINERS" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {trainers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden aspect-[3/4] bg-[var(--bg3)] cursor-default"
          >
            {/* Photo */}
            <Image
              src={t.img}
              alt={t.name}
              fill
              className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-[1.06] transition-all duration-700 ease-out"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.95)] via-[rgba(8,8,8,0.35)] to-transparent" />

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="font-condensed text-[11px] tracking-[3px] uppercase text-[var(--red)] mb-1.5">
                {t.spec}
              </div>
              <div className="font-bebas text-[32px] tracking-[2px] leading-none">
                {t.name}
              </div>
              <p className="text-white/60 text-[13px] leading-relaxed mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {t.bio}
              </p>

              {/* Social icons */}
              <div className="flex gap-3 mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150">
                {["𝕏", "📸", "in"].map((icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm hover:bg-[var(--red)] transition-colors duration-300 no-underline"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
