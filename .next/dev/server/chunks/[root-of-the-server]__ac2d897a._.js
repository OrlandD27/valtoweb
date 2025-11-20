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
"[project]/app/api/tipo-cambio/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const period = searchParams.get('period') || '1M'; // 1D, 1W, 1M, 3M, 6M, 1Y
        // Intentar obtener datos del BCR (Banco Central de Reserva del Perú) primero
        let currentRate = 3.75; // Valor por defecto
        try {
            // API del BCR - Banco Central de Reserva del Perú
            // Endpoint público del BCRP: https://estadisticas.bcrp.gob.pe/estadisticas/series/api/
            // PD04638PD - Serie del tipo de cambio interbancario promedio
            const bcrResponse = await fetch('https://estadisticas.bcrp.gob.pe/estadisticas/series/api/PD04638PD/json', {
                headers: {
                    'Accept': 'application/json'
                },
                cache: 'no-store'
            });
            if (bcrResponse.ok) {
                const bcrData = await bcrResponse.json();
                // El BCR devuelve un array con [fecha, valor]
                if (bcrData && bcrData.periods && bcrData.periods.length > 0) {
                    const latestData = bcrData.periods[bcrData.periods.length - 1];
                    if (latestData && latestData.values && latestData.values.length > 0) {
                        currentRate = parseFloat(latestData.values[0]);
                    }
                }
            }
        } catch (bcrError) {
            console.log('BCR API no disponible, usando API alternativa');
            // Fallback a exchangerate-api.com
            const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`, {
                headers: {
                    'Accept': 'application/json'
                },
                cache: 'no-store'
            });
            if (response.ok) {
                const data = await response.json();
                currentRate = data.rates.PEN; // Tipo de cambio USD a PEN
            }
        }
        // Generar datos históricos basados en el período
        const endDate = new Date();
        const startDate = new Date();
        switch(period){
            case '1D':
                startDate.setDate(endDate.getDate() - 1);
                break;
            case '1W':
                startDate.setDate(endDate.getDate() - 7);
                break;
            case '1M':
                startDate.setMonth(endDate.getMonth() - 1);
                break;
            case '3M':
                startDate.setMonth(endDate.getMonth() - 3);
                break;
            case '6M':
                startDate.setMonth(endDate.getMonth() - 6);
                break;
            case '1Y':
                startDate.setFullYear(endDate.getFullYear() - 1);
                break;
            default:
                startDate.setMonth(endDate.getMonth() - 1);
        }
        // Generar datos históricos simulados basados en el valor actual
        const historicalData = generateHistoricalData(currentRate, startDate, endDate);
        // Asegurarse que el último elemento tenga la fecha y hora de hoy
        if (historicalData.length > 0) {
            const now = new Date();
            historicalData[historicalData.length - 1].fecha = now.toISOString();
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(historicalData);
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        // Generar datos de respaldo
        const endDate = new Date();
        const startDate = new Date();
        startDate.setMonth(endDate.getMonth() - 1);
        const fallbackData = generateHistoricalData(3.75, startDate, endDate);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(fallbackData, {
            status: 200
        });
    }
}
// Función auxiliar para generar datos históricos simulados con tendencia realista
function generateHistoricalData(currentRate, startDate, endDate) {
    const data = [];
    const currentDateObj = new Date(startDate);
    const totalDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    // Generar una tendencia suave hacia el valor actual
    const initialRate = currentRate * (0.97 + Math.random() * 0.06); // Variación inicial ±3%
    let dayIndex = 0;
    while(currentDateObj <= endDate){
        // Interpolar entre el valor inicial y el actual con algo de ruido
        const progress = dayIndex / totalDays;
        const interpolatedRate = initialRate + (currentRate - initialRate) * progress;
        // Agregar variación diaria pequeña (±0.5%)
        const dailyVariation = (Math.random() - 0.5) * 0.01 * interpolatedRate;
        const rate = interpolatedRate + dailyVariation;
        // Para compra/venta, usar spread típico de 0.01-0.02 soles
        const spread = 0.015;
        const compra = rate - spread;
        const venta = rate + spread;
        data.push({
            compra: parseFloat(compra.toFixed(3)),
            venta: parseFloat(venta.toFixed(3)),
            fecha: currentDateObj.toISOString().split('T')[0]
        });
        currentDateObj.setDate(currentDateObj.getDate() + 1);
        dayIndex++;
    }
    return data;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ac2d897a._.js.map