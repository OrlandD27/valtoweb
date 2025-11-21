"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Lenis from '@studio-freight/lenis';

const steps = [
  {
    number: "01",
    title: "Contacto Inicial",
    description: "Agendar una consulta para conocer tus necesidades y objetivos empresariales.",
  },
  {
    number: "02",
    title: "Evaluación",
    description: "Análisis detallado de tu situación financiera y oportunidades de crecimiento.",
  },
  {
    number: "03",
    title: "Propuesta",
    description: "Presentamos soluciones personalizadas adaptadas a tus necesidades específicas.",
  },
  {
    number: "04",
    title: "Implementación",
    description: "Acompañamiento continuo hasta alcanzar tus metas empresariales.",
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
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
  
  // Para el scroll en móviles
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  // Transformar el scroll progress a altura de línea (0% a 100%)
  const progressLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Activar paso basado en scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest < 0.25) {
        setActiveStep(0);
      } else if (latest < 0.5) {
        setActiveStep(1);
      } else if (latest < 0.75) {
        setActiveStep(2);
      } else {
        setActiveStep(3);
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Transformar el scroll progress a altura de línea (0% a 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Activar paso basado en scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest < 0.25) {
        setActiveStep(0);
      } else if (latest < 0.5) {
        setActiveStep(1);
      } else if (latest < 0.75) {
        setActiveStep(2);
      } else {
        setActiveStep(3);
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white via-[#F5F7FA] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0047BB] mb-4" style={{ fontFamily: 'Futura, sans-serif' }}>
            Cómo Trabajamos
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: 'Arial, sans-serif' }}>
            Un proceso simple y efectivo para impulsar tu negocio
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={containerRef} className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200/30 transform -translate-y-1/2 rounded-full overflow-hidden">
            {/* Animated progress line */}
            <motion.div
              className="h-full bg-gradient-to-r from-[#0047BB] via-[#0056D6] to-[#0047BB]"
              initial={{ width: "0%" }}
              animate={isInView ? { 
                width: "100%",
              } : { width: "0%" }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Running light effect */}
            <motion.div
              className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              animate={{
                left: ["-20%", "120%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Pulsing dots on the line */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="hidden lg:block absolute top-1/2 w-4 h-4 bg-white rounded-full border-2 border-[#0047BB] shadow-lg transform -translate-y-1/2"
              style={{ left: `${(i * 25) + 12.5}%` }}
              animate={{
                scale: activeStep === i ? [1, 1.5, 1] : 1,
                boxShadow: activeStep === i 
                  ? ["0 0 0 0 rgba(0,71,187,0.7)", "0 0 0 10px rgba(0,71,187,0)", "0 0 0 0 rgba(0,71,187,0)"]
                  : "0 0 0 0 rgba(0,71,187,0)",
              }}
              transition={{ duration: 1, repeat: activeStep === i ? Infinity : 0 }}
            >
              <motion.div
                className="w-full h-full rounded-full bg-[#0047BB]"
                animate={{
                  opacity: activeStep === i ? [0.5, 1, 0.5] : 0.5
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          ))}

          {/* Vertical Connection Line - Mobile (scroll-based) */}
          <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 pointer-events-none">
            {/* Background line */}
            <div className="absolute inset-0 bg-gray-200/30 rounded-full" />
            
            {/* Animated progress line based on scroll */}
            <motion.div
              className="absolute top-0 left-0 right-0 bg-[#0047BB] rounded-full origin-top"
              style={{ height: progressLineHeight }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10, scale: 1.03 }}
                onHoverStart={() => setActiveStep(index)}
                className="relative"
              >
                <motion.div 
                  className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 relative z-10 border group overflow-hidden cursor-pointer"
                  animate={{
                    borderColor: activeStep === index ? "#0047BB" : "rgba(229, 231, 235, 1)",
                    boxShadow: activeStep === index 
                      ? "0 20px 60px rgba(0, 71, 187, 0.15)" 
                      : "0 10px 30px rgba(0, 0, 0, 0.05)"
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Decorative top bar with animation */}
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#002677] via-[#0047BB] to-[#0056D6]"
                    animate={{
                      opacity: activeStep === index ? [0.5, 1, 0.5] : 0.3
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  

                  
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0047BB]/5 to-transparent rounded-full blur-2xl" />


                  
                  {/* Number with enhanced animation */}
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-br from-[#0056D6] to-[#0047BB] rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg transition-all relative z-10 ring-4 ${
                      activeStep === index ? 'ring-[#0047BB]/30' : 'ring-[#0047BB]/10'
                    }`}
                    animate={{
                      scale: activeStep === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-4xl font-black text-white" style={{ fontFamily: 'Futura, sans-serif' }}>
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Title with animation */}
                  <motion.h3 
                    className="text-xl font-bold mb-3 text-center relative z-10 transition-colors"
                    style={{ fontFamily: 'Futura, sans-serif' }}
                    animate={{
                      color: activeStep === index ? "#0047BB" : "#374151"
                    }}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-600 text-center leading-relaxed relative z-10 text-sm"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                    animate={{
                      opacity: activeStep === index ? 1 : 0.7
                    }}
                  >
                    {step.description}
                  </motion.p>

                  {/* Check icon with pulse */}
                  <div className="mt-4 flex justify-center relative z-10">
                    <div className={`rounded-full p-1.5 transition-colors ${
                      activeStep === index ? 'bg-green-100' : 'bg-green-50'
                    }`}>
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </motion.div>

                {/* Arrow connector - mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <ArrowRight className="w-8 h-8 text-[#0047BB]/40 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
