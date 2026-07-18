# GAMBA WORKWEAR — Sitio Web Corporativo

Sitio web premium para GAMBA WORKWEAR, fabricante y comercializador colombiano
de dotaciones empresariales: chaquetas industriales, chalecos corporativos,
jeans industriales, camisas, polos, botas de seguridad, bordado computarizado
y uniformes corporativos.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (animaciones)
- **Lucide Icons**
- Mobile-first, responsive, optimizado para SEO

## Identidad visual

| Token | Valor |
|---|---|
| Negro profundo | `#0A0A0A` |
| Negro secundario | `#121212` |
| Dorado principal | `#D4A034` |
| Dorado brillante | `#F2C14E` |
| Blanco | `#FFFFFF` |
| Gris | `#9CA3AF` |

Tipografía: **Oswald** (display, condensada, industrial) + **Inter** (texto)
+ **JetBrains Mono** (etiquetas / tags, en mayúsculas trackeadas, como una
etiqueta de cuidado de prenda).

Elemento de firma: la **costura** (`.seam` en `globals.css`), una línea
punteada dorada que evoca la doble puntada de las prendas de dotación, usada
como divisor estructural entre secciones. Se combina con esquinas cortadas en
diagonal (`.cut-corner`) que recuerdan un corte de sastrería.

## Primeros pasos

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/
  layout.tsx       # Metadata, SEO, fuentes
  page.tsx         # Ensambla todas las secciones + JSON-LD
  globals.css      # Tokens de diseño, utilidades de firma visual
  robots.ts        # robots.txt dinámico
  sitemap.ts        # sitemap.xml dinámico
components/
  sections/        # Navbar, Hero, Benefits, About, Products, Customization,
                    # Gallery, Clients, Testimonials, CTA, ContactForm,
                    # Footer, WhatsAppFloat
  ui/               # Button, Eyebrow, SeamDivider
lib/
  data.ts          # Contenido: productos, testimonios, clientes, galería
```

## Configuración necesaria antes de publicar

1. **WhatsApp**: reemplace `WHATSAPP_NUMBER` en `lib/data.ts` por el número real
   (formato internacional sin `+`, ej. `573001234567`).
2. **Formulario de contacto**: `components/sections/ContactForm.tsx` simula el
   envío. Conéctelo a su backend, a un servicio como Resend/Formspree, o a una
   API route de Next.js (`app/api/contacto/route.ts`).
3. **Imágenes**: las imágenes de producto, galería y hero usan Unsplash como
   placeholder de alta calidad. Reemplácelas por fotografía real de producto en
   `lib/data.ts` (rutas locales en `public/images/` o su propio CDN). Si usa
   otro dominio de imágenes, agréguelo a `images.remotePatterns` en
   `next.config.ts`.
4. **Dominio y SEO**: actualice `siteUrl` en `app/layout.tsx`, `app/sitemap.ts`
   y `app/robots.ts` con el dominio final.
5. **Datos de contacto**: teléfono, correo y dirección están en
   `components/sections/ContactForm.tsx` y `components/sections/Footer.tsx`.
6. **Logos de clientes**: la sección "Clientes" usa texto; si dispone de logos
   reales en PNG/SVG, reemplace el arreglo `clients` en `lib/data.ts` por
   imágenes.

## Build de producción

```bash
npm run build
npm run start
```

> Nota: el build necesita conexión a internet para descargar las fuentes de
> Google (Oswald, Inter, JetBrains Mono) vía `next/font/google`, que luego
> quedan auto-alojadas en el bundle final.
