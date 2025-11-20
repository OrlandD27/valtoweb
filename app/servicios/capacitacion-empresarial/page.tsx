"use client";

import { motion } from "framer-motion";
import { GraduationCap, CheckCircle, Users, Trophy, TrendingUp, ArrowRight, BookOpen, Award } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";

export default function CapacitacionEmpresarial() {
  const beneficios = [
    "Material de élite extraído de las mejores escuelas de negocios",
    "Instructores con experiencia real en gestión empresarial",
    "Enfoque práctico aplicable inmediatamente",
    "Certificación profesional reconocida",
    "Metodología adaptada a empresas latinoamericanas",
    "Casos de éxito reales y aplicables"
  ];

  const modulos = [
    {
      icon: Users,
      titulo: "Liderazgo Estratégico",
      descripcion: "Desarrollo de habilidades de liderazgo para la toma de decisiones efectivas"
    },
    {
      icon: TrendingUp,
      titulo: "Gestión Financiera",
      descripcion: "Fundamentos financieros para la dirección de empresas exitosas"
    },
    {
      icon: Trophy,
      titulo: "Innovación y Competitividad",
      descripcion: "Estrategias para destacar en mercados altamente competitivos"
    },
    {
      icon: BookOpen,
      titulo: "Marketing Estratégico",
      descripcion: "Técnicas modernas de posicionamiento y captación de clientes"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0047BB 0%, #002677 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-cyan-400 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-8"
              style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}
            >
              <GraduationCap className="w-16 h-16 text-white" strokeWidth={1.5} />
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Capacitación Empresarial
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Formación de élite para líderes que toman decisiones estratégicas
            </p>

            <Link href="#contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                style={{ color: '#0047BB', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}
              >
                Solicitar Información
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Descripción Principal con Carrusel */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                El Conocimiento es la Clave del Éxito
              </h2>
              <p className="text-lg mb-6" style={{ color: '#4B5563', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.8' }}>
                Estamos convencidos que el éxito de una empresa depende mucho del conocimiento adquirido por las personas que toman decisiones en ella. Es por esto que instruimos y capacitamos a estas personas con material teórico y práctico extraído de las mejores escuelas de negocios del mundo.
              </p>
              <p className="text-lg mb-6" style={{ color: '#4B5563', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.8' }}>
                Nuestros programas están diseñados para transformar líderes en estrategas capaces de enfrentar los desafíos del mercado moderno con confianza y conocimiento de vanguardia.
              </p>
              <div className="flex items-center p-6 rounded-xl" style={{ backgroundColor: '#0047BB10' }}>
                <Award className="w-12 h-12 mr-4" style={{ color: '#0047BB' }} />
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                    Certificación Profesional
                  </h3>
                  <p style={{ color: '#6B7280', fontFamily: 'Arial' }}>
                    Reconocida internacionalmente
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageCarousel
                images={[
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
                  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
                  "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=1200&q=80"
                ]}
                autoPlay={true}
                interval={5000}
              />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#0047BB', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                ¿Por Qué Elegirnos?
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {beneficios.map((beneficio, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#0047BB' }} />
                    <span style={{ color: '#374151', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      {beneficio}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Módulos del Programa */}
      <section className="py-20" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Nuestros Módulos de Formación
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Programas diseñados para potenciar cada área de tu gestión empresarial
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {modulos.map((modulo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-2"
                style={{ borderColor: '#E5E7EB' }}
              >
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0047BB' }}>
                    <modulo.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                      {modulo.titulo}
                    </h3>
                    <p style={{ color: '#6B7280', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.6' }}>
                      {modulo.descripcion}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #002677 0%, #0047BB 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Invierte en el Futuro de tu Empresa
            </h2>
            <p className="text-xl text-blue-100 mb-8" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Da el primer paso hacia la excelencia empresarial. Nuestro equipo está listo para diseñar un programa de capacitación a la medida de tus necesidades.
            </p>
            <Link href="/#contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                style={{ color: '#0047BB', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}
              >
                Contactar Ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
