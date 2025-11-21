"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, User, Mail, Briefcase, FileText, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function AgendarCita() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentMonthOffset, setCurrentMonthOffset] = useState(0);
  
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    servicio: "",
    proyecto: "",
  });

  const servicios = [
    "Capacitación Empresarial",
    "Consultoría de Negocios",
    "Consultoría Financiera",
    "Formación de Emprendedores",
  ];

  const horarios = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM"
  ];

  // Generar calendario del mes actual o siguiente
  const getCurrentMonth = (offset: number = 0) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + offset;
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Días vacíos al inicio
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const handleDateClick = (date: Date | null) => {
    if (date && date >= new Date(new Date().setHours(0, 0, 0, 0))) {
      const dayOfWeek = date.getDay();
      // Solo permitir de lunes a sábado (1-6), no domingo (0)
      if (dayOfWeek !== 0) {
        setSelectedDate(date);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      alert("Por favor seleccione fecha y hora para la cita");
      return;
    }

    const fechaFormateada = selectedDate.toLocaleDateString('es-PE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const mensaje = `🗓️ *NUEVA CITA AGENDADA*

📅 *Fecha:* ${fechaFormateada}
⏰ *Hora:* ${selectedTime}

👤 *Nombre:* ${formData.nombre}
🏢 *Empresa:* ${formData.empresa || "No especificada"}
📞 *Teléfono:* ${formData.telefono}
📧 *Email:* ${formData.email}

📋 *Servicio Solicitado:*
${formData.servicio}

💼 *Descripción del Proyecto:*
${formData.proyecto}

---
_Cita agendada desde www.valtomanagement.com_`;

    const numeroWhatsApp = "51920000848";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    // Mostrar mensaje de éxito
    setShowSuccess(true);
    
    // Abrir WhatsApp después de un breve delay
    setTimeout(() => {
      window.open(urlWhatsApp, '_blank');
      
      // Resetear formulario después de enviar
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          empresa: "",
          servicio: "",
          proyecto: "",
        });
        setSelectedDate(null);
        setSelectedTime("");
      }, 2000);
    }, 1500);
  };

  const today = new Date();
  const todayDay = today.getDate();
  
  // Determinar qué meses mostrar según el día actual
  const canShowNextMonth = todayDay >= 15;
  const maxMonthOffset = canShowNextMonth ? 1 : 0;
  
  const displayDate = new Date(today.getFullYear(), today.getMonth() + currentMonthOffset, 1);
  const currentMonth = monthNames[displayDate.getMonth()];
  const currentYear = displayDate.getFullYear();
  const calendarDays = getCurrentMonth(currentMonthOffset);
  
  const handlePrevMonth = () => {
    if (currentMonthOffset > 0) {
      setCurrentMonthOffset(currentMonthOffset - 1);
    }
  };
  
  const handleNextMonth = () => {
    if (currentMonthOffset < maxMonthOffset) {
      setCurrentMonthOffset(currentMonthOffset + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0047BB 0%, #0056D6 50%, #003088 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 left-10 w-80 h-80 bg-white rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-8"
              style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}
            >
              <Calendar className="w-16 h-16 text-white" strokeWidth={1.5} />
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Agenda tu Cita
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-50 max-w-3xl mx-auto" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Reserva una asesoría personalizada con nuestros expertos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulario y Calendario */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Calendario */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                  Selecciona una Fecha
                </h2>
                
                <div className="flex items-center justify-between">
                  <motion.button
                    onClick={handlePrevMonth}
                    disabled={currentMonthOffset === 0}
                    whileHover={currentMonthOffset > 0 ? { scale: 1.1 } : {}}
                    whileTap={currentMonthOffset > 0 ? { scale: 0.9 } : {}}
                    className={`p-2 rounded-lg ${
                      currentMonthOffset === 0
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  
                  <div className="text-xl font-semibold" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                    {currentMonth} {currentYear}
                  </div>
                  
                  <motion.button
                    onClick={handleNextMonth}
                    disabled={currentMonthOffset >= maxMonthOffset}
                    whileHover={currentMonthOffset < maxMonthOffset ? { scale: 1.1 } : {}}
                    whileTap={currentMonthOffset < maxMonthOffset ? { scale: 0.9 } : {}}
                    className={`p-2 rounded-lg ${
                      currentMonthOffset >= maxMonthOffset
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
                
                {canShowNextMonth && (
                  <p className="text-xs text-green-600 mt-2 text-center" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                    ✓ Puedes agendar para el siguiente mes
                  </p>
                )}
              </div>

              {/* Días de la semana */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {dayNames.map((day) => (
                  <div
                    key={day}
                    className="text-center text-sm font-semibold py-2"
                    style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Días del mes */}
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((date, index) => {
                  const isToday = date && date.toDateString() === today.toDateString();
                  const todayMidnight = new Date(new Date().setHours(0, 0, 0, 0));
                  const isPast = date ? date < todayMidnight : false;
                  const isSelected = date && selectedDate && date.toDateString() === selectedDate.toDateString();
                  const isSunday = date && date.getDay() === 0;

                  return (
                    <motion.button
                      key={index}
                      onClick={() => !isPast && !isSunday && handleDateClick(date)}
                      disabled={!date || Boolean(isPast) || Boolean(isSunday)}
                      whileHover={date && !isPast && !isSunday ? { scale: 1.1 } : {}}
                      whileTap={date && !isPast && !isSunday ? { scale: 0.95 } : {}}
                      className={`
                        aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all
                        ${!date ? 'invisible' : ''}
                        ${isPast || isSunday ? 'text-gray-300 cursor-not-allowed bg-gray-50' : ''}
                        ${isToday && !isSelected ? 'ring-2 ring-blue-500' : ''}
                        ${isSelected ? 'text-white shadow-lg' : 'text-gray-700 hover:bg-blue-50'}
                        ${!isPast && !isSunday && !isSelected ? 'hover:shadow-md' : ''}
                      `}
                      style={
                        isSelected
                          ? { background: 'linear-gradient(135deg, #0047BB 0%, #002677 100%)', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }
                          : { fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }
                      }
                    >
                      {date ? date.getDate() : ''}
                    </motion.button>
                  );
                })}
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                * Lunes a Sábado (Domingos cerrado)
              </p>

              {/* Selector de Hora */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 pt-8 border-t-2 border-gray-100"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5" style={{ color: '#0047BB' }} />
                    <h3 className="text-xl font-bold" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                      Selecciona una Hora
                    </h3>
                  </div>

                  <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto pr-2">
                    {horarios.map((hora) => (
                      <motion.button
                        key={hora}
                        onClick={() => setSelectedTime(hora)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                          py-3 px-2 rounded-lg text-sm font-medium transition-all
                          ${selectedTime === hora
                            ? 'text-white shadow-lg'
                            : 'text-gray-700 bg-gray-50 hover:bg-blue-50 border-2 border-transparent hover:border-blue-200'
                          }
                        `}
                        style={
                          selectedTime === hora
                            ? { background: 'linear-gradient(135deg, #0047BB 0%, #002677 100%)', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }
                            : { fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }
                        }
                      >
                        {hora}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                Información de Contacto
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                    <User className="w-4 h-4" />
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                    placeholder="Juan Pérez"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                    <Mail className="w-4 h-4" />
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                    placeholder="juan@empresa.com"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                    📞 Teléfono *
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="PE"
                    value={formData.telefono}
                    onChange={(value) => setFormData(prev => ({ ...prev, telefono: value || '' }))}
                    className="phone-input-custom"
                    placeholder="999 999 999"
                    required
                  />
                  <style jsx global>{`
                    .phone-input-custom input {
                      width: 100%;
                      padding: 12px 16px;
                      border: 2px solid #e5e7eb;
                      border-radius: 8px;
                      font-family: 'Futura Lt Book', Futura, Arial, sans-serif;
                      transition: border-color 0.2s;
                    }
                    .phone-input-custom input:focus {
                      outline: none;
                      border-color: #3b82f6;
                    }
                    .phone-input-custom .PhoneInputCountry {
                      margin-right: 8px;
                    }
                  `}</style>
                </div>

                {/* Empresa */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                    <Briefcase className="w-4 h-4" />
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                    placeholder="Nombre de tu empresa (opcional)"
                  />
                </div>

                {/* Servicio */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                    <FileText className="w-4 h-4" />
                    Servicio de Interés *
                  </label>
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                  >
                    <option value="">Selecciona un servicio</option>
                    {servicios.map((servicio) => (
                      <option key={servicio} value={servicio}>
                        {servicio}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Proyecto */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                    <Briefcase className="w-4 h-4" />
                    Descripción del Proyecto *
                  </label>
                  <textarea
                    name="proyecto"
                    value={formData.proyecto}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                    placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                  />
                </div>

                {/* Resumen de la cita */}
                {selectedDate && selectedTime && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: '#F5F7FA', border: '2px solid #0047BB' }}
                  >
                    <p className="text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                      📅 Resumen de tu Cita:
                    </p>
                    <p className="text-sm" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      {selectedDate.toLocaleDateString('es-PE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      {' a las '}{selectedTime}
                    </p>
                  </motion.div>
                )}

                {/* Botón de envío */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!selectedDate || !selectedTime}
                  className={`
                    w-full px-8 py-4 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center justify-center gap-3
                    ${!selectedDate || !selectedTime ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                  style={{ background: 'linear-gradient(135deg, #0047BB 0%, #002677 100%)', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}
                >
                  <Send className="w-6 h-6" />
                  Confirmar Cita por WhatsApp
                </motion.button>

                <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                  * Al confirmar, se abrirá WhatsApp con tu información de cita
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal de Éxito */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring" }}
            className="bg-white rounded-2xl p-8 max-w-md text-center shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <CheckCircle className="w-20 h-20 mx-auto mb-4 text-green-500" />
            </motion.div>
            
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
              ¡Cita Agendada!
            </h3>
            
            <p className="text-gray-600 mb-4" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Redirigiendo a WhatsApp para confirmar tu cita...
            </p>
            
            <div className="flex items-center justify-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
