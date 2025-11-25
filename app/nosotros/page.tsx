'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, Target, Eye, Users, Briefcase, GraduationCap, TrendingUp, Building2, Lightbulb, Award, Rocket, Heart, CheckCircle2, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocial from '@/components/FloatingSocial';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useRef } from 'react';

export default function NosotrosPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const valores = [
    {
      icon: Award,
      title: "Excelencia",
      description: "Compromiso con la calidad en cada proyecto",
      primaryColor: "#0047BB",
      secondaryColor: "#002677",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Dedicación total al éxito de nuestros clientes",
      primaryColor: "#0047BB",
      secondaryColor: "#002677",
      bgColor: "from-indigo-50 to-blue-50"
    },
    {
      icon: Rocket,
      title: "Innovación",
      description: "Soluciones creativas y actualizadas",
      primaryColor: "#0047BB",
      secondaryColor: "#002677",
      bgColor: "from-blue-50 to-sky-50"
    }
  ];

  const servicios = [
    {
      icon: GraduationCap,
      title: "Asesoría Académica",
      description: "Para estudiantes de pre y postgrado",
      items: ["Tesis y trabajos de investigación", "Proyección de estados financieros", "Valorización de empresas BVL"]
    },
    {
      icon: Users,
      title: "Capacitación Empresarial",
      description: "Programas de formación especializada",
      items: ["Talleres presenciales", "Cursos online", "Capacitación in-house"]
    },
    {
      icon: TrendingUp,
      title: "Consultoría de Inversiones",
      description: "Maximiza el retorno de tus ahorros",
      items: ["Análisis de rentabilidad", "Evaluación de proyectos", "Estrategias de inversión"]
    },
    {
      icon: Briefcase,
      title: "Consultoría Financiera",
      description: "Planificación estratégica y crecimiento",
      items: ["Plan de negocios", "Planificación financiera", "Optimización de recursos"]
    },
    {
      icon: Lightbulb,
      title: "Formación de Emprendedores",
      description: "Convierte tu idea en un negocio exitoso",
      items: ["Modelo de negocio", "Presupuesto empresarial", "Gestión financiera básica"]
    }
  ];

  const stats = [
    { number: "500+", label: "Clientes Satisfechos" },
    { number: "10+", label: "Años de Experiencia" },
    { number: "50+", label: "Proyectos Exitosos" },
    { number: "98%", label: "Tasa de Éxito" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FloatingSocial />
      <WhatsAppButton />

      {/* Modern Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ scale }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0047BB]/60 via-purple-900/40 to-black/60 z-10 mix-blend-multiply" />
          <Image 
            src="/capacitaciones2.png" 
            alt="VALTO Team" 
            fill
            className="object-cover object-top"
            quality={100}
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{ opacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="inline-block mb-6"
            >
              <motion.div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #0047BB 0%, #002677 100%)' }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white fill-white" />
              </motion.div>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-8 leading-none font-futura-lux">
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Sobre
              </motion.span>
              <motion.span 
                className="block text-[#B7BCB4]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                Nosotros
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-lg sm:text-2xl md:text-3xl text-gray-200 font-futura-book mb-12"
            >
              Transformamos negocios en historias de éxito
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.a
                href="#mision"
                className="group bg-white text-[#0047BB] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#0047BB] hover:text-white transition-all shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 inline-flex items-center gap-2 font-futura-lux"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Nuestra Misión
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#valores"
                className="group bg-white text-[#0047BB] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#0047BB] hover:text-white transition-all shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 inline-flex items-center gap-2 font-futura-lux"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                Nuestros Valores
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quienes Somos Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-futura-book" style={{ color: '#0047BB' }}>NUESTRA IDENTIDAD</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6 font-futura-lux">
              <span style={{ color: '#9da5b3d1' }}>¿Quienes</span> <span style={{ color: '#0047BB' }}>Somos?</span>
            </h2>
            <div className="h-1 w-24 mx-auto rounded-full mb-8" style={{ background: 'linear-gradient(to right, #0047BB, #002677)' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center">
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-futura-book">
                  Somos una <span className="font-bold font-futura-lux" style={{ color: '#0047BB' }}>firma de consultoría para negocios</span> orientada a la pequeña y micro empresa, comprometidos con el crecimiento y desarrollo empresarial en todo el Perú.
                </p>
                <div className="space-y-4">
                  {["Experiencia comprobada", "Enfoque personalizado", "Resultados medibles"].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: '#0047BB' }} />
                      <span className="text-gray-700 font-medium font-arial">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="p-12 flex flex-col justify-center text-white" style={{ background: 'linear-gradient(135deg, #0047BB 0%, #002677 100%)' }}>
                <Building2 className="w-16 h-16 mb-6 text-blue-200" />
                <h3 className="text-3xl font-bold mb-4 font-futura-lux">Nuestro Compromiso</h3>
                <p className="text-blue-100 text-lg leading-relaxed font-futura-book">
                  Transformar negocios en empresas exitosas mediante estrategias innovadoras y soluciones personalizadas que generan valor real.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #0047BB 0%, #002677 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-futura-lux">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-sm md:text-base font-medium font-futura-book">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="mision" className="py-24 px-4 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-futura-book text-sm uppercase tracking-wider" style={{ color: '#0047BB' }}>Nuestro Propósito</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0047BB] mt-4 font-futura-lux">
              Visión & Misión
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" style={{ background: 'linear-gradient(135deg, #0047BB, #002677)' }} />
              
              <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-200 h-full overflow-hidden">
                {/* Animated corner accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full"
                  style={{ background: 'linear-gradient(135deg, #0047BB, #002677)' }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <motion.div 
                    className="p-4 rounded-2xl shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #0047BB, #002677)' }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Eye className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#0047BB] mb-2 font-futura-lux">Visión</h3>
                    <div className="h-1 w-16 rounded-full" style={{ background: 'linear-gradient(to right, #0047BB, #002677)' }} />
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed relative z-10 font-futura-book">
                  Ser la firma de consultoría <span className="font-bold font-futura-lux relative" style={{ color: '#0047BB' }}>
                    más reconocida en temas empresariales
                    <span className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(to right, #0047BB, #002677)' }} />
                  </span> a nivel de todo el territorio nacional.
                </p>

                {/* Decorative icon bottom right */}
                <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Eye className="w-24 h-24" style={{ color: '#0047BB' }} />
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" style={{ background: 'linear-gradient(135deg, #002677, #0047BB)' }} />
              
              <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-200 h-full overflow-hidden">
                {/* Animated corner accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full"
                  style={{ background: 'linear-gradient(135deg, #002677, #0047BB)' }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <motion.div 
                    className="p-4 rounded-2xl shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #002677, #0047BB)' }}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Target className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#0047BB] mb-2 font-futura-lux">Misión</h3>
                    <div className="h-1 w-16 rounded-full" style={{ background: 'linear-gradient(to right, #002677, #0047BB)' }} />
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed relative z-10 font-futura-book">
                  Anticipar y priorizar las necesidades de nuestros socios comerciales; <span className="font-bold font-futura-lux relative" style={{ color: '#0047BB' }}>
                    creando valor en sus inversiones
                    <span className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: 'linear-gradient(to right, #002677, #0047BB)' }} />
                  </span>, teniendo en cuenta el crecimiento personal y profesional de nuestros colaboradores y el desarrollo de nuestra comunidad empresarial.
                </p>

                {/* Decorative icon bottom right */}
                <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Target className="w-24 h-24" style={{ color: '#0047BB' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Animated background gradient */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full filter blur-3xl opacity-30"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-futura-book text-sm uppercase tracking-wider mb-2 block" style={{ color: '#0047BB' }}>Nuestros Principios</span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-futura-lux">
             <span style={{ color: '#0047BB' }}>Nuestros</span> <span className="font-bold text-white bg-[#0056D6] px-3 py-1 rounded-lg inline-block" style={{ fontFamily: 'Futura, sans-serif' }}>
                  Valores
                </span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" style={{ background: `linear-gradient(135deg, ${valor.primaryColor}, ${valor.secondaryColor})` }} />
                  
                  <div className={`relative bg-gradient-to-br ${valor.bgColor} p-8 rounded-2xl border-2 hover:shadow-2xl transition-all duration-300 h-full`} style={{ borderColor: '#E8F0FE' }}>
                    {/* Floating icon container */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="p-4 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 w-fit" style={{ background: `linear-gradient(135deg, ${valor.primaryColor}, ${valor.secondaryColor})` }}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Decorative circle */}
                      <motion.div 
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-60"
                        style={{ background: `linear-gradient(135deg, ${valor.primaryColor}, ${valor.secondaryColor})` }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.6, 0.8, 0.6]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                    </motion.div>
                    
                    <h4 className="text-2xl font-bold text-[#002677] mb-3 transition-colors font-futura-lux" style={{ color: index === 1 ? '#0047BB' : undefined }}>
                      {valor.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed font-futura-book">
                      {valor.description}
                    </p>

                    {/* Bottom accent line */}
                    <motion.div 
                      className="h-1 rounded-full mt-6"
                      style={{ background: `linear-gradient(to right, ${valor.primaryColor}, ${valor.secondaryColor})` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                    />

                    {/* Decorative corner element */}
                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-20" style={{ background: `linear-gradient(135deg, ${valor.primaryColor}, ${valor.secondaryColor})` }} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-futura-book text-sm uppercase tracking-wider" style={{ color: '#0047BB' }}>A Quiénes Servimos</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#B7BCB4] mt-4 mb-6 font-futura-lux">
              Clientes <span style={{ color: '#0047bbff' }}>Objetivos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-futura-book">
              Trabajamos con empresas y emprendedores comprometidos con el crecimiento y la excelencia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(to bottom right, #0047BB, #002677)' }}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#002677] mb-2 font-futura-lux">
                    {servicio.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-futura-book">
                    {servicio.description}
                  </p>
                  <ul className="space-y-2">
                    {servicio.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 font-arial">
                        <ArrowRight className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: '#0047BB' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #0047BB, #002677, #001a4d)' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-futura-lux">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto font-futura-book" style={{ color: '#B7BCB4' }}>
              Únete a cientos de empresas que han confiado en nosotros para alcanzar sus objetivos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#servicios"
                className="group bg-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center gap-2 font-futura-lux"
                style={{ color: '#0047BB' }}
              >
                Explorar Servicios
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center gap-2 font-futura-lux"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Contactar Ahora
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
