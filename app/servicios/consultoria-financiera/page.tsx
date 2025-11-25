"use client";

import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, PieChart, BarChart3, Calculator, ArrowRight, DollarSign, LineChart } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import FloatingSocial from "@/components/FloatingSocial";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ConsultoriaFinanciera() {
  const servicios = [
    "Análisis y optimización del flujo de caja",
    "Distribución estratégica de recursos financieros",
    "Planificación de inversiones en capital de trabajo",
    "Gestión de activos fijos y depreciación",
    "Estrategias de financiamiento y gestión de deudas",
    "Mapeo completo del ciclo financiero empresarial"
  ];

  const areas = [
    {
      icon: DollarSign,
      titulo: "Gestión de Ingresos",
      descripcion: "Optimización de fuentes de ingreso y estrategias de pricing para maximizar la rentabilidad"
    },
    {
      icon: Calculator,
      titulo: "Distribución de Recursos",
      descripcion: "Asignación inteligente de recursos entre operación, inversión y financiamiento"
    },
    {
      icon: LineChart,
      titulo: "Capital de Trabajo",
      descripcion: "Gestión eficiente del efectivo, inventarios y cuentas por cobrar/pagar"
    },
    {
      icon: BarChart3,
      titulo: "Análisis de Rentabilidad",
      descripcion: "Evaluación de proyectos, productos y líneas de negocio para decisiones informadas"
    }
  ];

  return (
    <>
      <Navbar />
      <FloatingSocial />
      <WhatsAppButton />
      
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
              <TrendingUp className="w-16 h-16 text-white" strokeWidth={1.5} />
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Consultoría Financiera
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Decisiones financieras estratégicas para el crecimiento sostenible
            </p>

            <motion.a
              href="https://wa.me/51920000848?text=Hola,%20quisiera%20información%20sobre%20Consultoría%20Financiera"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              style={{ color: '#0047BB', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}
            >
              Optimizar mis Finanzas
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Descripción con Carrusel */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                Las Finanzas: El Corazón de tu Empresa
              </h2>
              <p className="text-lg mb-6" style={{ color: '#4B5563', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.8' }}>
                Las finanzas juegan un papel fundamental en la vida de una empresa. La gestión estratégica de ingresos y su distribución en la operación del negocio, la inversión en capital de trabajo o activos fijos, y el financiamiento o pago de deudas conforman un ciclo que toda empresa debe tener totalmente mapeado.
              </p>
              <p className="text-lg mb-6" style={{ color: '#4B5563', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.8' }}>
                En VALTO te ayudamos a comprender y optimizar cada aspecto de este ciclo financiero, garantizando que cada decisión esté respaldada por análisis sólidos y estrategias probadas.
              </p>
              <div className="flex items-center p-6 rounded-xl" style={{ backgroundColor: '#0047BB10' }}>
                <PieChart className="w-12 h-12 mr-4" style={{ color: '#0047BB' }} />
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                    Diagnóstico Financiero
                  </h3>
                  <p style={{ color: '#6B7280', fontFamily: 'Arial' }}>
                    Análisis integral sin costo inicial
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
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
                  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
                  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80"
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
                Servicios Financieros
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {servicios.map((servicio, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#0047BB' }} />
                    <span style={{ color: '#374151', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      {servicio}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section className="py-20" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Áreas de Especialización
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Soluciones financieras para cada aspecto de tu empresa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
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
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                      {area.titulo}
                    </h3>
                    <p style={{ color: '#6B7280', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif', lineHeight: '1.6' }}>
                      {area.descripcion}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Toma el Control de tus Finanzas
            </h2>
            <p className="text-xl text-blue-100 mb-8" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              No dejes las decisiones financieras al azar. Trabaja con especialistas que entienden el ciclo completo de las finanzas empresariales y pueden ayudarte a maximizar cada peso invertido.
            </p>
            <motion.a
              href="https://wa.me/51920000848?text=Hola,%20quisiera%20solicitar%20un%20análisis%20financiero"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              style={{ color: '#0047BB', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}
            >
              Solicitar Análisis
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
