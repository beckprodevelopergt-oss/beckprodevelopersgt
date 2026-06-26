"use client";

import { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Contacto from "../../../components/Contacto";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";

export default function ConsultoriaSoporteClient() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    // Scroll reveal animation observer
    const revealElements = document.querySelectorAll(".cs-microsite .reveal");
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
      q: "¿Qué incluye exactamente el servicio de consultoría tecnológica?",
      a: "Incluye una auditoría técnica completa de tus sistemas actuales, servidores, bases de datos y seguridad de red. Te entregamos un informe detallado con diagnósticos, propuestas de optimización de costos en la nube y un plan paso a paso para mejorar la velocidad, escalabilidad y estabilidad de tus aplicaciones."
    },
    {
      q: "¿Cómo gestionan el soporte técnico prioritario ante emergencias?",
      a: "Para nuestros clientes de mantenimiento y soporte mensual, habilitamos un canal prioritario de comunicación directa (llamadas y chat prioritario) con ingenieros especializados. Ante caídas de producción o fallas graves, intervenimos de forma inmediata según los Acuerdos de Nivel de Servicio (SLA) contratados."
    },
    {
      q: "¿Nos pueden ayudar a migrar nuestros servidores a AWS o Google Cloud?",
      a: "Sí. Somos especialistas en arquitectura cloud y serverless. Diseñamos y ejecutamos el plan de migración completo de tus bases de datos, sistemas y archivos sin pérdida de información, garantizando una transición segura y reduciendo al mínimo el tiempo de inactividad."
    },
    {
      q: "¿Realizan respaldos de seguridad automáticos de nuestra información?",
      a: "Sí. Como parte de nuestras mejores prácticas de soporte, configuramos políticas automatizadas de respaldos diarios para bases de datos e imágenes del sistema. Estos respaldos se almacenan de forma segura y aislada para garantizar que siempre puedas recuperar tu información ante cualquier contingencia."
    },
    {
      q: "¿Ofrecen soporte para sistemas web que no fueron desarrollados por BeckPro?",
      a: "Sí. Realizamos una auditoría de código e infraestructura inicial para evaluar el estado actual del sistema, las dependencias y tecnologías utilizadas. Si el sistema cumple con las directrices mínimas de viabilidad técnica, estructuramos un plan de mantenimiento y mejoras personalizado."
    },
    {
      q: "¿Cómo ayuda la consultoría a reducir mis costos de hosting mensuales?",
      a: "La mayoría de empresas pagan de más por recursos ociosos o bases de datos no optimizadas. Analizamos el tráfico y el consumo real de tu infraestructura para ajustar el tamaño de los servidores al óptimo y reescribimos consultas pesadas, reduciendo la facturación en la nube hasta un 40%."
    }
  ];

  return (
    <>
      <Header />
      <div className="cs-microsite">
        <style dangerouslySetInnerHTML={{ __html: `
          .cs-microsite {
            --primary: #1D4ED8;
            --primary-hover: #3B82F6;
            --primary-glow: rgba(29, 78, 216, 0.12);
            --primary-glow-strong: rgba(29, 78, 216, 0.35);
            --secondary: #1E40AF;
            --dark-bg: #030612;
            --card-bg: rgba(8, 14, 36, 0.45);
            --card-border: rgba(29, 78, 216, 0.18);
            --font-sans: 'Poppins', sans-serif;

            background: radial-gradient(circle at 50% 0%, rgba(29, 78, 216, 0.15), transparent 50%), var(--dark-bg);
            color: #ffffff;
            font-family: var(--font-sans);
            overflow-x: hidden;
            padding-top: 80px;
          }

          .cs-microsite .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
          }

          .cs-microsite .text-gradient {
            background: linear-gradient(135deg, #ffffff 30%, var(--primary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .cs-microsite .bg-glow-radial {
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
          .cs-microsite .m-hero {
            position: relative;
            padding: 30px 0 40px 0;
            display: flex;
            align-items: center;
            overflow: hidden;
          }

          .cs-microsite .m-hero-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 32px;
            align-items: center;
            position: relative;
            z-index: 1;
          }

          .cs-microsite .m-hero-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .cs-microsite .m-breadcrumb {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: #cbd5e1;
            margin-bottom: 12px;
          }

          .cs-microsite .m-breadcrumb a {
            color: #cbd5e1;
            text-decoration: none;
            transition: color 0.2s;
          }

          .cs-microsite .m-breadcrumb a:hover {
            color: var(--primary);
          }

          .cs-microsite .m-breadcrumb-separator {
            color: #475569;
          }

          .cs-microsite .m-badge {
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

          .cs-microsite .m-hero-title {
            font-size: 48px;
            font-weight: 700;
            line-height: 1.15;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
          }

          .cs-microsite .m-hero-subtitle {
            font-size: 16px;
            color: #cbd5e1;
            line-height: 1.5;
            margin-bottom: 24px;
            max-width: 580px;
          }

          .cs-microsite .m-hero-ctas {
            display: flex;
            gap: 16px;
            width: 100%;
          }

          .cs-microsite .m-btn {
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

          .cs-microsite .m-btn-primary {
            background-color: var(--primary);
            color: #ffffff;
            border: 1px solid var(--primary);
            box-shadow: 0 4px 20px var(--primary-glow-strong);
          }

          .cs-microsite .m-btn-primary:hover {
            background-color: var(--primary-hover);
            border-color: var(--primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 8px 30px var(--primary-glow-strong);
          }

          .cs-microsite .m-btn-secondary {
            background-color: rgba(255, 255, 255, 0.03);
            color: #ffffff;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
          }

          .cs-microsite .m-btn-secondary:hover {
            background-color: rgba(255, 255, 255, 0.08);
            border-color: var(--primary);
            transform: translateY(-2px);
          }

          .cs-microsite .m-hero-illustration {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .cs-microsite .m-hero-img-wrapper {
            position: relative;
            width: 100%;
            max-width: 480px;
            animation: float 6s ease-in-out infinite;
            z-index: 1;
          }

          .cs-microsite .m-hero-img-wrapper img {
            width: 100%;
            height: auto;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            background: radial-gradient(circle at center, rgba(255, 255, 255, 0.02), transparent 70%);
            padding: 10px;
            filter: drop-shadow(0 15px 35px rgba(0,0,0,0.6)) drop-shadow(0 0 25px var(--primary-glow-strong));
          }

          .cs-microsite .m-hero-glow {
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
          .cs-microsite .m-section {
            position: relative;
            padding: 70px 0;
          }

          .cs-microsite #servicios.m-section {
            padding-top: 15px;
            padding-bottom: 50px;
          }

          .cs-microsite .m-section-header {
            max-width: 700px;
            margin-bottom: 40px;
          }

          .cs-microsite .m-section-badge {
            color: var(--primary);
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            display: block;
            margin-bottom: 8px;
          }

          .cs-microsite .m-section-title {
            font-size: 34px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 16px;
          }

          .cs-microsite .m-section-desc {
            font-size: 16px;
            color: #cbd5e1;
            line-height: 1.6;
          }

          /* S1: Editorial */
          .cs-microsite .m-editorial-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: flex-start;
          }

          .cs-microsite .m-editorial-left {
            font-size: 26px;
            font-weight: 600;
            line-height: 1.4;
            color: #f8f9fa;
            border-left: 3px solid var(--primary);
            padding-left: 24px;
          }

          .cs-microsite .m-editorial-right {
            font-size: 16px;
            color: #e2e8f0;
            line-height: 1.7;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          /* S2: Beneficios */
          .cs-microsite .m-cards-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .cs-microsite .m-card-premium {
            position: relative;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 32px 28px;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            backdrop-filter: blur(12px);
          }

          .cs-microsite .m-card-premium::before {
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

          .cs-microsite .m-card-premium:hover {
            transform: translateY(-6px);
            background: var(--card-bg);
            border-color: var(--card-border);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          }

          .cs-microsite .m-card-premium:hover::before {
            opacity: 1;
          }

          .cs-microsite .m-card-icon {
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

          .cs-microsite .m-card-premium:hover .m-card-icon {
            background: var(--primary);
            color: #ffffff;
            transform: scale(1.05);
            box-shadow: 0 4px 15px var(--primary-glow-strong);
          }

          .cs-microsite .m-card-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 12px;
          }

          .cs-microsite .m-card-text {
            font-size: 14.5px;
            color: #cbd5e1;
            line-height: 1.6;
          }

          /* S3: Includes */
          .cs-microsite .m-features-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
          }

          .cs-microsite .m-feature-badge-card {
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

          .cs-microsite .m-feature-badge-card:hover {
            background: rgba(255, 255, 255, 0.03);
            border-color: var(--card-border);
            transform: translateY(-2px);
          }

          .cs-microsite .m-feature-check {
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

          .cs-microsite .m-feature-badge-card:hover .m-feature-check {
            background: var(--primary-glow);
            border-color: var(--primary);
          }

          .cs-microsite .m-feature-title {
            font-size: 14.5px;
            font-weight: 600;
            color: #f1f5f9;
          }

          /* S4: Tech */
          .cs-microsite .m-tech-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 16px;
          }

          .cs-microsite .m-tech-card {
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

          .cs-microsite .m-tech-card:hover {
            background: var(--card-bg);
            border-color: var(--card-border);
            transform: scale(1.05);
          }

          .cs-microsite .m-tech-icon {
            width: 40px;
            height: 40px;
            margin-bottom: 12px;
            color: #cbd5e1;
            transition: color 0.3s;
          }

          .cs-microsite .m-tech-card:hover .m-tech-icon {
            color: var(--primary);
          }

          .cs-microsite .m-tech-name {
            font-size: 13.5px;
            font-weight: 600;
            color: #cbd5e1;
            transition: color 0.3s;
          }

          .cs-microsite .m-tech-card:hover .m-tech-name {
            color: #ffffff;
          }

          /* S5: Cases */
          .cs-microsite .m-cases-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .cs-microsite .m-case-card {
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            padding: 32px;
            transition: all 0.3s;
            position: relative;
          }

          .cs-microsite .m-case-card:hover {
            background: rgba(255, 255, 255, 0.03);
            border-color: var(--card-border);
            transform: translateY(-4px);
          }

          .cs-microsite .m-case-tag {
            font-size: 11.5px;
            font-weight: 600;
            text-transform: uppercase;
            color: var(--primary);
            letter-spacing: 1px;
            margin-bottom: 12px;
            display: block;
          }

          .cs-microsite .m-case-title {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 16px;
          }

          .cs-microsite .m-case-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .cs-microsite .m-case-list li {
            position: relative;
            padding-left: 20px;
            margin-bottom: 10px;
            font-size: 14.5px;
            color: #e2e8f0;
            line-height: 1.5;
          }

          .cs-microsite .m-case-list li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--primary);
            font-weight: bold;
          }

          /* S6: Timeline */
          .cs-microsite .m-timeline {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
            padding: 30px 0;
          }

          .cs-microsite .m-timeline::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 40px;
            width: 2px;
            background: linear-gradient(to bottom, var(--primary), var(--secondary));
            opacity: 0.3;
          }

          .cs-microsite .m-timeline-item {
            position: relative;
            padding-left: 90px;
            margin-bottom: 40px;
          }

          .cs-microsite .m-timeline-item:last-child {
            margin-bottom: 0;
          }

          .cs-microsite .m-timeline-number {
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

          .cs-microsite .m-timeline-item:hover .m-timeline-number {
            background: var(--primary);
            color: #ffffff;
            transform: scale(1.1);
          }

          .cs-microsite .m-timeline-content {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.04);
            border-radius: 12px;
            padding: 20px 24px;
            transition: all 0.3s;
          }

          .cs-microsite .m-timeline-item:hover .m-timeline-content {
            background: rgba(255, 255, 255, 0.04);
            border-color: var(--card-border);
          }

          .cs-microsite .m-timeline-title {
            font-size: 19px;
            font-weight: 600;
            margin-bottom: 8px;
          }

          .cs-microsite .m-timeline-text {
            font-size: 14.5px;
            color: #cbd5e1;
            line-height: 1.6;
          }

          /* S7: Table */
          .cs-microsite .m-table-wrapper {
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }

          .cs-microsite .m-table {
            width: 100%;
            border-collapse: collapse;
          }

          .cs-microsite .m-table th, .cs-microsite .m-table td {
            padding: 20px 28px;
            text-align: left;
            border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          }

          .cs-microsite .m-table th {
            background: rgba(255, 255, 255, 0.02);
            font-weight: 700;
            font-size: 15.5px;
            color: #ffffff;
          }

          .cs-microsite .m-table td {
            font-size: 14.5px;
          }

          .cs-microsite .m-table tr:last-child td {
            border-bottom: none;
          }

          .cs-microsite .m-table tr:hover td {
            background: rgba(255, 255, 255, 0.01);
          }

          .cs-microsite .m-table-feature {
            font-weight: 600;
            color: #e2e8f0;
          }

          .cs-microsite .m-table-others {
            color: #cbd5e1;
          }

          .cs-microsite .m-table-beckpro {
            color: #ffffff;
            font-weight: 600;
            background: rgba(255, 255, 255, 0.01);
          }

          .cs-microsite tr:hover .m-table-beckpro {
            background: var(--primary-glow);
          }

          .cs-microsite .m-table-badge-yes {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--primary);
            font-weight: bold;
          }

          .cs-microsite .m-table-badge-no {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #ef4444;
          }

          /* S8: FAQ */
          .cs-microsite .m-faq-list {
            max-width: 800px;
            margin: 0 auto;
          }

          .cs-microsite .m-faq-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.04);
            border-radius: 12px;
            margin-bottom: 14px;
            overflow: hidden;
            transition: all 0.3s;
          }

          .cs-microsite .m-faq-item:hover {
            border-color: var(--card-border);
          }

          .cs-microsite .m-faq-trigger {
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

          .cs-microsite .m-faq-trigger:focus {
            outline: none;
          }

          .cs-microsite .m-faq-trigger span {
            padding-right: 20px;
          }

          .cs-microsite .m-faq-icon {
            flex-shrink: 0;
            width: 20px;
            height: 20px;
            color: var(--primary);
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .cs-microsite .m-faq-item.active .m-faq-icon {
            transform: rotate(180deg);
          }

          .cs-microsite .m-faq-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s;
            padding: 0 20px;
            color: #e2e8f0;
            font-size: 14.5px;
            line-height: 1.6;
          }

          .cs-microsite .m-faq-item.active .m-faq-content {
            max-height: 350px;
            padding-bottom: 20px;
          }

          /* S9: CTA Final */
          .cs-microsite .m-cta-card {
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

          .cs-microsite .m-cta-glow {
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

          .cs-microsite .m-cta-content {
            position: relative;
            z-index: 1;
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .cs-microsite .m-cta-title {
            font-size: 44px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 20px;
          }

          .cs-microsite .m-cta-subtitle {
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

          .cs-microsite .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .cs-microsite .reveal.visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* Responsive */
          @media (max-width: 991px) {
            .cs-microsite .m-hero-grid {
              grid-template-columns: 1fr;
              gap: 40px;
              text-align: center;
            }
            .cs-microsite .m-hero-content {
              align-items: center;
            }
            .cs-microsite .m-hero-title {
              font-size: 44px;
            }
            .cs-microsite .m-editorial-grid {
              grid-template-columns: 1fr;
              gap: 30px;
            }
            .cs-microsite .m-cards-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            .cs-microsite .m-features-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .cs-microsite .m-tech-grid {
              grid-template-columns: repeat(3, 1fr);
            }
            .cs-microsite .m-cases-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            .cs-microsite .m-cta-title {
              font-size: 32px;
            }
          }

          @media (max-width: 767px) {
            .cs-microsite .m-hero {
              padding: 40px 0 80px 0;
            }
            .cs-microsite .m-hero-title {
              font-size: 36px;
            }
            .cs-microsite .m-hero-ctas {
              flex-direction: column;
              width: 100%;
            }
            .cs-microsite .m-btn {
              width: 100%;
            }
            .cs-microsite .m-section {
              padding: 60px 0;
            }
            .cs-microsite .m-section-title {
              font-size: 30px;
            }
            .cs-microsite .m-features-grid {
              grid-template-columns: 1fr;
            }
            .cs-microsite .m-tech-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .cs-microsite .m-timeline::before {
              left: 20px;
            }
            .cs-microsite .m-timeline-item {
              padding-left: 50px;
            }
            .cs-microsite .m-timeline-number {
              left: 0;
              width: 36px;
              height: 36px;
            }
            .cs-microsite .m-table th, .cs-microsite .m-table td {
              padding: 16px;
              font-size: 14px;
            }
            .cs-microsite .m-cta-card {
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
                  <span style={{ color: "var(--primary)" }}>Consultoría y Soporte</span>
                </div>
                
                <span className="m-badge">Soporte Tecnológico Premium</span>
                
                <h1 className="m-hero-title">
                  Consultoría y Soporte <span className="text-gradient">Técnico Avanzado</span> para tu Infraestructura
                </h1>
                
                <p className="m-hero-subtitle">
                  Te acompañamos en la optimización, migración y mantenimiento de tus sistemas en la nube, servidores y bases de datos. Garantiza la estabilidad 24/7 de tu negocio.
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
                  <img src="/assets/consultoria_soporte_hero.png" alt="Consultoría y Soporte Premium BeckPro" />
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
                Garantiza la continuidad operativa de tu negocio con soporte de ingeniería especializada.
              </div>
              <div className="m-editorial-right">
                <p>
                  Una falla crítica en tus servidores o bases de datos puede costar miles de dólares y comprometer la confianza de tus clientes. Actuamos como tu socio tecnológico estratégico, realizando auditorías de infraestructura preventivas y resolviendo incidencias complejas con máxima velocidad.
                </p>
                <p>
                  Desde la planificación de migraciones seguras a la nube (AWS, Google Cloud o Azure) hasta el mantenimiento preventivo y optimización de tus servidores de producción, implementamos arquitecturas redundantes que eliminan caídas y reducen costos.
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
              <h2 className="m-section-title">¿Por qué elegir nuestro soporte avanzado?</h2>
              <p className="m-section-desc">
                Protege el núcleo tecnológico de tu empresa mediante un acompañamiento de ingeniería proactivo e inteligente.
              </p>
            </div>
            
            <div className="m-cards-grid reveal">
              {/* Card 1 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <h3 className="m-card-title">Estabilidad Continua</h3>
                <p className="m-card-text">
                  Monitoreamos activamente tus servidores y bases de datos para prevenir caídas. Garantizamos alta disponibilidad y continuidad en tus operaciones.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="m-card-title">Optimización de Costos</h3>
                <p className="m-card-text">
                  Analizamos tu infraestructura en la nube para identificar recursos ociosos, reduciendo significativamente tu facturación mensual de servidores.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <h3 className="m-card-title">Soporte Técnico Experto</h3>
                <p className="m-card-text">
                  Resuelve dudas técnicas e incidencias críticas directamente con ingenieros de software calificados, sin tiempos de espera ni burocracia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ¿Qué incluye? */}
        <section className="m-section">
          <div className="container">
            <div className="m-section-header reveal">
              <span className="m-section-badge">Servicios Incluidos</span>
              <h2 className="m-section-title">Cobertura tecnológica integral</h2>
              <p className="m-section-desc">
                Implementamos estándares avanzados de ciberseguridad, persistencia y alta disponibilidad para respaldar tus sistemas informáticos.
              </p>
            </div>
            
            <div className="m-features-grid reveal">
              {[
                "Monitoreo de Servidores 24/7",
                "Auditoría de Seguridad y SSL",
                "Migración Cloud (AWS/GCP)",
                "Respaldos Automáticos Diarios",
                "Optimización de Bases de Datos",
                "Soporte de Correo Corporativo",
                "Documentación de Sistemas",
                "Resolución Urgente de Fallas"
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
              <span className="m-section-badge">Infraestructura</span>
              <h2 className="m-section-title">Ecosistema cloud robusto y líder</h2>
              <p className="m-section-desc">
                Operamos y respaldamos tus plataformas bajo los proveedores de infraestructura y bases de datos más estables del mundo.
              </p>
            </div>
            
            <div className="m-tech-grid reveal">
              {[
                { name: "AWS", desc: "Infraestructura Nube", svg: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/> },
                { name: "Google Cloud", desc: "Cómputo en la Nube", svg: <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/> },
                { name: "Firebase", desc: "Servicios Backend", svg: <path d="M16 2L8 8l-3-2L2 19l10 5 10-5L16 2z"/> },
                { name: "Node.js", desc: "Servicios de Cómputo", svg: <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 16.3L6.5 15V9L12 5.7l5.5 3.3v6l-5.5 3.3z"/> },
                { name: "Docker", desc: "Contenedores", svg: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5c-2.48 0-4.5-2.02-4.5-4.5S8.52 7.5 11 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z"/> },
                { name: "GitHub", desc: "Repositorios", svg: <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.08-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.18 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/> },
                { name: "Cloudflare", desc: "Seguridad y DNS", svg: <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/> },
                { name: "Linux", desc: "Sistemas Operativos", svg: <path d="M12 2L2 22l10-3 10 3L12 2zm0 3.5l6.5 13-6.5-2-6.5 2 6.5-13z"/> },
                { name: "Vercel", desc: "Hosting Serverless", svg: <polygon points="12 2 22 22 2 22"></polygon> },
                { name: "JavaScript", desc: "Scripting y APIs", svg: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-2h2v2zm0-4h-2v-6h2v6z"/> }
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
              <span className="m-section-badge">Casos de Éxito</span>
              <h2 className="m-section-title">¿Cómo ayudamos a las empresas?</h2>
              <p className="m-section-desc">
                Resolvemos problemáticas reales de infraestructura y optimización digital en múltiples verticales de negocio.
              </p>
            </div>
            
            <div className="m-cases-grid reveal">
              {/* Case 1 */}
              <div className="m-case-card">
                <span className="m-case-tag">Pymes & Crecimiento</span>
                <h3 className="m-case-title">Soporte e Infraestructura Cloud</h3>
                <ul className="m-case-list">
                  <li>Migración segura y planificada hacia la nube</li>
                  <li>Configuración de servidores altamente redundantes</li>
                  <li>Implementación de balanceadores de carga eficientes</li>
                  <li>Respaldos automáticos de bases de datos fuera de red</li>
                </ul>
              </div>
              
              {/* Case 2 */}
              <div className="m-case-card">
                <span className="m-case-tag">Software & Código</span>
                <h3 className="m-case-title">Consultoría y Auditoría de Sistemas</h3>
                <ul className="m-case-list">
                  <li>Revisión profunda de seguridad de código y dependencias</li>
                  <li>Optimización y afinación de consultas de bases de datos</li>
                  <li>Configuración de pipelines automatizados de CI/CD</li>
                  <li>Documentación técnica e implementación de flujos Git</li>
                </ul>
              </div>
              
              {/* Case 3 */}
              <div className="m-case-card">
                <span className="m-case-tag">Operaciones Diarias</span>
                <h3 className="m-case-title">Mantenimiento Preventivo Continuo</h3>
                <ul className="m-case-list">
                  <li>Actualización periódica de dependencias y parches</li>
                  <li>Monitoreo y alerta en tiempo real ante caídas del servidor</li>
                  <li>Optimización y depuración de bases de datos y logs</li>
                  <li>Soporte de ingeniería inmediato ante incidentes graves</li>
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
                { n: "1", t: "Diagnóstico Inicial", d: "Auditoría inicial de tus servidores, bases de datos y herramientas informáticas actuales para identificar vulnerabilidades y lentitudes." },
                { n: "2", t: "Estrategia de Redundancia", d: "Diseño de la nueva arquitectura de servidores y bases de datos con redundancia y planes de recuperación ante fallos." },
                { n: "3", t: "Plan de Migración", d: "Establecemos un calendario detallado de tareas para mover tus plataformas a la nube minimizando tiempos de desconexión." },
                { n: "4", t: "Implementación y Ajustes", d: "Reconfiguración de servidores, bases de datos y políticas de seguridad cloud. Despliegue de monitores automatizados." },
                { n: "5", t: "Pruebas de Caída (Failover)", d: "Simulamos incidentes críticos para verificar que los sistemas de respaldo y redundancia actúen de forma inmediata." },
                { n: "6", t: "Soporte Técnico 24/7", d: "Puesta en marcha de tu canal prioritario de soporte directo con nuestros ingenieros y reporte periódico de métricas." }
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
                Comparemos la diferencia técnica entre el soporte convencional de TI frente a la ingeniería avanzada de BeckPro.
              </p>
            </div>
            
            <div className="m-table-wrapper reveal">
              <table className="m-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Soporte Convencional (Servicios TI Comunes)</th>
                    <th className="m-table-beckpro" style={{ borderBottom: "1px solid var(--primary)" }}>Ingeniería BeckPro</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: "Tiempo de respuesta", o: "Lento, mediante ticket genérico o contestadora", b: "Línea directa prioritaria de WhatsApp con ingenieros" },
                    { f: "Auditoría de fallas", o: "Superficial, solo resuelven el síntoma aparente", b: "Análisis técnico profundo de causa raíz y optimización" },
                    { f: "Prevención de caídas", o: "Reactiva: actúan solo después de que el sistema cae", b: "Proactiva: monitoreo constante de latencia y uso" },
                    { f: "Costos en la nube", o: "Altos por falta de monitoreo y recursos ociosos", b: "Ajuste continuo de capacidad para reducir gastos" },
                    { f: "Documentación técnica", o: "Nula o desactualizada; dependes de un técnico", b: "Diagramas de arquitectura y bitácoras de cambios al día" },
                    { f: "Políticas de seguridad", o: "Básicas en hosting tradicionales compartidos", b: "Cifrados SSL avanzados, RBAC y firewalls Cloud" }
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
                Resolvemos tus dudas principales sobre nuestro servicio de consultoría y soporte avanzado de infraestructura.
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
                <h2 className="m-cta-title">¿Listo para asegurar la estabilidad de tu plataforma?</h2>
                <p className="m-cta-subtitle">
                  Obtén una sesión de diagnóstico técnico de tu infraestructura 100% gratuita y sin compromisos. Protege tu corazón digital.
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
