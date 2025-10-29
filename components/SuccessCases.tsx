"use client";

import { motion } from "framer-motion";
import { TrendingUp, Building2, Store, Briefcase } from "lucide-react";

const successCases = [
  {
    icon: Store,
    company: "Restaurant El Sabor",
    industry: "Gastronomía",
    amount: "S/. 200,000",
    time: "15 días",
    purpose: "Expansión de local",
    result: "Apertura de segunda sede y aumento del 150% en ventas",
    color: "#0047BB",
  },
  {
    icon: Building2,
    company: "Constructora Perú SAC",
    industry: "Construcción",
    amount: "S/. 500,000",
    time: "20 días",
    purpose: "Capital de trabajo",
    result: "Ejecución de 3 proyectos simultáneos y crecimiento del 80%",
    color: "#0047BB",
  },
  {
    icon: Briefcase,
    company: "Tech Solutions",
    industry: "Tecnología",
    amount: "S/. 150,000",
    time: "12 días",
    purpose: "Equipamiento tecnológico",
    result: "Modernización completa y mejora de productividad en 60%",
    color: "#0047BB",
  },
];

const stats = [
  {
    value: "S/. 50M+",
    label: "En créditos gestionados",
  },
  {
    value: "500+",
    label: "Empresas financiadas",
  },
  {
    value: "95%",
    label: "Tasa de aprobación",
  },
  {
    value: "10+",
    label: "Años de experiencia",
  },
];

export default function SuccessCases() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="casos-exito">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(0, 71, 187, 0.1)' }}>
            <TrendingUp className="w-8 h-8" style={{ color: '#0047BB' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce cómo hemos ayudado a empresas como la tuya a alcanzar sus metas
          </p>
        </motion.div>

        {/* Success Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {successCases.map((case_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Header Card */}
              <div className="p-6 pb-0">
                <div className="flex items-center mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mr-4"
                    style={{ backgroundColor: 'rgba(0, 71, 187, 0.1)' }}
                  >
                    <case_.icon className="w-7 h-7" style={{ color: case_.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{case_.company}</h3>
                    <p className="text-sm text-gray-500">{case_.industry}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600 mb-1">Monto</div>
                    <div className="text-xl font-bold" style={{ color: '#0047BB' }}>
                      {case_.amount}
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600 mb-1">Tiempo</div>
                    <div className="text-xl font-bold text-green-600">{case_.time}</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">Propósito:</div>
                  <p className="text-gray-600">{case_.purpose}</p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Resultado:</div>
                  <p className="text-gray-600 leading-relaxed">{case_.result}</p>
                </div>
              </div>

              {/* Bottom bar */}
              <div
                className="h-2 w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ backgroundColor: case_.color }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12"
          style={{ background: 'linear-gradient(to right, #0047BB, #0056D6)' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6 text-lg">
            ¿Listo para ser nuestro próximo caso de éxito?
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            style={{ backgroundColor: '#0047BB' }}
          >
            Agenda tu Consulta Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
}
