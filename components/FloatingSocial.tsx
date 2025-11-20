"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";

// Icono de TikTok personalizado
const TikTokIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function FloatingSocial() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/gltbusinessconsulting",
      label: "Facebook",
      hoverBg: "#0047BB"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/valto.management/",
      label: "Instagram",
      hoverBg: "#0047BB"
    },
    {
      icon: TikTokIcon,
      href: "https://www.tiktok.com/@valto.management",
      label: "TikTok",
      hoverBg: "#0047BB"
    },
    {
      icon: Linkedin,
      href: "https://pe.linkedin.com/company/valtomanagement",
      label: "LinkedIn",
      hoverBg: "#0047BB"
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCeuMGEp2CE9-trNobwxEC7Q",
      label: "YouTube",
      hoverBg: "#0047BB"
    }
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="flex flex-col space-y-3">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: -60 }}
            animate={{ x: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
            whileHover={{ x: 8, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative w-14 h-14 text-white rounded-r-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              background: hoveredIndex === index ? social.hoverBg : '#0047BB'
            }}
            title={social.label}
          >
            <social.icon size={22} className="relative z-10" />
            
            {/* Label on hover */}
            <span className="absolute left-full ml-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {social.label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
