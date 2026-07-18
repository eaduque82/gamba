"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import { products } from "@/lib/data";

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Placeholder submit — wire up to your backend / email service here.
    setTimeout(() => setStatus("success"), 900);
  };

  return (
    <section id="contacto" className="relative bg-carbon-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-5 gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <Eyebrow>Contacto</Eyebrow>
          <h2 className="font-display uppercase text-[clamp(1.8rem,3.5vw,2.6rem)] text-white leading-tight">
            Cuéntenos qué necesita su equipo
          </h2>
          <p className="mt-5 text-steel-300 leading-relaxed">
            Complete el formulario y uno de nuestros asesores comerciales se
            pondrá en contacto con una propuesta a la medida.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-3 text-sm text-steel-300">
              <Phone size={18} className="text-gold-400" /> +57 300 123 4567
            </li>
            <li className="flex items-center gap-3 text-sm text-steel-300">
              <Mail size={18} className="text-gold-400" /> ventas@gambaworkwear.com
            </li>
            <li className="flex items-center gap-3 text-sm text-steel-300">
              <MapPin size={18} className="text-gold-400" /> Bogotá D.C., Colombia
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3 bg-carbon-950 border border-white/10 p-7 md:p-10 cut-corner"
        >
          {status === "success" ? (
            <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center py-10">
              <CheckCircle2 size={44} className="text-gold-400" />
              <h3 className="font-display uppercase text-xl text-white mt-5">
                Solicitud enviada
              </h3>
              <p className="text-steel-400 text-sm mt-2 max-w-xs">
                Gracias por escribirnos. Un asesor de GAMBA WORKWEAR se
                comunicará con usted muy pronto.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
              <Field label="Nombre" name="nombre" required />
              <Field label="Empresa" name="empresa" required />
              <Field label="Correo" name="correo" type="email" required />
              <Field label="Teléfono" name="telefono" type="tel" required />

              <div className="sm:col-span-2">
                <label htmlFor="productos" className="tag-label text-xs text-steel-400 block mb-2">
                  Productos de interés
                </label>
                <select
                  id="productos"
                  name="productos"
                  required
                  defaultValue=""
                  className="w-full bg-carbon-900 border border-white/15 text-white px-4 py-3 text-sm focus:border-gold-400 focus:outline-none transition-colors"
                >
                  <option value="" disabled>
                    Seleccione uno o varios productos
                  </option>
                  {products.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.title}
                    </option>
                  ))}
                  <option value="otro">Otro / Dotación completa</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="mensaje" className="tag-label text-xs text-steel-400 block mb-2">
                  Mensaje (opcional)
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="Cuéntenos el número de colaboradores, plazos o detalles de su dotación"
                  className="w-full bg-carbon-900 border border-white/15 text-white px-4 py-3 text-sm placeholder:text-steel-600 focus:border-gold-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-white disabled:opacity-60 text-carbon-950 font-display uppercase tracking-wide text-sm px-7 py-4 cut-corner-sm transition-colors duration-300"
              >
                {status === "submitting" ? "Enviando..." : "Enviar solicitud"}
                {status !== "submitting" && <Send size={16} />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="tag-label text-xs text-steel-400 block mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-carbon-900 border border-white/15 text-white px-4 py-3 text-sm placeholder:text-steel-600 focus:border-gold-400 focus:outline-none transition-colors"
      />
    </div>
  );
}
