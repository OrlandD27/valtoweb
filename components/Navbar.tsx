"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Inicio", href: "#" },
  { name: "Servicios", href: "#servicios" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Casos de Éxito", href: "#casos-exito" },
  { name: "Galería", href: "#galeria" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group h-full">
            <div className={`relative w-16 h-12 md:w-14 md:h-12 flex items-center justify-center flex-shrink-0 self-center transition-all duration-300`}
              style={{
                filter: scrolled ? 'brightness(0) saturate(100%) invert(18%) sepia(98%) saturate(3567%) hue-rotate(212deg) brightness(95%) contrast(105%)' : 'none',
                opacity: scrolled ? 1 : 0.9
              }}
            >
              {/* Logo con imagen */}
              <img 
                src="/imagen2.png" 
                alt="VALTO Logo" 
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-center self-center">
              <span
                className={`text-2xl md:text-3xl font-bold transition-colors duration-300 leading-tight ${
                  scrolled ? "text-valto-blue" : "text-white"
                }`}
              >
                VALTO
              </span>
              <span
                className={`text-[10px] md:text-xs tracking-wider transition-colors duration-300 leading-tight ${
                  scrolled ? "text-gray-600" : "text-blue-100"
                }`}
              >
                MANAGEMENT CONSULTING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                  scrolled 
                    ? "text-gray-700 hover:text-valto-blue hover:bg-blue-50" 
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-3/4 ${
                  scrolled ? "bg-valto-blue" : "bg-white"
                }`}></span>
              </Link>
            ))}
            <Link
              href="/contacto"
              className={`ml-4 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                scrolled 
                  ? "bg-valto-blue text-white hover:bg-valto-blue-dark" 
                  : "bg-white text-valto-blue hover:bg-blue-50"
              }`}
            >
              Agendar Consulta
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              scrolled
                ? "text-valto-blue hover:bg-blue-50"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-2xl border-t border-gray-100"
          >
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 font-semibold py-3 px-4 rounded-xl transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-4"
              >
                <Link
                  href="#contacto"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg"
                  style={{ backgroundColor: '#0047BB' }}
                >
                  Agendar Consulta
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
