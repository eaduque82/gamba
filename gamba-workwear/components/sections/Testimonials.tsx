"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Testimonials() {
  return (
    <section className="relative bg-carbon-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Eyebrow>Testimonios</Eyebrow>
        <h2 className="font-display uppercase text-[clamp(1.8rem,3.5vw,2.8rem)] text-white leading-tight max-w-xl">
          La voz de quienes ya visten GAMBA
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-carbon-900 border border-white/5 p-8 flex flex-col cut-corner-sm"
            >
              <Quote className="text-gold-500/60" size={28} />
              <blockquote className="mt-5 text-steel-300 leading-relaxed text-sm flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-white/10">
                <p className="font-display uppercase text-sm text-white tracking-wide">{t.name}</p>
                <p className="text-xs text-steel-500 mt-1">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
