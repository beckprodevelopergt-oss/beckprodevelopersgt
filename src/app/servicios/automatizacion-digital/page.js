import AutomatizacionDigitalClient from "./AutomatizacionDigitalClient";

export const metadata = {
  title: "Automatización Digital e Inteligencia Artificial | BeckPro Developer",
  description: "Optimiza tu negocio y ahorra tiempo conectando tus herramientas: Make, n8n, Zapier, IA, WhatsApp API y bases de datos. Productividad inteligente.",
  keywords: ["automatizacion digital", "inteligencia artificial", "make", "n8n", "zapier", "whatsapp api", "flujos de trabajo", "productividad", "crm", "beckpro"],
  alternates: {
    canonical: "https://beckprodeveloper.com/servicios/automatizacion-digital"
  },
  openGraph: {
    title: "Automatización Digital e Inteligencia Artificial | BeckPro Developer",
    description: "Optimiza tu negocio y ahorra tiempo conectando tus herramientas: Make, n8n, Zapier, IA, WhatsApp API y bases de datos. Productividad inteligente.",
    url: "https://beckprodeveloper.com/servicios/automatizacion-digital",
    type: "website",
    images: [
      {
        url: "https://beckprodeveloper.com/assets/automation_hero.png",
        width: 1200,
        height: 630,
        alt: "Automatización Digital Premium"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización Digital e Inteligencia Artificial | BeckPro Developer",
    description: "Optimiza tu negocio y ahorra tiempo conectando tus herramientas: Make, n8n, Zapier, IA, WhatsApp API y bases de datos. Productividad inteligente.",
    images: ["https://beckprodeveloper.com/assets/automation_hero.png"]
  }
};

export default function AutomatizacionDigitalPage() {
  return <AutomatizacionDigitalClient />;
}
