import "./globals.css";

export const metadata = {
  title: "BeckPro Developer | Desarrollo web, automatización y soluciones digitales",
  description: "Creamos sitios web, automatizaciones, tiendas online y sistemas digitales personalizados para negocios que quieren crecer, vender mejor y trabajar con más orden.",
  openGraph: {
    title: "BeckPro Developer | Desarrollo web, automatización y soluciones digitales",
    description: "Creamos sitios web, automatizaciones, tiendas online y sistemas digitales personalizados para negocios que quieren crecer, vender mejor y trabajar con más orden.",
    type: "website",
    images: [
      {
        url: "https://image.qwenlm.ai/public_source/831d925d-760b-4a0d-8ed1-b42ff81c2bbb/1757f7f0d-015e-45ea-9be8-cc6828bd1985.png",
        width: 1200,
        height: 630,
        alt: "BeckPro Developer",
      },
    ],
  },
  icons: {
    icon: "/assets/icon-beckpro.png",
  },
};

import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fontsource/poppins@5.0.8/400.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fontsource/poppins@5.0.8/600.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fontsource/poppins@5.0.8/700.css"
        />
      </head>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
