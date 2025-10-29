"use client";

import { motion } from "framer-motion";
import { CreditCard, TrendingUp, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: CreditCard,
    title: "Asesoría en Créditos",
    description:
      "Te ayudamos a obtener el crédito perfecto para tu negocio con las mejores condiciones del mercado.",
    features: [
      "Análisis de capacidad crediticia",
      "Búsqueda de mejores tasas",
      "Acompañamiento en el proceso",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Financiamiento Empresarial",
    description:
      "Estrategias de financiamiento personalizadas para impulsar el crecimiento de tu empresa.",
    features: [
      "Estructuración financiera",
      "Planes de inversión",
      "Optimización de recursos",
    ],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: GraduationCap,
    title: "Capacitación Empresarial",
    description:
      "Programas de formación diseñados para fortalecer las habilidades empresariales de tu equipo.",
    features: [
      "Talleres especializados",
      "Consultoría estratégica",
      "Herramientas prácticas",
    ],
    color: "from-indigo-500 to-indigo-600",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="servicios">
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
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales para el crecimiento y desarrollo de tu empresa
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-valto-blue mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/servicios"
                  className="inline-flex items-center text-valto-blue font-semibold group-hover:gap-2 transition-all"
                >
                  Saber más
                  <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/servicios"
            className="inline-flex items-center px-8 py-4 bg-valto-blue text-white rounded-lg font-semibold text-lg hover:bg-valto-blue-dark transition-all hover:scale-105 shadow-lg"
          >
            Ver Todos los Servicios
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
