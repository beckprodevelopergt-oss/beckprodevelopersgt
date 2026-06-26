"use client";

import { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Contacto from "../../../components/Contacto";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";

export default function AutomatizacionDigitalClient() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    // Scroll reveal animation observer
    const revealElements = document.querySelectorAll(".ad-microsite .reveal");
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
      q: "¿Qué es la automatización digital y qué procesos puedo automatizar en mi empresa?",
      a: "La automatización digital consiste en conectar tus herramientas cotidianas de software para transferir datos y ejecutar tareas de forma automática sin intervención humana. Puedes automatizar la sincronización de prospectos con tu CRM, la atención automática en WhatsApp, el control de reservaciones, el envío automático de reportes y la facturación, entre otros."
    },
    {
      q: "¿Tengo que pagar costosas licencias mensuales por usar Make, n8n o Zapier?",
      a: "No necesariamente. La mayoría de estas plataformas cuentan con planes gratuitos muy generosos que cubren flujos de trabajo iniciales. Si tu volumen de operaciones es muy elevado, las licencias de pago son sumamente económicas (desde $9 USD al mes), representando una fracción diminuta del costo de contratar personal dedicado a tareas manuales."
    },
    {
      q: "¿Cómo se integra la Inteligencia Artificial (IA) en estos flujos de trabajo?",
      a: "Conectamos tus flujos de automatización con las APIs de modelos de lenguaje avanzados (como OpenAI/GPT o Gemini). Esto permite que el sistema 'entienda' y clasifique correos electrónicos de clientes, redacte respuestas altamente personalizadas en segundos, extraiga información de PDFs escaneados y responda preguntas complejas de tus prospectos de forma autónoma."
    },
    {
      q: "¿Es seguro conectar mis cuentas de correo, WhatsApp y bases de datos?",
      a: "Totalmente. Trabajamos bajo estrictos protocolos de seguridad digital. Las integraciones se realizan a través de APIs oficiales utilizando el protocolo seguro HTTPS, autenticación estándar OAuth 2.0 y llaves encriptadas. Tus contraseñas nunca son visibles y la información viaja protegida de extremo a extremo."
    },
    {
      q: "¿Qué sucede si un flujo de trabajo llega a fallar o si cambia una API?",
      a: "En todos nuestros desarrollos programamos rutinas de manejo de errores. Si una aplicación externa presenta caídas o cambia sus políticas de conexión, el sistema ejecuta un reintento automático y, si el problema persiste, envía una alerta inmediata a tu canal de Slack, WhatsApp o correo electrónico para que podamos resolverlo preventivamente."
    },
    {
      q: "¿Cuánto tiempo toma implementar una automatización premium?",
      a: "El tiempo estimado de entrega varía según la complejidad. Flujos de sincronización sencillos y automatización de correos toman de 7 a 14 días. Ecosistemas complejos que involucran Inteligencia Artificial, chatbots interactivos e integraciones profundas con CRMs o ERPs toman entre 3 y 4 semanas."
    }
  ];

  return (
    <>
      <Header />
      <div className="ad-microsite">
        <style dangerouslySetInnerHTML={{ __html: `
          .ad-microsite {
            --primary: #16A34A;
            --primary-hover: #22C55E;
            --primary-glow: rgba(22, 163, 74, 0.12);
            --primary-glow-strong: rgba(22, 163, 74, 0.35);
            --secondary: #15803D;
            --dark-bg: #030804;
            --card-bg: rgba(11, 24, 15, 0.45);
            --card-border: rgba(22, 163, 74, 0.18);
            --font-sans: 'Poppins', sans-serif;

            background: radial-gradient(circle at 50% 0%, rgba(22, 163, 74, 0.15), transparent 50%), var(--dark-bg);
            color: #ffffff;
            font-family: var(--font-sans);
            overflow-x: hidden;
            padding-top: 80px;
          }

          .ad-microsite .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
          }

          .ad-microsite .text-gradient {
            background: linear-gradient(135deg, #ffffff 30%, var(--primary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .ad-microsite .bg-glow-radial {
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
          .ad-microsite .m-hero {
            position: relative;
            padding: 30px 0 40px 0;
            display: flex;
            align-items: center;
            overflow: hidden;
          }

          .ad-microsite .m-hero-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 32px;
            align-items: center;
            position: relative;
            z-index: 1;
          }

          .ad-microsite .m-hero-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .ad-microsite .m-breadcrumb {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: #cbd5e1;
            margin-bottom: 12px;
          }

          .ad-microsite .m-breadcrumb a {
            color: #cbd5e1;
            text-decoration: none;
            transition: color 0.2s;
          }

          .ad-microsite .m-breadcrumb a:hover {
            color: var(--primary);
          }

          .ad-microsite .m-breadcrumb-separator {
            color: #475569;
          }

          .ad-microsite .m-badge {
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

          .ad-microsite .m-hero-title {
            font-size: 48px;
            font-weight: 700;
            line-height: 1.15;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
          }

          .ad-microsite .m-hero-subtitle {
            font-size: 16px;
            color: #cbd5e1;
            line-height: 1.5;
            margin-bottom: 24px;
            max-width: 580px;
          }

          .ad-microsite .m-hero-ctas {
            display: flex;
            gap: 16px;
            width: 100%;
          }

          .ad-microsite .m-btn {
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

          .ad-microsite .m-btn-primary {
            background-color: var(--primary);
            color: #ffffff;
            border: 1px solid var(--primary);
            box-shadow: 0 4px 20px var(--primary-glow-strong);
          }

          .ad-microsite .m-btn-primary:hover {
            background-color: var(--primary-hover);
            border-color: var(--primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 8px 30px var(--primary-glow-strong);
          }

          .ad-microsite .m-btn-secondary {
            background-color: rgba(255, 255, 255, 0.03);
            color: #ffffff;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
          }

          .ad-microsite .m-btn-secondary:hover {
            background-color: rgba(255, 255, 255, 0.08);
            border-color: var(--primary);
            transform: translateY(-2px);
          }

          .ad-microsite .m-hero-illustration {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .ad-microsite .m-hero-img-wrapper {
            position: relative;
            width: 100%;
            max-width: 480px;
            animation: float 6s ease-in-out infinite;
            z-index: 1;
          }

          .ad-microsite .m-hero-img-wrapper img {
            width: 100%;
            height: auto;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            background: radial-gradient(circle at center, rgba(255, 255, 255, 0.02), transparent 70%);
            padding: 10px;
            filter: drop-shadow(0 15px 35px rgba(0,0,0,0.6)) drop-shadow(0 0 25px var(--primary-glow-strong));
          }

          .ad-microsite .m-hero-glow {
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
          .ad-microsite .m-section {
            position: relative;
            padding: 70px 0;
          }

          .ad-microsite #servicios.m-section {
            padding-top: 15px;
            padding-bottom: 50px;
          }

          .ad-microsite .m-section-header {
            max-width: 700px;
            margin-bottom: 40px;
          }

          .ad-microsite .m-section-badge {
            color: var(--primary);
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            display: block;
            margin-bottom: 8px;
          }

          .ad-microsite .m-section-title {
            font-size: 34px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 16px;
          }

          .ad-microsite .m-section-desc {
            font-size: 16px;
            color: #cbd5e1;
            line-height: 1.6;
          }

          /* S1: Editorial */
          .ad-microsite .m-editorial-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: flex-start;
          }

          .ad-microsite .m-editorial-left {
            font-size: 28px;
            font-weight: 600;
            line-height: 1.4;
            color: #f8f9fa;
            border-left: 3px solid var(--primary);
            padding-left: 24px;
          }

          .ad-microsite .m-editorial-right {
            font-size: 17px;
            color: #a8b2d1;
            line-height: 1.8;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          /* S2: Beneficios */
          .ad-microsite .m-cards-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .ad-microsite .m-card-premium {
            position: relative;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 40px 32px;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            backdrop-filter: blur(12px);
          }

          .ad-microsite .m-card-premium::before {
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

          .ad-microsite .m-card-premium:hover {
            transform: translateY(-8px);
            background: var(--card-bg);
            border-color: var(--card-border);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          }

          .ad-microsite .m-card-premium:hover::before {
            opacity: 1;
          }

          .ad-microsite .m-card-icon {
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

          .ad-microsite .m-card-premium:hover .m-card-icon {
            background: var(--primary);
            color: #ffffff;
            transform: scale(1.05);
            box-shadow: 0 4px 15px var(--primary-glow-strong);
          }

          .ad-microsite .m-card-title {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 16px;
          }

          .ad-microsite .m-card-text {
            font-size: 15px;
            color: #8892b0;
            line-height: 1.6;
          }

          /* S3: Includes */
          .ad-microsite .m-features-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .ad-microsite .m-feature-badge-card {
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

          .ad-microsite .m-feature-badge-card:hover {
            background: rgba(255, 255, 255, 0.03);
            border-color: var(--card-border);
            transform: translateY(-2px);
          }

          .ad-microsite .m-feature-check {
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

          .ad-microsite .m-feature-badge-card:hover .m-feature-check {
            background: var(--primary-glow);
            border-color: var(--primary);
          }

          .ad-microsite .m-feature-title {
            font-size: 15px;
            font-weight: 600;
            color: #e2e8f0;
          }

          /* S4: Tech */
          .ad-microsite .m-tech-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .ad-microsite .m-tech-card {
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

          .ad-microsite .m-tech-card:hover {
            background: var(--card-bg);
            border-color: var(--card-border);
            transform: scale(1.05);
          }

          .ad-microsite .m-tech-icon {
            width: 48px;
            height: 48px;
            margin-bottom: 16px;
            color: #8892b0;
            transition: color 0.3s;
          }

          .ad-microsite .m-tech-card:hover .m-tech-icon {
            color: var(--primary);
          }

          .ad-microsite .m-tech-name {
            font-size: 14px;
            font-weight: 600;
            color: #8892b0;
            transition: color 0.3s;
          }

          .ad-microsite .m-tech-card:hover .m-tech-name {
            color: #ffffff;
          }

          /* S5: Cases */
          .ad-microsite .m-cases-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .ad-microsite .m-case-card {
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            padding: 40px;
            transition: all 0.3s;
            position: relative;
          }

          .ad-microsite .m-case-card:hover {
            background: rgba(255, 255, 255, 0.03);
            border-color: var(--card-border);
            transform: translateY(-4px);
          }

          .ad-microsite .m-case-tag {
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            color: var(--primary);
            letter-spacing: 1px;
            margin-bottom: 16px;
            display: block;
          }

          .ad-microsite .m-case-title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
          }

          .ad-microsite .m-case-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .ad-microsite .m-case-list li {
            position: relative;
            padding-left: 24px;
            margin-bottom: 12px;
            font-size: 15px;
            color: #a8b2d1;
            line-height: 1.5;
          }

          .ad-microsite .m-case-list li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--primary);
            font-weight: bold;
          }

          /* S6: Timeline */
          .ad-microsite .m-timeline {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 0;
          }

          .ad-microsite .m-timeline::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 40px;
            width: 2px;
            background: linear-gradient(to bottom, var(--primary), var(--secondary));
            opacity: 0.3;
          }

          .ad-microsite .m-timeline-item {
            position: relative;
            padding-left: 90px;
            margin-bottom: 50px;
          }

          .ad-microsite .m-timeline-item:last-child {
            margin-bottom: 0;
          }

          .ad-microsite .m-timeline-number {
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

          .ad-microsite .m-timeline-item:hover .m-timeline-number {
            background: var(--primary);
            color: #ffffff;
            transform: scale(1.1);
          }

          .ad-microsite .m-timeline-content {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.04);
            border-radius: 12px;
            padding: 24px 30px;
            transition: all 0.3s;
          }

          .ad-microsite .m-timeline-item:hover .m-timeline-content {
            background: rgba(255, 255, 255, 0.04);
            border-color: var(--card-border);
          }

          .ad-microsite .m-timeline-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 10px;
          }

          .ad-microsite .m-timeline-text {
            font-size: 15px;
            color: #8892b0;
            line-height: 1.6;
          }

          /* S7: Table */
          .ad-microsite .m-table-wrapper {
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }

          .ad-microsite .m-table {
            width: 100%;
            border-collapse: collapse;
          }

          .ad-microsite .m-table th, .ad-microsite .m-table td {
            padding: 24px 32px;
            text-align: left;
            border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          }

          .ad-microsite .m-table th {
            background: rgba(255, 255, 255, 0.02);
            font-weight: 700;
            font-size: 16px;
            color: #ffffff;
          }

          .ad-microsite .m-table td {
            font-size: 15px;
          }

          .ad-microsite .m-table tr:last-child td {
            border-bottom: none;
          }

          .ad-microsite .m-table tr:hover td {
            background: rgba(255, 255, 255, 0.01);
          }

          .ad-microsite .m-table-feature {
            font-weight: 600;
            color: #e2e8f0;
          }

          .ad-microsite .m-table-others {
            color: #8892b0;
          }

          .ad-microsite .m-table-beckpro {
            color: #ffffff;
            font-weight: 600;
            background: rgba(255, 255, 255, 0.01);
          }

          .ad-microsite tr:hover .m-table-beckpro {
            background: var(--primary-glow);
          }

          .ad-microsite .m-table-badge-yes {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--primary);
            font-weight: bold;
          }

          .ad-microsite .m-table-badge-no {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #ef4444;
          }

          /* S8: FAQ */
          .ad-microsite .m-faq-list {
            max-width: 800px;
            margin: 0 auto;
          }

          .ad-microsite .m-faq-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.04);
            border-radius: 12px;
            margin-bottom: 16px;
            overflow: hidden;
            transition: all 0.3s;
          }

          .ad-microsite .m-faq-item:hover {
            border-color: var(--card-border);
          }

          .ad-microsite .m-faq-trigger {
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

          .ad-microsite .m-faq-trigger:focus {
            outline: none;
          }

          .ad-microsite .m-faq-trigger span {
            padding-right: 20px;
          }

          .ad-microsite .m-faq-icon {
            flex-shrink: 0;
            width: 20px;
            height: 20px;
            color: var(--primary);
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .ad-microsite .m-faq-item.active .m-faq-icon {
            transform: rotate(180deg);
          }

          .ad-microsite .m-faq-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s;
            padding: 0 24px;
            color: #a8b2d1;
            font-size: 15px;
            line-height: 1.6;
          }

          .ad-microsite .m-faq-item.active .m-faq-content {
            max-height: 350px;
            padding-bottom: 24px;
          }

          /* S9: CTA Final */
          .ad-microsite .m-cta-card {
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

          .ad-microsite .m-cta-glow {
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

          .ad-microsite .m-cta-content {
            position: relative;
            z-index: 1;
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .ad-microsite .m-cta-title {
            font-size: 44px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 20px;
          }

          .ad-microsite .m-cta-subtitle {
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

          .ad-microsite .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .ad-microsite .reveal.visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* Responsive */
          @media (max-width: 991px) {
            .ad-microsite .m-hero-grid {
              grid-template-columns: 1fr;
              gap: 40px;
              text-align: center;
            }
            .ad-microsite .m-hero-content {
              align-items: center;
            }
            .ad-microsite .m-hero-title {
              font-size: 44px;
            }
            .ad-microsite .m-editorial-grid {
              grid-template-columns: 1fr;
              gap: 30px;
            }
            .ad-microsite .m-cards-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            .ad-microsite .m-features-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .ad-microsite .m-tech-grid {
              grid-template-columns: repeat(3, 1fr);
            }
            .ad-microsite .m-cases-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            .ad-microsite .m-cta-title {
              font-size: 32px;
            }
          }

          @media (max-width: 767px) {
            .ad-microsite .m-hero {
              padding: 40px 0 80px 0;
            }
            .ad-microsite .m-hero-title {
              font-size: 36px;
            }
            .ad-microsite .m-hero-ctas {
              flex-direction: column;
              width: 100%;
            }
            .ad-microsite .m-btn {
              width: 100%;
            }
            .ad-microsite .m-section {
              padding: 60px 0;
            }
            .ad-microsite .m-section-title {
              font-size: 30px;
            }
            .ad-microsite .m-features-grid {
              grid-template-columns: 1fr;
            }
            .ad-microsite .m-tech-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .ad-microsite .m-timeline::before {
              left: 20px;
            }
            .ad-microsite .m-timeline-item {
              padding-left: 50px;
            }
            .ad-microsite .m-timeline-number {
              left: 0;
              width: 36px;
              height: 36px;
            }
            .ad-microsite .m-table th, .ad-microsite .m-table td {
              padding: 16px;
              font-size: 14px;
            }
            .ad-microsite .m-cta-card {
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
                  <span style={{ color: "var(--primary)" }}>Automatización Digital</span>
                </div>
                
                <span className="m-badge">Inteligencia Operativa</span>
                
                <h1 className="m-hero-title">
                  Automatiza tus Procesos y <span className="text-gradient">Multiplica la Eficiencia</span>
                </h1>
                
                <p className="m-hero-subtitle">
                  Conectamos tus aplicaciones, bases de datos y canales con Inteligencia Artificial. Elimina tareas manuales repetitivas y haz que tu negocio trabaje en piloto automático.
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
                  <img src="/assets/automation_hero.png" alt="Automatización Digital Premium BeckPro" />
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
                Liberamos el tiempo de tu equipo automatizando lo rutinario.
              </div>
              <div className="m-editorial-right">
                <p>
                  El recurso más valioso de cualquier empresa es el tiempo. Diseñamos e implementamos flujos de trabajo inteligentes que integran tus herramientas favoritas para que la información fluya sin fricciones ni retrasos.
                </p>
                <p>
                  Desde capturar prospectos y guardarlos en tu CRM, hasta enviar respuestas automáticas con IA en WhatsApp, generar cotizaciones, alertas de stock o actualizar calendarios de citas. Construimos un ecosistema integrado que opera 24/7 sin cometer errores humanos.
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
              <h2 className="m-section-title">¿Qué logras al automatizar tus operaciones?</h2>
              <p className="m-section-desc">
                Escala tus procesos de negocio, elimina demoras y potencia la productividad general de tu organización.
              </p>
            </div>
            
            <div className="m-cards-grid reveal">
              {/* Card 1 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="m-card-title">Cero Tareas Manuales</h3>
                <p className="m-card-text">
                  Ahorra horas diarias de papeleo digital, copiado de datos e informes rutinarios, permitiendo que tu equipo se enfoque en vender.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </div>
                <h3 className="m-card-title">Cero Errores</h3>
                <p className="m-card-text">
                  Los robots procesan y transfieren información de forma exacta, eliminando errores de captura, olvidos de seguimiento o pérdidas de la información.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <h3 className="m-card-title">Operación Autónoma 24/7</h3>
                <p className="m-card-text">
                  Tus flujos de trabajo siguen registrando prospectos, enviando correos y respondiendo dudas en WhatsApp incluso los fines de semana.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ¿Qué incluye? */}
        <section className="m-section">
          <div className="container">
            <div className="m-section-header reveal">
              <span className="m-section-badge">Ecosistema</span>
              <h2 className="m-section-title">Soluciones integradas para tu negocio</h2>
              <p className="m-section-desc">
                Desplegamos flujos de automatización robustos y a la medida que conectan tu infraestructura de forma sumamente ágil.
              </p>
            </div>
            
            <div className="m-features-grid reveal">
              {[
                "Flujos Make / n8n / Zapier",
                "WhatsApp Business API",
                "Conexión de Webhooks y APIs",
                "Bases de Datos en la Nube",
                "Agentes e Inteligencia IA",
                "Respuestas por Email",
                "Sincronización con CRM",
                "Alertas y Reportes Automáticos"
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
              <h2 className="m-section-title">El poder de las mejores integradoras</h2>
              <p className="m-section-desc">
                Implementamos y sincronizamos los flujos de datos sobre plataformas líderes de automatización e Inteligencia Artificial.
              </p>
            </div>
            
            <div className="m-tech-grid reveal">
              {[
                { name: "Make", svg: <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z"/> },
                { name: "n8n", svg: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-6h2v6zm0-8h-2V7h2v3z"/> },
                { name: "Zapier", svg: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/> },
                { name: "Firebase", svg: <path d="M16 2L8 8l-3-2L2 19l10 5 10-5L16 2z"/> },
                { name: "Google Workspace", svg: <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 13.5h-2v-2h2v2zm0-4h-2v-6h2v6z"/> },
                { name: "OpenAI (AI Core)", svg: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z"/> },
                { name: "WhatsApp API", svg: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.55 13.6c-.45.45-1.2.45-1.65 0L12 13.65l-1.9 1.9c-.45.45-1.2.45-1.65 0-.45-.45-.45-1.2 0-1.65l1.9-1.9-1.9-1.9c-.45-.45-.45-1.2 0-1.65.45-.45 1.2-.45 1.65 0l1.9 1.9 1.9-1.9c.45-.45 1.2-.45 1.65 0 .45.45.45 1.2 0 1.65l-1.9 1.9 1.9 1.9c.45.45.45 1.2 0 1.65z"/> },
                { name: "Webhooks", svg: <polygon points="12 2 22 22 2 22"></polygon> }
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
              <span className="m-section-badge">Casos de Uso</span>
              <h2 className="m-section-title">Flujos inteligentes probados</h2>
              <p className="m-section-desc">
                Ejemplos concretos de flujos automatizados que resuelven los cuellos de botella operativos de tu empresa.
              </p>
            </div>
            
            <div className="m-cases-grid reveal">
              {/* Case 1 */}
              <div className="m-case-card">
                <span className="m-case-tag">Ventas & CRM</span>
                <h3 className="m-case-title">Gestión de Clientes</h3>
                <ul className="m-case-list">
                  <li>Sincronización automática de leads de la web</li>
                  <li>Asignación inmediata de prospectos a vendedores</li>
                  <li>Alertas de seguimiento en Slack o WhatsApp</li>
                  <li>Creación automática de perfiles en CRM</li>
                </ul>
              </div>
              
              {/* Case 2 */}
              <div className="m-case-card">
                <span className="m-case-tag">Atención 24/7</span>
                <h3 className="m-case-title">WhatsApp Bots con IA</h3>
                <ul className="m-case-list">
                  <li>Bots de WhatsApp inteligentes que leen bases de datos</li>
                  <li>Respuestas automáticas sobre tarifas y horarios</li>
                  <li>Cualificación de prospectos en conversación</li>
                  <li>Traspaso fluido a agentes humanos cuando se requiera</li>
                </ul>
              </div>
              
              {/* Case 3 */}
              <div className="m-case-card">
                <span className="m-case-tag">Operaciones</span>
                <h3 className="m-case-title">Reservas e Inventarios</h3>
                <ul className="m-case-list">
                  <li>Agendamiento de citas directo en Google Calendar</li>
                  <li>Envío automático de recordatorios por WhatsApp</li>
                  <li>Actualización instantánea de inventario en ventas</li>
                  <li>Sincronización de cancelaciones o reprogramaciones</li>
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
                Una ruta analítica y metódica orientada a comprender, programar y desplegar flujos robustos de alta confiabilidad.
              </p>
            </div>
            
            <div className="m-timeline reveal">
              {[
                { n: "1", t: "Mapeo de Procesos", d: "Reunión de consultoría analítica para mapear paso a paso tus flujos actuales, identificar cuellos de botella y procesos automatizables." },
                { n: "2", t: "Diseño de la Arquitectura", d: "Definición del flujo de datos óptimo, la selección de plataformas integradoras (Make, n8n) y APIs que intervendrán." },
                { n: "3", t: "Programación de Escenarios", d: "Codificamos y estructuramos las rutas lógicas de datos, configuramos webhooks, JSONs y las integraciones con APIs." },
                { n: "4", t: "Conexión de IA y Modelos", d: "Si tu flujo requiere IA, configuramos y entrenamos los prompts de OpenAI para clasificar correos, redactar o calificar de forma inteligente." },
                { n: "5", t: "Pruebas de Estrés", d: "Realizamos simulaciones de fallas de APIs, datos corruptos y altos volúmenes de peticiones para asegurar la estabilidad del sistema." },
                { n: "6", t: "Despliegue y Monitoreo", d: "Activamos los escenarios en producción, capacitamos brevemente a tu equipo y configuramos alertas de error proactivas." }
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
                Analicemos la robustez y arquitectura de nuestros flujos operativos avanzados frente a automatizaciones básicas.
              </p>
            </div>
            
            <div className="m-table-wrapper reveal">
              <table className="m-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Automatización Básica</th>
                    <th className="m-table-beckpro" style={{ borderBottom: "1px solid var(--primary)" }}>BeckPro Developer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: "Estabilidad de flujos", o: "Se rompen ante el más mínimo error de datos", b: "Control de errores avanzado y reintentos automáticos" },
                    { f: "Canales de comunicación", o: "Respuestas rígidas y lentas por correo", b: "Chatbots fluidos con IA en WhatsApp, Slack y Email" },
                    { f: "Inteligencia artificial", o: "Respuestas predefinidas sin sentido real", b: "IA integrada (OpenAI/Gemini) que comprende contexto" },
                    { f: "Monitoreo y Soporte", o: "No sabes si falla hasta que el cliente se queja", b: "Alertas inmediatas en WhatsApp si una API cae" },
                    { f: "Escalabilidad e infraestructura", o: "Limitado a tareas sencillas de una sola app", b: "Ecosistemas multidireccionales conectados a bases de datos" },
                    { f: "Consultoría de procesos", o: "Hacen solo lo que les pides sin aportar estrategia", b: "Ingeniería de procesos que optimiza tus flujos desde la base" }
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
                Resolvemos tus dudas sobre la seguridad, estabilidad y retorno de inversión de la automatización operativa.
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
                <h2 className="m-cta-title">Lleva la eficiencia de tu empresa al siguiente nivel</h2>
                <p className="m-cta-subtitle">
                  Agenda una sesión de diagnóstico estratégico gratuita. Analizaremos tus procesos y te propondremos un plan de automatización e IA viable.
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
