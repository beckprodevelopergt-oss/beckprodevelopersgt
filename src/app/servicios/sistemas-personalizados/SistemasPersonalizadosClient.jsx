"use client";

import { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Contacto from "../../../components/Contacto";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";

export default function SistemasPersonalizadosClient() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    // Scroll reveal animation observer
    const revealElements = document.querySelectorAll(".sp-microsite .reveal");
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
      q: "¿Qué ventajas tiene un software a la medida frente a uno comercial (SaaS)?",
      a: "Un software a la medida se diseña en torno a las reglas y necesidades particulares de tu negocio, eliminando costos por funciones innecesarias. Además, eres el dueño absoluto del código, lo que elimina suscripciones de por vida y te brinda flexibilidad ilimitada para escalar y adaptarte en el futuro."
    },
    {
      q: "¿Pueden integrar el sistema con nuestras herramientas actuales?",
      a: "Sí. Podemos conectar tu sistema personalizado con cualquier plataforma externa que cuente con una API abierta, incluyendo CRMs existentes, pasarelas de pago locales, servicios de mensajería (WhatsApp/SMS), sistemas contables y bases de datos heredadas."
    },
    {
      q: "¿Cómo garantizan la seguridad de la información de la empresa?",
      a: "Implementamos protocolos de seguridad avanzados que incluyen cifrado SSL, autenticación segura de usuarios y control de acceso granular por roles (RBAC). De este modo, garantizamos que los colaboradores solo tengan acceso a la información que les compete operar."
    },
    {
      q: "¿El sistema se puede utilizar desde teléfonos móviles y tablets?",
      a: "Totalmente. Diseñamos e implementamos interfaces 100% responsivas y optimizadas. Esto permite a tu equipo de campo, ventas o administración operar el sistema de forma fluida y cómoda desde smartphones, tablets o laptops."
    },
    {
      q: "¿Quién es el propietario final del software desarrollado?",
      a: "Una vez completado y liquidado el proyecto, el código fuente y toda la propiedad intelectual te pertenecen al 100%. Te transferimos los repositorios de código y accesos a los servidores para que tengas control total de tu activo digital sin dependencias contractuales."
    },
    {
      q: "¿Cuánto tiempo toma desarrollar un sistema web personalizado?",
      a: "El desarrollo de un sistema a medida toma típicamente entre 5 y 8 semanas, dependiendo del alcance, la complejidad del modelo de datos y las integraciones solicitadas. Estructuramos el proyecto con entregas y revisiones semanales para asegurar total transparencia."
    }
  ];

  return (
    <>
      <Header />
      <div className="sp-microsite">
        <style dangerouslySetInnerHTML={{ __html: `
          .sp-microsite {
            --primary: #7C3AED;
            --primary-hover: #8B5CF6;
            --primary-glow: rgba(124, 58, 237, 0.12);
            --primary-glow-strong: rgba(124, 58, 237, 0.35);
            --secondary: #6D28D9;
            --dark-bg: #030107;
            --card-bg: rgba(16, 8, 32, 0.45);
            --card-border: rgba(124, 58, 237, 0.18);
            --font-sans: 'Poppins', sans-serif;

            background: radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.15), transparent 50%), var(--dark-bg);
            color: #ffffff;
            font-family: var(--font-sans);
            overflow-x: hidden;
            padding-top: 80px;
          }

          .sp-microsite .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
          }

          .sp-microsite .text-gradient {
            background: linear-gradient(135deg, #ffffff 30%, var(--primary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .sp-microsite .bg-glow-radial {
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
          .sp-microsite .m-hero {
            position: relative;
            padding: 30px 0 40px 0;
            display: flex;
            align-items: center;
            overflow: hidden;
          }

          .sp-microsite .m-hero-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 32px;
            align-items: center;
            position: relative;
            z-index: 1;
          }

          .sp-microsite .m-hero-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .sp-microsite .m-breadcrumb {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: #cbd5e1;
            margin-bottom: 12px;
          }

          .sp-microsite .m-breadcrumb a {
            color: #cbd5e1;
            text-decoration: none;
            transition: color 0.2s;
          }

          .sp-microsite .m-breadcrumb a:hover {
            color: var(--primary);
          }

          .sp-microsite .m-breadcrumb-separator {
            color: #475569;
          }

          .sp-microsite .m-badge {
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

          .sp-microsite .m-hero-title {
            font-size: 48px;
            font-weight: 700;
            line-height: 1.15;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
          }

          .sp-microsite .m-hero-subtitle {
            font-size: 16px;
            color: #cbd5e1;
            line-height: 1.5;
            margin-bottom: 24px;
            max-width: 580px;
          }

          .sp-microsite .m-hero-ctas {
            display: flex;
            gap: 16px;
            width: 100%;
          }

          .sp-microsite .m-btn {
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

          .sp-microsite .m-btn-primary {
            background-color: var(--primary);
            color: #ffffff;
            border: 1px solid var(--primary);
            box-shadow: 0 4px 20px var(--primary-glow-strong);
          }

          .sp-microsite .m-btn-primary:hover {
            background-color: var(--primary-hover);
            border-color: var(--primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 8px 30px var(--primary-glow-strong);
          }

          .sp-microsite .m-btn-secondary {
            background-color: rgba(255, 255, 255, 0.03);
            color: #ffffff;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
          }

          .sp-microsite .m-btn-secondary:hover {
            background-color: rgba(255, 255, 255, 0.08);
            border-color: var(--primary);
            transform: translateY(-2px);
          }

          .sp-microsite .m-hero-illustration {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .sp-microsite .m-hero-img-wrapper {
            position: relative;
            width: 100%;
            max-width: 480px;
            animation: float 6s ease-in-out infinite;
            z-index: 1;
          }

          .sp-microsite .m-hero-img-wrapper img {
            width: 100%;
            height: auto;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            background: radial-gradient(circle at center, rgba(255, 255, 255, 0.02), transparent 70%);
            padding: 10px;
            filter: drop-shadow(0 15px 35px rgba(0,0,0,0.6)) drop-shadow(0 0 25px var(--primary-glow-strong));
          }

          .sp-microsite .m-hero-glow {
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
          .sp-microsite .m-section {
            position: relative;
            padding: 70px 0;
          }

          .sp-microsite #servicios.m-section {
            padding-top: 15px;
            padding-bottom: 50px;
          }

          .sp-microsite .m-section-header {
            max-width: 700px;
            margin-bottom: 40px;
          }

          .sp-microsite .m-section-badge {
            color: var(--primary);
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            display: block;
            margin-bottom: 8px;
          }

          .sp-microsite .m-section-title {
            font-size: 34px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 16px;
          }

          .sp-microsite .m-section-desc {
            font-size: 16px;
            color: #cbd5e1;
            line-height: 1.6;
          }

          /* S1: Editorial */
          .sp-microsite .m-editorial-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: flex-start;
          }

          .sp-microsite .m-editorial-left {
            font-size: 28px;
            font-weight: 600;
            line-height: 1.4;
            color: #f8f9fa;
            border-left: 3px solid var(--primary);
            padding-left: 24px;
          }

          .sp-microsite .m-editorial-right {
            font-size: 17px;
            color: #a8b2d1;
            line-height: 1.8;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          /* S2: Beneficios */
          .sp-microsite .m-cards-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .sp-microsite .m-card-premium {
            position: relative;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 40px 32px;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            backdrop-filter: blur(12px);
          }

          .sp-microsite .m-card-premium::before {
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

          .sp-microsite .m-card-premium:hover {
            transform: translateY(-8px);
            background: var(--card-bg);
            border-color: var(--card-border);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          }

          .sp-microsite .m-card-premium:hover::before {
            opacity: 1;
          }

          .sp-microsite .m-card-icon {
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

          .sp-microsite .m-card-premium:hover .m-card-icon {
            background: var(--primary);
            color: #ffffff;
            transform: scale(1.05);
            box-shadow: 0 4px 15px var(--primary-glow-strong);
          }

          .sp-microsite .m-card-title {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 16px;
          }

          .sp-microsite .m-card-text {
            font-size: 15px;
            color: #8892b0;
            line-height: 1.6;
          }

          /* S3: Includes */
          .sp-microsite .m-features-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .sp-microsite .m-feature-badge-card {
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

          .sp-microsite .m-feature-badge-card:hover {
            background: rgba(255, 255, 255, 0.03);
            border-color: var(--card-border);
            transform: translateY(-2px);
          }

          .sp-microsite .m-feature-check {
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

          .sp-microsite .m-feature-badge-card:hover .m-feature-check {
            background: var(--primary-glow);
            border-color: var(--primary);
          }

          .sp-microsite .m-feature-title {
            font-size: 15px;
            font-weight: 600;
            color: #e2e8f0;
          }

          /* S4: Tech */
          .sp-microsite .m-tech-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 20px;
          }

          .sp-microsite .m-tech-card {
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

          .sp-microsite .m-tech-card:hover {
            background: var(--card-bg);
            border-color: var(--card-border);
            transform: scale(1.05);
          }

          .sp-microsite .m-tech-icon {
            width: 48px;
            height: 48px;
            margin-bottom: 16px;
            color: #8892b0;
            transition: color 0.3s;
          }

          .sp-microsite .m-tech-card:hover .m-tech-icon {
            color: var(--primary);
          }

          .sp-microsite .m-tech-name {
            font-size: 14px;
            font-weight: 600;
            color: #8892b0;
            transition: color 0.3s;
          }

          .sp-microsite .m-tech-card:hover .m-tech-name {
            color: #ffffff;
          }

          /* S5: Cases */
          .sp-microsite .m-cases-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .sp-microsite .m-case-card {
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            padding: 40px;
            transition: all 0.3s;
            position: relative;
          }

          .sp-microsite .m-case-card:hover {
            background: rgba(255, 255, 255, 0.03);
            border-color: var(--card-border);
            transform: translateY(-4px);
          }

          .sp-microsite .m-case-tag {
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            color: var(--primary);
            letter-spacing: 1px;
            margin-bottom: 16px;
            display: block;
          }

          .sp-microsite .m-case-title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
          }

          .sp-microsite .m-case-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .sp-microsite .m-case-list li {
            position: relative;
            padding-left: 24px;
            margin-bottom: 12px;
            font-size: 15px;
            color: #a8b2d1;
            line-height: 1.5;
          }

          .sp-microsite .m-case-list li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--primary);
            font-weight: bold;
          }

          /* S6: Timeline */
          .sp-microsite .m-timeline {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 0;
          }

          .sp-microsite .m-timeline::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 40px;
            width: 2px;
            background: linear-gradient(to bottom, var(--primary), var(--secondary));
            opacity: 0.3;
          }

          .sp-microsite .m-timeline-item {
            position: relative;
            padding-left: 90px;
            margin-bottom: 50px;
          }

          .sp-microsite .m-timeline-item:last-child {
            margin-bottom: 0;
          }

          .sp-microsite .m-timeline-number {
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

          .sp-microsite .m-timeline-item:hover .m-timeline-number {
            background: var(--primary);
            color: #ffffff;
            transform: scale(1.1);
          }

          .sp-microsite .m-timeline-content {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.04);
            border-radius: 12px;
            padding: 24px 30px;
            transition: all 0.3s;
          }

          .sp-microsite .m-timeline-item:hover .m-timeline-content {
            background: rgba(255, 255, 255, 0.04);
            border-color: var(--card-border);
          }

          .sp-microsite .m-timeline-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 10px;
          }

          .sp-microsite .m-timeline-text {
            font-size: 15px;
            color: #8892b0;
            line-height: 1.6;
          }

          /* S7: Table */
          .sp-microsite .m-table-wrapper {
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }

          .sp-microsite .m-table {
            width: 100%;
            border-collapse: collapse;
          }

          .sp-microsite .m-table th, .sp-microsite .m-table td {
            padding: 24px 32px;
            text-align: left;
            border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          }

          .sp-microsite .m-table th {
            background: rgba(255, 255, 255, 0.02);
            font-weight: 700;
            font-size: 16px;
            color: #ffffff;
          }

          .sp-microsite .m-table td {
            font-size: 15px;
          }

          .sp-microsite .m-table tr:last-child td {
            border-bottom: none;
          }

          .sp-microsite .m-table tr:hover td {
            background: rgba(255, 255, 255, 0.01);
          }

          .sp-microsite .m-table-feature {
            font-weight: 600;
            color: #e2e8f0;
          }

          .sp-microsite .m-table-others {
            color: #8892b0;
          }

          .sp-microsite .m-table-beckpro {
            color: #ffffff;
            font-weight: 600;
            background: rgba(255, 255, 255, 0.01);
          }

          .sp-microsite tr:hover .m-table-beckpro {
            background: var(--primary-glow);
          }

          .sp-microsite .m-table-badge-yes {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--primary);
            font-weight: bold;
          }

          .sp-microsite .m-table-badge-no {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #ef4444;
          }

          /* S8: FAQ */
          .sp-microsite .m-faq-list {
            max-width: 800px;
            margin: 0 auto;
          }

          .sp-microsite .m-faq-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.04);
            border-radius: 12px;
            margin-bottom: 16px;
            overflow: hidden;
            transition: all 0.3s;
          }

          .sp-microsite .m-faq-item:hover {
            border-color: var(--card-border);
          }

          .sp-microsite .m-faq-trigger {
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

          .sp-microsite .m-faq-trigger:focus {
            outline: none;
          }

          .sp-microsite .m-faq-trigger span {
            padding-right: 20px;
          }

          .sp-microsite .m-faq-icon {
            flex-shrink: 0;
            width: 20px;
            height: 20px;
            color: var(--primary);
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .sp-microsite .m-faq-item.active .m-faq-icon {
            transform: rotate(180deg);
          }

          .sp-microsite .m-faq-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s;
            padding: 0 24px;
            color: #a8b2d1;
            font-size: 15px;
            line-height: 1.6;
          }

          .sp-microsite .m-faq-item.active .m-faq-content {
            max-height: 350px;
            padding-bottom: 24px;
          }

          /* S9: CTA Final */
          .sp-microsite .m-cta-card {
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

          .sp-microsite .m-cta-glow {
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

          .sp-microsite .m-cta-content {
            position: relative;
            z-index: 1;
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .sp-microsite .m-cta-title {
            font-size: 44px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 20px;
          }

          .sp-microsite .m-cta-subtitle {
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

          .sp-microsite .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .sp-microsite .reveal.visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* Responsive */
          @media (max-width: 991px) {
            .sp-microsite .m-hero-grid {
              grid-template-columns: 1fr;
              gap: 40px;
              text-align: center;
            }
            .sp-microsite .m-hero-content {
              align-items: center;
            }
            .sp-microsite .m-hero-title {
              font-size: 44px;
            }
            .sp-microsite .m-editorial-grid {
              grid-template-columns: 1fr;
              gap: 30px;
            }
            .sp-microsite .m-cards-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            .sp-microsite .m-features-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .sp-microsite .m-tech-grid {
              grid-template-columns: repeat(3, 1fr);
            }
            .sp-microsite .m-cases-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            .sp-microsite .m-cta-title {
              font-size: 32px;
            }
          }

          @media (max-width: 767px) {
            .sp-microsite .m-hero {
              padding: 40px 0 80px 0;
            }
            .sp-microsite .m-hero-title {
              font-size: 36px;
            }
            .sp-microsite .m-hero-ctas {
              flex-direction: column;
              width: 100%;
            }
            .sp-microsite .m-btn {
              width: 100%;
            }
            .sp-microsite .m-section {
              padding: 60px 0;
            }
            .sp-microsite .m-section-title {
              font-size: 30px;
            }
            .sp-microsite .m-features-grid {
              grid-template-columns: 1fr;
            }
            .sp-microsite .m-tech-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .sp-microsite .m-timeline::before {
              left: 20px;
            }
            .sp-microsite .m-timeline-item {
              padding-left: 50px;
            }
            .sp-microsite .m-timeline-number {
              left: 0;
              width: 36px;
              height: 36px;
            }
            .sp-microsite .m-table th, .sp-microsite .m-table td {
              padding: 16px;
              font-size: 14px;
            }
            .sp-microsite .m-cta-card {
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
                  <span style={{ color: "var(--primary)" }}>Sistemas Personalizados</span>
                </div>
                
                <span className="m-badge">Software a Medida Premium</span>
                
                <h1 className="m-hero-title">
                  Sistemas Web <span className="text-gradient">a la Medida</span> de tus Procesos y Operaciones
                </h1>
                
                <p className="m-hero-subtitle">
                  Desarrollamos plataformas internas robustas, seguras y escalables para automatizar tu operación. Control de inventarios, bases de datos y herramientas de gestión empresarial.
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
                  <img src="/assets/sistemas_personalizados_hero.png" alt="Sistemas Personalizados Premium BeckPro" />
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
                Digitaliza y escala la operación de tu negocio con software diseñado para tus necesidades.
              </div>
              <div className="m-editorial-right">
                <p>
                  Las herramientas genéricas obligan a adaptar tus valiosos procesos a su estructura rígida. Nosotros hacemos lo contrario: construimos soluciones de software personalizadas que se adaptan exactamente a tus flujos de trabajo tradicionales, eliminando cuellos de botella e ineficiencias.
                </p>
                <p>
                  Diseñamos arquitecturas en la nube altamente escalables con Next.js y React para el panel de usuario, integrando bases de datos robustas que procesan información al instante. Brinda a tu equipo la herramienta de control y automatización que necesita para crecer de forma ordenada.
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
              <h2 className="m-section-title">¿Por qué elegir un sistema a medida?</h2>
              <p className="m-section-desc">
                Logra la máxima eficiencia operativa con un sistema tecnológico desarrollado exclusivamente para tu estructura organizativa.
              </p>
            </div>
            
            <div className="m-cards-grid reveal">
              {/* Card 1 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="m-card-title">Automatización Operativa</h3>
                <p className="m-card-text">
                  Elimina tareas manuales y archivos de Excel propensos a errores. Tus procesos internos fluirán de forma automática, ahorrando cientos de horas.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"></path>
                  </svg>
                </div>
                <h3 className="m-card-title">Bases de Datos Robustas</h3>
                <p className="m-card-text">
                  Almacena, filtra y visualiza tu información comercial con velocidad extrema. Mantén los registros centralizados, organizados y siempre disponibles.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h3 className="m-card-title">Seguridad y Control</h3>
                <p className="m-card-text">
                  Define roles de usuario, accesos restringidos y bitácoras de auditoría en tiempo real. Tu información estará resguardada bajo estándares cifrados modernos.
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
              <h2 className="m-section-title">Ingeniería de software de nivel corporativo</h2>
              <p className="m-section-desc">
                Dotamos a tu plataforma con las tecnologías de persistencia de datos y lógica transaccional necesarias para garantizar estabilidad continua.
              </p>
            </div>
            
            <div className="m-features-grid reveal">
              {[
                "Bases de Datos en Tiempo Real",
                "Control de Roles y Permisos",
                "Generador de Reportes PDF/Excel",
                "Panel Administrativo UI/UX",
                "Integración de APIs de Terceros",
                "Seguridad de Datos y SSL",
                "Arquitectura Cloud Serverless",
                "Diseño Adaptable (Mobile/Tablet)"
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
              <h2 className="m-section-title">Stack robusto e innovador</h2>
              <p className="m-section-desc">
                Utilizamos tecnologías de punta para garantizar que el backend y el almacenamiento del sistema operen sin fricción alguna.
              </p>
            </div>
            
            <div className="m-tech-grid reveal">
              {[
                { name: "Next.js", desc: "Framework React", svg: <path d="M12 2L2 22h20L12 2zm0 4l7.5 13.5h-15L12 6z"/> },
                { name: "React", desc: "Biblioteca UI", svg: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/> },
                { name: "Firebase", desc: "Base de Datos", svg: <path d="M16 2L8 8l-3-2L2 19l10 5 10-5L16 2z"/> },
                { name: "Node.js", desc: "Backend API", svg: <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 16.3L6.5 15V9L12 5.7l5.5 3.3v6l-5.5 3.3z"/> },
                { name: "PostgreSQL", desc: "BD Relacional", svg: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5c-2.48 0-4.5-2.02-4.5-4.5S8.52 7.5 11 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z"/> },
                { name: "GitHub", desc: "Repositorios", svg: <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.08-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.18 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/> },
                { name: "Cloudflare", desc: "Seguridad & CDN", svg: <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/> },
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
              <h2 className="m-section-title">¿Qué sistemas desarrollamos?</h2>
              <p className="m-section-desc">
                Nuestros desarrollos a medida cubren múltiples necesidades operativas y administrativas en distintas industrias.
              </p>
            </div>
            
            <div className="m-cases-grid reveal">
              {/* Case 1 */}
              <div className="m-case-card">
                <span className="m-case-tag">Operaciones & Stock</span>
                <h3 className="m-case-title">Sistemas de Inventario y Despacho</h3>
                <ul className="m-case-list">
                  <li>Control de stock multi-bodega en tiempo real</li>
                  <li>Registro detallado de entradas y salidas de mercancía</li>
                  <li>Alertas automáticas de inventario por debajo del mínimo</li>
                  <li>Reportes e informes automatizados de valoración de stock</li>
                </ul>
              </div>
              
              {/* Case 2 */}
              <div className="m-case-card">
                <span className="m-case-tag">Servicios & Clientes</span>
                <h3 className="m-case-title">Sistemas de Reservas y Agendamiento</h3>
                <ul className="m-case-list">
                  <li>Calendarios interactivos en tiempo real para clientes</li>
                  <li>Asignación de recursos y personal de forma inteligente</li>
                  <li>Notificaciones y recordatorios automatizados (WhatsApp/Email)</li>
                  <li>Pasarela integrada para el cobro anticipado de citas</li>
                </ul>
              </div>
              
              {/* Case 3 */}
              <div className="m-case-card">
                <span className="m-case-tag">Administración & Ventas</span>
                <h3 className="m-case-title">Facturación y Gestión Administrativa</h3>
                <ul className="m-case-list">
                  <li>Generación automatizada de cotizaciones y facturas digitales</li>
                  <li>Tableros de analítica visual con gráficos interactivos</li>
                  <li>Gestión y control de cuentas por cobrar y por pagar</li>
                  <li>Conexión o integración con sistemas contables existentes</li>
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
                { n: "1", t: "Descubrimiento", d: "Reunión técnica inicial para mapear tus flujos de trabajo actuales, cuellos de botella y requerimientos específicos del software." },
                { n: "2", t: "Estructura de Datos", d: "Diseño del modelado de la base de datos, flujos de transacciones y definición de los roles de usuario que interactuarán." },
                { n: "3", t: "Diseño de Interfaz (UI/UX)", d: "Diseñamos un panel de control (Dashboard) limpio, intuitivo y estructurado para facilitar la visualización y edición de registros." },
                { n: "4", t: "Desarrollo del Backend", d: "Programación robusta de la lógica del sistema en Node.js y React. Integración de bases de datos relacionales y APIs seguras." },
                { n: "5", t: "Pruebas de Carga", d: "Pruebas rigurosas de volumen de datos, validaciones de seguridad frente a vulnerabilidades y optimizaciones de consultas SQL." },
                { n: "6", t: "Puesta en Marcha y Soporte", d: "Despliegue oficial en servidores en la nube seguros y capacitación inicial a tu equipo. Soporte directo post-lanzamiento." }
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
                Evaluemos la diferencia técnica entre software comercial enlatado frente a un sistema a la medida de BeckPro.
              </p>
            </div>
            
            <div className="m-table-wrapper reveal">
              <table className="m-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Sistemas Enlatados (SaaS Genérico)</th>
                    <th className="m-table-beckpro" style={{ borderBottom: "1px solid var(--primary)" }}>Sistemas BeckPro</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: "Adaptación al negocio", o: "Debes adaptar tu flujo a una plantilla prefabricada", b: "El software se adapta 100% a tus procesos actuales" },
                    { f: "Velocidad de procesamiento", o: "Lenta al filtrar o buscar en bases de datos grandes", b: "Consultas indexadas instantáneas con Next.js y React" },
                    { f: "Escalabilidad futura", o: "Muy limitada; no permite programar módulos nuevos", b: "Arquitectura totalmente modular y expandible" },
                    { f: "Control de accesos", o: "Básico o poco configurable para roles de colaboradores", b: "Roles granulares (RBAC) y registro de auditorías" },
                    { f: "Propiedad del software", o: "Pago de licencias mensuales obligatorias de por vida", b: "Propiedad absoluta del código fuente sin alquileres" },
                    { f: "Soporte y Mantenimiento", o: "Mediante correos masivos con días de espera", b: "Soporte prioritario y contacto directo de ingeniería" }
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
                Resolvemos tus dudas principales sobre nuestro desarrollo de sistemas web y software a la medida.
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
                <h2 className="m-cta-title">¿Listo para digitalizar y automatizar tus operaciones?</h2>
                <p className="m-cta-subtitle">
                  Obtén una sesión de diagnóstico técnico y estratégico 100% gratuita para tu proyecto de software a medida. Sin compromiso.
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
