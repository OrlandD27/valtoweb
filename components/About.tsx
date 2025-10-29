"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Experiencia",
      description: "Más de 10 años asesorando empresas en el sector financiero",
    },
    {
      icon: Users,
      title: "Equipo Experto",
      description: "Profesionales certificados en finanzas y gestión empresarial",
    },
    {
      icon: Target,
      title: "Resultados",
      description: "95% de tasa de aprobación en créditos gestionados",
    },
    {
      icon: TrendingUp,
      title: "Crecimiento",
      description: "Ayudamos a más de 500 empresas a alcanzar sus metas",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="nosotros">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quiénes Somos
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#0047BB' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos VALTO Management Consulting, tu aliado estratégico en el crecimiento empresarial
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              {/* Imagen del equipo VALTO */}
              <img 
                src="/gallery/capacitacion2.png" 
                alt="Equipo VALTO" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="text-center">
                <div className="text-4xl font-bold mb-1" style={{ color: '#0047BB' }}>10+</div>
                <div className="text-sm text-gray-600">Años de<br/>Experiencia</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Expertos en Soluciones Financieras
            </h3>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                En <span className="font-semibold" style={{ color: '#0047BB' }}>VALTO Management Consulting</span>, nos especializamos en brindar asesoría integral para que tu empresa acceda al financiamiento que necesita.
              </p>
              <p>
                Nuestro equipo de expertos cuenta con certificaciones internacionales y amplia experiencia en el sector financiero peruano, trabajando con las principales instituciones bancarias del país.
              </p>
              <p>
                Más que consultores, somos tus socios estratégicos en el camino hacia el éxito empresarial. Nos comprometemos con tu crecimiento y trabajamos hasta lograr los resultados que buscas.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold mb-1" style={{ color: '#0047BB' }}>500+</div>
                <div className="text-sm text-gray-600">Empresas Asesoradas</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold mb-1" style={{ color: '#0047BB' }}>95%</div>
                <div className="text-sm text-gray-600">Tasa de Aprobación</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 71, 187, 0.1)' }}>
                <value.icon className="w-8 h-8" style={{ color: '#0047BB' }} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
