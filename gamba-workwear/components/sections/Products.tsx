"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Products() {
  return (
    <section id="productos" className="relative bg-carbon-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Eyebrow>Catálogo</Eyebrow>
            <h2 className="font-display uppercase text-[clamp(1.8rem,3.5vw,2.8rem)] text-white leading-tight max-w-xl">
              Línea completa de dotación corporativa
            </h2>
          </div>
          <p className="text-steel-400 max-w-sm text-sm leading-relaxed">
            Cada prenda está lista para recibir el logo, los colores y la
            numeración de su empresa.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.article
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-carbon-900 cut-corner border border-white/5 hover:border-gold-500/40 transition-colors duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/90 via-carbon-950/10 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-display uppercase text-xl text-white">{product.title}</h3>
                <p className="mt-3 text-sm text-steel-400 leading-relaxed">
                  {product.description}
                </p>
                <a
                  href={`#contacto?producto=${product.slug}`}
                  className="mt-6 inline-flex items-center gap-2 tag-label text-xs text-gold-400 hover:text-white transition-colors"
                >
                  Solicitar Cotización
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
