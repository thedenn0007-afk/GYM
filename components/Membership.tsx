"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./Shared";

const plans = [
  {
    tier: "Basic",
    price: "999",
    features: [
      "Full gym access (6am–10pm)",
      "All cardio equipment",
      "Free weights & machines",
      "Locker & shower access",
      "2 group classes / month",
    ],
    featured: false,
  },
  {
    tier: "Standard",
    price: "1,999",
    badge: "Most Popular",
    features: [
      "Full gym access (24/7)",
      "All cardio equipment",
      "Free weights & machines",
      "Locker & shower access",
      "Unlimited group classes",
      "Monthly fitness assessment",
      "Diet consultation",
    ],
    featured: true,
  },
  {
    tier: "Premium",
    price: "2,999",
    features: [
      "Full gym access (24/7)",
      "All cardio & equipment",
      "Free weights & machines",
      "Locker & shower access",
      "Unlimited group classes",
      "4 PT sessions / month",
      "Personalized meal plan",
      "Priority booking",
    ],
    featured: false,
  },
];

export default function Membership() {
  return (
    <section id="membership" className="bg-[var(--bg)] py-28 md:py-36 px-10 md:px-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <SectionHeader
          label="Pricing Plans"
          title="MEMBERSHIP PLANS"
          highlight="MEMBERSHIP"
        />
        <p className="text-white/50 text-sm max-w-xs leading-relaxed font-light">
          Flexible plans to match your goals and budget. No hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.tier}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`relative p-12 flex flex-col transition-transform duration-300 ${
              plan.featured
                ? "bg-[var(--red)] md:scale-[1.025]"
                : "bg-[var(--bg2)] hover:-translate-y-2"
            }`}
          >
            {/* Badge */}
            {plan.badge && (
              <span className="absolute top-6 right-6 bg-white/15 font-condensed text-[10px] tracking-[2px] uppercase px-3 py-1">
                {plan.badge}
              </span>
            )}

            {/* Tier */}
            <div className="font-condensed text-[12px] tracking-[3px] uppercase opacity-60 mb-4">
              {plan.tier}
            </div>

            {/* Price */}
            <div className="font-bebas text-[70px] leading-none flex items-start gap-1">
              <sup className="text-[28px] mt-3">₹</sup>
              {plan.price}
              <sub className="text-[18px] self-end mb-2.5 opacity-60">/mo</sub>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/15 my-8" />

            {/* Features */}
            <ul className="flex flex-col gap-3.5 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                  <span
                    className={`font-bold text-[13px] mt-0.5 flex-shrink-0 ${
                      plan.featured ? "text-white" : "text-[var(--red)]"
                    }`}
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className={`mt-9 block text-center font-condensed font-bold text-[13px] tracking-[2px] uppercase py-3.5 border transition-all duration-300 no-underline ${
                plan.featured
                  ? "bg-white/15 border-transparent hover:bg-white/25 text-white"
                  : "border-white/20 text-white hover:bg-[var(--red)] hover:border-[var(--red)]"
              }`}
            >
              Join Now
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
