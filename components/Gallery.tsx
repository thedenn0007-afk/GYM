"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "./Shared";

const images = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80",
    alt: "Gym floor",
    label: "Main Floor",
    span: true,
  },
  {
    src: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&q=80",
    alt: "Weight room",
    label: "Weight Room",
  },
  {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80",
    alt: "Cardio zone",
    label: "Cardio Zone",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
    alt: "CrossFit area",
    label: "CrossFit Area",
  },
  {
    src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80",
    alt: "Personal training",
    label: "PT Sessions",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[var(--bg)] py-28 md:py-36 px-10 md:px-16">
      <SectionHeader label="Our Space" title="TRANSFORMATION GALLERY" highlight="GALLERY" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mt-16"
        style={{ gridTemplateRows: "280px 280px" }}
      >
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className={`group relative overflow-hidden bg-[var(--bg2)] ${
              img.span ? "row-span-2 col-span-1" : ""
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-[1.07] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-[rgba(8,8,8,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="font-bebas text-base tracking-[3px] border border-white/50 px-6 py-2.5 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                {img.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
