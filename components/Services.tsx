"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CreditCard, TrendingUp, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect } from "react";
import Lenis from '@studio-freight/lenis';

const services = [
  {
    icon: TrendingUp,
    title: "CAPACITACION EMPRESARIAL",
    description:
      "Descubre lo que podemos hacer por ti en el campo financiero: Planeamiento financiero – Flujos de caja – Presupuestos – Análisis de estados financieros – Optimización de gastos y procesos.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    features: [
    ],
    color: "from-[#002677] to-[#0047BB]",
    bgColor: "#E8F0FE",
    link: "/servicios/consultoria-financiera"
  },
  {
    icon: CreditCard,
    title: "CONSULTORIA DE NEGOCIOS",
    description:
      "Descubre lo que podemos hacer por ti en el área contable: Registro de información y auditoría, Presentación de estados financieros con ratios – Renta mensual y anual – Política de control interno – Análisis de estados.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
    features: [
    ],
    color: "from-[#002677] to-[#0047BB]",
    bgColor: "#F0F4F8",
    link: "/servicios/consultoria-negocios"
  },
  {
    icon: GraduationCap,
    title: "CONTULTORIA FINANCIERA",
    description:
      "Conoce nuestro servicio de Gestión Empresarial: Planeamiento financiero y tributario – Diagnóstico empresarial – Planeamiento estratégico – Atención al proceso – Organigrama empresarial – Manuales de función – Flujo de caja.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    features: [
    ],
    color: "from-[#002677] to-[#0047BB]",
    bgColor: "#E8F0FE",
    link: "/servicios/capacitacion-empresarial"
  },
  {
    icon: GraduationCap,
    title: "FORMACION DE EMPRENDEDORES",
    description:
      "Transforma tu mentalidad emprendedora en habilidades empresariales sólidas con conocimiento, estrategia y soft skills.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    features: [
    ],
    color: "from-[#002677] to-[#0047BB]",
    bgColor: "#F0F4F8",
    link: "/servicios/formacion-emprendedores"
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  // Alternar layout: par a la izquierda, impar a la derecha
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y }}
      className="mb-0"
    >
      <div 
        className="grid md:grid-cols-2 min-h-[300px] md:min-h-[400px]"
        style={{ backgroundColor: service.bgColor }}
      >
        {/* Imagen - Izquierda en pares, derecha en impares */}
        <div className={`relative overflow-hidden min-h-[250px] md:min-h-[400px] ${!isEven ? 'md:order-2' : ''}`}>
          <div className="absolute inset-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ 
              background: 'linear-gradient(135deg, rgba(0,38,119,0.7) 0%, rgba(0,71,187,0.5) 100%)'
            }} />
          </div>
        </div>

        {/* Contenido - Derecha en pares, izquierda en impares */}
        <div className={`flex flex-col justify-center p-6 md:p-8 lg:p-12 ${!isEven ? 'md:order-1' : ''}`}>
          <motion.h3 
            className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 md:mb-4 uppercase"
            style={{ color: '#0047BB', fontFamily: 'Futura, Arial, sans-serif' }}
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {service.title}
          </motion.h3>

          <motion.p
            className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed"
            style={{ fontFamily: 'Arial, sans-serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {service.description}
          </motion.p>

          {/* Features List */}
          <motion.div
            className="space-y-2 mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start text-gray-700">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-[#0047BB] mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs md:text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>{feature}</span>
              </div>
            ))}
          </motion.div>

          <Link href={service.link}>
            <motion.button
              className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 rounded-full text-white font-bold text-xs md:text-sm shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: '#0047BB', fontFamily: 'Futura, Arial, sans-serif' }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Más información
              <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  // Inicializar Lenis para smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section className="py-24 relative" style={{ background: '#F5F7FA' }} id="servicios">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-[#0047BB]/10 text-[#0047BB] rounded-full text-sm font-bold" style={{ fontFamily: 'Futura, sans-serif' }}>
              Tu éxito es nuestra máxima prioridad
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-[#0047BB]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontFamily: 'Futura, sans-serif' }}
          >
            Nuestros Servicios
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[#9DA5B3] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            Crecimiento y desarrollo con estrategias personalizadas
          </motion.p>
        </motion.div>

        {/* Services Stack - Cards horizontales con scroll */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA Button */}

      </div>
    </section>
  );
}
