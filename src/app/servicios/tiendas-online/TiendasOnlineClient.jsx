"use client";

import { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Contacto from "../../../components/Contacto";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";

export default function TiendasOnlineClient() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    // Scroll reveal animation observer
    const revealElements = document.querySelectorAll(".to-microsite .reveal");
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
      q: "¿Qué pasarelas de pago puedo integrar en mi tienda online?",
      a: "Podemos integrar cualquier pasarela de pago local o internacional, incluyendo Stripe, PayPal, Wompi, NeoPay, Visa, Mastercard, y métodos de pago contra entrega o transferencia bancaria directa. Todas las transacciones cuentan con cifrado de seguridad SSL."
    },
    {
      q: "¿Cómo gestiono los pedidos y el inventario?",
      a: "Te entregamos un panel administrativo (CMS) a la medida. Desde allí podrás ver el estado de cada pedido en tiempo real, actualizar niveles de stock, agregar o modificar productos de manera sencilla y recibir notificaciones automatizadas cuando se realice una venta."
    },
    {
      q: "¿Tendré que pagar comisiones por las ventas que realice?",
      a: "No. A diferencia de Shopify u otras plataformas de suscripción mensual, con BeckPro tu tienda online es 100% de tu propiedad y no cobramos ninguna comisión sobre tus ventas. Solo aplican las comisiones estándar de procesamiento que cobre la pasarela de pago que elijas."
    },
    {
      q: "¿Es segura la tienda para los datos de mis clientes?",
      a: "Totalmente. Implementamos estándares de seguridad modernos mediante desarrollo serverless en Next.js y certificados de seguridad SSL de nivel bancario. Los datos de pago sensibles nunca se almacenan en nuestro servidor, sino que se procesan directamente por las pasarelas autorizadas."
    },
    {
      q: "¿Cómo se gestionan los envíos a domicilio?",
      a: "Configuramos tarifas de envío personalizadas: fijas, variables por zonas o departamento, o envío gratuito a partir de cierto monto de compra. También es posible integrar APIs de servicios logísticos para cotizar el envío en tiempo real y guiar el despacho de forma automática."
    },
    {
      q: "¿Cuánto tiempo toma tener lista la tienda online?",
      a: "El desarrollo de una tienda online premium toma entre 4 y 6 semanas. Esto incluye el diseño UI/UX personalizado, la carga y configuración del catálogo inicial, la integración de pasarelas de pago y pruebas exhaustivas antes de la puesta en marcha oficial."
    }
  ];

  return (
    <>
      <Header />
      <div className="to-microsite">
        <style dangerouslySetInnerHTML={{ __html: `
          .to-microsite {
            --primary: #0D9488;
            --primary-hover: #14B8A6;
            --primary-glow: rgba(13, 148, 136, 0.12);
            --primary-glow-strong: rgba(13, 148, 136, 0.35);
            --secondary: #0F766E;
            --dark-bg: #020605;
            --card-bg: rgba(6, 22, 20, 0.45);
            --card-border: rgba(13, 148, 136, 0.18);
            --font-sans: 'Poppins', sans-serif;

            background: radial-gradient(circle at 50% 0%, rgba(13, 148, 136, 0.15), transparent 50%), var(--dark-bg);
            color: #ffffff;
            font-family: var(--font-sans);
            overflow-x: hidden;
            padding-top: 80px;
          }

          .to-microsite .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
          }

          .to-microsite .text-gradient {
            background: linear-gradient(135deg, #ffffff 30%, var(--primary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .to-microsite .bg-glow-radial {
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
          .to-microsite .m-hero {
            position: relative;
            padding: 30px 0 40px 0;
            display: flex;
            align-items: center;
            overflow: hidden;
          }

          .to-microsite .m-hero-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 32px;
            align-items: center;
            position: relative;
            z-index: 1;
          }

          .to-microsite .m-hero-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .to-microsite .m-breadcrumb {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: #cbd5e1;
            margin-bottom: 12px;
          }

          .to-microsite .m-breadcrumb a {
            color: #cbd5e1;
            text-decoration: none;
            transition: color 0.2s;
          }

          .to-microsite .m-breadcrumb a:hover {
            color: var(--primary);
          }

          .to-microsite .m-breadcrumb-separator {
            color: #475569;
          }

          .to-microsite .m-badge {
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

          .to-microsite .m-hero-title {
            font-size: 48px;
            font-weight: 700;
            line-height: 1.15;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
          }

          .to-microsite .m-hero-subtitle {
            font-size: 16px;
            color: #cbd5e1;
            line-height: 1.5;
            margin-bottom: 24px;
            max-width: 580px;
          }

          .to-microsite .m-hero-ctas {
            display: flex;
            gap: 16px;
            width: 100%;
          }

          .to-microsite .m-btn {
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

          .to-microsite .m-btn-primary {
            background-color: var(--primary);
            color: #ffffff;
            border: 1px solid var(--primary);
            box-shadow: 0 4px 20px var(--primary-glow-strong);
          }

          .to-microsite .m-btn-primary:hover {
            background-color: var(--primary-hover);
            border-color: var(--primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 8px 30px var(--primary-glow-strong);
          }

          .to-microsite .m-btn-secondary {
            background-color: rgba(255, 255, 255, 0.03);
            color: #ffffff;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
          }

          .to-microsite .m-btn-secondary:hover {
            background-color: rgba(255, 255, 255, 0.08);
            border-color: var(--primary);
            transform: translateY(-2px);
          }

          .to-microsite .m-hero-illustration {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .to-microsite .m-hero-img-wrapper {
            position: relative;
            width: 100%;
            max-width: 480px;
            animation: float 6s ease-in-out infinite;
            z-index: 1;
          }

          .to-microsite .m-hero-img-wrapper img {
            width: 100%;
            height: auto;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            background: radial-gradient(circle at center, rgba(255, 255, 255, 0.02), transparent 70%);
            padding: 10px;
            filter: drop-shadow(0 15px 35px rgba(0,0,0,0.6)) drop-shadow(0 0 25px var(--primary-glow-strong));
          }

          .to-microsite .m-hero-glow {
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
          .to-microsite .m-section {
            position: relative;
            padding: 70px 0;
          }

          .to-microsite #servicios.m-section {
            padding-top: 15px;
            padding-bottom: 50px;
          }

          .to-microsite .m-section-header {
            max-width: 700px;
            margin-bottom: 40px;
          }

          .to-microsite .m-section-badge {
            color: var(--primary);
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            display: block;
            margin-bottom: 8px;
          }

          .to-microsite .m-section-title {
            font-size: 34px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 16px;
          }

          .to-microsite .m-section-desc {
            font-size: 16px;
            color: #cbd5e1;
            line-height: 1.6;
          }

          /* S1: Editorial */
          .to-microsite .m-editorial-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: flex-start;
          }

          .to-microsite .m-editorial-left {
            font-size: 28px;
            font-weight: 600;
            line-height: 1.4;
            color: #f8f9fa;
            border-left: 3px solid var(--primary);
            padding-left: 24px;
          }

          .to-microsite .m-editorial-right {
            font-size: 17px;
            color: #a8b2d1;
            line-height: 1.8;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          /* S2: Beneficios */
          .to-microsite .m-cards-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .to-microsite .m-card-premium {
            position: relative;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 40px 32px;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            backdrop-filter: blur(12px);
          }

          .to-microsite .m-card-premium::before {
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

          .to-microsite .m-card-premium:hover {
            transform: translateY(-8px);
            background: var(--card-bg);
            border-color: var(--card-border);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          }

          .to-microsite .m-card-premium:hover::before {
            opacity: 1;
          }

          .to-microsite .m-card-icon {
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

          .to-microsite .m-card-premium:hover .m-card-icon {
            background: var(--primary);
            color: #ffffff;
            transform: scale(1.05);
            box-shadow: 0 4px 15px var(--primary-glow-strong);
          }

          .to-microsite .m-card-title {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 16px;
          }

          .to-microsite .m-card-text {
            font-size: 15px;
            color: #8892b0;
            line-height: 1.6;
          }

          /* S3: Includes */
          .to-microsite .m-features-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .to-microsite .m-feature-badge-card {
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

          .to-microsite .m-feature-badge-card:hover {
            background: rgba(255, 255, 255, 0.03);
            border-color: var(--card-border);
            transform: translateY(-2px);
          }

          .to-microsite .m-feature-check {
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

          .to-microsite .m-feature-badge-card:hover .m-feature-check {
            background: var(--primary-glow);
            border-color: var(--primary);
          }

          .to-microsite .m-feature-title {
            font-size: 15px;
            font-weight: 600;
            color: #e2e8f0;
          }

          /* S4: Tech */
          .to-microsite .m-tech-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 20px;
          }

          .to-microsite .m-tech-card {
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

          .to-microsite .m-tech-card:hover {
            background: var(--card-bg);
            border-color: var(--card-border);
            transform: scale(1.05);
          }

          .to-microsite .m-tech-icon {
            width: 48px;
            height: 48px;
            margin-bottom: 16px;
            color: #8892b0;
            transition: color 0.3s;
          }

          .to-microsite .m-tech-card:hover .m-tech-icon {
            color: var(--primary);
          }

          .to-microsite .m-tech-name {
            font-size: 14px;
            font-weight: 600;
            color: #8892b0;
            transition: color 0.3s;
          }

          .to-microsite .m-tech-card:hover .m-tech-name {
            color: #ffffff;
          }

          /* S5: Cases */
          .to-microsite .m-cases-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .to-microsite .m-case-card {
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            padding: 40px;
            transition: all 0.3s;
            position: relative;
          }

          .to-microsite .m-case-card:hover {
            background: rgba(255, 255, 255, 0.03);
            border-color: var(--card-border);
            transform: translateY(-4px);
          }

          .to-microsite .m-case-tag {
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            color: var(--primary);
            letter-spacing: 1px;
            margin-bottom: 16px;
            display: block;
          }

          .to-microsite .m-case-title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
          }

          .to-microsite .m-case-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .to-microsite .m-case-list li {
            position: relative;
            padding-left: 24px;
            margin-bottom: 12px;
            font-size: 15px;
            color: #a8b2d1;
            line-height: 1.5;
          }

          .to-microsite .m-case-list li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--primary);
            font-weight: bold;
          }

          /* S6: Timeline */
          .to-microsite .m-timeline {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 0;
          }

          .to-microsite .m-timeline::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 40px;
            width: 2px;
            background: linear-gradient(to bottom, var(--primary), var(--secondary));
            opacity: 0.3;
          }

          .to-microsite .m-timeline-item {
            position: relative;
            padding-left: 90px;
            margin-bottom: 50px;
          }

          .to-microsite .m-timeline-item:last-child {
            margin-bottom: 0;
          }

          .to-microsite .m-timeline-number {
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

          .to-microsite .m-timeline-item:hover .m-timeline-number {
            background: var(--primary);
            color: #ffffff;
            transform: scale(1.1);
          }

          .to-microsite .m-timeline-content {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.04);
            border-radius: 12px;
            padding: 24px 30px;
            transition: all 0.3s;
          }

          .to-microsite .m-timeline-item:hover .m-timeline-content {
            background: rgba(255, 255, 255, 0.04);
            border-color: var(--card-border);
          }

          .to-microsite .m-timeline-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 10px;
          }

          .to-microsite .m-timeline-text {
            font-size: 15px;
            color: #8892b0;
            line-height: 1.6;
          }

          /* S7: Table */
          .to-microsite .m-table-wrapper {
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }

          .to-microsite .m-table {
            width: 100%;
            border-collapse: collapse;
          }

          .to-microsite .m-table th, .to-microsite .m-table td {
            padding: 24px 32px;
            text-align: left;
            border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          }

          .to-microsite .m-table th {
            background: rgba(255, 255, 255, 0.02);
            font-weight: 700;
            font-size: 16px;
            color: #ffffff;
          }

          .to-microsite .m-table td {
            font-size: 15px;
          }

          .to-microsite .m-table tr:last-child td {
            border-bottom: none;
          }

          .to-microsite .m-table tr:hover td {
            background: rgba(255, 255, 255, 0.01);
          }

          .to-microsite .m-table-feature {
            font-weight: 600;
            color: #e2e8f0;
          }

          .to-microsite .m-table-others {
            color: #8892b0;
          }

          .to-microsite .m-table-beckpro {
            color: #ffffff;
            font-weight: 600;
            background: rgba(255, 255, 255, 0.01);
          }

          .to-microsite tr:hover .m-table-beckpro {
            background: var(--primary-glow);
          }

          .to-microsite .m-table-badge-yes {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--primary);
            font-weight: bold;
          }

          .to-microsite .m-table-badge-no {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #ef4444;
          }

          /* S8: FAQ */
          .to-microsite .m-faq-list {
            max-width: 800px;
            margin: 0 auto;
          }

          .to-microsite .m-faq-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.04);
            border-radius: 12px;
            margin-bottom: 16px;
            overflow: hidden;
            transition: all 0.3s;
          }

          .to-microsite .m-faq-item:hover {
            border-color: var(--card-border);
          }

          .to-microsite .m-faq-trigger {
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

          .to-microsite .m-faq-trigger:focus {
            outline: none;
          }

          .to-microsite .m-faq-trigger span {
            padding-right: 20px;
          }

          .to-microsite .m-faq-icon {
            flex-shrink: 0;
            width: 20px;
            height: 20px;
            color: var(--primary);
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .to-microsite .m-faq-item.active .m-faq-icon {
            transform: rotate(180deg);
          }

          .to-microsite .m-faq-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s;
            padding: 0 24px;
            color: #a8b2d1;
            font-size: 15px;
            line-height: 1.6;
          }

          .to-microsite .m-faq-item.active .m-faq-content {
            max-height: 350px;
            padding-bottom: 24px;
          }

          /* S9: CTA Final */
          .to-microsite .m-cta-card {
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

          .to-microsite .m-cta-glow {
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

          .to-microsite .m-cta-content {
            position: relative;
            z-index: 1;
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .to-microsite .m-cta-title {
            font-size: 44px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 20px;
          }

          .to-microsite .m-cta-subtitle {
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

          .to-microsite .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .to-microsite .reveal.visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* Responsive */
          @media (max-width: 991px) {
            .to-microsite .m-hero-grid {
              grid-template-columns: 1fr;
              gap: 40px;
              text-align: center;
            }
            .to-microsite .m-hero-content {
              align-items: center;
            }
            .to-microsite .m-hero-title {
              font-size: 44px;
            }
            .to-microsite .m-editorial-grid {
              grid-template-columns: 1fr;
              gap: 30px;
            }
            .to-microsite .m-cards-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            .to-microsite .m-features-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .to-microsite .m-tech-grid {
              grid-template-columns: repeat(3, 1fr);
            }
            .to-microsite .m-cases-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            .to-microsite .m-cta-title {
              font-size: 32px;
            }
          }

          @media (max-width: 767px) {
            .to-microsite .m-hero {
              padding: 40px 0 80px 0;
            }
            .to-microsite .m-hero-title {
              font-size: 36px;
            }
            .to-microsite .m-hero-ctas {
              flex-direction: column;
              width: 100%;
            }
            .to-microsite .m-btn {
              width: 100%;
            }
            .to-microsite .m-section {
              padding: 60px 0;
            }
            .to-microsite .m-section-title {
              font-size: 30px;
            }
            .to-microsite .m-features-grid {
              grid-template-columns: 1fr;
            }
            .to-microsite .m-tech-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .to-microsite .m-timeline::before {
              left: 20px;
            }
            .to-microsite .m-timeline-item {
              padding-left: 50px;
            }
            .to-microsite .m-timeline-number {
              left: 0;
              width: 36px;
              height: 36px;
            }
            .to-microsite .m-table th, .to-microsite .m-table td {
              padding: 16px;
              font-size: 14px;
            }
            .to-microsite .m-cta-card {
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
                  <span style={{ color: "var(--primary)" }}>Tiendas Online</span>
                </div>
                
                <span className="m-badge">E-commerce High-Performance</span>
                
                <h1 className="m-hero-title">
                  Tiendas Online de <span className="text-gradient">Alta Conversión</span> que Venden por Ti
                </h1>
                
                <p className="m-hero-subtitle">
                  Desarrollamos tiendas virtuales rápidas, intuitivas y optimizadas para celulares. Integra pasarelas de pago, control de inventarios y una experiencia de compra premium.
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
                  <img src="/assets/tiendas_online_hero.png" alt="Tiendas Online Premium BeckPro" />
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
                Vende sin límites con tu propio canal de comercio electrónico.
              </div>
              <div className="m-editorial-right">
                <p>
                  No dependas de plataformas terceras con comisiones abusivas ni plantillas lentas que ahuyentan a tus clientes. Diseñamos tiendas online ultra rápidas sobre arquitectura Next.js, logrando cargas instantáneas de tu catálogo de productos.
                </p>
                <p>
                  Desde la navegación del usuario hasta el checkout final, cada detalle está optimizado para maximizar el valor promedio del carrito. Integramos pasarelas de pago locales y globales, control automático de inventario y notificaciones en tiempo real por correo o WhatsApp.
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
              <h2 className="m-section-title">¿Por qué elegir nuestro e-commerce?</h2>
              <p className="m-section-desc">
                Combinamos diseño premium orientado a ventas con ingeniería moderna para lograr la máxima rentabilidad.
              </p>
            </div>
            
            <div className="m-cards-grid reveal">
              {/* Card 1 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
                <h3 className="m-card-title">Checkout en un clic</h3>
                <p className="m-card-text">
                  Simplificamos el proceso de compra al mínimo de pasos. Menos fricción significa más ventas y menos carritos abandonados.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                    <line x1="15" y1="3" x2="15" y2="21"></line>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="3" y1="15" x2="21" y2="15"></line>
                  </svg>
                </div>
                <h3 className="m-card-title">Autoadministrable</h3>
                <p className="m-card-text">
                  Sube productos, cambia precios, gestiona stock y revisa tus pedidos desde un panel administrativo intuitivo diseñado a la medida.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="m-card-premium">
                <div className="m-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <h3 className="m-card-title">Velocidad y SEO</h3>
                <p className="m-card-text">
                  Un e-commerce rápido vende más. Tu catálogo cargará al instante y tus productos aparecerán orgánicamente en Google.
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
              <h2 className="m-section-title">Todo lo que tu e-commerce necesita</h2>
              <p className="m-section-desc">
                Nuestros desarrollos no tienen costos ocultos. Incluyen todas las características técnicas para competir y facturar en el mercado digital moderno.
              </p>
            </div>
            
            <div className="m-features-grid reveal">
              {[
                "Carrito de Compra Rápido",
                "Pasarelas de Pago Integradas",
                "Control de Inventario",
                "Cupones de Descuento",
                "Notificaciones Automáticas",
                "SEO de Productos",
                "Diseño Móvil Premium",
                "Estadísticas de Venta"
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
                { name: "Stripe", desc: "Pagos Globales", svg: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/> },
                { name: "GitHub", desc: "Repositorios", svg: <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.08-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.18 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/> },
                { name: "Cloudflare", desc: "Red CDN", svg: <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/> },
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
              <span className="m-section-badge">Modelos de Negocio</span>
              <h2 className="m-section-title">Soluciones e-commerce a tu medida</h2>
              <p className="m-section-desc">
                Nuestras tiendas online se adaptan a las particularidades operativas de distintos sectores comerciales del mercado.
              </p>
            </div>
            
            <div className="m-cases-grid reveal">
              {/* Case 1 */}
              <div className="m-case-card">
                <span className="m-case-tag">Retail & Productos</span>
                <h3 className="m-case-title">Moda, Hogar y Consumo</h3>
                <ul className="m-case-list">
                  <li>Catálogo dinámico por tallas y colores</li>
                  <li>Filtros avanzados de búsqueda rápida</li>
                  <li>Pasarela de pago con tarjeta de crédito</li>
                  <li>Integración de tarifas de envío a domicilio</li>
                </ul>
              </div>
              
              {/* Case 2 */}
              <div className="m-case-card">
                <span className="m-case-tag">Servicios & Descargas</span>
                <h3 className="m-case-title">Cursos y Productos Digitales</h3>
                <ul className="m-case-list">
                  <li>Acceso automático posterior al pago</li>
                  <li>Descargas digitales seguras e instantáneas</li>
                  <li>Suscripciones mensuales recurrentes</li>
                  <li>Panel de cliente personalizado</li>
                </ul>
              </div>
              
              {/* Case 3 */}
              <div className="m-case-card">
                <span className="m-case-tag">Distribución & B2B</span>
                <h3 className="m-case-title">Mayoristas y Empresas</h3>
                <ul className="m-case-list">
                  <li>Precios diferenciados por volumen de compra</li>
                  <li>Registro y verificación previa de empresas</li>
                  <li>Cotizadores automáticos de pedidos</li>
                  <li>Facturación electrónica integrada</li>
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
                { n: "1", t: "Descubrimiento", d: "Reunión de diagnóstico inicial para entender tus metas comerciales, catálogo de productos, público objetivo y pasarelas de pago requeridas." },
                { n: "2", t: "Planificación de Catálogo", d: "Definición de las categorías de productos, atributos (tallas, colores), flujos de checkout y la experiencia del carrito de compras." },
                { n: "3", t: "Diseño UI/UX Premium", d: "Diseñamos la interfaz visual a medida, enfocándonos en un embudo de ventas intuitivo y una experiencia móvil fluida." },
                { n: "4", t: "Desarrollo e Integración", d: "Programación con Next.js y React. Conexión de pasarelas de pago, base de datos de stock y el panel de administración autoadministrable." },
                { n: "5", t: "Pruebas y Lanzamiento", d: "Pruebas de transacciones reales, validaciones de seguridad SSL y velocidad. Configuración de dominios y lanzamiento oficial." },
                { n: "6", t: "Optimización de Ventas", d: "Monitoreo post-lanzamiento de la tasa de conversión de carritos, velocidad del checkout y ajustes SEO para aumentar ventas." }
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
                Comparemos las diferencias entre un e-commerce convencional en plataformas de alquiler frente al estándar premium de BeckPro.
              </p>
            </div>
            
            <div className="m-table-wrapper reveal">
              <table className="m-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Otras Soluciones (Shopify/WooCommerce)</th>
                    <th className="m-table-beckpro" style={{ borderBottom: "1px solid var(--primary)" }}>BeckPro E-commerce</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: "Comisiones por ventas", o: "Sí (cobros de 0.5% a 2% por transacción)", b: "Sin comisiones (100% de tus ventas son tuyas)" },
                    { f: "Velocidad del catálogo", o: "Lenta (se congela al cargar múltiples productos)", b: "Instantánea (Next.js server-rendered, < 1.5s)" },
                    { f: "Mensualidad obligatoria", o: "Sí (suscripción fija de por vida)", b: "Propiedad total sin alquileres recurrentes" },
                    { f: "Diseño y branding", o: "Plantillas prefabricadas similares a otras tiendas", b: "Diseño UI/UX 100% exclusivo para tu marca" },
                    { f: "Sincronización de Stock", o: "Lenta o con retrasos notables", b: "Instantánea en tiempo real con alertas a WhatsApp" },
                    { f: "Costo de Plugins", o: "Costosos pagos mensuales por funciones extra", b: "Funcionalidades integradas sin costos adicionales" }
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
                Resolvemos tus dudas principales sobre nuestro servicio de tiendas online de alto rendimiento.
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
                <h2 className="m-cta-title">¿Listo para multiplicar tus ventas por internet?</h2>
                <p className="m-cta-subtitle">
                  Obtén una sesión de diagnóstico técnico y comercial 100% gratuita para tu proyecto de e-commerce. Sin compromiso.
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
