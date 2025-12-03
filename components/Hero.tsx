"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// Lemas rotativos - fuera del componente para evitar recreación
const lemas = [
  "EMPRESA EXITOSA",
  "LÍDER DEL MERCADO",
  "ORGANIZACIÓN RENTABLE",
  "NEGOCIO SOSTENIBLE"
];

export default function Hero() {
  const [phoneValue, setPhoneValue] = useState<string>();
  const [formData, setFormData] = useState({
    nombre: '',
    ruc: '',
    email: '',
    servicio: ''
  });

  const [lemaActual, setLemaActual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLemaActual((prev) => (prev + 1) % lemas.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []); // Sin dependencias para evitar recreación del interval

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
      {/* Background Video with Overlay - Hidden on mobile, visible on desktop */}
      <div className="absolute inset-0 hidden md:block">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            WebkitBackfaceVisibility: 'hidden',
            WebkitTransform: 'translateZ(0)',
            transform: 'translateZ(0)'
          }}
        >
          <source src="/valtoweb.mp4" type="video/mp4" />
        </video>
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0,38,119,0.3) 0%, rgba(0,71,187,0.25) 100%)'
          }}
        />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 min-h-screen flex flex-col md:flex-row md:items-center pb-8 md:pb-20 pt-32 md:pt-28">
        
        {/* Text Content - Top on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:max-w-4xl md:mx-auto text-center space-y-5 md:space-y-6 mb-6 md:mb-0"
        >
          {/* Main Title */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-4x5 font-black leading-tight text-white uppercase"
            style={{ fontFamily: 'Futura Lux, Arial, sans-serif', letterSpacing: '0.02em' }}
          >
            TRANSFORMA TU NEGOCIO,<br />
            EN UNA <motion.span 
              key={lemaActual}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-white bg-[#0056D6] px-3 py-1 rounded-lg inline-block" 
              style={{ fontFamily: 'Futura, sans-serif' }}
            >
              {lemas[lemaActual]}
            </motion.span>
          </h1>
        </motion.div>

        {/* Video Section - Bottom on mobile only */}
        <div className="w-full md:hidden relative rounded-2xl overflow-hidden" style={{ height: '50vh' }}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            style={{
              WebkitBackfaceVisibility: 'hidden',
              WebkitTransform: 'translateZ(0)',
              transform: 'translateZ(0)',
              objectPosition: 'center 30%'
            }}
          >
            <source src="/valtoweb.mp4" type="video/mp4" />
          </video>
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(0,38,119,0.4) 0%, transparent 100%)'
            }}
          />
        </div>
      </div>
    </section>
  );
}
