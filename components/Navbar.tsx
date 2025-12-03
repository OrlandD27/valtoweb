"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Iconos SVG actualizados de redes sociales
const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const YoutubeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const navItems = [
  { name: "Inicio", href: "/" },
  { 
    name: "Servicios", 
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { name: "Asesoria Financiera", href: "/servicios/consultoria-financiera" },
      { name: "Capacitación Empresarial", href: "/servicios/capacitacion-empresarial" },
      { name: "Consultoría de Negocios", href: "/servicios/consultoria-negocios" },
      { name: "Formación de Emprendedores", href: "/servicios/formacion-emprendedores" },
    ]
  },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Centro De Aprendizaje", href: "/centro-de-aprendizaje", featured: false },
  { name: "Tipo De Cambio", href: "/tipo-cambio" },
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
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(0, 71, 187, 0.95)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-around items-center transition-all duration-500 ${scrolled ? 'h-24 py-4' : 'h-28 py-5'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center">
              <img 
                src="/logo222.png" 
                alt="VALTO Management Consulting" 
                className="h-16 md:h-22 w-auto object-contain transition-all duration-500"
                style={{ filter: scrolled ? 'brightness(0) saturate(100%) invert(22%) sepia(93%) saturate(2878%) hue-rotate(210deg) brightness(97%) contrast(101%)' : 'brightness(0) invert(1)' }}
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
                  className={`relative px-5 py-3 text-base font-semibold transition-all duration-300 rounded-lg flex items-center gap-1 group ${
                    item.featured
                      ? scrolled
                        ? "bg-valto-blue text-white hover:bg-[#003088]"
                        : "bg-white/20 text-white hover:bg-white/30"
                      : scrolled 
                        ? "text-[#0047BB] hover:text-[#003088] hover:bg-blue-50" 
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
              className={`ml-4 px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
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
            className="lg:hidden shadow-2xl border-t border-white/20 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #002677 0%, #0047BB 100%)' }}
          >
            <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-6 py-6 space-y-2"
              style={{ 
                scrollbarWidth: 'thin',
                scrollbarColor: '#ffffff #0047BB'
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
                    className="block text-white font-semibold py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300"
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
                          className="block text-white/80 text-sm py-2 px-4 rounded-lg hover:bg-white/10 hover:text-white transition-all"
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
                  className="block w-full text-center text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg bg-white/10 hover:bg-white/20 border-2 border-white"
                >
                  Agendar Consulta
                </Link>
              </motion.div>

              {/* Redes Sociales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.1 }}
                className="pt-6 border-t border-white/20"
              >
                <p className="text-white/90 text-sm font-semibold mb-4 px-4">Síguenos en:</p>
                <div className="grid grid-cols-5 gap-3 px-4">
                  <a
                    href="https://www.facebook.com/gltbusinessconsulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full aspect-square bg-white text-[#0047BB] rounded-xl flex items-center justify-center hover:bg-white/90 transition-all hover:scale-110 shadow-lg"
                  >
                    <FacebookIcon size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/valto.management/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full aspect-square bg-white text-[#0047BB] rounded-xl flex items-center justify-center hover:bg-white/90 transition-all hover:scale-110 shadow-lg"
                  >
                    <InstagramIcon size={18} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@valto.management"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full aspect-square bg-white text-[#0047BB] rounded-xl flex items-center justify-center hover:bg-white/90 transition-all hover:scale-110 shadow-lg"
                  >
                    <TikTokIcon size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/gltbc/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full aspect-square bg-white text-[#0047BB] rounded-xl flex items-center justify-center hover:bg-white/90 transition-all hover:scale-110 shadow-lg"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCeuMGEp2CE9-trNobwxEC7Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full aspect-square bg-white text-[#0047BB] rounded-xl flex items-center justify-center hover:bg-white/90 transition-all hover:scale-110 shadow-lg"
                  >
                    <YoutubeIcon size={18} />
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
