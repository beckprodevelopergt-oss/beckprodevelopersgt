"use client";

import { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Contacto from "../../../components/Contacto";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";

export default function DesarrolloWebClient() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    // Scroll reveal animation observer
    const revealElements = document.querySelectorAll(".dw-microsite .reveal");
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
      q: "¿Qué tecnologías utilizan para el desarrollo de sus proyectos?",
      a: "Desarrollamos principalmente con Next.js y React para el frontend, garantizando velocidad extrema y una experiencia interactiva sin interrupciones. Para la infraestructura y persistencia de datos utilizamos Firebase o Node.js, y desplegamos en servidores globales optimizados como Vercel y Cloudflare."
    },
    {
      q: "¿El sitio web será administrable por mi equipo?",
      a: "Sí. Diseñamos un panel administrativo a la medida (CMS) adaptado a tus necesidades específicas. Podrás crear, editar o eliminar contenidos, imágenes, blogs o productos de forma 100% independiente, sin necesidad de conocimientos técnicos."
    },
    {
      q: "¿Cuánto tiempo toma desarrollar un sitio web premium?",
      a: "Normalmente el desarrollo de un sitio web premium toma entre 3 y 5 semanas, dependiendo de la complejidad de las secciones, el alcance de las integraciones (CRM, bases de datos) y la rapidez en la entrega del contenido inicial."
    },
    {
      q: "¿El diseño es único o utilizan plantillas genéricas?",
      a: "Diseñamos cada sitio desde cero. Nos inspiramos en las mejores plataformas tecnológicas globales (como Vercel o Stripe) para registrar una interfaz premium e innovadora que proyecte alto valor y represente fielmente la identidad de tu marca."
    },
    {
      q: "¿Incluye soporte y mantenimiento después de la entrega?",
      a: "Sí, todos nuestros desarrollos incluyen 30 días de garantía y soporte técnico prioritario gratuito tras el lanzamiento. Además, ofrecemos planes mensuales opcionales de mantenimiento preventivo, actualizaciones y optimizaciones continuas."
    },
    {
      q: "¿Cómo ayudan a que mi sitio web aparezca en los primeros resultados de Google?",
      a: "Aplicamos SEO técnico avanzado en el núcleo de la página: marcado semántico de HTML5, carga en menos de 1.5 segundos, optimización automática de imágenes, configuración de metadatos dinámicos, archivo sitemap y optimización responsive. Esto le da a tu web la máxima puntuación en los algoritmos de Google."
    }
  ];

  return (
    <>
      <Header />
      <div className="dw-microsite">
        <style dangerouslySetInnerHTML={{ __html: `
          .dw-microsite {
            --primary: #12A2B3;
            --primary-hover: #00C2D6;
            --primary-glow: rgba(18, 162, 179, 0.12);
            --primary-glow-strong: rgba(18, 162, 179, 0.35);
            --secondary: #0E7490;
            --dark-bg: #050b0d;
            --card-bg: rgba(10, 22, 26, 0.45);
            --card-border: rgba(18, 162, 179, 0.18);
            --font-sans: 'Poppins', sans-serif;

            background: radial-gradient(circle at 50% 0%, rgba(18, 162, 179, 0.15), transparent 50%), var(--dark-bg);
            color: #ffffff;
            font-family: var(--font-sans);
            overflow-x: hidden;
            padding-top: 80px;
          }

          .dw-microsite .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
          }

          .dw-microsite .text-gradient {
            background: linear-gradient(135deg, #ffffff 30%, var(--primary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .dw-microsite .bg-glow-radial {
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
          .dw-microsite .m-hero {
            position: relative;
            padding: 30px 0 40px 0;
            display: flex;
            align-items: center;
            overflow: hidden;
          }

          .dw-microsite .m-hero-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 32px;
            align-items: center;
            position: relative;
            z-index: 1;
          }

          .dw-microsite .m-hero-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .dw-microsite .m-breadcrumb {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: #cbd5e1;
            margin-bottom: 12px;
          }

          .dw-microsite .m-breadcrumb a {
            color: #cbd5e1;
            text-decoration: none;
            transition: color 0.2s;
          }

          .dw-microsite .m-breadcrumb a:hover {
            color: var(--primary);
          }

          .dw-microsite .m-breadcrumb-separator {
            color: #475569;
          }

          .dw-microsite .m-badge {
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

          .dw-microsite .m-hero-title {
            font-size: 48px;
            font-weight: 700;
            line-height: 1.15;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
          }

          .dw-microsite .m-hero-subtitle {
            font-size: 16px;
            color: #cbd5e1;
            line-height: 1.5;
            margin-bottom: 24px;
            max-width: 580px;
          }

          .dw-microsite .m-hero-ctas {
            display: flex;
            gap: 16px;
            width: 100%;
          }

          .dw-microsite .m-btn {
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

          .dw-microsite .m-btn-primary {
            background-color: var(--primary);
            color: #ffffff;
            border: 1px solid var(--primary);
            box-shadow: 0 4px 20px var(--primary-glow-strong);
          }

          .dw-microsite .m-btn-primary:hover {
            background-color: var(--primary-hover);
            border-color: var(--primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 8px 30px var(--primary-glow-strong);
          }

          .dw-microsite .m-btn-secondary {
            background-color: rgba(255, 255, 255, 0.03);
            color: #ffffff;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
          }

          .dw-microsite .m-btn-secondary:hover {
            background-color: rgba(255, 255, 255, 0.08);
            border-color: var(--primary);
            transform: translateY(-2px);
          }

          .dw-microsite .m-hero-illustration {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .dw-microsite .m-hero-img-wrapper {
            position: relative;
            width: 100%;
            max-width: 480px;
            animation: float 6s ease-in-out infinite;
            z-index: 1;
          }

          .dw-microsite .m-hero-img-wrapper img {
            width: 100%;
            height: auto;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            background: radial-gradient(circle at center, rgba(255, 255, 255, 0.02), transparent 70%);
            padding: 10px;
            filter: drop-shadow(0 15px 35px rgba(0,0,0,0.6)) drop-shadow(0 0 25px var(--primary-glow-strong));
          }

          .dw-microsite .m-hero-glow {
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
          .dw-microsite .m-section {
            position: relative;
            padding: 70px 0;
          }

          .dw-microsite #servicios.m-section {
            padding-top: 15px;
            padding-bottom: 50px;
          }

          .dw-microsite .m-section-header {
            max-width: 700px;
            margin-bottom: 40px;
          }

          .dw-microsite .m-section-badge {
            color: var(--primary);
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            display: block;
            margin-bottom: 8px;
          }

          .dw-microsite .m-section-title {
            font-size: 34px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 16px;
          }

          .dw-microsite .m-section-desc {
            font-size: 16px;
            color: #cbd5e1;
            line-height: 1.6;
          }

          /* S1: Editorial */
          .dw-microsite .m-editorial-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: flex-start;
          }

          .dw-microsite .m-editorial-left {
            font-size: 26px;
            font-weight: 600;
            line-height: 1.4;
            color: #f8f9fa;
            border-left: 3px solid var(--primary);
            padding-left: 24px;
          }

          .dw-microsite .m-editorial-right {
            font-size: 16px;
            color: #e2e8f0;
            line-height: 1.7;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          /* S2: Beneficios */
          .dw-microsite .m-cards-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .dw-microsite .m-card-premium {
            position: relative;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 32px 28px;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            backdrop-filter: blur(12px);
          }

          .dw-microsite .m-card-premium::before {
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

          .dw-microsite .m-card-premium:hover {
            transform: translateY(-6px);
            background: var(--card-bg);
            border-color: var(--card-border);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          }

          .dw-microsite .m-card-premium:hover::before {
            opacity: 1;
          }

          .dw-microsite .m-card-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.03);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            margin-bottom: 20px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.3s;
          }

          .dw-microsite .m-card-premium:hover .m-card-icon {
            background: var(--primary);
            color: #ffffff;
            transform: scale(1.05);
            box-shadow: 0 4px 15px var(--primary-glow-strong);
          }

          .dw-microsite .m-card-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 12px;
          }

          .dw-microsite .m-card-text {
            font-size: 14.5px;
            color: #cbd5e1;
            line-height: 1.6;
          }

          /* S3: Includes */
          .dw-microsite .m-features-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
          }

          .dw-microsite .m-feature-badge-card {
            display: flex;
            align-items: center;
            gap: 12px;
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.03);
            padding: 16px;
            border-radius: 12px;
            transition: all 0.3s;
            backdrop-filter: blur(5px);
          }

          .dw-microsite .m-feature-badge-card:hover {
            background: rgba(255, 255, 255, 0.03);
            border-color: var(--card-border);
            transform: translateY(-2px);
          }

          .dw-microsite .m-feature-check {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.03);
            color: var(--primary);
            flex-shrink: 0;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }

          .dw-microsite .m-feature-badge-card:hover .m-feature-check {
            background: var(--primary-glow);
            border-color: var(--primary);
          }

          .dw-microsite .m-feature-title {
            font-size: 14.5px;
            font-weight: 600;
            color: #f1f5f9;
          }

          /* S4: Tech */
          .dw-microsite .m-tech-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 16px;
          }

          .dw-microsite .m-tech-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 24px 16px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            transition: all 0.3s;
          }

          .dw-microsite .m-tech-card:hover {
            background: var(--card-bg);
            border-color: var(--card-border);
            transform: scale(1.05);
          }

          .dw-microsite .m-tech-icon {
            width: 40px;
            height: 40px;
            margin-bottom: 12px;
            color: #cbd5e1;
            transition: color 0.3s;
          }

          .dw-microsite .m-tech-card:hover .m-tech-icon {
            color: var(--primary);
          }

          .dw-microsite .m-tech-name {
            font-size: 13.5px;
            font-weight: 600;
            color: #cbd5e1;
            transition: color 0.3s;
          }

          .dw-microsite .m-tech-card:hover .m-tech-name {
            color: #ffffff;
          }

          /* S5: Cases */
          .dw-microsite .m-cases-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .dw-microsite .m-case-card {
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            padding: 32px;
            transition: all 0.3s;
            position: relative;
          }

          .dw-microsite .m-case-card:hover {
            background: rgba(255, 255, 255, 0.03);
            border-color: var(--card-border);
            transform: translateY(-4px);
          }

          .dw-microsite .m-case-tag {
            font-size: 11.5px;
            font-weight: 600;
            text-transform: uppercase;
            color: var(--primary);
            letter-spacing: 1px;
            margin-bottom: 12px;
            display: block;
          }

          .dw-microsite .m-case-title {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 16px;
          }

          .dw-microsite .m-case-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .dw-microsite .m-case-list li {
            position: relative;
            padding-left: 20px;
            margin-bottom: 10px;
            font-size: 14.5px;
            color: #e2e8f0;
            line-height: 1.5;
          }

          .dw-microsite .m-case-list li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--primary);
            font-weight: bold;
          }

          /* S6: Timeline */
          .dw-microsite .m-timeline {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
            padding: 30px 0;
          }

          .dw-microsite .m-timeline::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 40px;
            width: 2px;
            background: linear-gradient(to bottom, var(--primary), var(--secondary));
            opacity: 0.3;
          }

          .dw-microsite .m-timeline-item {
            position: relative;
            padding-left: 90px;
            margin-bottom: 40px;
          }

          .dw-microsite .m-timeline-item:last-child {
            margin-bottom: 0;
          }

          .dw-microsite .m-timeline-number {
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

          .dw-microsite .m-timeline-item:hover .m-timeline-number {
            background: var(--primary);
            color: #ffffff;
            transform: scale(1.1);
          }

          .dw-microsite .m-timeline-content {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.04);
            border-radius: 12px;
            padding: 20px 24px;
            transition: all 0.3s;
          }

          .dw-microsite .m-timeline-item:hover .m-timeline-content {
            background: rgba(255, 255, 255, 0.04);
            border-color: var(--card-border);
          }

          .dw-microsite .m-timeline-title {
            font-size: 19px;
            font-weight: 600;
            margin-bottom: 8px;
          }

          .dw-microsite .m-timeline-text {
            font-size: 14.5px;
            color: #cbd5e1;
            line-height: 1.6;
          }

          /* S7: Table */
          .dw-microsite .m-table-wrapper {
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }

          .dw-microsite .m-table {
            width: 100%;
            border-collapse: collapse;
          }

          .dw-microsite .m-table th, .dw-microsite .m-table td {
            padding: 20px 28px;
            text-align: left;
            border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          }

          .dw-microsite .m-table th {
            background: rgba(255, 255, 255, 0.02);
            font-weight: 700;
            font-size: 15.5px;
            color: #ffffff;
          }

          .dw-microsite .m-table td {
            font-size: 14.5px;
          }

          .dw-microsite .m-table tr:last-child td {
            border-bottom: none;
          }

          .dw-microsite .m-table tr:hover td {
            background: rgba(255, 255, 255, 0.01);
          }

          .dw-microsite .m-table-feature {
            font-weight: 600;
            color: #e2e8f0;
          }

          .dw-microsite .m-table-others {
            color: #cbd5e1;
          }

          .dw-microsite .m-table-beckpro {
            color: #ffffff;
            font-weight: 600;
            background: rgba(255, 255, 255, 0.01);
          }

          .dw-microsite tr:hover .m-table-beckpro {
            background: var(--primary-glow);
          }

          .dw-microsite .m-table-badge-yes {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--primary);
            font-weight: bold;
          }

          .dw-microsite .m-table-badge-no {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #ef4444;
          }

          /* S8: FAQ */
          .dw-microsite .m-faq-list {
            max-width: 800px;
            margin: 0 auto;
          }

          .dw-microsite .m-faq-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.04);
            border-radius: 12px;
            margin-bottom: 14px;
            overflow: hidden;
            transition: all 0.3s;
          }

          .dw-microsite .m-faq-item:hover {
            border-color: var(--card-border);
          }

          .dw-microsite .m-faq-trigger {
            width: 100%;
            padding: 20px;
            background: none;
            border: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-align: left;
            cursor: pointer;
            color: #ffffff;
            font-weight: 600;
            font-size: 16.5px;
          }

          .dw-microsite .m-faq-trigger:focus {
            outline: none;
          }

          .dw-microsite .m-faq-trigger span {
            padding-right: 20px;
          }

          .dw-microsite .m-faq-icon {
            flex-shrink: 0;
            width: 20px;
            height: 20px;
            color: var(--primary);
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .dw-microsite .m-faq-item.active .m-faq-icon {
            transform: rotate(180deg);
          }

          .dw-microsite .m-faq-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s;
            padding: 0 20px;
            color: #e2e8f0;
            font-size: 14.5px;
            line-height: 1.6;
          }

          .dw-microsite .m-faq-item.active .m-faq-content {
            max-height: 350px;
            padding-bottom: 20px;
          }

          /* S9: CTA Final */
          .dw-microsite .m-cta-card {
            position: relative;
            background: radial-gradient(circle at top right, var(--primary-glow-strong), rgba(255,255,255,0.01) 60%), rgba(255, 255, 255, 0.02);
            border: 1px solid var(--card-border);
            border-radius: 24px;
            padding: 60px 40px;
            text-align: center;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0,0,0,0.4);
            margin-bottom: 40px;
          }

          .dw-microsite .m-cta-glow {
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

          .dw-microsite .m-cta-content {
            position: relative;
            z-index: 1;
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .dw-microsite .m-cta-title {
            font-size: 38px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 16px;
          }

          .dw-microsite .m-cta-subtitle {
            font-size: 17px;
            color: #e2e8f0;
            line-height: 1.6;
            margin-bottom: 32px;
            max-width: 600px;
          }

          /* Animations */
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          .dw-microsite .reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .dw-microsite .reveal.visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* Responsive */
          @media (max-width: 991px) {
            .dw-microsite .m-hero-grid {
              grid-template-columns: 1fr;
              gap: 32px;
              text-align: center;
            }
            .dw-microsite .m-hero-content {
              align-items: center;
            }
            .dw-microsite .m-hero-title {
              font-size: 40px;
            }
            .dw-microsite .m-editorial-grid {
              grid-template-columns: 1fr;
              gap: 30px;
            }
            .dw-microsite .m-cards-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            .dw-microsite .m-features-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .dw-microsite .m-tech-grid {
              grid-template-columns: repeat(3, 1fr);
            }
            .dw-microsite .m-cases-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            .dw-microsite .m-cta-title {
              font-size: 30px;
            }
          }

          @media (max-width: 767px) {
            .dw-microsite .m-hero {
              padding: 30px 0 50px 0;
            }
            .dw-microsite .m-hero-title {
              font-size: 32px;
            }
            .dw-microsite .m-hero-ctas {
              flex-direction: column;
              width: 100%;
            }
            .dw-microsite .m-btn {
              width: 100%;
            }
            .dw-microsite .m-section {
              padding: 50px 0;
            }
            .dw-microsite .m-section-title {
              font-size: 28px;
            }
            .dw-microsite .m-features-grid {
              grid-template-columns: 1fr;
            }
            .dw-microsite .m-tech-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .dw-microsite .m-timeline::before {
              left: 20px;
            }
            .dw-microsite .m-timeline-item {
              padding-left: 50px;
            }
            .dw-microsite .m-timeline-number {
              left: 0;
              width: 36px;
              height: 36px;
            }
            .dw-microsite .m-table th, .dw-microsite .m-table td {
              padding: 14px;
              font-size: 13.5px;
            }
            .dw-microsite .m-cta-card {
              padding: 30px 16px;
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
                  <span style={{ color: "var(--primary)" }}>Desarrollo Web</span>
                </div>
                
                <span className="m-badge">Ingeniería Web Premium</span>
                
                <h1 className="m-hero-title">
                  Sitios Web de <span className="text-gradient">Alto Rendimiento</span> que Impulsan tu Negocio
                </h1>
                
                <p className="m-hero-subtitle">
                  Desarrollamos plataformas web rápidas, seguras y escalables con arquitectura moderna. Diseñadas para destacar, posicionar en Google y convertir visitas en clientes.
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
                  <img src="/assets/web_dev_hero.png" alt="Desarrollo Web Premium BeckPro" />
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
                Creamos software web con estándares de ingeniería mundial.
              </div>
              <div className="m-editorial-right">
                <p>
                  No creamos plantillas genéricas ni soluciones prefabricadas. Diseñamos cada plataforma desde cero utilizando tecnologías avanzadas como Next.js y React para asegurar velocidad de carga extrema y posicionamiento SEO óptimo.
                </p>
                <p>
                  Enfocamos cada línea de código en la escalabilidad, estabilidad y seguridad de tu negocio. Integramos paneles administrativos interactivos, bases de datos robustas y APIs rápidas, permitiendo que tu web crezca al mismo ritmo que tus ventas.
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
              <h2 className="m-section-title">¿Por qué elegir nuestro desarrollo web?</h2>
              <p className="m-section-desc">
                Combinamos diseño moderno con ingeniería sofisticada para ofrecer una experiencia digital inigualable.
              </p>
            </div>
            
            <div className="m-cards-grid reveal">
              {/* Card 1 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <h3 className="m-card-title">Rendimiento Extremo</h3>
                <p className="m-card-text">
                  Tu sitio cargará en menos de 1.5 segundos. Optimizamos código e imágenes para retener a cada visitante y maximizar la retención.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </div>
                <h3 className="m-card-title">Optimización SEO</h3>
                <p className="m-card-text">
                  Estructuramos tu código semánticamente desde la base para que Google indexe tu contenido rápidamente y logres las mejores posiciones de búsqueda.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <h3 className="m-card-title">Escalabilidad Total</h3>
                <p className="m-card-text">
                  Arquitectura limpia y modular basada en componentes que permite integrar pasarelas de pago, registros de usuarios o blogs sin rehacer el sitio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ¿Qué incluye? */}
        <section className="m-section">
          <div className="container">
            <div className="m-section-header reveal">
              <span className="m-section-badge">Funcionalidades</span>
              <h2 className="m-section-title">Todo lo que tu plataforma necesita</h2>
              <p className="m-section-desc">
                Nuestros desarrollos no tienen costos ocultos. Incluyen todas las características técnicas para competir en el mercado digital moderno.
              </p>
            </div>
            
            <div className="m-features-grid reveal">
              {[
                "Diseño 100% Responsive",
                "SEO Técnico Integrado",
                "Firebase / BD Realtime",
                "Panel Administrativo",
                "Formularios Inteligentes",
                "Velocidad Lighthouse >95",
                "Seguridad SSL e HTTPS",
                "Integración con Analytics"
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
              <span className="m-section-badge">Tecnología</span>
              <h2 className="m-section-title">Stack tecnológico de primer nivel</h2>
              <p className="m-section-desc">
                Utilizamos las herramientas líderes del mercado que permiten construir la web del futuro: rápida, segura y altamente escalable.
              </p>
            </div>
            
            <div className="m-tech-grid reveal">
              {[
                { name: "Next.js", desc: "Framework React", svg: <path d="M12 2L2 22h20L12 2zm0 4l7.5 13.5h-15L12 6z"/> },
                { name: "React", desc: "Biblioteca UI", svg: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/> },
                { name: "Firebase", desc: "Base de Datos", svg: <path d="M16 2L8 8l-3-2L2 19l10 5 10-5L16 2z"/> },
                { name: "Node.js", desc: "Backend API", svg: <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 16.3L6.5 15V9L12 5.7l5.5 3.3v6l-5.5 3.3z"/> },
                { name: "Vercel", desc: "Cloud Hosting", svg: <polygon points="12 2 22 22 2 22"></polygon> },
                { name: "GitHub", desc: "Repositorios", svg: <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.08-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.18 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/> },
                { name: "Cloudflare", desc: "Red Global CDN", svg: <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/> },
                { name: "HTML5", desc: "Estructura Web", svg: <path d="M12 2L2 22l10-3 10 3L12 2zm0 3.5l6.5 13-6.5-2-6.5 2 6.5-13z"/> },
                { name: "CSS3", desc: "Estilización", svg: <path d="M12 2L2 22l10-3 10 3L12 2zm0 4v11l-5.5 1.5L12 6z"/> },
                { name: "JavaScript", desc: "Programación", svg: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-2h2v2zm0-4h-2v-6h2v6z"/> }
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
              <span className="m-section-badge">Aplicaciones</span>
              <h2 className="m-section-title">¿Para qué industrias desarrollamos?</h2>
              <p className="m-section-desc">
                Nuestras plataformas se adaptan a las particularidades operativas y comerciales de distintos sectores del mercado.
              </p>
            </div>
            
            <div className="m-cases-grid reveal">
              {/* Case 1 */}
              <div className="m-case-card">
                <span className="m-case-tag">Corporativo</span>
                <h3 className="m-case-title">Empresas y Startups</h3>
                <ul className="m-case-list">
                  <li>Plataformas institucionales de alto impacto</li>
                  <li>Presentación de productos y servicios</li>
                  <li>Captación calificada de prospectos (leads)</li>
                  <li>Paneles interactivos de información</li>
                </ul>
              </div>
              
              {/* Case 2 */}
              <div className="m-case-card">
                <span className="m-case-tag">Salud & Servicios</span>
                <h3 className="m-case-title">Clínicas y Profesionales</h3>
                <ul className="m-case-list">
                  <li>Fichas de especialistas y doctores</li>
                  <li>Sistemas integrados de reserva de citas</li>
                  <li>Información de tratamientos y tarifas</li>
                  <li>Blogs de divulgación optimizados</li>
                </ul>
              </div>
              
              {/* Case 3 */}
              <div className="m-case-card">
                <span className="m-case-tag">Inmobiliario</span>
                <h3 className="m-case-title">Constructoras e Inmobiliarias</h3>
                <ul className="m-case-list">
                  <li>Catálogos interactivos de propiedades</li>
                  <li>Galerías de fotos y mockups premium</li>
                  <li>Planos y cotizadores interactivos</li>
                  <li>Captación segmentada por proyecto</li>
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
                Una ruta estructurada y transparente para llevar tu idea desde el plano conceptual hasta un producto terminado exitoso.
              </p>
            </div>
            
            <div className="m-timeline reveal">
              {[
                { n: "1", t: "Descubrimiento", d: "Reunión de diagnóstico inicial para entender tus metas de negocio, público objetivo, alcance del proyecto y requisitos técnicos específicos." },
                { n: "2", t: "Estrategia y Planificación", d: "Definición del mapa del sitio, la arquitectura técnica de la información y la selección del stack tecnológico idóneo para el proyecto." },
                { n: "3", t: "Diseño UI/UX Premium", d: "Diseñamos la interfaz gráfica a medida, creando flujos limpios, intuitivos y alineados con las últimas tendencias de diseño internacional." },
                { n: "4", t: "Desarrollo y Programación", d: "Escritura de código limpio y estructurado con Next.js/React. Integración de bases de datos, APIs y el panel de administración." },
                { n: "5", t: "Implementación y Lanzamiento", d: "Pruebas exhaustivas de velocidad y responsive. Configuración del dominio, certificados SSL y despliegue oficial en servidores de producción." },
                { n: "6", t: "Optimización Continua", d: "Monitoreo post-lanzamiento de velocidades, análisis de conversión del usuario y ajustes de SEO para asegurar un rendimiento excepcional." }
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

        {/* SECTION 7: ¿Por qué BeckPro? (Comparative Table) */}
        <section className="m-section" id="planes">
          <div className="container">
            <div className="m-section-header reveal">
              <span className="m-section-badge">Comparativa</span>
              <h2 className="m-section-title">¿Por qué trabajar con BeckPro?</h2>
              <p className="m-section-desc">
                Comparemos las diferencias entre un desarrollo convencional de agencia tradicional frente al estándar tecnológico de BeckPro.
              </p>
            </div>
            
            <div className="m-table-wrapper reveal">
              <table className="m-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Otras Agencias</th>
                    <th className="m-table-beckpro" style={{ borderBottom: "1px solid var(--primary)" }}>BeckPro Developer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: "Velocidad de carga", o: "Lenta (plantillas pesadas de WordPress)", b: "Ultra rápida (código Next.js puro, < 1.5s)" },
                    { f: "Diseño y estructura", o: "Plantillas genéricas reutilizadas", b: "100% Personalizado a la medida de tu marca" },
                    { f: "Seguridad y Hosting", o: "Hosting compartido propenso a caídas", b: "Despliegue serverless global (Vercel/Cloudflare)" },
                    { f: "SEO en el código", o: "Básico o mediante plugins externos", b: "SEO técnico avanzado desde el núcleo semántico" },
                    { f: "Panel autoadministrable", o: "WordPress complejo de usar y actualizar", b: "CMS personalizado, simple e intuitivo" },
                    { f: "Soporte posterior", o: "Tiempos de respuesta lentos por tickets", b: "Soporte de ingeniería directo y prioritario" }
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

        {/* SECTION 8: Preguntas Frecuentes */}
        <section className="m-section">
          <div className="container">
            <div className="m-section-header reveal" style={{ textAlign: "center", margin: "0 auto 60px auto" }}>
              <span className="m-section-badge">FAQ</span>
              <h2 className="m-section-title">Preguntas Frecuentes</h2>
              <p className="m-section-desc">
                Resolvemos tus dudas principales sobre nuestro servicio de desarrollo web comercial premium.
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
                <h2 className="m-cta-title">¿Listo para construir la plataforma de tu próximo nivel?</h2>
                <p className="m-cta-subtitle">
                  Obtén una sesión de diagnóstico técnico y estratégico completamente gratuita para tu proyecto. Sin ningún compromiso.
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
