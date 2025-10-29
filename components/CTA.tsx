"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative -mt-1">
      {/* Wave divider - sin líneas visibles */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-32 md:h-48" style={{ display: 'block' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#0056D6" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="py-24 bg-gradient-to-br from-[#0056D6] via-valto-blue to-[#003d99] relative overflow-hidden" style={{ marginTop: '-1px' }}>
        {/* Background patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-300 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400 rounded-full blur-3xl opacity-15"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white rounded-full blur-3xl opacity-5"></div>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para Impulsar tu Negocio?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a
              alcanzar tus objetivos empresariales.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3" />
                <span className="text-lg">+51 963-123-465</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3" />
                <span className="text-lg">info@valto.com.gt</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                <span className="text-lg">Perú, Perú</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white text-valto-blue rounded-lg font-semibold text-lg hover:shadow-2xl transition-all"
            >
              Contactar Ahora
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Right content - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Solicita tu Consulta Gratuita
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/25 backdrop-blur-sm border border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60 focus:bg-white/30 transition-all font-medium"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/25 backdrop-blur-sm border border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60 focus:bg-white/30 transition-all font-medium"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/25 backdrop-blur-sm border border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60 focus:bg-white/30 transition-all font-medium"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3.5 rounded-xl bg-white/25 backdrop-blur-sm border border-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/60 focus:bg-white/30 transition-all font-medium">
                  <option value="" className="text-gray-900 bg-white">
                    Servicio de interés
                  </option>
                  <option value="creditos" className="text-gray-900 bg-white">
                    Asesoría en Créditos
                  </option>
                  <option value="financiamiento" className="text-gray-900 bg-white">
                    Financiamiento Empresarial
                  </option>
                  <option value="capacitacion" className="text-gray-900 bg-white">
                    Capacitación Empresarial
                  </option>
                </select>
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/25 backdrop-blur-sm border border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60 focus:bg-white/30 transition-all resize-none font-medium"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-white text-valto-blue px-6 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:bg-blue-50"
              >
                Enviar Solicitud
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}
