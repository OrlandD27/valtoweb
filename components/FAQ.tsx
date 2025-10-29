"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda la aprobación de un crédito?",
    answer: "El tiempo de aprobación varía según la entidad financiera y el tipo de crédito, pero en promedio, con nuestra asesoría especializada, logramos aprobaciones en 7 a 15 días hábiles. Trabajamos para agilizar al máximo el proceso.",
  },
  {
    question: "¿Qué requisitos necesito para solicitar un crédito empresarial?",
    answer: "Los requisitos básicos incluyen: RUC activo, antigüedad mínima de 1 año, estados financieros, declaraciones de impuestos, y flujo de caja proyectado. Nosotros te ayudamos a preparar toda la documentación necesaria.",
  },
  {
    question: "¿Cuánto cobran por sus servicios de asesoría?",
    answer: "Ofrecemos una consulta inicial gratuita de 30 minutos para evaluar tu caso. Nuestros honorarios son flexibles y se ajustan según el tipo de servicio y complejidad. Trabajamos con tarifas competitivas y transparentes.",
  },
  {
    question: "¿Trabajan con todas las entidades financieras?",
    answer: "Sí, tenemos alianzas estratégicas con más de 15 bancos y entidades financieras en Perú, incluyendo banca múltiple, cajas municipales y financieras. Esto nos permite encontrar las mejores opciones para tu empresa.",
  },
  {
    question: "¿Qué pasa si mi empresa tiene historial crediticio negativo?",
    answer: "Contamos con estrategias especializadas para casos con historial crediticio complicado. Evaluamos tu situación actual y desarrollamos un plan personalizado para mejorar tu perfil crediticio y aumentar las posibilidades de aprobación.",
  },
  {
    question: "¿Ofrecen asesoría para startups o empresas nuevas?",
    answer: "¡Por supuesto! Tenemos programas especiales para emprendimientos y empresas en etapa inicial. Te ayudamos a estructurar tu proyecto de manera atractiva para inversionistas y entidades financieras.",
  },
  {
    question: "¿Brindan seguimiento después de obtener el crédito?",
    answer: "Sí, nuestro servicio incluye acompañamiento post-aprobación para asegurar el uso óptimo de los recursos y el cumplimiento de obligaciones. Tu éxito es nuestro éxito.",
  },
  {
    question: "¿Puedo solicitar asesoría si estoy fuera de Lima?",
    answer: "¡Absolutamente! Atendemos a nivel nacional. Realizamos consultas virtuales y tenemos procesos digitales que facilitan la comunicación y gestión de documentos desde cualquier parte del Perú.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(0, 71, 187, 0.1)' }}>
            <HelpCircle className="w-8 h-8" style={{ color: '#0047BB' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre nuestros servicios y procesos
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-gray-50 hover:bg-gray-100 rounded-xl p-6 transition-colors duration-200"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6" style={{ color: '#0047BB' }} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">¿No encontraste tu respuesta?</p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            style={{ backgroundColor: '#0047BB' }}
          >
            Contáctanos Directamente
          </a>
        </motion.div>
      </div>
    </section>
  );
}
