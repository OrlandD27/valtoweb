"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import Link from "next/link";
import { useCountUp } from "@/hooks/useCountUp";

export default function Hero() {
  const empresasCount = useCountUp(500, 2000);
  const creditosCount = useCountUp(95, 2000);
  const experienciaCount = useCountUp(10, 2000);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0056D6] via-valto-blue to-[#0039A0] pt-20">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 md:w-[500px] md:h-[500px] bg-cyan-400 rounded-full blur-3xl opacity-15"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-blue-300 rounded-full blur-3xl opacity-10"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-40 right-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-60 right-40 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
            >
              <Award className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">
                +10 años de experiencia empresarial
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              Impulsa tu Negocio al{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                Siguiente Nivel
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed"
            >
              Brindamos asesoría especializada en créditos, financiamiento y
              capacitación empresarial para emprendedores y empresarios.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contacto"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-valto-blue rounded-lg font-semibold text-lg transition-all shadow-xl hover:shadow-2xl"
                >
                  Consulta Gratuita
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#servicios"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border-2 border-white/30"
                >
                  Conocer Servicios
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20"
            >
              <div ref={empresasCount.ref}>
                <div className="text-3xl lg:text-4xl font-bold mb-1">{empresasCount.count}+</div>
                <div className="text-sm text-blue-200">Empresas Asesoradas</div>
              </div>
              <div ref={creditosCount.ref}>
                <div className="text-3xl lg:text-4xl font-bold mb-1">{creditosCount.count}%</div>
                <div className="text-sm text-blue-200">Créditos Aprobados</div>
              </div>
              <div ref={experienciaCount.ref}>
                <div className="text-3xl lg:text-4xl font-bold mb-1">{experienciaCount.count}+</div>
                <div className="text-sm text-blue-200">Años Experiencia</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Illustration/Graphics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">
                        Crecimiento
                      </div>
                      <div className="text-blue-200 text-sm">
                        Financiero Sostenible
                      </div>
                    </div>
                  </div>

                  <div className="h-40 bg-white/5 rounded-xl flex items-end justify-around p-4">
                    {[40, 65, 45, 80, 70, 95].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                        className="w-8 bg-gradient-to-t from-white to-blue-200 rounded-t"
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating cards */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl"
              >
                <Users className="w-8 h-8 text-white mb-2" />
                <div className="text-2xl font-bold text-white">+500</div>
                <div className="text-sm text-blue-200">Clientes Felices</div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl"
              >
                <Award className="w-8 h-8 text-white mb-2" />
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-sm text-blue-200">Tasa de Éxito</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
