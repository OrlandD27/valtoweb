"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function Hero() {
  const [phoneValue, setPhoneValue] = useState<string>();
  const [formData, setFormData] = useState({
    nombre: '',
    ruc: '',
    email: '',
    servicio: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, soy ${formData.nombre}. Quisiera consultar sobre ${formData.servicio}. Mi RUC: ${formData.ruc}, Email: ${formData.email}, Teléfono: ${phoneValue || 'No proporcionado'}`;
    window.open(`https://wa.me/51920000848?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#002677' }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: 'url(/hero-background.gif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0,38,119,0.5) 0%, rgba(0,71,187,0.45) 100%)'
          }}
        />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 min-h-screen flex items-center py-20 pt-32 md:pt-28">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            {/* Main Title */}
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white uppercase"
              style={{ fontFamily: 'Futura Lux, Arial, sans-serif' }}
            >
              TRANSFORMA TU NEGOCIO,<br />
              EN UNA EMPRESA<br />
              EXITOSA
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
              Consultoría empresarial especializada que impulsa el crecimiento de pequeñas y medianas empresas con estrategias probadas y resultados medibles.
            </p>

            {/* CTA Question */}
            <p 
              className="text-base md:text-lg font-bold text-white/70"
              style={{ fontFamily: 'Futura, Arial, sans-serif' }}
            >
              ¿TU EMPRESA ESTÁ LISTA PARA DAR EL SIGUIENTE PASO?
            </p>

            {/* CTA Button */}
            <motion.a
              href="https://wa.me/51920000848?text=Hola,%20quiero%20hacer%20crecer%20mi%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 md:px-6 md:py-3 rounded-full text-white font-bold text-sm md:text-base shadow-xl hover:shadow-2xl transition-all"
              style={{ 
                backgroundColor: '#0047BB',
                fontFamily: 'Futura, Arial, sans-serif'
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Sí, quiero hacer crecer mi empresa
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.a>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div 
              className="rounded-2xl p-6 md:p-8 shadow-2xl"
              style={{ 
                backgroundColor: '#0047BB',
                border: '2px solid rgba(0, 212, 255, 0.4)'
              }}
            >
              {/* Form Title */}
              <h2 
                className="text-xl md:text-2xl font-black text-white text-center mb-3 uppercase"
                style={{ fontFamily: 'Futura, Arial, sans-serif' }}
              >
                ¡HAZ CRECER TU<br />EMPRESA HOY!
              </h2>
              
              <p className="text-white/90 text-center mb-4 md:mb-6 text-xs md:text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>
                Déjanos tus datos y te contactaremos en breves instantes
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div>
                  <label className="block text-white font-semibold mb-1.5 text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>
                    Nombre/Empresa
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre/Empresa"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4ff]"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-1.5 text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>
                    RUC
                  </label>
                  <input
                    type="text"
                    name="ruc"
                    value={formData.ruc}
                    onChange={handleChange}
                    placeholder="20000000000"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4ff]"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-1.5 text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>
                    Correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4ff]"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-1.5 text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>
                    Teléfono
                  </label>
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
                  <label className="block text-white font-semibold mb-1.5 text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>
                    Servicio a Consultar
                  </label>
                  <textarea
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    placeholder="Escribe tu consulta"
                    rows={3}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] resize-none"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3.5 rounded-lg text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                  style={{ 
                    backgroundColor: 'transparent',
                    border: '2px solid white',
                    fontFamily: 'Futura, Arial, sans-serif'
                  }}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  ENVIAR AHORA
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
