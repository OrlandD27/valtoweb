module.exports=[32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},97345,e=>{"use strict";var t=e.i(47909),r=e.i(74017),o=e.i(96250),a=e.i(59756),n=e.i(61916),d=e.i(14444),i=e.i(37092),s=e.i(69741),l=e.i(16795),p=e.i(87718),c=e.i(95169),g=e.i(47587),u=e.i(66012),x=e.i(70101),m=e.i(26937),h=e.i(10372),y=e.i(93695);e.i(52474);var b=e.i(220),f=e.i(89171);async function v(e){try{let t=await e.json(),r=`
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
              <td style="padding: 8px 0;">${t.tipoDocumento}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>N\xfamero de Documento:</strong></td>
              <td style="padding: 8px 0;">${t.numeroDocumento}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Nombres:</strong></td>
              <td style="padding: 8px 0;">${t.nombres}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Apellidos:</strong></td>
              <td style="padding: 8px 0;">${t.apellidos}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Domicilio:</strong></td>
              <td style="padding: 8px 0;">${t.domicilio}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Ubicaci\xf3n:</strong></td>
              <td style="padding: 8px 0;">${t.departamento}, ${t.provincia}, ${t.distrito}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Tel\xe9fono:</strong></td>
              <td style="padding: 8px 0;">${t.telefono}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
              <td style="padding: 8px 0;">${t.email}</td>
            </tr>
          </table>

          ${t.esApoderado?`
          <h2 style="color: #0047BB; border-bottom: 2px solid #0047BB; padding-bottom: 10px; margin-top: 30px;">Datos del Apoderado</h2>
          <table style="width: 100%; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Tipo de Documento:</strong></td>
              <td style="padding: 8px 0;">${t.apoderadoTipoDoc}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>N\xfamero de Documento:</strong></td>
              <td style="padding: 8px 0;">${t.apoderadoNumDoc}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Nombres:</strong></td>
              <td style="padding: 8px 0;">${t.apoderadoNombres}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Apellidos:</strong></td>
              <td style="padding: 8px 0;">${t.apoderadoApellidos}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Domicilio:</strong></td>
              <td style="padding: 8px 0;">${t.apoderadoDomicilio}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Tel\xe9fono:</strong></td>
              <td style="padding: 8px 0;">${t.apoderadoTelefono}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
              <td style="padding: 8px 0;">${t.apoderadoEmail}</td>
            </tr>
          </table>
          `:""}

          <h2 style="color: #0047BB; border-bottom: 2px solid #0047BB; padding-bottom: 10px; margin-top: 30px;">Identificaci\xf3n del Bien Contratado</h2>
          <table style="width: 100%; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Tipo de Solicitud:</strong></td>
              <td style="padding: 8px 0;"><span style="background-color: ${"reclamo"===t.tipoSolicitud?"#ef4444":"#f59e0b"}; color: white; padding: 4px 12px; border-radius: 20px; font-weight: bold; text-transform: uppercase; font-size: 12px;">${t.tipoSolicitud}</span></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Tipo de Servicio:</strong></td>
              <td style="padding: 8px 0;">${t.tipoServicio}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Descripci\xf3n del Servicio:</strong></td>
              <td style="padding: 8px 0;">${t.descripcionServicio}</td>
            </tr>
            ${t.montoReclamado?`
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Monto Reclamado:</strong></td>
              <td style="padding: 8px 0; font-weight: bold; color: #0047BB;">${t.montoReclamado}</td>
            </tr>
            `:""}
          </table>

          <h2 style="color: #0047BB; border-bottom: 2px solid #0047BB; padding-bottom: 10px; margin-top: 30px;">Detalle de la Reclamaci\xf3n</h2>
          <div style="background-color: #f5f7fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${t.detalleReclamacion}</p>
          </div>

          <h2 style="color: #0047BB; border-bottom: 2px solid #0047BB; padding-bottom: 10px; margin-top: 30px;">Pedido del Consumidor</h2>
          <div style="background-color: #f5f7fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${t.pedidoConsumidor}</p>
          </div>

          <div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; padding: 15px; margin-top: 30px; border-radius: 4px;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
              <strong>📋 Nota Legal:</strong> Este reclamo debe ser atendido en un plazo m\xe1ximo de 15 d\xedas h\xe1biles seg\xfan la normativa del C\xf3digo de Protecci\xf3n y Defensa del Consumidor.
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              VALTO Management Consulting<br>
              Libro de Reclamaciones Digital<br>
              Fecha de recepci\xf3n: ${new Date().toLocaleString("es-PE",{timeZone:"America/Lima"})}
            </p>
          </div>
        </div>
      </div>
    `,o=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer re_KHwh1TKa_87RCLR2WU9DG9zkurQ7yWPuz"},body:JSON.stringify({from:"VALTO Libro de Reclamaciones <onboarding@resend.dev>",to:["hostingmoder@gmail.com"],subject:`[${t.tipoSolicitud.toUpperCase()}] Libro de Reclamaciones - ${t.nombres} ${t.apellidos}`,html:r,reply_to:t.email})});if(!o.ok){let e=await o.json();throw console.error("Error de Resend:",e),Error("Error al enviar el correo")}let a=await o.json();return console.log("✅ Email enviado:",a),f.NextResponse.json({success:!0,message:"Reclamo enviado exitosamente",emailId:a.id})}catch(e){return console.error("❌ Error en API libro-reclamaciones:",e),f.NextResponse.json({success:!1,error:"Error al procesar el reclamo"},{status:500})}}e.s(["POST",()=>v],45615);var R=e.i(45615);let w=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/libro-reclamaciones/route",pathname:"/api/libro-reclamaciones",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/libro-reclamaciones/route.ts",nextConfigOutput:"",userland:R}),{workAsyncStorage:E,workUnitAsyncStorage:C,serverHooks:A}=w;function T(){return(0,o.patchFetch)({workAsyncStorage:E,workUnitAsyncStorage:C})}async function $(e,t,o){w.isDev&&(0,a.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let f="/api/libro-reclamaciones/route";f=f.replace(/\/index$/,"")||"/";let v=await w.prepare(e,t,{srcPage:f,multiZoneDraftMode:!1});if(!v)return t.statusCode=400,t.end("Bad Request"),null==o.waitUntil||o.waitUntil.call(o,Promise.resolve()),null;let{buildId:R,params:E,nextConfig:C,parsedUrl:A,isDraftMode:T,prerenderManifest:$,routerServerContext:N,isOnDemandRevalidate:D,revalidateOnlyGenerated:S,resolvedPathname:B,clientReferenceManifest:k,serverActionsManifest:P}=v,O=(0,s.normalizeAppPath)(f),j=!!($.dynamicRoutes[O]||$.routes[B]),_=async()=>((null==N?void 0:N.render404)?await N.render404(e,t,A,!1):t.end("This page could not be found"),null);if(j&&!T){let e=!!$.routes[B],t=$.dynamicRoutes[O];if(t&&!1===t.fallback&&!e){if(C.experimental.adapterPath)return await _();throw new y.NoFallbackError}}let q=null;!j||w.isDev||T||(q="/index"===(q=B)?"/":q);let M=!0===w.isDev||!j,U=j&&!M;P&&k&&(0,d.setReferenceManifestsSingleton)({page:f,clientReferenceManifest:k,serverActionsManifest:P,serverModuleMap:(0,i.createServerModuleMap)({serverActionsManifest:P})});let H=e.method||"GET",I=(0,n.getTracer)(),L=I.getActiveScopeSpan(),K={params:E,prerenderManifest:$,renderOpts:{experimental:{authInterrupts:!!C.experimental.authInterrupts},cacheComponents:!!C.cacheComponents,supportsDynamicResponse:M,incrementalCache:(0,a.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:C.cacheLife,waitUntil:o.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,o)=>w.onRequestError(e,t,o,N)},sharedContext:{buildId:R}},z=new l.NodeNextRequest(e),F=new l.NodeNextResponse(t),V=p.NextRequestAdapter.fromNodeNextRequest(z,(0,p.signalFromNodeResponse)(t));try{let d=async e=>w.handle(V,K).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=I.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==c.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let o=r.get("next.route");if(o){let t=`${H} ${o}`;e.setAttributes({"next.route":o,"http.route":o,"next.span_name":t}),e.updateName(t)}else e.updateName(`${H} ${f}`)}),i=!!(0,a.getRequestMeta)(e,"minimalMode"),s=async a=>{var n,s;let l=async({previousCacheEntry:r})=>{try{if(!i&&D&&S&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let n=await d(a);e.fetchMetrics=K.renderOpts.fetchMetrics;let s=K.renderOpts.pendingWaitUntil;s&&o.waitUntil&&(o.waitUntil(s),s=void 0);let l=K.renderOpts.collectedTags;if(!j)return await (0,u.sendResponse)(z,F,n,K.renderOpts.pendingWaitUntil),null;{let e=await n.blob(),t=(0,x.toNodeOutgoingHttpHeaders)(n.headers);l&&(t[h.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==K.renderOpts.collectedRevalidate&&!(K.renderOpts.collectedRevalidate>=h.INFINITE_CACHE)&&K.renderOpts.collectedRevalidate,o=void 0===K.renderOpts.collectedExpire||K.renderOpts.collectedExpire>=h.INFINITE_CACHE?void 0:K.renderOpts.collectedExpire;return{value:{kind:b.CachedRouteKind.APP_ROUTE,status:n.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:o}}}}catch(t){throw(null==r?void 0:r.isStale)&&await w.onRequestError(e,t,{routerKind:"App Router",routePath:f,routeType:"route",revalidateReason:(0,g.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:D})},N),t}},p=await w.handleResponse({req:e,nextConfig:C,cacheKey:q,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:$,isRoutePPREnabled:!1,isOnDemandRevalidate:D,revalidateOnlyGenerated:S,responseGenerator:l,waitUntil:o.waitUntil,isMinimalMode:i});if(!j)return null;if((null==p||null==(n=p.value)?void 0:n.kind)!==b.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(s=p.value)?void 0:s.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});i||t.setHeader("x-nextjs-cache",D?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),T&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let c=(0,x.fromNodeOutgoingHttpHeaders)(p.value.headers);return i&&j||c.delete(h.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||c.get("Cache-Control")||c.set("Cache-Control",(0,m.getCacheControlHeader)(p.cacheControl)),await (0,u.sendResponse)(z,F,new Response(p.value.body,{headers:c,status:p.value.status||200})),null};L?await s(L):await I.withPropagatedContext(e.headers,()=>I.trace(c.BaseServerSpan.handleRequest,{spanName:`${H} ${f}`,kind:n.SpanKind.SERVER,attributes:{"http.method":H,"http.target":e.url}},s))}catch(t){if(t instanceof y.NoFallbackError||await w.onRequestError(e,t,{routerKind:"App Router",routePath:O,routeType:"route",revalidateReason:(0,g.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:D})}),j)throw t;return await (0,u.sendResponse)(z,F,new Response(null,{status:500})),null}}e.s(["handler",()=>$,"patchFetch",()=>T,"routeModule",()=>w,"serverHooks",()=>A,"workAsyncStorage",()=>E,"workUnitAsyncStorage",()=>C],97345)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__7da669b4._.js.map