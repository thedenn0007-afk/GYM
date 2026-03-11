"use client";

import { motion } from "framer-motion";
import { Ticker, SectionHeader } from "./Shared";

const programs = [
  {
    num: "01",
    icon: "🏋️",
    name: "Strength Training",
    desc: "Build raw power and muscle mass with our progressive overload programs designed by certified strength coaches.",
  },
  {
    num: "02",
    icon: "🏃",
    name: "Cardio Fitness",
    desc: "Torch calories and boost endurance with structured HIIT and steady-state cardio routines tailored to your level.",
  },
  {
    num: "03",
    icon: "🎯",
    name: "Personal Training",
    desc: "One-on-one coaching tailored exclusively to your body type, fitness level, and specific transformation goals.",
  },
  {
    num: "04",
    icon: "🔥",
    name: "Cross Training",
    desc: "Varied functional movements at high intensity — build all-around athleticism and injury-resistant resilience.",
  },
  {
    num: "05",
    icon: "⚡",
    name: "Weight Loss",
    desc: "Science-backed fat-loss programs combining nutrition guidance, cardio, and resistance training for lasting results.",
  },
  {
    num: "06",
    icon: "💪",
    name: "Muscle Building",
    desc: "Hypertrophy-focused training splits with progressive volume to maximize lean muscle growth and definition.",
  },
];

export default function Programs() {
  return (
    <>
      <Ticker />
      <section id="programs" className="bg-[var(--bg2)] py-28 md:py-36 px-10 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            label="What We Offer"
            title="OUR PROGRAMS"
            highlight="PROGRAMS"
          />
          <p className="text-white/50 text-[15px] leading-relaxed max-w-xs font-light">
            Built for every goal — from first-time gym-goers to elite athletes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {programs.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-[var(--bg3)] p-10 overflow-hidden cursor-default
                hover:-translate-y-1 hover:border hover:border-[rgba(255,59,59,0.2)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,59,59,0.07)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Ghost number */}
              <span className="absolute top-4 right-6 font-bebas text-7xl text-white/[0.035] select-none">
                {p.num}
              </span>

              {/* Icon */}
              <div className="w-13 h-13 bg-[rgba(255,59,59,0.1)] flex items-center justify-center text-2xl mb-6 w-[52px] h-[52px] group-hover:bg-[rgba(255,59,59,0.2)] group-hover:scale-105 transition-all duration-300">
                {p.icon}
              </div>

              <h3 className="font-condensed font-bold text-xl tracking-[1px] uppercase mb-3">
                {p.name}
              </h3>
              <p className="text-[var(--gray)] text-sm leading-[1.75]">{p.desc}</p>

              <div className="mt-6 font-condensed font-bold text-xs tracking-[2px] uppercase text-[var(--red)] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                Explore Program →
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
