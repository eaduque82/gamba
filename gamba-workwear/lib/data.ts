export type Product = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: "chaquetas",
    title: "Chaquetas Industriales",
    description:
      "Confeccionadas en tela resistente al desgaste, con costuras reforzadas y espacio para bordado corporativo en pecho y espalda.",
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "chalecos",
    title: "Chalecos Corporativos",
    description:
      "Ideales para identificación rápida en obra o planta, con cintas reflectivas opcionales y bolsillos funcionales.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "jeans-industriales",
    title: "Jeans Industriales",
    description:
      "Denim de alto gramaje pensado para jornadas exigentes, con refuerzos en zonas de mayor fricción y corte ergonómico.",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "camisas-corporativas",
    title: "Camisas Empresariales",
    description:
      "Presentación impecable para atención al cliente y áreas administrativas, en telas de fácil planchado.",
    image:
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "polos-corporativos",
    title: "Polos Empresariales",
    description:
      "Comodidad y frescura para equipos operativos y comerciales, disponibles en la paleta de color de su marca.",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "botas-seguridad",
    title: "Botas de Seguridad",
    description:
      "Calzado industrial certificado, con puntera de protección y suela antideslizante para entornos de alto riesgo.",
    image:
      "https://images.unsplash.com/photo-1544966503-7ad532f2ef98?auto=format&fit=crop&w=1200&q=80",
  },
];

export const customizationServices = [
  {
    title: "Bordado Computarizado",
    description: "Logos con precisión milimétrica y acabado duradero, resistente al lavado industrial.",
  },
  {
    title: "Estampado",
    description: "Serigrafía y transfer de alta definición para diseños a gran escala o full color.",
  },
  {
    title: "Reflectivos",
    description: "Cintas certificadas para visibilidad y seguridad en jornadas nocturnas o de bajo tráfico.",
  },
  {
    title: "Logos Corporativos",
    description: "Reproducción exacta de su manual de marca en cada prenda de la dotación.",
  },
  {
    title: "Numeración",
    description: "Identificación individual de colaboradores para control de inventario y trazabilidad.",
  },
  {
    title: "Identidad Visual",
    description: "Asesoría en color y composición para que el uniforme comunique la cultura de su empresa.",
  },
];

export const benefits = [
  {
    title: "Fabricación Nacional",
    description: "Producción 100% colombiana con control de calidad en cada etapa del proceso.",
  },
  {
    title: "Bordado Computarizado",
    description: "Tecnología de punto exacto para un acabado corporativo nítido y duradero.",
  },
  {
    title: "Personalización Corporativa",
    description: "Cada dotación se adapta a la identidad visual y necesidades operativas de su equipo.",
  },
  {
    title: "Materiales de Alta Calidad",
    description: "Telas técnicas seleccionadas para resistencia, comodidad y larga vida útil.",
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1622045451578-e2143eb69c72?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
];

export const clients = [
  "CONSTRUCOL",
  "LOGITRANS",
  "INDUFERRIA",
  "VIALCO",
  "MINERGRUPO",
  "TRANSANDINA",
  "OBRACIVIL S.A.",
  "PORTUARIA DEL NORTE",
];

export const testimonials = [
  {
    name: "Andrea Ríos",
    role: "Gerente de Talento Humano, LOGITRANS",
    quote:
      "La dotación que GAMBA WORKWEAR diseñó para nuestro equipo elevó por completo la percepción de nuestra marca en obra. El bordado quedó impecable.",
  },
  {
    name: "Carlos Peña",
    role: "Director de Operaciones, INDUFERRIA",
    quote:
      "Cumplimiento en tiempos de entrega y una calidad de tela que soporta jornadas de doce horas sin desgastarse. Son nuestro proveedor de confianza.",
  },
  {
    name: "Marcela Torres",
    role: "Jefe de Compras, CONSTRUCOL",
    quote:
      "El proceso de personalización fue muy claro desde la cotización hasta la entrega. Hoy todo nuestro equipo viste con identidad corporativa real.",
  },
];

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Personalización", href: "#personalizacion" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

export const WHATSAPP_NUMBER = "573001234567";
export const WHATSAPP_MESSAGE =
  "Hola GAMBA WORKWEAR, quiero solicitar una cotización para la dotación de mi empresa.";
