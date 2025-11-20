"use client";

import { motion } from "framer-motion";
import { Shield, ChevronRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PoliticaPrivacidad() {
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
            className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"
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
              <Shield className="w-16 h-16 text-white" strokeWidth={1.5} />
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Política de Privacidad
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-50 max-w-3xl mx-auto" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Protección y tratamiento de sus datos personales
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              <p className="text-gray-700 leading-relaxed mb-8">
                <strong style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>VALTO Management Consulting</strong> valora a sus usuarios y está comprometido con la protección de su privacidad. Como parte de dicho compromiso, pone a disposición la presente Política de Privacidad que describe la manera en la que VALTO Management Consulting tratará sus datos personales en el marco de la relación que mantiene con usted para el uso de esta Página Web.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                I. ASPECTOS GENERALES
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al registrarse en la Página Web, usted, en tanto usuario de esta, acepta haber sido debidamente informado por VALTO Management Consulting de las prácticas, los usos y las políticas que se detallan a continuación, en cumplimiento de la Ley N° 29733, Ley de Protección de Datos Personales (en adelante, "LPDP"), y el Decreto Supremo N° 016-2024-JUS, actual Reglamento de la Ley de Protección de Datos Personales (en adelante, "RLPDP").
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Esta Política no aplica a páginas web, servicios, productos o aplicaciones de terceros, incluso si pueden ser accedidos a través de nuestros servicios o viceversa.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                II. INFORMACIÓN QUE RECOLECTAMOS DEL USUARIO
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                VALTO Management Consulting recibe y almacena la información que los Usuarios proporcionan al registrarse como usuarios de la Página Web, a fin de poder desarrollar nuestra relación y brindar nuestros servicios. Los datos personales recabados son los siguientes:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Nombres y apellidos</li>
                <li>Razón/denominación social (si se trata de personas jurídicas)</li>
                <li>Correo electrónico</li>
                <li>Tipo de documento y número</li>
                <li>Teléfono</li>
                <li>Domicilio</li>
                <li>Profesión y datos académicos</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                En caso se realice un registro en nombre de un tercero, el Usuario declara que ha obtenido su consentimiento antes de facilitarnos la información personal de aquel.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                III. FINALIDAD DE LA INFORMACIÓN DEL USUARIO
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                VALTO Management Consulting informa que la recopilación, organización y tratamiento de su información tiene, o puede tener, como finalidad:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                <li>Proveer productos, servicios o completar información requerida para ello.</li>
                <li>Cumplir y mantener la relación entre VALTO Management Consulting y usted.</li>
                <li>Atender y procesar solicitudes de registro y/o suscripción de Usuarios.</li>
                <li>Poder brindarle los servicios contratados de manera eficiente y con la debida calidad.</li>
                <li>Gestionar y administrar las cuentas personales y/o corporativas que los Usuarios mantengan en la Página Web.</li>
                <li>Establecer un medio de comunicación para recibir y atender sus consultas, preguntas, quejas o reclamos.</li>
                <li>Entender cómo se está usando nuestro servicio online para poder mejorar constantemente los servicios que le brindamos.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                IV. BANCO DE DATOS Y PERIODO DE CONSERVACIÓN
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La información que usted brinde y que VALTO Management Consulting recopile, se encontrará almacenada en un banco de datos personales denominado "Base de Datos de Usuarios" a cargo de VALTO Management Consulting.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Los datos personales serán conservados durante el tiempo en que el Usuario mantenga una relación con VALTO Management Consulting y, con posterioridad al término de esta, se mantendrán por un total de diez (10) años, para poder cumplir con las obligaciones legales pertinentes. Transcurrido dicho tiempo, serán eliminados.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                V. MEDIDAS DE SEGURIDAD PARA EL BANCO DE DATOS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                VALTO Management Consulting ha adoptado las medidas de seguridad legales, técnicas y organizativas necesarias para evitar la pérdida, el mal uso, la alteración, el acceso no autorizado y el robo de los datos personales. Hacemos de su conocimiento que su información no será comercializada, transferida ni compartida sin su autorización.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                VI. MENORES DE EDAD
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para acceder a los servicios de VALTO Management Consulting se requiere que el Usuario sea mayor de edad.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                En caso VALTO Management Consulting detecte o presuma que se ha registrado información de menores de edad sin la obtención del consentimiento del padre, tutor o representante, la misma será eliminada de nuestra base de datos lo más pronto posible.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                VII. ¿CÓMO RECOLECTAMOS LA INFORMACIÓN?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A fin de recibir los servicios de VALTO Management Consulting, el Usuario proporciona su información personal a través de los siguientes mecanismos:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                <li>Comunicación directa (vía llamada telefónica, correo electrónico y/o cualquier otro medio de comunicación) con VALTO Management Consulting.</li>
                <li>Solicitudes de registro, información, adquisición y/o asistencia de algún producto o servicio.</li>
                <li>Encuestas voluntarias online o físicas.</li>
                <li>Promociones.</li>
                <li>Al participar en algún evento desarrollado por VALTO Management Consulting.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                VIII. CUSTODIA Y CONFIDENCIALIDAD DE LA INFORMACIÓN
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La información personal será tratada con el grado de protección legalmente exigible para garantizar su seguridad y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                VALTO Management Consulting no transmite, divulga o proporciona la información personal recopilada a terceros diferentes del titular de dicha información personal, salvo en los casos en los que exista una relación de encargo para el tratamiento de datos personales o cuando sea requerido por autoridades públicas.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                IX. DERECHOS ARCO
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                VALTO Management Consulting reconoce y garantiza el ejercicio de los derechos de acceso, rectificación, cancelación y oposición (derechos ARCO) que por ley le asisten. El ejercicio de los derechos ARCO es realizado por el titular de los datos personales, quien debe dirigir su solicitud mediante correo electrónico: <a href="mailto:info@valtomanagement.com" className="text-blue-600 hover:underline font-semibold">info@valtomanagement.com</a>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                La solicitud deberá contener, al menos, los siguientes datos:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Nombres y apellidos del titular de los datos personales.</li>
                <li>Petición concreta y descripción clara del dato personal vinculado al ejercicio de los derechos ARCO.</li>
                <li>Documentos que sustenten la petición.</li>
                <li>Domicilio o dirección de correo electrónico para notificaciones.</li>
                <li>Fecha y firma.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                X. VÍNCULOS EXTERNOS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Esta Página Web puede contener vínculos (links) a otros sitios web que tienen sus propias políticas de privacidad y confidencialidad. Por ello, le recomendamos que si usted visita dichos sitios, revise cuidadosamente sus prácticas y políticas de confidencialidad.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                XI. REVISIÓN Y MODIFICACIÓN DE LA POLÍTICA DE PRIVACIDAD
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                VALTO Management Consulting podrá modificar y/o actualizar esta Política de Privacidad de manera unilateral. Por lo tanto, sírvase verificar estos términos regularmente para consultar los cambios que puedan haber existido.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Si el Usuario no se encuentra de acuerdo con la revisión y modificación de la presente política, deberá dejar de usar inmediatamente nuestros servicios.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                XII. CONTACTO Y DOMICILIO
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tiene preguntas sobre esta Política de Privacidad, las prácticas de VALTO Management Consulting, o los registros en la Página Web, nos puede contactar al siguiente correo electrónico:
              </p>
              <p className="text-gray-700 leading-relaxed">
                <a href="mailto:info@valtomanagement.com" className="text-blue-600 hover:underline font-semibold text-lg">info@valtomanagement.com</a>
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-6">
                Última actualización: Noviembre 2025
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl font-semibold"
                style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}
              >
                Volver al Inicio
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
