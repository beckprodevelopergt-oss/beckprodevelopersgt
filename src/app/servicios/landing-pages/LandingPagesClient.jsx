"use client";

import { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Contacto from "../../../components/Contacto";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";

export default function LandingPagesClient() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    // Scroll reveal animation observer
    const revealElements = document.querySelectorAll(".lp-microsite .reveal");
    if (!revealElements.length) return;

    const revealCallback = (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observerInstance.unobserve(entry.target);
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px",
    });

    revealElements.forEach((el) => revealObserver.observe(el));

    // Scroll to top on load
    window.scrollTo(0, 0);

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  const faqs = [
    {
      q: "¿Qué es una landing page y en qué se diferencia de un sitio web convencional?",
      a: "Una landing page (o página de aterrizaje) está diseñada con un único objetivo: la conversión. A diferencia de un sitio web corporativo que tiene múltiples páginas y enlaces de distracción, una landing page elimina los puntos de fuga y guía al usuario de manera persuasiva y directa a realizar una acción concreta, como registrarse o comprar."
    },
    {
      q: "¿Se puede conectar con mi CRM actual o sistema de automatización de correos?",
      a: "Sí. Conectamos tus formularios con las plataformas de email marketing y CRMs más populares del mercado, como Mailchimp, Brevo, HubSpot o ActiveCampaign, garantizando que cada prospecto (lead) captado se registre automáticamente en tus bases de datos en tiempo real."
    },
    {
      q: "¿Cómo miden el éxito y las conversiones de la página?",
      a: "Implementamos un sistema de tracking de precisión milimétrica. Integramos Meta Pixel (con API de Conversiones para evadir bloqueadores), Google Analytics 4, Google Tag Manager y herramientas de mapas de calor como Hotjar para analizar el comportamiento exacto del usuario en la página y optimizar su rendimiento."
    },
    {
      q: "¿El diseño es responsive y rápido en celulares?",
      a: "Totalmente. Más del 80% del tráfico de campañas publicitarias proviene de teléfonos móviles. Por ello, diseñamos bajo metodología Mobile-First, optimizando la velocidad de renderizado, la legibilidad del copy y la comodidad de los botones en pantallas táctiles."
    },
    {
      q: "¿Cuánto tiempo toma entregar una Landing Page Premium?",
      a: "Nuestras Landing Pages Premium se entregan en un periodo estimado de 7 a 14 días hábiles, incluyendo diseño de interfaz, optimización de velocidad, redacción persuasiva (copywriting) e integración de todas las herramientas de medición analítica."
    },
    {
      q: "¿Puedo realizar pruebas A/B para probar diferentes ofertas?",
      a: "Sí. La arquitectura modular sobre la cual construimos nuestras páginas facilita la duplicación y adaptación de variantes (pruebas A/B). Podrás testear diferentes títulos, imágenes o llamados a la acción para determinar cuál genera un mayor retorno de inversión (ROI) en tus campañas."
    }
  ];

  return (
    <>
      <Header />
      <div className="lp-microsite">
        <style dangerouslySetInnerHTML={{ __html: `
          .lp-microsite {
            --primary: #7C3AED;
            --primary-hover: #8B5CF6;
            --primary-glow: rgba(124, 58, 237, 0.12);
            --primary-glow-strong: rgba(124, 58, 237, 0.35);
            --secondary: #A855F7;
            --dark-bg: #05030a;
            --card-bg: rgba(18, 10, 36, 0.45);
            --card-border: rgba(124, 58, 237, 0.18);
            --font-sans: 'Poppins', sans-serif;

            background: radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.15), transparent 50%), var(--dark-bg);
            color: #ffffff;
            font-family: var(--font-sans);
            overflow-x: hidden;
            padding-top: 80px;
          }

          .lp-microsite .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
          }

          .lp-microsite .text-gradient {
            background: linear-gradient(135deg, #ffffff 30%, var(--primary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .lp-microsite .bg-glow-radial {
            position: absolute;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, var(--primary-glow) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
            filter: blur(80px);
          }

          /* Hero */
          .lp-microsite .m-hero {
            position: relative;
            padding: 30px 0 40px 0;
            display: flex;
            align-items: center;
            overflow: hidden;
          }

          .lp-microsite .m-hero-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 32px;
            align-items: center;
            position: relative;
            z-index: 1;
          }

          .lp-microsite .m-hero-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .lp-microsite .m-breadcrumb {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: #cbd5e1;
            margin-bottom: 12px;
          }

          .lp-microsite .m-breadcrumb a {
            color: #cbd5e1;
            text-decoration: none;
            transition: color 0.2s;
          }

          .lp-microsite .m-breadcrumb a:hover {
            color: var(--primary);
          }

          .lp-microsite .m-breadcrumb-separator {
            color: #475569;
          }

          .lp-microsite .m-badge {
            display: inline-flex;
            align-items: center;
            padding: 4px 12px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--card-border);
            border-radius: 100px;
            font-size: 11px;
            font-weight: 600;
            color: var(--primary);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 12px;
            backdrop-filter: blur(10px);
          }

          .lp-microsite .m-hero-title {
            font-size: 48px;
            font-weight: 700;
            line-height: 1.15;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
          }

          .lp-microsite .m-hero-subtitle {
            font-size: 16px;
            color: #cbd5e1;
            line-height: 1.5;
            margin-bottom: 24px;
            max-width: 580px;
          }

          .lp-microsite .m-hero-ctas {
            display: flex;
            gap: 16px;
            width: 100%;
          }

          .lp-microsite .m-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 600;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            cursor: pointer;
            text-decoration: none;
          }

          .lp-microsite .m-btn-primary {
            background-color: var(--primary);
            color: #ffffff;
            border: 1px solid var(--primary);
            box-shadow: 0 4px 20px var(--primary-glow-strong);
          }

          .lp-microsite .m-btn-primary:hover {
            background-color: var(--primary-hover);
            border-color: var(--primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 8px 30px var(--primary-glow-strong);
          }

          .lp-microsite .m-btn-secondary {
            background-color: rgba(255, 255, 255, 0.03);
            color: #ffffff;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
          }

          .lp-microsite .m-btn-secondary:hover {
            background-color: rgba(255, 255, 255, 0.08);
            border-color: var(--primary);
            transform: translateY(-2px);
          }

          .lp-microsite .m-hero-illustration {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .lp-microsite .m-hero-img-wrapper {
            position: relative;
            width: 100%;
            max-width: 480px;
            animation: float 6s ease-in-out infinite;
            z-index: 1;
          }

          .lp-microsite .m-hero-img-wrapper img {
            width: 100%;
            height: auto;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            background: radial-gradient(circle at center, rgba(255, 255, 255, 0.02), transparent 70%);
            padding: 10px;
            filter: drop-shadow(0 15px 35px rgba(0,0,0,0.6)) drop-shadow(0 0 25px var(--primary-glow-strong));
          }

          .lp-microsite .m-hero-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, var(--primary-glow-strong) 0%, transparent 70%);
            filter: blur(50px);
            z-index: 0;
          }

          /* Sections */
          .lp-microsite .m-section {
            position: relative;
            padding: 70px 0;
          }

          .lp-microsite #servicios.m-section {
            padding-top: 15px;
            padding-bottom: 50px;
          }

          .lp-microsite .m-section-header {
            max-width: 700px;
            margin-bottom: 40px;
          }

          .lp-microsite .m-section-badge {
            color: var(--primary);
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            display: block;
            margin-bottom: 8px;
          }

          .lp-microsite .m-section-title {
            font-size: 34px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 16px;
          }

          .lp-microsite .m-section-desc {
            font-size: 16px;
            color: #cbd5e1;
            line-height: 1.6;
          }

          /* S1: Editorial */
          .lp-microsite .m-editorial-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: flex-start;
          }

          .lp-microsite .m-editorial-left {
            font-size: 28px;
            font-weight: 600;
            line-height: 1.4;
            color: #f8f9fa;
            border-left: 3px solid var(--primary);
            padding-left: 24px;
          }

          .lp-microsite .m-editorial-right {
            font-size: 17px;
            color: #a8b2d1;
            line-height: 1.8;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          /* S2: Beneficios */
          .lp-microsite .m-cards-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .lp-microsite .m-card-premium {
            position: relative;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 40px 32px;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            backdrop-filter: blur(12px);
          }

          .lp-microsite .m-card-premium::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--primary), transparent);
            opacity: 0;
            transition: opacity 0.3s;
          }

          .lp-microsite .m-card-premium:hover {
            transform: translateY(-8px);
            background: var(--card-bg);
            border-color: var(--card-border);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          }

          .lp-microsite .m-card-premium:hover::before {
            opacity: 1;
          }

          .lp-microsite .m-card-icon {
            width: 52px;
            height: 52px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.03);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            margin-bottom: 28px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.3s;
          }

          .lp-microsite .m-card-premium:hover .m-card-icon {
            background: var(--primary);
            color: #ffffff;
            transform: scale(1.05);
            box-shadow: 0 4px 15px var(--primary-glow-strong);
          }

          .lp-microsite .m-card-title {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 16px;
          }

          .lp-microsite .m-card-text {
            font-size: 15px;
            color: #8892b0;
            line-height: 1.6;
          }

          /* S3: Includes */
          .lp-microsite .m-features-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .lp-microsite .m-feature-badge-card {
            display: flex;
            align-items: center;
            gap: 16px;
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.03);
            padding: 20px;
            border-radius: 12px;
            transition: all 0.3s;
            backdrop-filter: blur(5px);
          }

          .lp-microsite .m-feature-badge-card:hover {
            background: rgba(255, 255, 255, 0.03);
            border-color: var(--card-border);
            transform: translateY(-2px);
          }

          .lp-microsite .m-feature-check {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.03);
            color: var(--primary);
            flex-shrink: 0;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }

          .lp-microsite .m-feature-badge-card:hover .m-feature-check {
            background: var(--primary-glow);
            border-color: var(--primary);
          }

          .lp-microsite .m-feature-title {
            font-size: 15px;
            font-weight: 600;
            color: #e2e8f0;
          }

          /* S4: Tech */
          .lp-microsite .m-tech-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .lp-microsite .m-tech-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 30px 20px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            transition: all 0.3s;
          }

          .lp-microsite .m-tech-card:hover {
            background: var(--card-bg);
            border-color: var(--card-border);
            transform: scale(1.05);
          }

          .lp-microsite .m-tech-icon {
            width: 48px;
            height: 48px;
            margin-bottom: 16px;
            color: #8892b0;
            transition: color 0.3s;
          }

          .lp-microsite .m-tech-card:hover .m-tech-icon {
            color: var(--primary);
          }

          .lp-microsite .m-tech-name {
            font-size: 14px;
            font-weight: 600;
            color: #8892b0;
            transition: color 0.3s;
          }

          .lp-microsite .m-tech-card:hover .m-tech-name {
            color: #ffffff;
          }

          /* S5: Cases */
          .lp-microsite .m-cases-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .lp-microsite .m-case-card {
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            padding: 40px;
            transition: all 0.3s;
            position: relative;
          }

          .lp-microsite .m-case-card:hover {
            background: rgba(255, 255, 255, 0.03);
            border-color: var(--card-border);
            transform: translateY(-4px);
          }

          .lp-microsite .m-case-tag {
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            color: var(--primary);
            letter-spacing: 1px;
            margin-bottom: 16px;
            display: block;
          }

          .lp-microsite .m-case-title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
          }

          .lp-microsite .m-case-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .lp-microsite .m-case-list li {
            position: relative;
            padding-left: 24px;
            margin-bottom: 12px;
            font-size: 15px;
            color: #a8b2d1;
            line-height: 1.5;
          }

          .lp-microsite .m-case-list li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--primary);
            font-weight: bold;
          }

          /* S6: Timeline */
          .lp-microsite .m-timeline {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 0;
          }

          .lp-microsite .m-timeline::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 40px;
            width: 2px;
            background: linear-gradient(to bottom, var(--primary), var(--secondary));
            opacity: 0.3;
          }

          .lp-microsite .m-timeline-item {
            position: relative;
            padding-left: 90px;
            margin-bottom: 50px;
          }

          .lp-microsite .m-timeline-item:last-child {
            margin-bottom: 0;
          }

          .lp-microsite .m-timeline-number {
            position: absolute;
            left: 20px;
            top: 0;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: var(--dark-bg);
            border: 2px solid var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: var(--primary);
            z-index: 2;
            box-shadow: 0 0 15px var(--primary-glow-strong);
            transition: all 0.3s;
          }

          .lp-microsite .m-timeline-item:hover .m-timeline-number {
            background: var(--primary);
            color: #ffffff;
            transform: scale(1.1);
          }

          .lp-microsite .m-timeline-content {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.04);
            border-radius: 12px;
            padding: 24px 30px;
            transition: all 0.3s;
          }

          .lp-microsite .m-timeline-item:hover .m-timeline-content {
            background: rgba(255, 255, 255, 0.04);
            border-color: var(--card-border);
          }

          .lp-microsite .m-timeline-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 10px;
          }

          .lp-microsite .m-timeline-text {
            font-size: 15px;
            color: #8892b0;
            line-height: 1.6;
          }

          /* S7: Table */
          .lp-microsite .m-table-wrapper {
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }

          .lp-microsite .m-table {
            width: 100%;
            border-collapse: collapse;
          }

          .lp-microsite .m-table th, .lp-microsite .m-table td {
            padding: 24px 32px;
            text-align: left;
            border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          }

          .lp-microsite .m-table th {
            background: rgba(255, 255, 255, 0.02);
            font-weight: 700;
            font-size: 16px;
            color: #ffffff;
          }

          .lp-microsite .m-table td {
            font-size: 15px;
          }

          .lp-microsite .m-table tr:last-child td {
            border-bottom: none;
          }

          .lp-microsite .m-table tr:hover td {
            background: rgba(255, 255, 255, 0.01);
          }

          .lp-microsite .m-table-feature {
            font-weight: 600;
            color: #e2e8f0;
          }

          .lp-microsite .m-table-others {
            color: #8892b0;
          }

          .lp-microsite .m-table-beckpro {
            color: #ffffff;
            font-weight: 600;
            background: rgba(255, 255, 255, 0.01);
          }

          .lp-microsite tr:hover .m-table-beckpro {
            background: var(--primary-glow);
          }

          .lp-microsite .m-table-badge-yes {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--primary);
            font-weight: bold;
          }

          .lp-microsite .m-table-badge-no {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #ef4444;
          }

          /* S8: FAQ */
          .lp-microsite .m-faq-list {
            max-width: 800px;
            margin: 0 auto;
          }

          .lp-microsite .m-faq-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.04);
            border-radius: 12px;
            margin-bottom: 16px;
            overflow: hidden;
            transition: all 0.3s;
          }

          .lp-microsite .m-faq-item:hover {
            border-color: var(--card-border);
          }

          .lp-microsite .m-faq-trigger {
            width: 100%;
            padding: 24px;
            background: none;
            border: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-align: left;
            cursor: pointer;
            color: #ffffff;
            font-weight: 600;
            font-size: 17px;
          }

          .lp-microsite .m-faq-trigger:focus {
            outline: none;
          }

          .lp-microsite .m-faq-trigger span {
            padding-right: 20px;
          }

          .lp-microsite .m-faq-icon {
            flex-shrink: 0;
            width: 20px;
            height: 20px;
            color: var(--primary);
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .lp-microsite .m-faq-item.active .m-faq-icon {
            transform: rotate(180deg);
          }

          .lp-microsite .m-faq-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s;
            padding: 0 24px;
            color: #a8b2d1;
            font-size: 15px;
            line-height: 1.6;
          }

          .lp-microsite .m-faq-item.active .m-faq-content {
            max-height: 350px;
            padding-bottom: 24px;
          }

          /* S9: CTA Final */
          .lp-microsite .m-cta-card {
            position: relative;
            background: radial-gradient(circle at top right, var(--primary-glow-strong), rgba(255,255,255,0.01) 60%), rgba(255, 255, 255, 0.02);
            border: 1px solid var(--card-border);
            border-radius: 24px;
            padding: 80px 40px;
            text-align: center;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0,0,0,0.4);
            margin-bottom: 60px;
          }

          .lp-microsite .m-cta-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, var(--primary-glow-strong) 0%, transparent 80%);
            filter: blur(80px);
            z-index: 0;
            pointer-events: none;
          }

          .lp-microsite .m-cta-content {
            position: relative;
            z-index: 1;
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .lp-microsite .m-cta-title {
            font-size: 44px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 20px;
          }

          .lp-microsite .m-cta-subtitle {
            font-size: 18px;
            color: #a8b2d1;
            line-height: 1.6;
            margin-bottom: 40px;
            max-width: 600px;
          }

          /* Animations */
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }

          .lp-microsite .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .lp-microsite .reveal.visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* Responsive */
          @media (max-width: 991px) {
            .lp-microsite .m-hero-grid {
              grid-template-columns: 1fr;
              gap: 40px;
              text-align: center;
            }
            .lp-microsite .m-hero-content {
              align-items: center;
            }
            .lp-microsite .m-hero-title {
              font-size: 44px;
            }
            .lp-microsite .m-editorial-grid {
              grid-template-columns: 1fr;
              gap: 30px;
            }
            .lp-microsite .m-cards-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            .lp-microsite .m-features-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .lp-microsite .m-tech-grid {
              grid-template-columns: repeat(3, 1fr);
            }
            .lp-microsite .m-cases-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            .lp-microsite .m-cta-title {
              font-size: 32px;
            }
          }

          @media (max-width: 767px) {
            .lp-microsite .m-hero {
              padding: 40px 0 80px 0;
            }
            .lp-microsite .m-hero-title {
              font-size: 36px;
            }
            .lp-microsite .m-hero-ctas {
              flex-direction: column;
              width: 100%;
            }
            .lp-microsite .m-btn {
              width: 100%;
            }
            .lp-microsite .m-section {
              padding: 60px 0;
            }
            .lp-microsite .m-section-title {
              font-size: 30px;
            }
            .lp-microsite .m-features-grid {
              grid-template-columns: 1fr;
            }
            .lp-microsite .m-tech-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .lp-microsite .m-timeline::before {
              left: 20px;
            }
            .lp-microsite .m-timeline-item {
              padding-left: 50px;
            }
            .lp-microsite .m-timeline-number {
              left: 0;
              width: 36px;
              height: 36px;
            }
            .lp-microsite .m-table th, .lp-microsite .m-table td {
              padding: 16px;
              font-size: 14px;
            }
            .lp-microsite .m-cta-card {
              padding: 40px 20px;
            }
          }
        ` }} />

        {/* HERO */}
        <section className="m-hero" id="inicio">
          <div className="bg-glow-radial" style={{ top: "-10%", left: "-10%" }}></div>
          <div className="bg-glow-radial" style={{ bottom: "-10%", right: "-10%" }}></div>
          
          <div className="container">
            <div className="m-hero-grid">
              <div className="m-hero-content reveal">
                <div className="m-breadcrumb">
                  <a href="/">Inicio</a>
                  <span className="m-breadcrumb-separator">/</span>
                  <span style={{ color: "var(--primary)" }}>Landing Pages</span>
                </div>
                
                <span className="m-badge">Máxima Conversión</span>
                
                <h1 className="m-hero-title">
                  Landing Pages Premium Diseñadas para <span className="text-gradient">Vender Más</span>
                </h1>
                
                <p className="m-hero-subtitle">
                  Páginas de aterrizaje de alto impacto optimizadas para campañas publicitarias. Convertimos visitas en clientes con un diseño sofisticado, persuasivo y veloz.
                </p>
                
                <div className="m-hero-ctas">
                  <a href="#contacto" className="m-btn m-btn-primary">
                    Solicitar Diagnóstico Gratuito
                  </a>
                  <a href="https://wa.me/50255392986" target="_blank" rel="noopener noreferrer" className="m-btn m-btn-secondary">
                    Agendar una llamada
                  </a>
                </div>
              </div>
              
              <div className="m-hero-illustration reveal">
                <div className="m-hero-glow"></div>
                <div className="m-hero-img-wrapper">
                  <img src="/assets/landing_pages_hero.png" alt="Landing Pages Premium BeckPro" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: ¿Qué hacemos? */}
        <section className="m-section" id="servicios">
          <div className="container">
            <div className="m-editorial-grid reveal">
              <div className="m-editorial-left">
                Diseño de conversión centrado en la acción inmediata del usuario.
              </div>
              <div className="m-editorial-right">
                <p>
                  Una landing page exitosa no solo debe lucir espectacular; debe guiar a tus visitantes hacia la acción de manera intuitiva, clara y persuasiva, eliminando cualquier tipo de distracción o punto de fuga.
                </p>
                <p>
                  Estructuramos tu landing page para campañas de alto rendimiento en Meta Ads y Google Ads. Maximizamos el copywriting persuasivo, implementamos llamados a la acción (CTAs) estratégicos y aceleramos la carga al máximo para que no pierdas ni un solo clic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Beneficios */}
        <section className="m-section">
          <div className="container">
            <div className="m-section-header reveal">
              <span className="m-section-badge">Beneficios</span>
              <h2 className="m-section-title">¿Por qué nuestras landing pages convierten más?</h2>
              <p className="m-section-desc">
                Diseñamos cada elemento con base en la psicología del consumidor y la optimización de métricas publicitarias.
              </p>
            </div>
            
            <div className="m-cards-grid reveal">
              {/* Card 1 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <h3 className="m-card-title">Conversión Optimizada</h3>
                <p className="m-card-text">
                  Estructuras persuasivas diseñadas para enganchar visualmente al usuario y guiarlo directamente al formulario de registro.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect>
                    <path d="M12 18V6"></path>
                    <path d="M6 12h12"></path>
                  </svg>
                </div>
                <h3 className="m-card-title">Carga Instantánea Móvil</h3>
                <p className="m-card-text">
                  Evitamos la pérdida de prospectos debido a cargas lentas. Tu landing cargará inmediatamente en redes móviles 3G/4G/5G.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="m-card-title">Tracking de Precisión</h3>
                <p className="m-card-text">
                  Integración completa de píxeles y analíticas que reportan con exactitud las acciones de tus campañas, mejorando la IA de tus anuncios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ¿Qué incluye? */}
        <section className="m-section">
          <div className="container">
            <div className="m-section-header reveal">
              <span className="m-section-badge">Kit Comercial</span>
              <h2 className="m-section-title">¿Qué incluye tu Landing Page Premium?</h2>
              <p className="m-section-desc">
                Equipamos tu página con todo el arsenal tecnológico para captar, medir y automatizar el flujo de prospectos de forma profesional.
              </p>
            </div>
            
            <div className="m-features-grid reveal">
              {[
                "Diseño Ultra-Persuasivo",
                "Meta Pixel e API Conversión",
                "Google Tag Manager",
                "Formularios Optimizados",
                "Integración CRM / Webhooks",
                "Mapas de Calor (Hotjar)",
                "Velocidad Móvil al Extremo",
                "Respuestas Automáticas"
              ].map((feature, i) => (
                <div key={i} className="m-feature-badge-card">
                  <div className="m-feature-check">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="m-feature-title">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Tecnologías */}
        <section className="m-section">
          <div className="container">
            <div className="m-section-header reveal">
              <span className="m-section-badge">Herramientas</span>
              <h2 className="m-section-title">Integraciones comerciales líderes</h2>
              <p className="m-section-desc">
                Conectamos tu landing page con las principales plataformas de publicidad, analítica y marketing relacional.
              </p>
            </div>
            
            <div className="m-tech-grid reveal">
              {[
                { name: "Meta Pixel", svg: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-6h2v6zm0-8h-2V7h2v3z"/> },
                { name: "Google Analytics", svg: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2V9h2v8zm4 0h-2v-3h2v3z"/> },
                { name: "Tag Manager", svg: <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z"/> },
                { name: "Hotjar", svg: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5h-2v-2h2v2zm0-4h-2v-6h2v6z"/> },
                { name: "Mailchimp", svg: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.55 13.6c-.45.45-1.2.45-1.65 0L12 13.65l-1.9 1.9c-.45.45-1.2.45-1.65 0-.45-.45-.45-1.2 0-1.65l1.9-1.9-1.9-1.9c-.45-.45-.45-1.2 0-1.65.45-.45 1.2-.45 1.65 0l1.9 1.9 1.9-1.9c.45-.45 1.2-.45 1.65 0 .45.45.45 1.2 0 1.65l-1.9 1.9 1.9 1.9c.45.45.45 1.2 0 1.65z"/> },
                { name: "Brevo", svg: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/> },
                { name: "Web3Forms", svg: <path d="M12 2L2 22h20L12 2zm0 4l7.5 13.5h-15L12 6z"/> },
                { name: "Zapier", svg: <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 16.3L6.5 15V9L12 5.7l5.5 3.3v6l-5.5 3.3z"/> }
              ].map((tech, i) => (
                <div key={i} className="m-tech-card">
                  <svg className="m-tech-icon" viewBox="0 0 24 24" fill="currentColor">
                    {tech.svg}
                  </svg>
                  <span className="m-tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: Casos de uso */}
        <section className="m-section">
          <div className="container">
            <div className="m-section-header reveal">
              <span className="m-section-badge">Campañas</span>
              <h2 className="m-section-title">Formatos comerciales de alto impacto</h2>
              <p className="m-section-desc">
                Creamos estructuras específicas para maximizar el retorno de inversión según el objetivo de tu campaña.
              </p>
            </div>
            
            <div className="m-cases-grid reveal">
              {/* Case 1 */}
              <div className="m-case-card">
                <span className="m-case-tag">Educativo</span>
                <h3 className="m-case-title">Cursos e Info-productos</h3>
                <ul className="m-case-list">
                  <li>Estructuras persuasivas de venta (VSL)</li>
                  <li>Temarios y beneficios detallados</li>
                  <li>Módulos de testimonios y garantía</li>
                  <li>Botones de pago e inscripciones directas</li>
                </ul>
              </div>
              
              {/* Case 2 */}
              <div className="m-case-card">
                <span className="m-case-tag">Eventos</span>
                <h3 className="m-case-title">Webinars y Lanzamientos</h3>
                <ul className="m-case-list">
                  <li>Formularios de registro ultra rápidos</li>
                  <li>Contadores regresivos dinámicos (urgencia)</li>
                  <li>Detalles del ponente y agenda del evento</li>
                  <li>Redirección a grupos de WhatsApp</li>
                </ul>
              </div>
              
              {/* Case 3 */}
              <div className="m-case-card">
                <span className="m-case-tag">Servicios</span>
                <h3 className="m-case-title">Captación de Prospectos</h3>
                <ul className="m-case-list">
                  <li>Descarga de recursos gratuitos (Lead Magnets)</li>
                  <li>Agendamiento de llamadas cualificadas</li>
                  <li>Formularios interactivos segmentados</li>
                  <li>Páginas de agradecimiento optimizadas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: Proceso BeckPro */}
        <section className="m-section" id="proceso">
          <div className="container">
            <div className="m-section-header reveal">
              <span className="m-section-badge">Metodología</span>
              <h2 className="m-section-title">El Proceso BeckPro</h2>
              <p className="m-section-desc">
                Nuestra metodología ágil nos permite conceptualizar, estructurar y desplegar tu landing page en tiempo récord y con máxima calidad.
              </p>
            </div>
            
            <div className="m-timeline reveal">
              {[
                { n: "1", t: "Descubrimiento y Objetivo", d: "Analizamos tu producto, tu oferta comercial, tu cliente ideal (buyer persona) y los canales publicitarios que utilizarás." },
                { n: "2", t: "Estructura y Copywriting", d: "Redactamos los textos persuasivos utilizando fórmulas de copy probadas (AIDA, PAS) para enganchar al lector desde el primer segundo." },
                { n: "3", t: "Diseño UI/UX de Conversión", d: "Diseñamos una interfaz visual premium, limpia y enfocada en dirigir la mirada del visitante directamente hacia el formulario." },
                { n: "4", t: "Desarrollo de Alta Velocidad", d: "Codificamos la página de forma limpia, asegurando que cargue instantáneamente y se adapte perfectamente a cualquier dispositivo móvil." },
                { n: "5", t: "Integración y Tracking", d: "Conectamos los píxeles de seguimiento, herramientas de análisis de calor, Web3Forms y flujos de automatización hacia tu CRM." },
                { n: "6", t: "Lanzamiento y Optimización", d: "Publicamos la landing page, realizamos pruebas de envío y monitoreamos el comportamiento inicial para garantizar conversiones óptimas." }
              ].map((step, i) => (
                <div key={i} className="m-timeline-item">
                  <div className="m-timeline-number">{step.n}</div>
                  <div className="m-timeline-content">
                    <h3 className="m-timeline-title">{step.t}</h3>
                    <p className="m-timeline-text">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: ¿Por qué BeckPro? */}
        <section className="m-section" id="planes">
          <div className="container">
            <div className="m-section-header reveal">
              <span className="m-section-badge">Comparativa</span>
              <h2 className="m-section-title">¿Por qué trabajar con BeckPro?</h2>
              <p className="m-section-desc">
                Descubre las ventajas competitivas que diferencian nuestras landing pages premium de las páginas promedio del mercado.
              </p>
            </div>
            
            <div className="m-table-wrapper reveal">
              <table className="m-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Landing Promedio</th>
                    <th className="m-table-beckpro" style={{ borderBottom: "1px solid var(--primary)" }}>BeckPro Developer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: "Tasa de conversión", o: "Baja (1% - 3%) por lentitud y diseño genérico", b: "Alta (8% - 15%) optimización persuasiva y rapidez" },
                    { f: "Velocidad de carga móvil", o: "Lenta, frustrando al usuario que viene de anuncios", b: "Instantánea (< 1.2 segundos en celulares)" },
                    { f: "Tracking de anuncios", o: "Píxeles mal configurados y pérdida de datos", b: "Tracking E2E con Meta Conversions API + GTM" },
                    { f: "Copywriting persuasivo", o: "Textos genéricos informativos", b: "Estructuras de copy comercial y neurodiseño" },
                    { f: "Integración de leads", o: "Envío básico por correo con riesgo de spam", b: "Sincronización directa a CRM, WhatsApp y bases de datos" },
                    { f: "Pruebas de ofertas", o: "Complejo de duplicar o testear cambios", b: "Estructura modular optimizada para Pruebas A/B" }
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="m-table-feature">{row.f}</td>
                      <td className="m-table-others">
                        <span className="m-table-badge-no">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                          {row.o}
                        </span>
                      </td>
                      <td className="m-table-beckpro">
                        <span className="m-table-badge-yes">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          {row.b}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section className="m-section">
          <div className="container">
            <div className="m-section-header reveal" style={{ textAlign: "center", margin: "0 auto 60px auto" }}>
              <span className="m-section-badge">FAQ</span>
              <h2 className="m-section-title">Preguntas Frecuentes</h2>
              <p className="m-section-desc">
                Resolvemos tus principales dudas sobre el diseño y la integración de nuestras Landing Pages de alta conversión.
              </p>
            </div>
            
            <div className="m-faq-list reveal">
              {faqs.map((faq, i) => (
                <div key={i} className={`m-faq-item ${activeFaq === i ? "active" : ""}`}>
                  <button className="m-faq-trigger" onClick={() => toggleFaq(i)}>
                    <span>{faq.q}</span>
                    <svg className="m-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className="m-faq-content">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: CTA Final */}
        <section className="m-section">
          <div className="container">
            <div className="m-cta-card reveal">
              <div className="m-cta-glow"></div>
              <div className="m-cta-content">
                <h2 className="m-cta-title">Empieza a convertir visitas en clientes reales hoy mismo</h2>
                <p className="m-cta-subtitle">
                  Analizamos tus campañas actuales y estructuramos la propuesta ideal para tu landing page de forma completamente gratuita.
                </p>
                <div className="m-hero-ctas" style={{ justifyContent: "center" }}>
                  <a href="#contacto" className="m-btn m-btn-primary">
                    Solicitar Diagnóstico Gratuito
                  </a>
                  <a href="https://wa.me/50255392986" target="_blank" rel="noopener noreferrer" className="m-btn m-btn-secondary">
                    Agendar una llamada
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <Contacto />
      </div>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
