'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Target, Users, ChartBar, FileText, Calculator, CreditCard } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocial from '@/components/FloatingSocial';

export default function ServiciosPage() {
  const serviciosPrincipales = [
    {
      iconImage: "/icono_1.png",
      title: "Capacitación Empresarial",
      description: "Estamos convencidos que el éxito de una Empresa depende mucho del conocimiento adquirido por las personas que toman decisiones en ella. Es por esto que instruimos o capacitamos a estas personas con material teórico y práctico sacado de las mejores escuelas de negocios y ponemos a su disposición todo este material.",
      features: [
        "Material de élite de escuelas de negocios internacionales",
        "Programas de formación teórica y práctica",
        "Talleres para tomadores de decisiones",
        "Capacitación in-house personalizada",
        "Cursos presenciales y online",
        "Certificaciones profesionales"
      ],
      color: "#0047BB",
      gradient: "linear-gradient(135deg, #0047BB, #002677)",
    },
    {
      iconImage: "/icono_2.png",
      title: "Consultoría de Negocios",
      description: "Hacer una Empresa va desde elegir el nombre o la razón social, ver los objetos sociales que más se acomodan, inscripción en Registros Públicos, buscar un público objetivo, desarrollar las estrategias para obtener los resultados propuestos. Todo ello puedes hacer con nosotros.",
      features: [
        "Elección de nombre y razón social",
        "Definición de objetos sociales",
        "Inscripción en Registros Públicos",
        "Identificación de público objetivo",
        "Desarrollo de estrategias empresariales",
        "Plan de negocios integral"
      ],
      color: "#002677",
      gradient: "linear-gradient(135deg, #002677, #0047BB)",
    },
    {
      iconImage: "/icono_3.png",
      title: "Consultoría Financiera",
      description: "Las finanzas juegan un papel importante en la vida de una Empresa. Los ingresos y la distribución de estos en la operación del negocio, en la inversión en capital de trabajo o Activos fijos y en el financiamiento o pago de deudas es un ciclo que toda empresa debe tener totalmente mapeado para la óptima toma de decisiones financieras.",
      features: [
        "Gestión de ingresos empresariales",
        "Distribución en operaciones del negocio",
        "Inversión en capital de trabajo",
        "Gestión de activos fijos",
        "Planificación de financiamiento",
        "Mapeo completo del ciclo financiero"
      ],
      color: "#0047BB",
      gradient: "linear-gradient(135deg, #0047BB, #002677)",
    },
    {
      iconImage: "/icono_4.png",
      title: "Formación de Emprendedores y Empresarios",
      description: "Una cosa es ser Emprendedor y una muy distinta ser empresario. El emprendedor tiene las ganas de hacer algo propio, algo diferente, pero esto no basta para tener éxito en el enmarañado mundo de los negocios. A ello es necesario sumarle conocimiento, habilidades financieras y diferentes soft skills que marcarán la diferencia en el ecosistema en que se mueve la empresa.",
      features: [
        "Transformación de emprendedor a empresario",
        "Desarrollo de habilidades financieras",
        "Formación en soft skills empresariales",
        "Conocimiento del ecosistema de negocios",
        "Estrategias de éxito empresarial",
        "Mentoría personalizada"
      ],
      color: "#002677",
      gradient: "linear-gradient(135deg, #002677, #0047BB)",
    }
  ];

  const serviciosComplementarios = [
    {
      icon: Target,
      title: "Asesoría Académica",
      items: ["Tesis y trabajos de investigación", "Proyección de estados financieros", "Valorización de empresas BVL"]
    },
    {
      icon: ChartBar,
      title: "Consultoría de Inversiones",
      items: ["Análisis de rentabilidad", "Evaluación de proyectos", "Estrategias de inversión"]
    },
    {
      icon: Users,
      title: "Formación de Emprendedores",
      items: ["Modelo de negocio Canvas", "Presupuesto empresarial", "Gestión financiera básica"]
    },
    {
      icon: FileText,
      title: "Planificación Estratégica",
      items: ["Análisis FODA", "Objetivos estratégicos", "KPIs y métricas"]
    },
    {
      icon: Calculator,
      title: "Asesoría Tributaria",
      items: ["Optimización tributaria", "Cumplimiento fiscal", "Planificación impositiva"]
    },
    {
      icon: CreditCard,
      title: "Asesoría en Créditos",
      items: ["Análisis de capacidad crediticia", "Búsqueda de mejores tasas", "Acompañamiento en el proceso"]
    }
  ];

  const proceso = [
    {
      numero: "01",
      titulo: "Diagnóstico Inicial",
      descripcion: "Evaluamos tu situación actual y necesidades específicas"
    },
    {
      numero: "02",
      titulo: "Propuesta Personalizada",
      descripcion: "Diseñamos una solución a medida para tu empresa"
    },
    {
      numero: "03",
      titulo: "Implementación",
      descripcion: "Ejecutamos el plan con acompañamiento constante"
    },
    {
      numero: "04",
      titulo: "Seguimiento",
      descripcion: "Monitoreamos resultados y ajustamos estrategias"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FloatingSocial />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0047BB, #002677)' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-futura-lux">
              Nuestros <span className="text-blue-200">Servicios</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-futura-book">
              Soluciones integrales para el crecimiento y desarrollo sostenible de tu empresa
            </p>
            <div className="h-1 w-32 mx-auto mt-8 rounded-full" style={{ background: 'linear-gradient(to right, #B7BCB4, white)' }} />
          </motion.div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-futura-book text-sm uppercase tracking-wider" style={{ color: '#0047BB' }}>Servicios Principales</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 font-futura-lux">
              Soluciones <span style={{ color: '#0047BB' }}>Estratégicas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-futura-book">
              Servicios diseñados para impulsar el crecimiento y la competitividad de tu negocio
            </p>
          </motion.div>

          <div className="space-y-12">
            {serviciosPrincipales.map((servicio, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100">
                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Left side - Icon and Title */}
                      <div className="md:col-span-1 p-8 md:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden" style={{ background: servicio.gradient }}>
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />
                        
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="relative z-10"
                        >
                          <div className="bg-white p-6 rounded-2xl mb-6 group-hover:shadow-lg transition-all">
                            <Image 
                              src={servicio.iconImage} 
                              alt={servicio.title}
                              width={80}
                              height={80}
                              className="w-20 h-20 object-contain"
                              unoptimized
                            />
                          </div>
                        </motion.div>
                        
                        <h3 className="text-3xl font-bold text-white mb-2 relative z-10 font-futura-lux">
                          {servicio.title}
                        </h3>
                      </div>

                      {/* Right side - Description and Features */}
                      <div className="md:col-span-2 p-8 md:p-12">
                        <p className="text-gray-700 text-lg leading-relaxed mb-8 font-futura-book">
                          {servicio.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          {servicio.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" style={{ color: servicio.color }} />
                              <span className="text-gray-700 font-arial">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Servicios Complementarios */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-futura-book text-sm uppercase tracking-wider" style={{ color: '#0047BB' }}>Más Servicios</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 font-futura-lux">
              Servicios <span style={{ color: '#0047BB' }}>Complementarios</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviciosComplementarios.map((servicio, index) => {
              const Icon = servicio.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 group"
                >
                  <div className="p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #0047BB, #002677)' }}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-futura-lux">
                    {servicio.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {servicio.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 font-arial">
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

      {/* Proceso de Trabajo */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-futura-book text-sm uppercase tracking-wider" style={{ color: '#0047BB' }}>Metodología</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 font-futura-lux">
              Nuestro <span style={{ color: '#0047BB' }}>Proceso</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {proceso.map((paso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 h-full">
                  <div className="text-6xl font-bold mb-4 font-futura-lux" style={{ 
                    background: 'linear-gradient(135deg, #0047BB, #002677)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {paso.numero}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-futura-lux">
                    {paso.titulo}
                  </h3>
                  
                  <p className="text-gray-600 font-futura-book">
                    {paso.descripcion}
                  </p>
                </div>

                {/* Connector Arrow */}
                {index < proceso.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6" style={{ color: '#0047BB' }} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0047BB, #002677, #001a4d)' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-futura-lux">
              ¿Listo para llevar tu negocio al siguiente nivel?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto font-futura-book" style={{ color: '#B7BCB4' }}>
              Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos empresariales
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/51920000848?text=Hola%20%F0%9F%91%8B%2C%20necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20consultor%C3%ADa%20%F0%9F%93%8A%F0%9F%92%BC"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center gap-2 font-futura-lux"
                style={{ color: '#0047BB' }}
              >
                Solicitar Consultoría
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="https://wa.me/51920000848?text=Hola%20%F0%9F%91%8B%2C%20necesito%20m%C3%A1s%20informaci%C3%B3n%20o%20una%20asesor%C3%ADa%20%F0%9F%93%8A%F0%9F%92%BC"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center gap-2 font-futura-lux"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
