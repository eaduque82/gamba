import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Customization from "@/components/sections/Customization";
import Gallery from "@/components/sections/Gallery";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";
import SeamDivider from "@/components/ui/SeamDivider";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "GAMBA WORKWEAR",
  description:
    "Fabricación y comercialización de dotaciones empresariales premium: chaquetas industriales, chalecos corporativos, jeans industriales, camisas, polos, botas de seguridad y bordado computarizado.",
  url: "https://www.gambaworkwear.com",
  telephone: "+57-300-123-4567",
  email: "ventas@gambaworkwear.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
  areaServed: "CO",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <SeamDivider />
        <About />
        <Products />
        <SeamDivider />
        <Customization />
        <Gallery />
        <Clients />
        <Testimonials />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
