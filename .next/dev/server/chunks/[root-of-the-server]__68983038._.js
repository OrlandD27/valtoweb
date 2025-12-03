module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/libro-reclamaciones/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(request) {
    try {
        const formData = await request.json();
        const emailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f7fa;">
        <div style="background: linear-gradient(135deg, #0047BB 0%, #002677 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Libro de Reclamaciones</h1>
          <p style="color: #e0e7ff; margin: 10px 0 0 0;">VALTO Management Consulting</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #0047BB; border-bottom: 2px solid #0047BB; padding-bottom: 10px;">Datos del Consumidor</h2>
          <table style="width: 100%; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Tipo de Documento:</strong></td>
              <td style="padding: 8px 0;">${formData.tipoDocumento}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Número de Documento:</strong></td>
              <td style="padding: 8px 0;">${formData.numeroDocumento}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Nombres:</strong></td>
              <td style="padding: 8px 0;">${formData.nombres}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Apellidos:</strong></td>
              <td style="padding: 8px 0;">${formData.apellidos}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Domicilio:</strong></td>
              <td style="padding: 8px 0;">${formData.domicilio}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Ubicación:</strong></td>
              <td style="padding: 8px 0;">${formData.departamento}, ${formData.provincia}, ${formData.distrito}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Teléfono:</strong></td>
              <td style="padding: 8px 0;">${formData.telefono}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
              <td style="padding: 8px 0;">${formData.email}</td>
            </tr>
          </table>

          ${formData.esApoderado ? `
          <h2 style="color: #0047BB; border-bottom: 2px solid #0047BB; padding-bottom: 10px; margin-top: 30px;">Datos del Apoderado</h2>
          <table style="width: 100%; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Tipo de Documento:</strong></td>
              <td style="padding: 8px 0;">${formData.apoderadoTipoDoc}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Número de Documento:</strong></td>
              <td style="padding: 8px 0;">${formData.apoderadoNumDoc}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Nombres:</strong></td>
              <td style="padding: 8px 0;">${formData.apoderadoNombres}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Apellidos:</strong></td>
              <td style="padding: 8px 0;">${formData.apoderadoApellidos}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Domicilio:</strong></td>
              <td style="padding: 8px 0;">${formData.apoderadoDomicilio}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Teléfono:</strong></td>
              <td style="padding: 8px 0;">${formData.apoderadoTelefono}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
              <td style="padding: 8px 0;">${formData.apoderadoEmail}</td>
            </tr>
          </table>
          ` : ''}

          <h2 style="color: #0047BB; border-bottom: 2px solid #0047BB; padding-bottom: 10px; margin-top: 30px;">Identificación del Bien Contratado</h2>
          <table style="width: 100%; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Tipo de Solicitud:</strong></td>
              <td style="padding: 8px 0;"><span style="background-color: ${formData.tipoSolicitud === 'reclamo' ? '#ef4444' : '#f59e0b'}; color: white; padding: 4px 12px; border-radius: 20px; font-weight: bold; text-transform: uppercase; font-size: 12px;">${formData.tipoSolicitud}</span></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Tipo de Servicio:</strong></td>
              <td style="padding: 8px 0;">${formData.tipoServicio}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Descripción del Servicio:</strong></td>
              <td style="padding: 8px 0;">${formData.descripcionServicio}</td>
            </tr>
            ${formData.montoReclamado ? `
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Monto Reclamado:</strong></td>
              <td style="padding: 8px 0; font-weight: bold; color: #0047BB;">${formData.montoReclamado}</td>
            </tr>
            ` : ''}
          </table>

          <h2 style="color: #0047BB; border-bottom: 2px solid #0047BB; padding-bottom: 10px; margin-top: 30px;">Detalle de la Reclamación</h2>
          <div style="background-color: #f5f7fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${formData.detalleReclamacion}</p>
          </div>

          <h2 style="color: #0047BB; border-bottom: 2px solid #0047BB; padding-bottom: 10px; margin-top: 30px;">Pedido del Consumidor</h2>
          <div style="background-color: #f5f7fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${formData.pedidoConsumidor}</p>
          </div>

          <div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; padding: 15px; margin-top: 30px; border-radius: 4px;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
              <strong>📋 Nota Legal:</strong> Este reclamo debe ser atendido en un plazo máximo de 15 días hábiles según la normativa del Código de Protección y Defensa del Consumidor.
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              VALTO Management Consulting<br>
              Libro de Reclamaciones Digital<br>
              Fecha de recepción: ${new Date().toLocaleString('es-PE', {
            timeZone: 'America/Lima'
        })}
            </p>
          </div>
        </div>
      </div>
    `;
        // Enviar email usando Resend
        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer re_KHwh1TKa_87RCLR2WU9DG9zkurQ7yWPuz`
            },
            body: JSON.stringify({
                from: 'VALTO Libro de Reclamaciones <onboarding@resend.dev>',
                to: [
                    'hostingmoder@gmail.com'
                ],
                subject: `[${formData.tipoSolicitud.toUpperCase()}] Libro de Reclamaciones - ${formData.nombres} ${formData.apellidos}`,
                html: emailBody,
                reply_to: formData.email
            })
        });
        if (!resendResponse.ok) {
            const errorData = await resendResponse.json();
            console.error('Error de Resend:', errorData);
            throw new Error('Error al enviar el correo');
        }
        const resendData = await resendResponse.json();
        console.log('✅ Email enviado:', resendData);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Reclamo enviado exitosamente',
            emailId: resendData.id
        });
    } catch (error) {
        console.error('❌ Error en API libro-reclamaciones:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Error al procesar el reclamo'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__68983038._.js.map