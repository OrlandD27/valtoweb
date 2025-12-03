"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Zap, Users, BookOpen, Award, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect } from "react";
import Lenis from '@studio-freight/lenis';

const differentiators = [
  {
    icon: Shield,
    title: "Confianza y Transparencia",
    description: "Te acompañamos en todo el proceso con total claridad.",
    leftDescription: "Trabajamos con <span class='font-bold text-[#0047BB]'>honestidad y claridad total</span> en cada proyecto. Nuestros procesos son transparentes y sin sorpresas, garantizando tu tranquilidad desde el primer contacto hasta el cierre exitoso.",
    features: [
      "Brindamos confianza",
      "Procesos transparentes",
      "Comunicación clara"
    ],
    color: "#0047BB",
  },
  {
    icon: Zap,
    title: "Respuesta Rápida",
    description: "Evaluación en 24 horas. Resultados en tiempo récord para tu negocio.",
    leftDescription: "Entendemos que <span class='font-bold text-[#0047BB]'>el tiempo es dinero</span> en los negocios. Por eso garantizamos evaluación inicial en 24 horas y respuestas ágiles en cada etapa del proyecto.",
    features: [
      "Evaluación en 24 horas",
      "Implementación rápida",
      "Estrategias ágiles"
    ],
    color: "#0047BB",
  },
  {
    icon: Users,
    title: "Asesoría Personalizada",
    description: "Cada empresa es única. Soluciones a medida para tus necesidades específicas.",
    leftDescription: "No hay dos empresas iguales. Por eso ofrecemos <span class='font-bold text-[#0047BB]'>estrategias personalizadas</span> diseñadas específicamente para tu industria, tamaño y objetivos únicos.",
    features: [
      "Análisis personalizado",
      "Estrategias a medida",
      "Seguimiento dedicado"
    ],
    color: "#0047BB",
  },
  {
    icon: BookOpen,
    title: "Centro de Aprendizaje",
    description: "Accede a recursos gratuitos, tutoriales y soluciones rápidas cuando lo necesites.",
    leftDescription: "Tu crecimiento es nuestra prioridad. Accede a nuestro <span class='font-bold text-[#0047BB]'>centro de recursos gratuitos</span> con videos, guías y material educativo para potenciar tu negocio.",
    features: [
      "Videos tutoriales",
      "Guías descargables",
      "Enseñarte a crecer"
    ],
    color: "#0047BB",
    link: "/videos"
  },
  {
    icon: Award,
    title: "Experiencia Certificada",
    description: "Trabajamos +4 años en el sector. ayudando a crecer a muchas empresas.",
    leftDescription: "Nuestro equipo cuenta con <span class='font-bold text-[#0047BB]'>experiencia suficiente</span> y más de 4 años de experiencia transformando pequeñas y medianas empresas en líderes de su sector.",
    features: [
      "+4 años de experiencia",
      "Fortalecimiento empresarial",
      "Casos de éxito probados"
    ],
    color: "#0047BB",
  },
  {
    icon: HeartHandshake,
    title: "Compromiso con tu Éxito",
    description: "No cobramos hasta que tu crédito sea aprobado. Tu éxito es nuestro éxito.",
    leftDescription: "Tu éxito es nuestro éxito. Trabajamos con un <span class='font-bold text-[#0047BB]'>compromiso genuino</span> por alcanzar tus objetivos, acompañándote en cada paso del camino.",
    features: [
      "Orientación 100% al resultado",
      "Seguimiento personalizado",
      "Garantía de satisfacción"
    ],
    color: "#0047BB",
  },
];

export default function ValueProposition() {
  // Lenis smooth scroll
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
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 50%, #FFFFFF 100%)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(0, 71, 187, 0.05)' }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(99, 102, 241, 0.05)' }}
        />
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-3 bg-valto-blue/10 text-[#9DA5B3] rounded-full text-[36px] font-semibold">
              ¿Por qué elegirnos?
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 font-futura-lux">
            <span style={{ color: '#0047BB ' }}>Lo que nos hace</span> <span className="font-bold text-white bg-[#0056D6] px-4 py-2 rounded-lg inline-block" style={{ fontFamily: 'Futura, sans-serif' }}>
                  DIFERENTES
                </span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto font-futura-book">
            No somos solo consultores, somos tu socio estratégico comprometido con tu crecimiento
          </p>
        </motion.div>

        {/* Differentiators Grid - Estilo de la imagen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
          {differentiators.map((item, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const cardRef = useRef<HTMLDivElement>(null);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { scrollYProgress } = useScroll({
              target: cardRef,
              offset: ["start 0.9", "end 0.1"]
            });

            // Alternamos entre izquierda y derecha según el índice
            const isLeft = index % 2 === 0;
            // Para desktop: parallax horizontal
            const xDesktop = useTransform(scrollYProgress, [0, 1], [isLeft ? -150 : 150, 0]);
            // Para móvil: fade in desde abajo
            const yMobile = useTransform(scrollYProgress, [0, 1], [50, 0]);
            const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
            
            return (
              <motion.div
                key={index}
                ref={cardRef}
                className="group w-full"
              >
                {/* Desktop wrapper - con parallax horizontal */}
                <motion.div
                  style={{ 
                    x: xDesktop,
                    opacity 
                  }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="hidden md:block"
                >
                  {item.link ? (
                    <Link href={item.link}>
                      <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full cursor-pointer bg-white">
                        <div className="grid grid-cols-2">
                          {/* Left side - White background */}
                          <div className="p-6 lg:p-8 bg-white">
                            <p className="text-gray-700 text-sm lg:text-base mb-4 leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: item.leftDescription }} />
                            
                            {/* Features list */}
                            <div className="space-y-2">
                              {item.features.map((feature, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                  <div className="w-6 h-6 rounded-full bg-[#0047BB] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                  </div>
                                  <span className="text-gray-700 text-xs lg:text-sm font-medium">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Right side - Blue VALTO background with gradient */}
                          <div className="p-6 lg:p-8 bg-gradient-to-br from-[#002677] to-[#0047BB] flex flex-col justify-center">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-4 bg-white/10 backdrop-blur-sm mx-auto"
                            >
                              <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                            </motion.div>
                            
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 text-center" style={{ fontFamily: 'Futura, sans-serif' }}>
                              {item.title}
                            </h3>
                            
                            <p className="text-white/90 text-sm lg:text-base leading-relaxed text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full bg-white">
                      <div className="grid grid-cols-2">
                        {/* Left side - White background */}
                        <div className="p-6 bg-white">
                          <p className="text-gray-700 text-sm mb-5 leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: item.leftDescription }} />
                          
                          {/* Features list */}
                          <div className="space-y-2.5">
                            {item.features.map((feature, i) => (
                              <div key={i} className="flex items-center space-x-3">
                                <div className="w-5 h-5 rounded-full bg-[#0047BB] flex items-center justify-center flex-shrink-0">
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-gray-700 text-xs font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Right side - Blue VALTO background with gradient */}
                        <div className="p-6 bg-gradient-to-br from-[#002677] to-[#0047BB] flex flex-col justify-center">
                          <motion.div
                            whileHover={{ scale: 1.08 }}
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 bg-white/10 backdrop-blur-sm mx-auto"
                          >
                            <item.icon className="w-8 h-8 text-white" />
                          </motion.div>
                          
                          <h3 className="text-xl font-bold text-white mb-3 text-center" style={{ fontFamily: 'Futura, sans-serif' }}>
                            {item.title}
                          </h3>
                          
                          <p className="text-white/90 text-sm leading-relaxed text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Mobile wrapper - con fade desde abajo */}
                <motion.div
                  style={{ 
                    y: yMobile,
                    opacity 
                  }}
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                  className="block md:hidden"
                >
                  {item.link ? (
                    <Link href={item.link} className="block">
                      <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full cursor-pointer bg-white">
                        <div className="grid grid-cols-1">
                          {/* Left side - White background */}
                          <div className="p-5 bg-white">
                            <p className="text-gray-700 text-sm mb-4 leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: item.leftDescription }} />
                            
                            {/* Features list */}
                            <div className="space-y-2">
                              {item.features.map((feature, i) => (
                                <div key={i} className="flex items-center space-x-2">
                                  <div className="w-5 h-5 rounded-full bg-[#0047BB] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                  </div>
                                  <span className="text-gray-700 text-xs font-medium">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Right side - Blue VALTO background with gradient */}
                          <div className="p-5 bg-gradient-to-br from-[#002677] to-[#0047BB] flex flex-col justify-center">
                            <motion.div
                              className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-white/10 backdrop-blur-sm mx-auto"
                            >
                              <item.icon className="w-8 h-8 text-white" />
                            </motion.div>
                            
                            <h3 className="text-xl font-bold text-white mb-3 text-center" style={{ fontFamily: 'Futura, sans-serif' }}>
                              {item.title}
                            </h3>
                            
                            <p className="text-white/90 text-sm leading-relaxed text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full bg-white">
                      <div className="grid grid-cols-1">
                        {/* Left side - White background */}
                        <div className="p-5 bg-white">
                          <p className="text-gray-700 text-sm mb-4 leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: item.leftDescription }} />
                          
                          {/* Features list */}
                          <div className="space-y-2">
                            {item.features.map((feature, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <div className="w-5 h-5 rounded-full bg-[#0047BB] flex items-center justify-center flex-shrink-0">
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-gray-700 text-xs font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Right side - Blue VALTO background with gradient */}
                        <div className="p-5 bg-gradient-to-br from-[#002677] to-[#0047BB] flex flex-col justify-center">
                          <motion.div
                            className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-white/10 backdrop-blur-sm mx-auto"
                          >
                            <item.icon className="w-8 h-8 text-white" />
                          </motion.div>
                          
                          <h3 className="text-xl font-bold text-white mb-3 text-center" style={{ fontFamily: 'Futura, sans-serif' }}>
                            {item.title}
                          </h3>
                          
                          <p className="text-white/90 text-sm leading-relaxed text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
