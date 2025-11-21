"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/capacitacion1.png",
    title: "Capacitación Empresarial",
    category: "Capacitaciones",
  },
  {
    id: 2,
    src: "/gallery/capacitacion2.png",
    title: "Talleres Financieros",
    category: "Capacitaciones",
  },
  {
    id: 3,
    src: "/gallery/asesoria1.png",
    title: "Asesoría Personalizada",
    category: "Asesorías",
  },
  {
    id: 4,
    src: "/gallery/evento1.png",
    title: "Eventos Corporativos",
    category: "Eventos",
  },
  {
    id: 5,
    src: "/gallery/oficina1.png",
    title: "Nuestras Oficinas",
    category: "Oficinas",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("Todos");

  const categories = ["Todos", "Capacitaciones", "Asesorías", "Eventos", "Oficinas"];

  const filteredImages = filter === "Todos" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex].id);
    }
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <section className="py-20 bg-gradient-to-br from-[#002677] via-[#0047BB] to-[#0056D6] relative overflow-hidden" id="galeria">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-white/20 backdrop-blur-sm">
            <ImageIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Futura, sans-serif' }}>
            Nuestra Galería
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8" style={{ fontFamily: 'Arial, sans-serif' }}>
            Conoce nuestro trabajo y las experiencias que compartimos con nuestros clientes
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-white text-[#0047BB] shadow-xl transform scale-105"
                    : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                }`}
                style={{ fontFamily: 'Futura, sans-serif' }}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-[4/3] bg-gray-100"
                onClick={() => openLightbox(image.id)}
              >
                {/* Image */}
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002677]/90 via-[#0047BB]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full text-xs font-medium mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                      {image.category}
                    </span>
                    <h3 className="text-xl font-bold" style={{ fontFamily: 'Futura, sans-serif' }}>{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && selectedImageData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#002677]/95 via-[#0047BB]/95 to-[#0056D6]/95 backdrop-blur-sm p-4"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors backdrop-blur-sm"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Lightbox image */}
                <div className="relative w-full h-[70vh] rounded-lg overflow-hidden bg-black flex items-center justify-center">
                  <img 
                    src={selectedImageData.src} 
                    alt={selectedImageData.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Image Info */}
                <div className="mt-4 text-center">
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                    {selectedImageData.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Futura, sans-serif' }}>
                    {selectedImageData.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
