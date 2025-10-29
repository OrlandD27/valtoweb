import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VALTO Management Consulting | Asesoría Financiera y Empresarial",
  description: "Brindamos asesoría para créditos, financiamiento y capacitación empresarial a emprendedores y empresarios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/imagen2.png" type="image/png" />
        <link rel="apple-touch-icon" href="/imagen2.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
