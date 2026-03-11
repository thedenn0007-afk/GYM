"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "./Shared";

const facilities = [
  {
    icon: "🏋️",
    name: "Modern Equipment",
    desc: "600+ sq ft of premium machines and free weights",
  },
  {
    icon: "🚴",
    name: "Cardio Zone",
    desc: "Treadmills, bikes, rowers, ellipticals & more",
  },
  {
    icon: "🔒",
    name: "Locker Rooms",
    desc: "Secure, spacious lockers with 24/7 access",
  },
  {
    icon: "🚿",
    name: "Showers",
    desc: "Hot showers, towels & premium amenities",
  },
  {
    icon: "🏆",
    name: "CrossFit Rig",
    desc: "Full rig with Olympic lifting platform",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="bg-[var(--bg2)] py-28 md:py-36 px-10 md:px-16">
      <SectionHeader label="Our Space" title="WORLD-CLASS FACILITIES" highlight="FACILITIES" />

      {/* Feature image */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative w-full h-[380px] mt-16 mb-16 overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt="Gym facilities"
          fill
          className="object-cover grayscale-[15%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg2)] via-transparent to-[var(--bg2)] opacity-60" />
      </motion.div>

      {/* Facility icons grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[2px]">
        {facilities.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.09 }}
            className="group bg-[var(--bg3)] px-7 py-9 text-center hover:bg-[var(--bg)] hover:-translate-y-1 transition-all duration-400 cursor-default"
          >
            <div className="text-[32px] mb-4 group-hover:scale-110 transition-transform duration-300">
              {f.icon}
            </div>
            <div className="font-condensed font-bold text-[14px] tracking-[1px] uppercase mb-2">
              {f.name}
            </div>
            <div className="text-[var(--gray)] text-[12px] leading-[1.6]">{f.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
