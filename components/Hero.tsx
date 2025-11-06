"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Award, DollarSign } from "lucide-react";
import Link from "next/link";
import { useCountUp } from "@/hooks/useCountUp";
import { useEffect, useState } from "react";

export default function Hero() {
  const empresasCount = useCountUp(500, 2000);
  const creditosCount = useCountUp(95, 2000);
  const experienciaCount = useCountUp(10, 2000);

  // Estado para tipo de cambio
  const [exchangeRate, setExchangeRate] = useState<number>(3.75);
  const [rateChange, setRateChange] = useState<number>(0);
  const [historicalData, setHistoricalData] = useState<number[]>([3.72, 3.73, 3.71, 3.74, 3.73, 3.75]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Función para obtener el tipo de cambio real
    const fetchExchangeRate = async () => {
      try {
        // API gratuita de ExchangeRate-API
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        
        if (data && data.rates && data.rates.PEN) {
          const newRate = data.rates.PEN;
          setRateChange(newRate - exchangeRate);
          setExchangeRate(newRate);
          setHistoricalData(prev => [...prev.slice(-5), newRate]);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
        setLoading(false);
      }
    };

    // Obtener tipo de cambio al cargar
    fetchExchangeRate();

    // Actualizar cada 60 segundos (las APIs gratuitas tienen límites)
    const interval = setInterval(fetchExchangeRate, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0">
        {/* Imagen de fondo - Puedes reemplazar esta URL con tu propia imagen */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
            alt="Financial Growth"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Gradient overlay animado - más transparente para ver mejor la imagen */}
        <div className="absolute inset-0 bg-gradient-to-br from-valto-blue/85 via-[#0056D6]/80 to-[#0039A0]/85"></div>
        
        {/* Animated overlay patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "60px 60px",
            }}
          ></motion.div>
          
          {/* Círculos animados flotantes */}
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-blue-400 rounded-full blur-3xl opacity-20"
            ></motion.div>
            <motion.div
              animate={{
                y: [0, 40, 0],
                x: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-20 right-10 w-80 h-80 md:w-[500px] md:h-[500px] bg-cyan-400 rounded-full blur-3xl opacity-15"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-blue-300 rounded-full blur-3xl"
            ></motion.div>
          </div>
          
          {/* Líneas animadas que cruzan */}
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          ></motion.div>
          <motion.div
            animate={{
              x: ["100%", "-100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          ></motion.div>
        </div>
        
        {/* Decorative floating elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-60 right-40 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, -25, 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-40 left-20 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50"
          ></motion.div>
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

            {/* Tipo de cambio para móviles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="lg:hidden mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl"
            >
              <motion.div 
                className="flex items-center justify-between mb-4"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <DollarSign className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-white font-semibold">Tipo de Cambio</div>
                    <div className="text-blue-200 text-xs">USD/PEN</div>
                  </div>
                </div>
                <div className="text-right">
                  <motion.div 
                    className="text-2xl font-bold text-white"
                    animate={{
                      scale: loading ? [1, 1.05, 1] : 1,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: loading ? Infinity : 0,
                    }}
                  >
                    {loading ? (
                      <span className="animate-pulse">S/ ---.---</span>
                    ) : (
                      `S/ ${exchangeRate.toFixed(3)}`
                    )}
                  </motion.div>
                  <motion.div 
                    className={`text-xs flex items-center justify-end ${rateChange >= 0 ? 'text-green-300' : 'text-red-300'}`}
                    animate={{
                      y: rateChange >= 0 ? [-2, 0, -2] : [2, 0, 2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    {!loading && (
                      <>
                        {rateChange >= 0 ? '↑' : '↓'} {Math.abs(rateChange).toFixed(3)}
                      </>
                    )}
                  </motion.div>
                </div>
              </motion.div>
              <div className="h-24 bg-white/5 rounded-lg flex items-end justify-around p-3 gap-1">
                {historicalData.map((rate, i) => {
                  const minRate = Math.min(...historicalData);
                  const maxRate = Math.max(...historicalData);
                  const range = maxRate - minRate || 0.01;
                  const height = ((rate - minRate) / range) * 80 + 20;
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                      className={`flex-1 rounded-t transition-all ${
                        i === historicalData.length - 1 
                          ? 'bg-gradient-to-t from-white to-blue-200' 
                          : 'bg-gradient-to-t from-white/60 to-blue-200/60'
                      }`}
                    ></motion.div>
                  );
                })}
              </div>
              <motion.div 
                className="text-xs text-blue-200 text-center mt-3"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                {loading ? 'Cargando...' : 'Actualización cada minuto'}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right content - Illustration/Graphics (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card - Tipo de Cambio */}
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                        <DollarSign className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">
                          Tipo de Cambio
                        </div>
                        <div className="text-blue-200 text-sm">
                          USD/PEN
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">
                        {loading ? (
                          <span className="animate-pulse">S/ ---.---</span>
                        ) : (
                          `S/ ${exchangeRate.toFixed(3)}`
                        )}
                      </div>
                      <div className={`text-sm flex items-center justify-end ${rateChange >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                        {!loading && (
                          <>
                            {rateChange >= 0 ? '↑' : '↓'} {Math.abs(rateChange).toFixed(3)}
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Gráfico mini */}
                  <div className="h-40 bg-white/5 rounded-xl flex items-end justify-around p-4 gap-2">
                    {historicalData.map((rate, i) => {
                      const minRate = Math.min(...historicalData);
                      const maxRate = Math.max(...historicalData);
                      const range = maxRate - minRate || 0.01;
                      const height = ((rate - minRate) / range) * 80 + 20;
                      
                      return (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 0.1 * i, duration: 0.5 }}
                          className={`flex-1 rounded-t transition-all ${
                            i === historicalData.length - 1 
                              ? 'bg-gradient-to-t from-white to-blue-200' 
                              : 'bg-gradient-to-t from-white/60 to-blue-200/60'
                          }`}
                        ></motion.div>
                      );
                    })}
                  </div>
                  
                  <div className="text-xs text-blue-200 text-center">
                    {loading ? 'Cargando...' : 'Actualización cada minuto'}
                  </div>
                </div>
              </motion.div>

              {/* Floating card - Solo Tasa de Éxito */}
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
