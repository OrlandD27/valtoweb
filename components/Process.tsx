"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Contacto Inicial",
    description: "Agendar una consulta gratuita para conocer tus necesidades y objetivos empresariales.",
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
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-valto-blue via-valto-blue-light to-valto-blue transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative z-10 border border-gray-100 hover:border-valto-blue group overflow-hidden">
                  {/* Decorative top bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-valto-blue via-valto-blue-light to-valto-blue"></div>
                  
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-valto-blue/5 to-transparent rounded-full blur-2xl"></div>
                  
                  {/* Number - Más brillante y sin opacidad */}
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0056D6] to-[#0047BB] rounded-xl flex items-center justify-center mb-4 mx-auto shadow-xl ring-4 ring-blue-100 group-hover:ring-valto-blue/30 transition-all group-hover:scale-110 relative z-10">
                    <span className="text-4xl font-black text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center relative z-10 group-hover:text-valto-blue transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-center leading-relaxed relative z-10">
                    {step.description}
                  </p>

                  {/* Check icon */}
                  <div className="mt-4 flex justify-center relative z-10">
                    <div className="bg-green-100 rounded-full p-1.5 group-hover:bg-green-200 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </div>

                {/* Arrow connector - mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <ArrowRight className="w-8 h-8 text-valto-blue rotate-90" />
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
