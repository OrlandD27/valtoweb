"use client";

import { motion } from "framer-motion";
import { Lightbulb, CheckCircle, Rocket, Brain, Target, ArrowRight, Users, Award } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import FloatingSocial from "@/components/FloatingSocial";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function FormacionEmprendedores() {
  const diferencias = [
    {
      tipo: "Emprendedor",
      caracteristicas: ["Tiene ideas innovadoras", "Ganas de hacer algo propio", "Pasión por un proyecto", "Busca independencia"]
    },
    {
      tipo: "Empresario",
      caracteristicas: ["Conocimiento de mercado", "Habilidades financieras", "Gestión estratégica", "Soft skills desarrolladas"]
    }
  ];

  const modulos = [
    {
      icon: Brain,
      titulo: "Mentalidad Empresarial",
      descripcion: "Transforma tu forma de pensar de emprendedor a empresario exitoso"
    },
    {
      icon: Target,
      titulo: "Estrategia de Negocio",
      descripcion: "Aprende a crear y ejecutar planes estratégicos efectivos"
    },
    {
      icon: Users,
      titulo: "Liderazgo y Equipos",
      descripcion: "Desarrolla habilidades para construir y dirigir equipos de alto rendimiento"
    },
    {
      icon: Award,
      titulo: "Competitividad",
      descripcion: "Destaca en el ecosistema empresarial con ventajas competitivas sostenibles"
    }
  ];

  const beneficios = [
    "Conocimiento integral del mundo de los negocios",
    "Desarrollo de habilidades financieras prácticas",
    "Soft skills esenciales para el liderazgo",
    "Networking con otros emprendedores",
    "Mentoría personalizada de empresarios exitosos",
    "Herramientas para la toma de decisiones estratégicas"
  ];

  return (
    <>
      <Navbar />
      <FloatingSocial />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0047BB 0%, #6366f1 100%)' }}>
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
              <Lightbulb className="w-16 h-16 text-white" strokeWidth={1.5} />
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Formación de Emprendedores
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Conviértete en el empresario que el mercado necesita
            </p>

            <motion.a
              href="https://wa.me/51920000848?text=Hola,%20quisiera%20información%20sobre%20Formación%20de%20Emprendedores"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              style={{ color: '#0047BB', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}
            >
              Comenzar mi Transformación
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Introducción con Carrusel */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                Emprendedor vs Empresario
              </h2>
              <p className="text-xl mb-4" style={{ color: '#4B5563', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.8' }}>
                Una cosa es ser emprendedor y una muy distinta ser empresario. El emprendedor es aquel que tiene las ganas de hacer algo propio, algo diferente, pero esto no basta para tener éxito en el enmarañado mundo de los negocios.
              </p>
              <p className="text-xl" style={{ color: '#4B5563', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.8' }}>
                A ello es necesario sumarle conocimiento, habilidades financieras y diferentes soft skills que marcarán la diferencia en el ecosistema en que se mueve la empresa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageCarousel
                images={[
                  "https://cie.ort.edu.uy/innovaportal/file/122383/1/formacion-emprender-desde-la-demanda.jpg",
                  "https://www.fguell.com/blog/wp-content/uploads/2019/04/iStock-927805948-1024x683.jpg",
                  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                ]}
                autoPlay={true}
                interval={5000}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* La Diferencia */}
      <section className="py-20" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Emprendedor vs Empresario
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-4" style={{ color: '#4B5563', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.8' }}>
              Una cosa es ser emprendedor y una muy distinta ser empresario. El emprendedor es aquel que tiene las ganas de hacer algo propio, algo diferente, pero esto no basta para tener éxito en el enmarañado mundo de los negocios.
            </p>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#4B5563', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.8' }}>
              A ello es necesario sumarle conocimiento, habilidades financieras y diferentes soft skills que marcarán la diferencia en el ecosistema en que se mueve la empresa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {diferencias.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  {index === 0 ? (
                    <Rocket className="w-10 h-10 mr-4" style={{ color: '#9DA5B3' }} />
                  ) : (
                    <Award className="w-10 h-10 mr-4" style={{ color: '#0047BB' }} />
                  )}
                  <h3 className="text-2xl font-bold" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                    {item.tipo}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {item.caracteristicas.map((car, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: index === 0 ? '#9DA5B3' : '#0047BB' }} />
                      <span style={{ color: '#4B5563', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                        {car}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="py-20" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Programa de Formación
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Desarrolla las competencias esenciales del empresario exitoso
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
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

          {/* Beneficios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Lo que Obtendrás
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {beneficios.map((beneficio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#0047BB' }} />
                  <span style={{ color: '#374151', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', fontSize: '1.1rem' }}>
                    {beneficio}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #002677 0%, #0047BB 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Da el Salto de Emprendedor a Empresario
            </h2>
            <p className="text-xl text-blue-100 mb-8" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              No dejes que la falta de conocimiento limite tu potencial. Únete a nuestra comunidad de empresarios exitosos y transforma tu emprendimiento en un negocio sólido y rentable.
            </p>
            <motion.a
              href="https://wa.me/51920000848?text=Hola,%20quisiera%20inscribirme%20en%20Formación%20de%20Emprendedores"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              style={{ color: '#0047BB', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}
            >
              Inscribirme Ahora
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
