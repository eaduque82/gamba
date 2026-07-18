"use client";

import { motion } from "framer-motion";
import { Factory, Sparkles, Shapes, ShieldCheck } from "lucide-react";
import { benefits } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

const icons = [Factory, Sparkles, Shapes, ShieldCheck];

export default function Benefits() {
  return (
    <section className="relative bg-carbon-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Eyebrow>Por qué GAMBA</Eyebrow>
        <h2 className="font-display uppercase text-[clamp(1.8rem,3.5vw,2.8rem)] text-white max-w-2xl leading-tight">
          Cada detalle piensa en su equipo
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {benefits.map((benefit, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-carbon-950 p-8 group hover:bg-carbon-900 transition-colors duration-300"
              >
                <Icon className="text-gold-400" size={30} strokeWidth={1.5} />
                <h3 className="font-display uppercase text-lg text-white mt-6 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-steel-400 leading-relaxed">{benefit.description}</p>
                <span className="block mt-6 h-px w-8 bg-gold-500 group-hover:w-14 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
