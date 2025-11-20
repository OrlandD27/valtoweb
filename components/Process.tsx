"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";

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
  const [activeStep, setActiveStep] = useState(0);
  
  // Para el scroll en móviles
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  // Transformar el scroll progress a altura de línea (0% a 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Cómo Trabajamos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un proceso simple y efectivo para impulsar tu negocio
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={containerRef} className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 rounded-full overflow-hidden">
            {/* Animated progress line */}
            <motion.div
              className="h-full bg-gradient-to-r from-valto-blue via-cyan-400 to-indigo-500"
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
              className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
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
              className="hidden lg:block absolute top-1/2 w-4 h-4 bg-white rounded-full border-2 border-valto-blue shadow-lg transform -translate-y-1/2"
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
                className="w-full h-full rounded-full bg-valto-blue"
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
            <div className="absolute inset-0 bg-gray-200 rounded-full" />
            
            {/* Animated progress line based on scroll */}
            <motion.div
              className="absolute top-0 left-0 right-0 bg-valto-blue rounded-full origin-top"
              style={{ height: lineHeight }}
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
                className="relative"
              >
                <motion.div 
                  className="bg-white rounded-2xl p-6 shadow-xl transition-all duration-300 relative z-10 border-2 group overflow-hidden cursor-pointer"
                  animate={{
                    borderColor: activeStep === index ? "#0047BB" : "rgba(229, 231, 235, 1)",
                    boxShadow: activeStep === index 
                      ? "0 20px 60px rgba(0, 71, 187, 0.25)" 
                      : "0 10px 30px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Decorative top bar with animation */}
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-valto-blue via-cyan-400 to-indigo-500"
                    animate={{
                      opacity: activeStep === index ? [0.5, 1, 0.5] : 0.3
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  

                  
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-valto-blue/10 to-transparent rounded-full blur-2xl" />


                  
                  {/* Number with enhanced animation */}
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-br from-[#0056D6] to-[#0047BB] rounded-xl flex items-center justify-center mb-4 mx-auto shadow-xl transition-all relative z-10 ring-4 ${
                      activeStep === index ? 'ring-valto-blue/50' : 'ring-blue-100'
                    }`}
                    animate={{
                      scale: activeStep === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-4xl font-black text-white">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Title with animation */}
                  <motion.h3 
                    className="text-xl font-bold mb-3 text-center relative z-10 transition-colors"
                    animate={{
                      color: activeStep === index ? "#0047BB" : "#111827"
                    }}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-600 text-center leading-relaxed relative z-10 text-sm"
                    animate={{
                      opacity: activeStep === index ? 1 : 0.7
                    }}
                  >
                    {step.description}
                  </motion.p>

                  {/* Check icon with pulse */}
                  <div className="mt-4 flex justify-center relative z-10">
                    <div className={`rounded-full p-1.5 transition-colors ${
                      activeStep === index ? 'bg-green-200' : 'bg-green-100'
                    }`}>
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </motion.div>

                {/* Arrow connector - mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <ArrowRight className="w-8 h-8 text-valto-blue/50 rotate-90" />
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
