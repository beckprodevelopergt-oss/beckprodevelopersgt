export default function VisionMisionValores() {
  const valores = [
    {
      title: "Claridad",
      desc: "Procesos transparentes y comunicación directa en cada hito.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      title: "Innovación",
      desc: "Búsqueda constante de tecnologías emergentes y eficientes.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )
    },
    {
      title: "Funcionalidad",
      desc: "Software robusto diseñado para resolver problemas reales.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      title: "Confianza",
      desc: "Relaciones de largo plazo basadas en la honestidad y la entrega.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: "Crecimiento",
      desc: "Soluciones escalables que acompañan la evolución del negocio.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      )
    },
    {
      title: "Excelencia",
      desc: "Atención al detalle y estándares de calidad mundiales.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    }
  ];

  return (
    <section className="mvv-section" id="filosofia">
      <style dangerouslySetInnerHTML={{ __html: `
        .mvv-section {
          padding: 8rem 0;
          background: radial-gradient(circle at 50% 0%, #0c1524 0%, #060a12 100%);
          position: relative;
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
        }

        .mvv-section::before {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: rgba(18, 162, 179, 0.05);
          filter: blur(120px);
          border-radius: 50%;
          top: 10%;
          left: 5%;
          pointer-events: none;
        }

        .mvv-section::after {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: rgba(18, 162, 179, 0.04);
          filter: blur(120px);
          border-radius: 50%;
          bottom: 10%;
          right: 5%;
          pointer-events: none;
        }

        .mvv-container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }

        /* SECTION HEADER */
        .mvv-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .mvv-header h2 {
          font-size: 3.2rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.5px;
        }

        .mvv-header .accent-line {
          width: 60px;
          height: 3px;
          background: #12a2b3;
          border-radius: 2px;
          box-shadow: 0 0 10px rgba(18, 162, 179, 0.5);
        }

        .mvv-header p {
          font-size: 1.6rem;
          color: #94a3b8;
          max-width: 600px;
          line-height: 1.6;
        }

        /* MISSION & VISION GRID */
        .mv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        @media (max-width: 768px) {
          .mv-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .mv-card {
          background: rgba(15, 23, 42, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 4rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .mv-card:hover {
          transform: translateY(-5px);
          border-color: rgba(18, 162, 179, 0.35);
          box-shadow: 0 15px 30px rgba(18, 162, 179, 0.06);
        }

        .mv-icon {
          width: 60px;
          height: 60px;
          background: rgba(18, 162, 179, 0.08);
          color: #12a2b3;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(18, 162, 179, 0.1);
        }

        .mv-icon svg {
          width: 28px;
          height: 28px;
        }

        .mv-card h3 {
          font-size: 2.2rem;
          font-weight: 700;
          color: #ffffff;
        }

        .mv-card p {
          font-size: 1.5rem;
          color: #cbd5e1;
          line-height: 1.6;
        }

        /* VALUES SECTION */
        .valores-section-wrapper {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        .valores-section-wrapper h3 {
          font-size: 2.4rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          letter-spacing: 0.5px;
        }

        .valores-grid-mvv {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        @media (max-width: 992px) {
          .valores-grid-mvv {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .valores-grid-mvv {
            grid-template-columns: 1fr;
          }
        }

        .valor-card-mvv {
          background: rgba(15, 23, 42, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transition: all 0.3s ease;
        }

        .valor-card-mvv:hover {
          transform: translateY(-3px);
          border-color: rgba(18, 162, 179, 0.25);
          box-shadow: 0 10px 20px rgba(18, 162, 179, 0.04);
          background: rgba(15, 23, 42, 0.45);
        }

        .valor-icon-mvv {
          width: 44px;
          height: 44px;
          background: rgba(18, 162, 179, 0.06);
          color: #12a2b3;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .valor-icon-mvv svg {
          width: 20px;
          height: 20px;
        }

        .valor-card-mvv h4 {
          font-size: 1.7rem;
          font-weight: 600;
          color: #ffffff;
        }

        .valor-card-mvv p {
          font-size: 1.35rem;
          color: #94a3b8;
          line-height: 1.5;
        }
      `}} />

      <div className="mvv-container">
        {/* Section Header */}
        <div className="mvv-header reveal">
          <h2>Filosofía Corporativa</h2>
          <span className="accent-line"></span>
          <p>
            Nuestros cimientos estratégicos y los valores fundamentales que guían cada línea de código y decisión tecnológica que tomamos.
          </p>
        </div>

        {/* Mission & Vision Row */}
        <div className="mv-grid">
          {/* Misión */}
          <div className="mv-card reveal">
            <div className="mv-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3>Nuestra Misión</h3>
            <p>
              Transformar ideas en soluciones digitales funcionales, escalables y estratégicas que ayuden a empresas, instituciones y emprendedores a crecer con tecnología.
            </p>
          </div>

          {/* Visión */}
          <div className="mv-card reveal">
            <div className="mv-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="3 6 17 2 21 6 17 10 3 6" />
                <path d="M21 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M12 10v12" />
              </svg>
            </div>
            <h3>Nuestra Visión</h3>
            <p>
              Convertirnos en una plataforma tecnológica referente en Latinoamérica, integrando desarrollo web, automatización, inteligencia artificial y sistemas digitales para impulsar la evolución de las empresas.
            </p>
          </div>
        </div>

        {/* Values Sub-section */}
        <div className="valores-section-wrapper reveal">
          <h3>Valores Fundamentales</h3>
          <div className="valores-grid-mvv">
            {valores.map((val, idx) => (
              <div key={idx} className="valor-card-mvv">
                <div className="valor-icon-mvv">{val.icon}</div>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
