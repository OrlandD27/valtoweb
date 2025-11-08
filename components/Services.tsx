"use client";

import { motion } from "framer-motion";
import { CreditCard, TrendingUp, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

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
    color: "from-blue-500 to-blue-600",
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
    color: "from-cyan-500 to-cyan-600",
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/servicios"
              className="inline-flex items-center px-8 py-4 bg-valto-blue text-white rounded-lg font-semibold text-lg hover:bg-valto-blue-dark transition-all shadow-lg hover:shadow-2xl"
            >
              Ver Todos los Servicios
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
