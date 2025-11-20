"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, BookOpen, Award, HeartHandshake } from "lucide-react";
import Link from "next/link";

const differentiators = [
  {
    icon: Shield,
    title: "Confianza y Transparencia",
    description: "Sin costos ocultos. Te acompañamos en todo el proceso con total claridad.",
    color: "#0047BB",
  },
  {
    icon: Zap,
    title: "Respuesta Rápida",
    description: "Evaluación en 24 horas. Resultados en tiempo récord para tu negocio.",
    color: "#0047BB",
  },
  {
    icon: Users,
    title: "Asesoría Personalizada",
    description: "Cada empresa es única. Soluciones a medida para tus necesidades específicas.",
    color: "#0047BB",
  },
  {
    icon: BookOpen,
    title: "Centro de Aprendizaje",
    description: "Accede a recursos gratuitos, tutoriales y soluciones rápidas cuando lo necesites.",
    color: "#0047BB",
    link: "/videos"
  },
  {
    icon: Award,
    title: "Experiencia Certificada",
    description: "Equipo con certificaciones internacionales y +10 años en el sector.",
    color: "#0047BB",
  },
  {
    icon: HeartHandshake,
    title: "Compromiso con tu Éxito",
    description: "No cobramos hasta que tu crédito sea aprobado. Tu éxito es nuestro éxito.",
    color: "#0047BB",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 50%, #FFFFFF 100%)' }}>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span className="px-4 py-2 bg-valto-blue/10 text-valto-blue rounded-full text-sm font-semibold">
              ¿Por qué elegirnos?
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-futura-lux">
            Lo que nos hace <span style={{ color: '#0047BB' }}>Diferentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-futura-book">
            No somos solo consultores, somos tu socio estratégico comprometido con tu crecimiento
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              {item.link ? (
                <Link href={item.link}>
                  <div className="rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-300 h-full cursor-pointer" style={{ background: 'linear-gradient(135deg, #0047BB 0%, #0056D6 100%)' }}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all bg-white/20 backdrop-blur-sm"
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-3 font-futura-lux">
                      {item.title}
                    </h3>
                    <p className="text-blue-50 leading-relaxed font-arial">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver más →
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-300 h-full" style={{ background: 'linear-gradient(135deg, #0047BB 0%, #0056D6 100%)' }}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all bg-white/20 backdrop-blur-sm"
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3 font-futura-lux">
                    {item.title}
                  </h3>
                  <p className="text-blue-50 leading-relaxed font-arial">
                    {item.description}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
