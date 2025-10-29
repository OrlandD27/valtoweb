"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    company: "Boutique La Elegancia",
    text: "Gracias a VALTO conseguimos el financiamiento que necesitábamos para expandir nuestro negocio. Su asesoría fue clave para nuestro crecimiento.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Maria+Gonzalez&background=0047BB&color=fff&size=128&bold=true",
  },
  {
    name: "Carlos Ramírez",
    company: "Constructora Ramírez & Asociados",
    text: "El equipo de VALTO nos ayudó a estructurar un plan financiero que nos permitió duplicar nuestra capacidad operativa. Altamente recomendados.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Carlos+Ramirez&background=0047BB&color=fff&size=128&bold=true",
  },
  {
    name: "Ana Martínez",
    company: "Café Aroma",
    text: "Las capacitaciones que recibimos transformaron la manera en que gestionamos nuestro negocio. Profesionales comprometidos con el éxito de sus clientes.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Ana+Martinez&background=0047BB&color=fff&size=128&bold=true",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Historias de éxito de empresarios que confiaron en nosotros
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-valto-blue group overflow-hidden"
            >
              {/* Decorative gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-valto-blue via-valto-blue-light to-valto-blue"></div>
              
              {/* Background decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-valto-blue/5 to-transparent rounded-full blur-2xl"></div>

              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-20 h-20 text-valto-blue" />
              </div>

              {/* Rating */}
              <div className="flex mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10 text-base">
                "{testimonial.text}"
              </p>

              {/* Author with photo */}
              <div className="flex items-center pt-6 border-t border-gray-100 relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-valto-blue rounded-full blur-md opacity-20"></div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full ring-4 ring-white shadow-lg relative z-10"
                  />
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
