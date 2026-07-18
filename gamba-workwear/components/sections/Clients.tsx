"use client";

import { motion } from "framer-motion";
import { clients } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Clients() {
  const loop = [...clients, ...clients];

  return (
    <section id="clientes" className="relative bg-carbon-900 py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 text-center mb-14">
        <Eyebrow>Confianza</Eyebrow>
        <h2 className="font-display uppercase text-[clamp(1.6rem,3vw,2.4rem)] text-white leading-tight max-w-2xl mx-auto">
          Empresas de construcción, logística, transporte e industria confían en GAMBA WORKWEAR
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-carbon-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-carbon-900 to-transparent z-10" />

        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="font-display uppercase text-xl md:text-2xl text-steel-500 tracking-wider whitespace-nowrap hover:text-gold-400 transition-colors"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
