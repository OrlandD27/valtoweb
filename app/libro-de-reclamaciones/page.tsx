"use client";

import { motion } from "framer-motion";
import { BookOpen, Send } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LibroReclamaciones() {
  const [formData, setFormData] = useState({
    // Datos del consumidor
    tipoDocumento: "",
    numeroDocumento: "",
    nombres: "",
    apellidos: "",
    domicilio: "",
    departamento: "",
    provincia: "",
    distrito: "",
    telefono: "",
    email: "",
    
    // Datos del apoderado (menor de edad)
    esApoderado: false,
    apoderadoTipoDoc: "",
    apoderadoNumDoc: "",
    apoderadoNombres: "",
    apoderadoApellidos: "",
    apoderadoDomicilio: "",
    apoderadoTelefono: "",
    apoderadoEmail: "",
    
    // Identificación del bien
    tipoSolicitud: "reclamo",
    tipoServicio: "",
    descripcionServicio: "",
    montoReclamado: "",
    
    // Detalle de la reclamación
    detalleReclamacion: "",
    pedidoConsumidor: "",
    
    // Aceptación
    aceptaTerminos: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.aceptaTerminos) {
      alert("Debe aceptar los términos y condiciones");
      return;
    }
    
    setIsSubmitting(true);

    try {
      console.log('📤 Enviando formulario...', formData);
      
      const response = await fetch('/api/libro-reclamaciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('📡 Response status:', response.status);
      
      const data = await response.json();
      console.log('📦 Response data:', data);

      if (response.ok && data.success) {
        alert("✅ Su reclamo ha sido registrado exitosamente. Nos comunicaremos con usted en un plazo de 15 días hábiles.");
        
        // Resetear formulario
        setFormData({
          tipoDocumento: "",
          numeroDocumento: "",
          nombres: "",
          apellidos: "",
          domicilio: "",
          departamento: "",
          provincia: "",
          distrito: "",
          telefono: "",
          email: "",
          esApoderado: false,
          apoderadoTipoDoc: "",
          apoderadoNumDoc: "",
          apoderadoNombres: "",
          apoderadoApellidos: "",
          apoderadoDomicilio: "",
          apoderadoTelefono: "",
          apoderadoEmail: "",
          tipoSolicitud: "reclamo",
          tipoServicio: "",
          descripcionServicio: "",
          montoReclamado: "",
          detalleReclamacion: "",
          pedidoConsumidor: "",
          aceptaTerminos: false,
        });
      } else {
        console.error('❌ Error en respuesta:', data);
        alert(`Error: ${data.error || 'Hubo un error al enviar su reclamo. Por favor, intente nuevamente.'}`);
      }
    } catch (error) {
      console.error('❌ Error de red:', error);
      alert("Error de conexión. Por favor, verifique su internet e intente nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0047BB 0%, #002677 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"
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
              <BookOpen className="w-16 h-16 text-white" strokeWidth={1.5} />
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Libro de Reclamaciones
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-50 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Conforme a lo establecido en el Código de Protección y Defensa del Consumidor
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <p className="text-white text-lg mb-2" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                VALTO Management Consulting
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* DATOS DEL CONSUMIDOR */}
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                  Datos del Consumidor
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      Tipo de Documento *
                    </label>
                    <select
                      name="tipoDocumento"
                      value={formData.tipoDocumento}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                    >
                      <option value="">Seleccione</option>
                      <option value="DNI">DNI</option>
                      <option value="CE">Carnet de Extranjería</option>
                      <option value="Pasaporte">Pasaporte</option>
                      <option value="RUC">RUC</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      Número de Documento *
                    </label>
                    <input
                      type="text"
                      name="numeroDocumento"
                      value={formData.numeroDocumento}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      Nombres *
                    </label>
                    <input
                      type="text"
                      name="nombres"
                      value={formData.nombres}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      Apellidos *
                    </label>
                    <input
                      type="text"
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      Domicilio *
                    </label>
                    <input
                      type="text"
                      name="domicilio"
                      value={formData.domicilio}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      Departamento *
                    </label>
                    <input
                      type="text"
                      name="departamento"
                      value={formData.departamento}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      Provincia *
                    </label>
                    <input
                      type="text"
                      name="provincia"
                      value={formData.provincia}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      Distrito *
                    </label>
                    <input
                      type="text"
                      name="distrito"
                      value={formData.distrito}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
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
                    />
                  </div>
                </div>
              </div>

              {/* DATOS DEL APODERADO (OPCIONAL) */}
              <div className="border-t-2 border-gray-100 pt-8">
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    name="esApoderado"
                    checked={formData.esApoderado}
                    onChange={handleChange}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <label className="ml-3 text-lg font-semibold" style={{ color: '#0047BB', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
                    El reclamante es menor de edad (requiere apoderado)
                  </label>
                </div>

                {formData.esApoderado && (
                  <>
                    <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                      Datos del Apoderado
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                          Tipo de Documento *
                        </label>
                        <select
                          name="apoderadoTipoDoc"
                          value={formData.apoderadoTipoDoc}
                          onChange={handleChange}
                          required={formData.esApoderado}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                          style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                        >
                          <option value="">Seleccione</option>
                          <option value="DNI">DNI</option>
                          <option value="CE">Carnet de Extranjería</option>
                          <option value="Pasaporte">Pasaporte</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                          Número de Documento *
                        </label>
                        <input
                          type="text"
                          name="apoderadoNumDoc"
                          value={formData.apoderadoNumDoc}
                          onChange={handleChange}
                          required={formData.esApoderado}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                          style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                          Nombres *
                        </label>
                        <input
                          type="text"
                          name="apoderadoNombres"
                          value={formData.apoderadoNombres}
                          onChange={handleChange}
                          required={formData.esApoderado}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                          style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                          Apellidos *
                        </label>
                        <input
                          type="text"
                          name="apoderadoApellidos"
                          value={formData.apoderadoApellidos}
                          onChange={handleChange}
                          required={formData.esApoderado}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                          style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                          Domicilio *
                        </label>
                        <input
                          type="text"
                          name="apoderadoDomicilio"
                          value={formData.apoderadoDomicilio}
                          onChange={handleChange}
                          required={formData.esApoderado}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                          style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          name="apoderadoTelefono"
                          value={formData.apoderadoTelefono}
                          onChange={handleChange}
                          required={formData.esApoderado}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                          style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          name="apoderadoEmail"
                          value={formData.apoderadoEmail}
                          onChange={handleChange}
                          required={formData.esApoderado}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                          style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* IDENTIFICACIÓN DEL BIEN CONTRATADO */}
              <div className="border-t-2 border-gray-100 pt-8">
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                  Identificación del Bien Contratado
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      Tipo de Solicitud *
                    </label>
                    <select
                      name="tipoSolicitud"
                      value={formData.tipoSolicitud}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                    >
                      <option value="reclamo">Reclamo</option>
                      <option value="queja">Queja</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      Tipo de Servicio *
                    </label>
                    <select
                      name="tipoServicio"
                      value={formData.tipoServicio}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                    >
                      <option value="">Seleccione</option>
                      <option value="Capacitación Empresarial">Capacitación Empresarial</option>
                      <option value="Consultoría de Negocios">Consultoría de Negocios</option>
                      <option value="Consultoría Financiera">Consultoría Financiera</option>
                      <option value="Formación de Emprendedores">Formación de Emprendedores</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      Descripción del Servicio *
                    </label>
                    <textarea
                      name="descripcionServicio"
                      value={formData.descripcionServicio}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                      placeholder="Describa brevemente el servicio contratado"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      Monto Reclamado (opcional)
                    </label>
                    <input
                      type="text"
                      name="montoReclamado"
                      value={formData.montoReclamado}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                      placeholder="S/. 0.00"
                    />
                  </div>
                </div>
              </div>

              {/* DETALLE DE LA RECLAMACIÓN */}
              <div className="border-t-2 border-gray-100 pt-8">
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                  Detalle de la Reclamación y Pedido
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      Detalle de la Reclamación *
                    </label>
                    <textarea
                      name="detalleReclamacion"
                      value={formData.detalleReclamacion}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                      placeholder="Describa detalladamente su reclamo o queja"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#002677', fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                      Pedido del Consumidor *
                    </label>
                    <textarea
                      name="pedidoConsumidor"
                      value={formData.pedidoConsumidor}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}
                      placeholder="Indique qué acción espera de VALTO Management Consulting"
                    />
                  </div>
                </div>
              </div>

              {/* ACEPTACIÓN DE TÉRMINOS */}
              <div className="border-t-2 border-gray-100 pt-8">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="aceptaTerminos"
                    checked={formData.aceptaTerminos}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 mt-1"
                  />
                  <label className="ml-3 text-sm text-gray-700" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                    Estoy de acuerdo con los{' '}
                    <a href="/terminos-y-condiciones" target="_blank" className="font-semibold hover:underline" style={{ color: '#0047BB' }}>
                      Términos y Condiciones
                    </a>{' '}
                    y la{' '}
                    <a href="/politica-de-privacidad" target="_blank" className="font-semibold hover:underline" style={{ color: '#0047BB' }}>
                      Política de Tratamiento de Datos Personales
                    </a>
                    . *
                  </label>
                </div>
              </div>

              {/* BOTÓN DE ENVÍO */}
              <div className="pt-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full px-8 py-4 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  style={{ background: 'linear-gradient(135deg, #0047BB 0%, #002677 100%)', fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}
                >
                  <Send className={`w-6 h-6 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  {isSubmitting ? 'Enviando...' : 'Enviar Reclamo'}
                </motion.button>
                
                <p className="text-sm text-gray-500 text-center mt-4" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
                  * Campos obligatorios. Su reclamo será atendido en un plazo máximo de 15 días hábiles.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
