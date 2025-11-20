"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Icono de TikTok personalizado
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const navItems = [
  { name: "Inicio", href: "/" },
  { 
    name: "Servicios", 
    href: "/servicios",
    hasDropdown: true,
    dropdownItems: [
      { name: "Capacitación Empresarial", href: "/servicios/capacitacion-empresarial" },
      { name: "Consultoría de Negocios", href: "/servicios/consultoria-negocios" },
      { name: "Consultoría Financiera", href: "/servicios/consultoria-financiera" },
      { name: "Formación de Emprendedores", href: "/servicios/formacion-emprendedores" },
    ]
  },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Tipo De Cambio", href: "/tipo-cambio" },
  { name: "Centro De Aprendizaje", href: "/centro-de-aprendizaje", featured: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
          ? "shadow-xl backdrop-blur-xl"
          : "backdrop-blur-md"
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(245, 247, 250, 0.98)' : 'rgba(0, 71, 187, 0.92)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="w-20 h-20 flex items-center justify-center">
              <img 
                src="/logooficial.png" 
                alt="VALTO Logo" 
                className="h-16 w-86 object-contain transition-transform duration-300 group-hover:scale-110"
                style={{ 
                  filter: scrolled ? 'brightness(0) saturate(100%) invert(18%) sepia(98%) saturate(3567%) hue-rotate(212deg) brightness(95%) contrast(105%)' : 'none'
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg flex items-center gap-1 group ${
                    item.featured
                      ? scrolled
                        ? "bg-valto-blue text-white hover:bg-[#003088]"
                        : "bg-white/20 text-white hover:bg-white/30"
                      : scrolled 
                        ? "text-gray-800 hover:text-valto-blue hover:bg-blue-50" 
                        : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                  {!item.featured && (
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-3/4 ${
                      scrolled ? "bg-valto-blue" : "bg-white"
                    }`}></span>
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
                    >
                      {item.dropdownItems?.map((subItem, idx) => (
                        <Link
                          key={idx}
                          href={subItem.href}
                          className="block px-5 py-3 text-sm text-gray-700 hover:bg-valto-blue hover:text-white transition-all font-medium"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <Link
              href="/agendar-cita"
              className={`ml-4 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                scrolled 
                  ? "bg-valto-blue text-white hover:bg-[#003088]" 
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
            className="lg:hidden bg-white shadow-2xl border-t border-gray-100 overflow-hidden"
          >
            <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-6 py-6 space-y-2"
              style={{ 
                scrollbarWidth: 'thin',
                scrollbarColor: '#0047BB #f5f7fa'
              }}
            >
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
                    className="block text-gray-800 font-semibold py-3 px-4 rounded-xl hover:bg-blue-50 hover:text-valto-blue transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdownItems.map((subItem, idx) => (
                        <Link
                          key={idx}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-600 text-sm py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-valto-blue transition-all"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-4"
              >
                <Link
                  href="/agendar-cita"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg bg-valto-blue hover:bg-[#003088]"
                >
                  Agendar Consulta
                </Link>
              </motion.div>

              {/* Redes Sociales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.1 }}
                className="pt-6 border-t border-gray-200"
              >
                <p className="text-gray-500 text-sm font-semibold mb-4 px-4">Síguenos en:</p>
                <div className="grid grid-cols-5 gap-3 px-4">
                  <a
                    href="https://www.facebook.com/gltbusinessconsulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full aspect-square bg-[#0047BB] text-white rounded-xl flex items-center justify-center hover:bg-[#003088] transition-all hover:scale-110 shadow-lg"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/valto.management/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full aspect-square bg-[#0047BB] text-white rounded-xl flex items-center justify-center hover:bg-[#003088] transition-all hover:scale-110 shadow-lg"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@valto.management"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full aspect-square bg-[#0047BB] text-white rounded-xl flex items-center justify-center hover:bg-[#003088] transition-all hover:scale-110 shadow-lg"
                  >
                    <TikTokIcon size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/gltbc/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full aspect-square bg-[#0047BB] text-white rounded-xl flex items-center justify-center hover:bg-[#003088] transition-all hover:scale-110 shadow-lg"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCeuMGEp2CE9-trNobwxEC7Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full aspect-square bg-[#0047BB] text-white rounded-xl flex items-center justify-center hover:bg-[#003088] transition-all hover:scale-110 shadow-lg"
                  >
                    <Youtube size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
