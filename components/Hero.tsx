"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, DollarSign } from "lucide-react";
import Link from "next/link";
import { useCountUp } from "@/hooks/useCountUp";
import { useEffect, useState } from "react";

export default function Hero() {
  const empresasCount = useCountUp(50, 2000);
  const creditosCount = useCountUp(95, 2000);
  const experienciaCount = useCountUp(4, 2000);

  // Estado para tipo de cambio
  const [exchangeRateBuy, setExchangeRateBuy] = useState<number>(3.75);
  const [exchangeRateSell, setExchangeRateSell] = useState<number>(3.78);
  const [rateChange, setRateChange] = useState<number>(0);
  const [historicalData, setHistoricalData] = useState<number[]>([3.72, 3.73, 3.71, 3.74, 3.73, 3.75]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currencyMode, setCurrencyMode] = useState<'USD_TO_PEN' | 'PEN_TO_USD'>('USD_TO_PEN');

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        
        if (data && data.rates && data.rates.PEN) {
          const newRate = data.rates.PEN;
          const buyRate = newRate - 0.015;
          const sellRate = newRate + 0.015;
          
          setRateChange(buyRate - exchangeRateBuy);
          setExchangeRateBuy(buyRate);
          setExchangeRateSell(sellRate);
          setHistoricalData(prev => [...prev.slice(-5), buyRate]);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
        setLoading(false);
      }
    };

    fetchExchangeRate();
    const interval = setInterval(fetchExchangeRate, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCurrencySwitch = () => {
    setCurrencyMode(prev => prev === 'USD_TO_PEN' ? 'PEN_TO_USD' : 'USD_TO_PEN');
  };

  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-[#F5F7FA]">
      {/* Imagen de fondo empresarial MÁS VISIBLE */}
      <div className="absolute inset-0">
        {/* Imagen con mejor visibilidad */}
        <div className="absolute inset-0">
          <img
            src="https://www.shutterstock.com/image-photo/happy-middle-aged-business-man-600nw-2306186897.jpg"
            alt="Business Growth"
            className="w-full h-full object-cover opacity-90"
            style={{ objectPosition: '65% 30%' }}
          />
        </div>
        
        {/* Overlay degradado VALTO - más transparente en móviles para ver la imagen */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0047BB]/50 via-[#0056D6]/30 to-transparent lg:from-[#0047BB]/60 lg:via-[#0056D6]/40"></div>
        
        {/* Panel lateral izquierdo - más transparente en móviles */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-[#0047BB]/60 via-[#0047BB]/40 to-transparent lg:from-[#0047BB]/75 lg:via-[#0047BB]/60"></div>
        
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full py-12 sm:py-16 lg:py-20">
          
          {/* Left content - Texto principal estilo REGUM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-5 sm:space-y-6 lg:space-y-8"
          >
            {/* Badge superior con colores VALTO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
            </motion.div>

            {/* Título principal empresarial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-0"
            >
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
                style={{ 
                  fontFamily: 'Futura, -apple-system, sans-serif',
                  letterSpacing: '-0.01em',
                  lineHeight: '1.1'
                }}
              >
                Transformamos
              </h1>
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
                style={{ 
                  fontFamily: 'Futura, -apple-system, sans-serif',
                  letterSpacing: '-0.01em',
                  lineHeight: '1.0'
                }}
              >
                tu negocio
              </h1>
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white/95 pt-2 sm:pt-3"
                style={{ 
                  fontFamily: 'Futura Lt Book, sans-serif',
                  letterSpacing: '0.01em',
                  lineHeight: '1.2'
                }}
              >
                en una empresa{" "}
                <span className="font-bold text-white bg-[#0056D6] px-2 sm:px-3 py-1 rounded-lg inline-block" style={{ fontFamily: 'Futura, sans-serif' }}>
                  exitosa
                </span>
              </h2>
            </motion.div>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed max-w-2xl"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              Consultoría empresarial especializada que impulsa el crecimiento de pequeñas y medianas empresas con estrategias probadas y resultados medibles.
            </motion.p>

            {/* Botones CTA con colores VALTO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <a
                  href="https://wa.me/51920000848?text=Hola,%20quisiera%20una%20consulta%20gratuita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center w-full px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0047BB] rounded-lg font-bold text-base sm:text-lg transition-all shadow-2xl hover:shadow-white/50 hover:bg-[#F5F7FA]"
                  style={{ fontFamily: 'Futura, sans-serif' }}
                >
                  Consulta Con Nosotros
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  href="/centro-de-aprendizaje"
                  className="inline-flex items-center justify-center w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#0056D6] backdrop-blur-sm text-white rounded-lg font-bold text-base sm:text-lg hover:bg-[#0056D6]/30 transition-all border-2"
                  style={{ fontFamily: 'Futura, sans-serif' }}
                >
                  Centro de Aprendizaje
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats con colores VALTO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-6 sm:pt-8 lg:pt-12 mt-6 sm:mt-8 lg:mt-12 border-t-2 border-white/30"
            >
              <div ref={empresasCount.ref} className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 text-white" style={{ fontFamily: 'Futura, sans-serif' }}>
                  {empresasCount.count}+
                </div>
                <div className="text-xs sm:text-sm text-white/90 font-light leading-tight">Empresas<br/>Asesoradas</div>
              </div>
              <div ref={creditosCount.ref} className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 text-white" style={{ fontFamily: 'Futura, sans-serif' }}>
                  {creditosCount.count}%
                </div>
                <div className="text-xs sm:text-sm text-white/90 font-light leading-tight">Tasa de<br/>Éxito</div>
              </div>
              <div ref={experienciaCount.ref} className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 text-white" style={{ fontFamily: 'Futura, sans-serif' }}>
                  {experienciaCount.count}+
                </div>
                <div className="text-xs sm:text-sm text-white/90 font-light leading-tight">Años<br/>Experiencia</div>
              </div>
            </motion.div>
          </motion.div>

          

        </div>
      </div>
    </section>
  );
}
