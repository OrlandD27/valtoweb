import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ValueProposition from "@/components/ValueProposition";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CreditCalculator from "@/components/CreditCalculator";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingSocial from "@/components/FloatingSocial";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <ValueProposition />
      <About />
      <Process />
      <Testimonials />
      <CreditCalculator />
      <Gallery />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
      <FloatingSocial />
    </main>
  );
}
