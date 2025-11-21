"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CreditCard, TrendingUp, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect } from "react";
import Lenis from '@studio-freight/lenis';

const services = [
  {
    icon: GraduationCap,
    title: "Capacitación Empresarial",
    description:
      "Formación teórica y práctica extraída de las mejores escuelas de negocios para fortalecer la toma de decisiones en tu empresa.",
    features: [
      "Material de élite de escuelas de negocios",
      "Programas de formación especializados",
      "Talleres prácticos para tomadores de decisiones",
    ],
    color: "from-[#002677] to-[#0047BB]",
    bgGradient: "linear-gradient(135deg, #002677 0%, #0047BB 100%)",
    iconBg: "linear-gradient(135deg, #002677 0%, #0047BB 100%)",
    link: "/servicios/capacitacion-empresarial"
  },
  {
    icon: CreditCard,
    title: "Consultoría de Negocios",
    description:
      "Te acompañamos desde la creación hasta el crecimiento de tu empresa, desarrollando estrategias para alcanzar tus objetivos.",
    features: [
      "Constitución de empresas y razón social",
      "Inscripción en Registros Públicos",
      "Definición de público objetivo",
      "Desarrollo de estrategias de negocio",
    ],
    color: "from-[#002677] to-[#0047BB]",
    bgGradient: "linear-gradient(135deg, #002677 0%, #0047BB 100%)",
    iconBg: "linear-gradient(135deg, #002677 0%, #0047BB 100%)",
    link: "/servicios/consultoria-negocios"
  },
  {
    icon: TrendingUp,
    title: "Consultoría Financiera",
    description:
      "Gestión estratégica de ingresos, inversión y financiamiento para optimizar la toma de decisiones financieras en tu empresa.",
    features: [
      "Distribución óptima de recursos",
      "Inversión en capital de trabajo y activos fijos",
      "Mapeo del ciclo financiero",
      "Optimización de decisiones financieras",
    ],
    color: "from-[#002677] to-[#0047BB]",
    bgGradient: "linear-gradient(135deg, #002677 0%, #0047BB 100%)",
    iconBg: "linear-gradient(135deg, #002677 0%, #0047BB 100%)",
    link: "/servicios/consultoria-financiera"
  },
  {
    icon: GraduationCap,
    title: "Formación de Emprendedores",
    description:
      "Transforma tu mentalidad emprendedora en habilidades empresariales sólidas con conocimiento, estrategia y soft skills.",
    features: [
      "Desarrollo de mentalidad empresarial",
      "Habilidades financieras prácticas",
      "Soft skills esenciales para el éxito",
    ],
    color: "from-[#002677] to-[#0047BB]",
    bgGradient: "linear-gradient(135deg, #002677 0%, #0047BB 100%)",
    iconBg: "linear-gradient(135deg, #002677 0%, #0047BB 100%)",
    link: "/servicios/formacion-emprendedores"
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  });

  // Movimiento horizontal basado en scroll
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 100 : -100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        x,
        opacity,
      }}
      className="mb-6"
    >
      <Link href={service.link}>
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
          style={{ borderLeftColor: '#0047BB' }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            {/* Icon con gradient VALTO */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md"
              style={{ background: service.iconBg }}
            >
              <service.icon className="w-7 h-7 text-white" />
            </motion.div>

            <div className="flex-1">
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#0047BB]" style={{ fontFamily: 'Futura, sans-serif' }}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-700 mb-3 leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
                {service.description}
              </p>

              {/* Features en grid horizontal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {service.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex items-start text-gray-700"
                  >
                    <svg
                      className="w-4 h-4 text-[#0047BB] mr-2 mt-0.5 flex-shrink-0"
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
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Arrow indicator - Solo en desktop */}
            <motion.div
              whileHover={{ x: 5 }}
              className="hidden md:flex w-10 h-10 rounded-full items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #002677 0%, #0047BB 100%)' }}
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </div>
      </Link>
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link href="/servicios">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-2xl relative overflow-hidden group"
              style={{ 
                backgroundColor: '#0047BB',
              }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: '#003088' }}
              />
              
              <span className="relative z-10">Ver Todos los Servicios</span>
              
              <motion.div
                className="relative z-10"
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.div>

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                }}
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
