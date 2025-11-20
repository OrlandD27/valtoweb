
"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useState } from "react";

export default function CTA() {
  const [phoneValue, setPhoneValue] = useState<string>();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    servicio: '',
    proyecto: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir el mensaje para WhatsApp
    const mensaje = `
*Nueva Consulta - VALTO*

📋 *Nombre:* ${formData.nombre}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${phoneValue || 'No proporcionado'}
🎯 *Servicio de Interés:* ${formData.servicio}

💬 *Sobre el proyecto:*
${formData.proyecto}
    `.trim();

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Número de WhatsApp (sin + ni espacios)
    const numeroWhatsApp = '51920000848';
    
    // Crear URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp en nueva pestaña
    window.open(urlWhatsApp, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative -mt-1">
      {/* Wave divider - sin líneas visibles */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-32 md:h-48" style={{ display: 'block' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#0047BB" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0047BB', marginTop: '-1px' }}>
        {/* Animated background patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-10 left-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20"
          />
          <motion.div
            animate={{
              y: [0, 40, 0],
              x: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-cyan-400 rounded-full blur-3xl opacity-15"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white rounded-full blur-3xl opacity-10"
          />
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
              className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
              style={{
                  boxShadow: '0 8px 32px 0 rgba(0,71,187,0.18)',
                  background: '#fff',
                backdropFilter: 'blur(12px)'
              }}
            >
              <h3
                className="text-3xl font-extrabold mb-8 text-center tracking-tight"
                style={{ color: '#0047BB', fontFamily: 'Futura Lux, Futura, Arial, sans-serif', letterSpacing: '-0.01em' }}
              >
                Solicita tu Consulta Gratuita
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3 rounded-lg bg-white border-2 border-[#e5e7eb] text-[#222] placeholder-[#888] focus:outline-none focus:border-[#0047BB] focus:ring-2 focus:ring-[#0047BB] transition-all duration-200 shadow-sm"
                    style={{ fontFamily: 'Futura LT Book, Futura, Arial, sans-serif', fontWeight: 400 }}
                    placeholder="Nombre completo"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3 rounded-lg bg-white border-2 border-[#e5e7eb] text-[#222] placeholder-[#888] focus:outline-none focus:border-[#0047BB] focus:ring-2 focus:ring-[#0047BB] transition-all duration-200 shadow-sm"
                    style={{ fontFamily: 'Futura LT Book, Futura, Arial, sans-serif', fontWeight: 400 }}
                    placeholder="Correo electrónico"
                    required
                  />
                </div>
                <div>
                  <PhoneInput
                    international
                    defaultCountry="PE"
                    value={phoneValue}
                    onChange={setPhoneValue}
                    className="w-full phone-input-custom"
                    placeholder="Teléfono"
                  />
                </div>
                <div>
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3 rounded-lg bg-white border-2 border-[#e5e7eb] text-[#222] placeholder-[#888] focus:outline-none focus:border-[#0047BB] focus:ring-2 focus:ring-[#0047BB] transition-all duration-200 shadow-sm"
                    style={{ fontFamily: 'Futura LT Book, Futura, Arial, sans-serif', fontWeight: 400 }}
                    required
                  >
                    <option value="" disabled>Servicio de interés</option>
                    <option value="Capacitación Empresarial">Capacitación Empresarial</option>
                    <option value="Consultoría de Negocios">Consultoría de Negocios</option>
                    <option value="Consultoría Financiera">Consultoría Financiera</option>
                    <option value="Formación de Emprendedores y Empresarios">Formación de Emprendedores y Empresarios</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="proyecto"
                    value={formData.proyecto}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3 rounded-lg bg-white border-2 border-[#e5e7eb] text-[#222] placeholder-[#888] focus:outline-none focus:border-[#0047BB] focus:ring-2 focus:ring-[#0047BB] transition-all duration-200 shadow-sm"
                    style={{ fontFamily: 'Futura LT Book, Futura, Arial, sans-serif', fontWeight: 400 }}
                    rows={3}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#0047BB] text-white font-bold text-lg shadow-md hover:bg-[#003088] transition-all duration-200"
                    style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', letterSpacing: '0.01em' }}
                  >
                    Enviar Solicitud
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
