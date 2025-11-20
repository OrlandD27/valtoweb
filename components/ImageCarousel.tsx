"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

export default function ImageCarousel({ images, autoPlay = true, interval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden group">
      {/* Imágenes */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay oscuro sutil */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Botones de navegación */}
      <motion.button
        onClick={goToPrevious}
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 71, 187, 0.9)' }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: 'rgba(0, 71, 187, 0.7)', backdropFilter: 'blur(10px)' }}
      >
        <ChevronLeft className="w-6 h-6 text-white" strokeWidth={3} />
      </motion.button>

      <motion.button
        onClick={goToNext}
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 71, 187, 0.9)' }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: 'rgba(0, 71, 187, 0.7)', backdropFilter: 'blur(10px)' }}
      >
        <ChevronRight className="w-6 h-6 text-white" strokeWidth={3} />
      </motion.button>

      {/* Indicadores de puntos */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="w-2.5 h-2.5 rounded-full transition-all"
            style={{
              backgroundColor: index === currentIndex ? '#0047BB' : 'rgba(255, 255, 255, 0.5)',
              width: index === currentIndex ? '32px' : '10px',
            }}
          />
        ))}
      </div>
    </div>
  );
}
