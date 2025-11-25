"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white" style={{ 
      background: 'linear-gradient(to bottom right, #0047BB, #002677, #001a4d)',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo222.png" 
                alt="VALTO Management Consulting" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-white/80 text-sm">
              Construyendo valor para tus inversiones.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicios" className="text-white/80 hover:text-white transition-colors">
                  Asesoría en Créditos
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-white/80 hover:text-white transition-colors">
                  Financiamiento Empresarial
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-white/80 hover:text-white transition-colors">
                  Capacitación Empresarial
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terminos-y-condiciones" className="text-white/80 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidad" className="text-white/80 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/libro-de-reclamaciones" className="text-white/80 hover:text-white transition-colors">
                  Libro de Reclamaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-white/80">
                <Phone className="w-4 h-4 mr-2" />
                +51 985 123 456
              </li>
              <li className="flex items-center text-white/80">
                <Mail className="w-4 h-4 mr-2" />
                info@valto.com.gt
              </li>
              <li className="flex items-start text-white/80">
                <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                Perú, Perú
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
          <p>© 2025 VALTO Management Consulting. Todos los derechos reservados.</p>
          <p>
            Diseñado por{' '}
            <a 
              href="https://www.facebook.com/moderstudioo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors font-semibold"
            >
              ModerStudio
            </a>
            {''}💙
          </p>
          <p>Marca registrada por indecopi.</p>
        </div>
      </div>
    </footer>
  );
}
