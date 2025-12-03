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
        const period = searchParams.get('period') || '1M';
        let currentRate = 3.37; // Valor por defecto actualizado
        let historicalRates = [];
        try {
            // Usar ExchangeRate-API y ajustar al mercado peruano
            const response = await fetch('https://open.er-api.com/v6/latest/USD', {
                headers: {
                    'Accept': 'application/json'
                },
                cache: 'no-store'
            });
            if (response.ok) {
                const data = await response.json();
                if (data && data.rates && data.rates.PEN) {
                    // Ajuste para aproximarse más al mercado comercial peruano
                    // La tasa interbancaria suele ser ligeramente mayor, ajustamos -0.5%
                    const interbankRate = data.rates.PEN;
                    currentRate = parseFloat((interbankRate * 0.995).toFixed(3)); // Ajuste al mercado comercial
                    console.log('✅ Tasa interbancaria:', interbankRate, '→ Tasa comercial ajustada:', currentRate);
                    // Obtener fecha de última actualización
                    const lastUpdate = data.time_last_update_unix ? new Date(data.time_last_update_unix * 1000).toISOString() : new Date().toISOString();
                    // Generar datos históricos realistas basados en el valor actual real
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
                    // Generar histórico con variación realista del mercado
                    historicalRates = generateRealisticHistoricalData(currentRate, startDate, endDate);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(historicalRates);
                }
            }
        } catch (error) {
            console.error('Error con ExchangeRate-API:', error);
        }
        // Fallback en caso de error
        console.error('No se pudieron obtener datos, usando fallback');
        const endDate = new Date();
        const startDate = new Date();
        startDate.setMonth(endDate.getMonth() - 1);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(generateRealisticHistoricalData(currentRate, startDate, endDate));
    } catch (error) {
        console.error('Error crítico en API:', error);
        const endDate = new Date();
        const startDate = new Date();
        startDate.setMonth(endDate.getMonth() - 1);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(generateRealisticHistoricalData(3.37, startDate, endDate), {
            status: 200
        });
    }
}
// Generar datos históricos realistas con variación de mercado
function generateRealisticHistoricalData(currentRate, startDate, endDate) {
    const data = [];
    const currentDateObj = new Date(startDate);
    const totalDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    // Spread fijo realista de casas de cambio peruanas
    const spread = 0.02; // 2 centavos de diferencia entre compra/venta
    // Variación máxima diaria realista del mercado forex (±0.5%)
    const maxDailyVariation = 0.005;
    let rate = currentRate * 0.99; // Empezar un poco más bajo que el actual
    let dayIndex = 0;
    while(currentDateObj <= endDate){
        // Tendencia gradual hacia el valor actual con variación diaria realista
        const targetProgress = dayIndex / totalDays;
        const targetRate = rate + (currentRate - rate) * 0.1; // Ajuste gradual hacia actual
        // Añadir variación diaria realista del mercado
        const dailyChange = (Math.random() - 0.5) * 2 * maxDailyVariation * currentRate;
        rate = targetRate + dailyChange;
        // Asegurar que no se desvíe mucho del valor actual
        const minRate = currentRate * 0.97;
        const maxRate = currentRate * 1.01;
        rate = Math.max(minRate, Math.min(maxRate, rate));
        data.push({
            compra: parseFloat((rate - spread).toFixed(3)),
            venta: parseFloat((rate + spread).toFixed(3)),
            fecha: currentDateObj.toISOString().split('T')[0]
        });
        currentDateObj.setDate(currentDateObj.getDate() + 1);
        dayIndex++;
    }
    // Asegurar que el último valor sea el actual
    if (data.length > 0) {
        data[data.length - 1] = {
            compra: parseFloat((currentRate - spread).toFixed(3)),
            venta: parseFloat((currentRate + spread).toFixed(3)),
            fecha: new Date().toISOString()
        };
    }
    return data;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ac2d897a._.js.map