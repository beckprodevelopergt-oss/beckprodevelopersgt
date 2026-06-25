"use client";

export default function QuotesPlaceholder() {
  const features = [
    {
      title: "Generador de Cotizaciones PDF",
      desc: "Diseña y emite presupuestos técnicos profesionales con desglose de entregables, horas estimadas y términos comerciales en formato PDF descargable."
    },
    {
      title: "Seguimiento de Estados",
      desc: "Controla el ciclo de vida de tus propuestas comerciales: Borrador, Enviada, Aceptada, Rechazada o Facturada."
    },
    {
      title: "Enlace Público de Propuesta",
      desc: "Envía un enlace interactivo y único a tus prospectos donde podrán revisar la propuesta online, seleccionar complementos y aprobar con firma digital."
    },
    {
      title: "Historial de Facturación",
      desc: "Asocia pasarelas de pago para cobrar adelantos de proyectos o cuotas de soporte recurrente directamente vinculadas al presupuesto."
    }
  ];

  return (
    <div className="placeholder-container">
      <style dangerouslySetInnerHTML={{ __html: `
        .placeholder-container {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 30px;
          font-family: 'Poppins', sans-serif;
        }

        .hero-banner {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.8) 100%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 50px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .hero-banner::before {
          content: '';
          position: absolute;
          width: 250px;
          height: 250px;
          background: rgba(18, 162, 179, 0.08);
          filter: blur(80px);
          border-radius: 50%;
          top: -50px;
          right: -50px;
        }

        .module-icon {
          width: 70px;
          height: 70px;
          background: rgba(18, 162, 179, 0.1);
          color: #12a2b3;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }

        .module-icon svg {
          width: 36px;
          height: 36px;
        }

        .phase-badge {
          display: inline-block;
          background: rgba(18, 162, 179, 0.1);
          border: 1px solid rgba(18, 162, 179, 0.25);
          color: #12a2b3;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 16px;
          border-radius: 30px;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-banner h2 {
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .hero-banner p {
          font-size: 15px;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        .feature-card {
          background: rgba(30, 41, 59, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          transition: border-color 0.2s ease;
        }

        .feature-card:hover {
          border-color: rgba(18, 162, 179, 0.2);
        }

        .feature-bullet {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #12a2b3;
          margin-top: 6px;
          flex-shrink: 0;
          box-shadow: 0 0 8px #12a2b3;
        }

        .feature-text h3 {
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .feature-text p {
          font-size: 13.5px;
          color: #94a3b8;
          line-height: 1.5;
        }
      `}} />

      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="module-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>
        <span className="phase-badge">Fase de Expansión V: Cotizaciones</span>
        <h2>Gestor Comercial de Cotizaciones</h2>
        <p>
          Este módulo facilitará la creación ágil de propuestas comerciales, estimaciones de presupuestos de software y su facturación integrada.
        </p>
      </div>

      {/* Features Showcase */}
      <div className="features-grid">
        {features.map((feat, index) => (
          <div key={index} className="feature-card">
            <div className="feature-bullet"></div>
            <div className="feature-text">
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
