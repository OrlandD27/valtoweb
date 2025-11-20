"use client";

import { motion } from "framer-motion";
import { FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TerminosCondiciones() {
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
              <FileText className="w-16 h-16 text-white" strokeWidth={1.5} />
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif' }}>
              Términos y Condiciones
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-50 max-w-3xl mx-auto" style={{ fontFamily: 'Futura Lt Book, Futura, Arial, sans-serif' }}>
              Condiciones de uso de nuestros servicios
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
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>VALTO Management Consulting</strong> pone a disposición de los usuarios los Términos y Condiciones que rigen el acceso y uso de su Página Web, los cuales son regulados por la legislación aplicable en la República del Perú. En consecuencia, todas las visitas, interacciones y compras que se realicen en esta Página Web, así como sus efectos jurídicos, quedarán regidos por estas reglas y sometidos a dicha legislación.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Los presentes Términos y Condiciones se aplicarán y se entenderá que forman parte de todos los actos, las compras y los contratos que se ejecuten o celebren entre los usuarios de esta Página Web y VALTO Management Consulting, mediante los sistemas de oferta y comercialización de los productos ofrecidos en esta Página Web. La condición de "Usuario" es adquirida por la mera navegación y/o utilización de la Página Web.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                El Usuario puede acceder y navegar por la Página Web libremente sin necesidad de registrarse y/o suscribirse. Sin embargo, en algunos casos se requerirá del registro y/o suscripción para acceder a los servicios suministrados por VALTO Management Consulting, los cuales pueden estar sujetos a condiciones específicas. Asimismo, el acceso y la navegación por la Página Web por parte del Usuario implica la aceptación sin reservas de todas las disposiciones incluidas en los presentes Términos y Condiciones.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                I. MODIFICACIÓN DE LOS TÉRMINOS Y CONDICIONES
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                VALTO Management Consulting se reserva expresamente el derecho a modificar, actualizar o ampliar en cualquier momento y sin previo aviso los presentes Términos y Condiciones.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cualquier modificación, actualización o ampliación producida en los presentes Términos y Condiciones será inmediatamente publicada siendo responsabilidad del Usuario revisar los Términos y Condiciones vigentes cada vez que se utilice la Página Web.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                En caso de que el Usuario no estuviera de acuerdo con las modificaciones mencionadas, podrá optar por no hacer uso de los servicios ofrecidos por VALTO Management Consulting a través de la Página Web.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                II. SERVICIOS OFRECIDOS POR LA PÁGINA WEB
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La Página Web ofrece una plataforma a la que los Usuarios pueden acceder para conocer información, acceder a eventos, productos y/o noticias de actualidad, tanto nacionales como internacionales a nivel del mercado de capitales y servicios de consultoría empresarial. El Usuario también tendrá la posibilidad de adquirir productos físicos y/o digitales bajo las condiciones que se detallarán más adelante.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Asimismo, los Usuarios reconocen haber proporcionado voluntariamente sus datos personales, de conformidad con nuestra Política de Privacidad, a fin de poder disfrutar de los servicios ofrecidos por la Página Web.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                III. USO DE LA PÁGINA WEB
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Los servicios que se ofrecen a través de la presente Página Web se encuentran disponibles solo para aquellas personas que puedan celebrar contratos vinculantes de acuerdo con lo establecido por la ley aplicable. Al acceder a la Página Web, el Usuario declara ser mayor de 18 años de edad y encontrarse facultado a asumir obligaciones vinculantes con respecto a cualquier tipo de responsabilidad que se produzca por el uso de la Página Web.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                El Usuario se compromete a utilizar la Página Web de conformidad con la ley, los presentes Términos y Condiciones, la moral, las buenas costumbres y el orden público. En este sentido, la utilización por parte del Usuario de la Página Web se realizará de conformidad con las siguientes directivas:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>El Usuario se obliga a no utilizar la Página Web con fines o efectos ilícitos o contrarios al contenido de los presentes Términos y Condiciones, lesivos de los intereses o derechos de terceros, o que de cualquier forma pueda dañar, inutilizar, deteriorar la plataforma o impedir un normal disfrute la Página Web por otros Usuarios.</li>
                <li>El Usuario se compromete expresamente a no destruir, alterar, inutilizar o, de cualquier otra forma, dañar los datos, programas o documentos electrónicos y demás que se encuentren en la Página Web.</li>
                <li>El Usuario se compromete a no obstaculizar el acceso a otros Usuarios mediante el consumo masivo de los recursos informáticos a través de los cuales VALTO Management Consulting presta el servicio, así como a no realizar acciones que dañen, interrumpan o generen errores en dichos sistemas o servicios.</li>
                <li>El Usuario se compromete a no intentar penetrar o probar la vulnerabilidad de un sistema o de una red propia de la Página Web, así como quebrantar las medidas de seguridad o de autenticación del mismo.</li>
                <li>El Usuario se compromete a hacer un uso adecuado de los contenidos que se ofrecen en la Página Web y a no emplearlos para incurrir en actividades ilícitas, así como a no publicar ningún tipo de contenido ilícito.</li>
                <li>El Usuario se compromete a no utilizar la Página Web para enviar correos electrónicos masivos (spam) o correos electrónicos con contenido amenazante, abusivo, hostil, ultrajante, difamatorio, vulgar, obsceno o injurioso.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                VALTO Management Consulting se reserva la potestad de determinar, a su libre criterio, cuándo se produce la vulneración de cualquiera de los preceptos enunciados en el presente apartado por parte de los contenidos publicados por algún Usuario, así como la potestad de eliminar dichos contenidos de la Página Web.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                IV. REGISTRO Y RESPONSABILIDAD POR CONTRASEÑAS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El Usuario podrá navegar por la Página Web sin necesidad de registrarse en una cuenta. Sin embargo, en algunos casos se requerirá del registro y/o suscripción para acceder a productos digitales ofrecidos por la Página Web.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Los Usuarios registrados y/o suscritos contarán con una clave personal o contraseña con la cual podrán acceder a su cuenta personal. Cada Usuario es responsable de su propia contraseña, y deberá mantenerla bajo absoluta reserva y confidencialidad.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Las comunicaciones concernientes a la administración de la contraseña pueden ser enviadas al siguiente correo electrónico: info@valtomanagement.com
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                V. PROPIEDAD INTELECTUAL
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Todos los derechos de propiedad intelectual de la Página Web y de sus contenidos y diseños pertenecen a VALTO Management Consulting o, en su caso, a terceras personas. En aquellos casos en que sean propiedad de terceros, VALTO Management Consulting cuenta con las licencias necesarias para su utilización.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Quedan expresamente prohibidas la reproducción, distribución, transformación, comunicación pública, puesta a disposición o cualquier modo de utilización, de la totalidad o parte de los contenidos de la Página Web, sin la autorización de VALTO Management Consulting.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                VI. ENLACES DE TERCEROS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                En el supuesto de que en la Página Web se dispusieran enlaces o hipervínculos hacia otras páginas de Internet, VALTO Management Consulting declara que no ejerce ningún tipo de control sobre dichas páginas y contenidos, no asumiendo, en ningún caso, responsabilidad alguna por los contenidos de algún enlace perteneciente a una página web ajena.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                VII. LIMITACIÓN DE RESPONSABILIDAD
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                VALTO Management Consulting no se hace responsable de los posibles daños o perjuicios en la Página Web que se puedan derivar de interferencias, omisiones, interrupciones, virus informáticos, averías o desconexiones en el funcionamiento operativo del sistema electrónico.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Asimismo, VALTO Management Consulting no se hace responsable por la calidad, utilidad e idoneidad de los productos, servicios o facilidades ofrecidas al Usuario a través de la Página Web.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                VIII. DATOS DE CARÁCTER PERSONAL
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Los distintos tratamientos de datos personales que VALTO Management Consulting realiza a través de la Página Web, así como las finalidades de dichos tratamientos, serán detallados específicamente en la <Link href="/politica-de-privacidad" className="text-blue-600 hover:underline">Política de Privacidad</Link> de la Página Web.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                IX. COMUNICACIONES
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El Usuario acepta expresamente que la dirección de correo electrónico consignada en el formulario de registro y/o suscripción será el medio de contacto oficial entre la Página Web y el Usuario.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Toda comunicación que el Usuario desee dirigir a la Página Web deberá realizarla a través de la siguiente dirección de correo electrónico: info@valtomanagement.com
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Futura Lux, Futura, Arial, sans-serif', color: '#0047BB' }}>
                X. SEGURIDAD Y PRIVACIDAD
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                VALTO Management Consulting respeta totalmente el derecho de privacidad de los Usuarios. La información que estos brindan es usada exclusivamente para el procesamiento de su suscripción.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                VALTO Management Consulting está totalmente comprometido con la seguridad de sus clientes. El correo electrónico oficial de VALTO Management Consulting procede exclusivamente de la siguiente dirección: info@valtomanagement.com
              </p>
              <p className="text-gray-700 leading-relaxed">
                VALTO Management Consulting no se responsabiliza de información proporcionada por páginas web y las consecuencias derivadas de ello, especialmente cuando el acceso a la Página Web de VALTO Management Consulting se ha efectuado a través de un link o banner u otro tipo de servidor ajeno.
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
