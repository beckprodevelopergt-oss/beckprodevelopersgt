"use client";

import { useState, useEffect } from "react";
import { labService } from "@/services/labService";

export default function BeckProLabHome() {
  const [vision, setVision] = useState(null);
  const [thought, setThought] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const visionData = await labService.getVision();
      setVision(visionData);
      setThought(labService.getThought());
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="lab-loading">
        <div className="spinner"></div>
        <p>Cargando BeckPro Lab...</p>
        <style dangerouslySetInnerHTML={{ __html: `
          .lab-loading {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 50vh;
            color: #cbd5e1;
          }
          .spinner {
            border: 4px solid rgba(255, 255, 255, 0.1);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border-left-color: #12a2b3;
            animation: spin 1s linear infinite;
            margin-bottom: 16px;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}} />
      </div>
    );
  }

  return (
    <div className="lab-dashboard">
      {/* Scope CSS inside the page */}
      <style dangerouslySetInnerHTML={{ __html: `
        .lab-dashboard {
          display: flex;
          flex-direction: column;
          gap: 30px;
          font-family: 'Poppins', sans-serif;
          color: #cbd5e1;
        }

        /* HERO SECTION */
        .lab-hero {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(9, 13, 22, 0.9) 100%);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 45px 40px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .lab-hero::before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: rgba(18, 162, 179, 0.1);
          filter: blur(90px);
          border-radius: 50%;
          top: -100px;
          right: -50px;
        }

        .hero-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .lab-title {
          font-size: 36px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 1px;
          line-height: 1.1;
        }

        .lab-title span {
          color: #12a2b3;
          text-shadow: 0 0 15px rgba(18, 162, 179, 0.3);
        }

        .badge-alpha {
          background: rgba(18, 162, 179, 0.08);
          border: 1px solid rgba(18, 162, 179, 0.25);
          color: #12a2b3;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 20px;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 6px;
          text-transform: uppercase;
        }

        .badge-alpha::before {
          content: '';
          display: inline-block;
          width: 5px;
          height: 5px;
          background: #12a2b3;
          border-radius: 50%;
          animation: pulse-glow 1.5s infinite;
        }

        @keyframes pulse-glow {
          0% { transform: scale(0.9); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 8px #12a2b3; }
          100% { transform: scale(0.9); opacity: 0.5; }
        }

        .lab-subtitle {
          font-size: 15px;
          color: #94a3b8;
          margin-bottom: 24px;
        }

        /* GENERAL PROGRESS BAR */
        .progress-section {
          max-width: 500px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 12.5px;
          color: #94a3b8;
          font-weight: 500;
        }

        .progress-label span:last-child {
          color: #12a2b3;
          font-weight: 600;
        }

        .progress-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #12a2b3 0%, #0e808e 100%);
          border-radius: 4px;
          box-shadow: 0 0 8px rgba(18, 162, 179, 0.4);
          width: 60%; /* 60% General Ecosystem Progress */
        }

        /* GRID LAYOUT FOR SECTIONS */
        .lab-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        @media (max-width: 1100px) {
          .lab-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .lab-grid {
            grid-template-columns: 1fr;
          }
        }

        /* SECTION CARDS */
        .lab-card {
          background: rgba(30, 41, 59, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 24px;
          backdrop-filter: blur(10px);
          transition: transform 0.2s ease, border-color 0.2s ease;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .lab-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.1);
        }

        /* HIGHLIGHTED CARD - OBJETIVO ACTUAL */
        .lab-card.highlighted {
          border-color: rgba(18, 162, 179, 0.35);
          box-shadow: 0 0 20px rgba(18, 162, 179, 0.08);
          grid-column: span 1;
        }

        .lab-card.highlighted:hover {
          border-color: #12a2b3;
          box-shadow: 0 0 25px rgba(18, 162, 179, 0.15);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          padding-bottom: 12px;
        }

        .card-title {
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .card-title svg {
          width: 18px;
          height: 18px;
          color: #12a2b3;
        }

        .card-badge {
          background: rgba(18, 162, 179, 0.1);
          color: #12a2b3;
          font-size: 10.5px;
          font-weight: 600;
          padding: 2px 10px;
          border-radius: 12px;
          text-transform: uppercase;
        }

        .card-body {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .card-body h3 {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
        }

        .card-body p {
          font-size: 13.5px;
          color: #94a3b8;
          line-height: 1.5;
        }

        /* CARD PROGRESS RING/BAR */
        .card-progress-section {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .card-progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #64748b;
        }

        .card-progress-track {
          height: 6px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 3px;
          overflow: hidden;
        }

        .card-progress-fill {
          height: 100%;
          background: #12a2b3;
          border-radius: 3px;
        }

        /* PLACEHOLDER VISUAL FOR REMAINING PHASES */
        .placeholder-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed rgba(255, 255, 255, 0.1);
          color: #475569;
          font-size: 10px;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .placeholder-body {
          display: flex;
          flex-direction: column;
          gap: 8px;
          opacity: 0.5;
        }

        .placeholder-title {
          font-size: 14px;
          font-weight: 600;
          color: #cbd5e1;
        }

        .placeholder-desc {
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.4;
        }
      `}} />

      {/* Main Hero Section */}
      <div className="lab-hero">
        <div className="hero-meta">
          <span className="badge-alpha">Alpha 0.3</span>
        </div>
        <h1 className="lab-title">
          BECKPRO<span> LAB</span>
        </h1>
        <p className="lab-subtitle">"Donde las ideas se convierten en software."</p>

        {/* General Progress Bar */}
        <div className="progress-section">
          <div className="progress-label">
            <span>Evolución General del Ecosistema</span>
            <span>60%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>

      {/* Grid Layout of 9 Sections */}
      <div className="lab-grid">
        {/* SECTION 8: OBJETIVO ACTUAL (HIGHLIGHTED CARD - FASE 1) */}
        <div className="lab-card highlighted">
          <div className="card-header">
            <div className="card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              Objetivo Actual
            </div>
            <span className="card-badge">Prioridad Alta</span>
          </div>

          <div className="card-body">
            <h3>{vision ? vision.objetivoActual : "Finalizar BeckPro CRM"}</h3>
            <p>
              Integración del panel administrativo, gestión de contactos en base de datos contacts y panel de configuración corporativa.
            </p>

            <div className="card-progress-section">
              <div className="card-progress-label">
                <span>Progreso</span>
                <span style={{ color: "#12a2b3", fontWeight: "600" }}>{vision ? vision.porcentajeObjetivo : 85}%</span>
              </div>
              <div className="card-progress-track">
                <div className="card-progress-fill" style={{ width: `${vision ? vision.porcentajeObjetivo : 85}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 1: VISIÓN (FASE 2) */}
        <div className="lab-card">
          <span className="placeholder-tag">Fase 2: Visión</span>
          <div className="placeholder-body" style={{ marginTop: "12px" }}>
            <div className="placeholder-title">Visión y Misión Estratégica</div>
            <div className="placeholder-desc">
              Definición de la misión, visión y objetivos a largo plazo de la empresa tecnológica. Incorporará un formulario de edición asíncrona.
            </div>
          </div>
        </div>

        {/* SECTION 2: ROADMAP (FASE 3) */}
        <div className="lab-card">
          <span className="placeholder-tag">Fase 3: Roadmap</span>
          <div className="placeholder-body" style={{ marginTop: "12px" }}>
            <div className="placeholder-title">Roadmap de Sprints</div>
            <div className="placeholder-desc">
              Línea de tiempo interactiva que muestra el avance detallado del Sprint 1 al 5, incluyendo métricas y responsables por hito.
            </div>
          </div>
        </div>

        {/* SECTION 3: ECOSISTEMA (FASE 4) */}
        <div className="lab-card">
          <span className="placeholder-tag">Fase 4: Ecosistema</span>
          <div className="placeholder-body" style={{ marginTop: "12px" }}>
            <div className="placeholder-title">Mapa de Ecosistema</div>
            <div className="placeholder-desc">
              Esquema de nodos conectados que ilustra la topología de la plataforma (Lab, Core, CRM, CMS, IA, Automatizaciones, Marketplace).
            </div>
          </div>
        </div>

        {/* SECTION 4: KANBAN DE IDEAS (FASE 5) */}
        <div className="lab-card">
          <span className="placeholder-tag">Fase 5: Ideas</span>
          <div className="placeholder-body" style={{ marginTop: "12px" }}>
            <div className="placeholder-title">Tablero Kanban de Ideas</div>
            <div className="placeholder-desc">
              Espacio dinámico para la captura, investigación, diseño, desarrollo e implementación de nuevas ideas de producto y software.
            </div>
          </div>
        </div>

        {/* SECTION 5: DECISIONES (FASE 6) */}
        <div className="lab-card">
          <span className="placeholder-tag">Fase 6: Decisiones</span>
          <div className="placeholder-body" style={{ marginTop: "12px" }}>
            <div className="placeholder-title">Registro de Decisiones</div>
            <div className="placeholder-desc">
              Bitácora cronológica e historial de cambios de arquitectura que documenta las decisiones de ingeniería tomadas.
            </div>
          </div>
        </div>

        {/* SECTION 6: INSPIRACIÓN (FASE 7) */}
        <div className="lab-card">
          <span className="placeholder-tag">Fase 7: Inspiración</span>
          <div className="placeholder-body" style={{ marginTop: "12px" }}>
            <div className="placeholder-title">Galería de Referencias</div>
            <div className="placeholder-desc">
              Muro visual de inspiración de diseño, interfaces de usuario y referencias técnicas (Linear, Stripe, Vercel, Framer).
            </div>
          </div>
        </div>

        {/* SECTION 7 & 9: INDICADORES Y TIMELINE (FASE 8) */}
        <div className="lab-card">
          <span className="placeholder-tag">Fase 8: Indicadores</span>
          <div className="placeholder-body" style={{ marginTop: "12px" }}>
            <div className="placeholder-title">Métricas y Evolución</div>
            <div className="placeholder-desc">
              Resumen cuantitativo de módulos terminados, pendientes, estado de la documentación e historial de la evolución del proyecto.
            </div>
          </div>
        </div>

        {/* SECTION 10: PENSAMIENTO DEL DÍA (FASE 8) */}
        <div className="lab-card">
          <span className="placeholder-tag">Fase 8: Inspiración Diaria</span>
          <div className="placeholder-body" style={{ marginTop: "12px" }}>
            <div className="placeholder-title">Pensamiento del Día</div>
            <div className="placeholder-desc">
              Frase célebre motivacional sobre tecnología e innovación que rota dinámicamente:
              <br/>
              <span style={{ fontStyle: "italic", fontSize: "12px", color: "#475569", display: "block", marginTop: "6px" }}>
                "{thought}"
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
