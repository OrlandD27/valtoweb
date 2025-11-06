"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";

export default function FloatingSocial() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/gltbusinessconsulting",
      label: "Facebook",
      hoverBg: "#1877F2"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/valto.management/",
      label: "Instagram",
      hoverBg: "linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #FD1D1D 100%)"
    },
    {
      icon: Linkedin,
      href: "https://pe.linkedin.com/company/valtomanagement",
      label: "LinkedIn",
      hoverBg: "#00A0DC"
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCeuMGEp2CE9-trNobwxEC7Q",
      label: "YouTube",
      hoverBg: "#FF0000"
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
