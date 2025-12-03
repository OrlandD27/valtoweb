"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Cuáles son los requisitos para formalizar mi empresa?",
    answer: "Para formalizar tu empresa necesitas: DNI vigente del titular o representante legal, búsqueda de nombre disponible en SUNARP, minuta de constitución firmada por un abogado, capital social mínimo según el tipo de empresa, y domicilio fiscal. En VALTO te guiamos paso a paso en todo el proceso.",
  },
  {
    question: "¿Qué es la minuta de constitución y para qué sirve?",
    answer: "La minuta de constitución es el documento legal que establece los acuerdos iniciales de tu empresa: razón social, objeto social, capital, aportes de cada socio, estatutos y otros aspectos fundamentales. Es el primer paso legal para constituir tu empresa formalmente ante notaría y registros públicos.",
  },
  {
    question: "¿Cómo hago la búsqueda de nombre en SUNARP?",
    answer: "La búsqueda de nombre en SUNARP (Superintendencia Nacional de los Registros Públicos) se realiza para verificar que el nombre que deseas para tu empresa no esté registrado por otra. Nosotros realizamos esta búsqueda por ti y te proponemos alternativas disponibles si el nombre está ocupado.",
  },
  {
    question: "¿Qué es la inscripción en Registros Públicos?",
    answer: "La inscripción en Registros Públicos es el paso final para darle existencia legal a tu empresa. Aquí se registra oficialmente la minuta de constitución elevada a escritura pública. Una vez inscrita, tu empresa obtiene su partida registral y puede iniciar operaciones formalmente con RUC y todos los documentos legales.",
  },
  {
    question: "¿Qué significa invertir en renta fija?",
    answer: "Invertir en renta fija significa colocar tu dinero en instrumentos financieros que ofrecen rendimientos predecibles y estables, como bonos, depósitos a plazo o letras del tesoro. Son inversiones de bajo riesgo ideales para preservar capital y generar ingresos constantes. En VALTO te asesoramos para encontrar las mejores opciones según tu perfil.",
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#9DA5B3] mb-4">
            Preguntas <span className="font-bold text-white bg-[#0056D6] px-2 sm:px-3 py-1 rounded-lg inline-block" style={{ fontFamily: 'Futura, sans-serif' }}>
                  Frecuentes
                </span>
          </h2>
          <p className="text-xl text-[#002677] max-w-2xl mx-auto">
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
                  <h3 className="text-lg font-semibold text-[#0047BB] pr-8">
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
          <p className="text-gray-600 mb-6">¿Deseas más información sobre estas preguntas? ¡te podemos ayudar!</p>
          <a
            href="https://wa.me/51920000848?text=Hola,%20quisiera%20información%20sobre%20su%20servicio"
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
