"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import { customizationServices } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";

export default function Customization() {
  return (
    <section id="personalizacion" className="relative bg-carbon-900 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] cut-corner-lg">
            <Image
              src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?auto=format&fit=crop&w=1200&q=80"
              alt="Bordado computarizado sobre prenda corporativa"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gold-400 text-carbon-950 px-6 py-5 cut-corner-sm hidden sm:block">
            <p className="font-display text-3xl leading-none">+300</p>
            <p className="tag-label text-[10px] mt-1">diseños bordados / mes</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2"
        >
          <Eyebrow>Personalización</Eyebrow>
          <h2 className="font-display uppercase text-[clamp(1.8rem,3.5vw,2.8rem)] text-white leading-tight">
            La imagen de una empresa comienza por su uniforme
          </h2>
          <p className="mt-6 text-steel-300 leading-relaxed max-w-lg">
            Convertimos su manual de marca en una dotación coherente, de punta
            a punta, con procesos propios de bordado y estampado.
          </p>

          <ul className="mt-9 grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {customizationServices.map((service) => (
              <li key={service.title} className="flex gap-3">
                <Check size={18} className="text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-display uppercase text-sm text-white tracking-wide">
                    {service.title}
                  </p>
                  <p className="text-xs text-steel-400 mt-1 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button href="#contacto" variant="primary">
              Personalizar mi dotación
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
