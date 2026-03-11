"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./Shared";

const hours = [
  { day: "Monday – Friday", time: "5:00 AM – 11:00 PM" },
  { day: "Saturday", time: "6:00 AM – 10:00 PM" },
  { day: "Sunday", time: "7:00 AM – 9:00 PM" },
  { day: "Public Holidays", time: "8:00 AM – 6:00 PM" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--bg)] py-28 md:py-36 px-10 md:px-16">
      <SectionHeader label="Get in Touch" title="CONTACT US" highlight="CONTACT" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-16">
        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            {
              icon: "📍",
              label: "Address",
              value: "42, Fitness Boulevard, Indiranagar\nBengaluru, Karnataka 560038",
            },
            {
              icon: "📞",
              label: "Phone",
              value: "+91 98765 43210\n+91 80 1234 5678",
            },
            {
              icon: "✉️",
              label: "Email",
              value: "hello@ironforge.in\nmembership@ironforge.in",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex gap-5 items-start py-6 border-b border-[var(--border)]"
            >
              <div className="w-11 h-11 bg-[rgba(255,59,59,0.1)] flex items-center justify-center text-xl flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="font-condensed text-[11px] tracking-[2px] uppercase text-[var(--red)] mb-1.5">
                  {item.label}
                </div>
                <div className="text-white/75 text-[15px] leading-[1.65] whitespace-pre-line">
                  {item.value}
                </div>
              </div>
            </div>
          ))}

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-condensed font-bold text-[13px] tracking-[2px] uppercase px-7 py-3.5 mt-8 hover:bg-[#128C7E] hover:-translate-y-0.5 transition-all duration-300 no-underline"
          >
            💬 Chat on WhatsApp
          </a>
        </motion.div>

        {/* Right — Hours + Map */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-condensed font-bold text-[13px] tracking-[2px] uppercase mb-5">
            Opening Hours
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {hours.map((h) => (
              <div
                key={h.day}
                className="bg-[var(--bg2)] border-l-[3px] border-transparent hover:border-[var(--red)] px-4 py-4 transition-colors duration-300"
              >
                <div className="font-condensed text-[11px] tracking-[1px] uppercase text-[var(--gray)]">
                  {h.day}
                </div>
                <div className="text-[15px] mt-1">{h.time}</div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="relative bg-[var(--bg2)] border border-[var(--border)] h-64 flex flex-col items-center justify-center gap-3 overflow-hidden">
            <div className="text-4xl">📍</div>
            <p className="font-condensed text-[12px] tracking-[2px] uppercase text-[var(--gray)]">
              42, Fitness Boulevard, Bengaluru
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-condensed font-bold text-[11px] tracking-[2px] uppercase text-[var(--red)] border border-[rgba(255,59,59,0.3)] px-5 py-2 hover:bg-[rgba(255,59,59,0.1)] transition-colors duration-300 no-underline"
            >
              Open in Google Maps
            </a>
            {/* Background grid lines */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(var(--white) 1px, transparent 1px), linear-gradient(90deg, var(--white) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
