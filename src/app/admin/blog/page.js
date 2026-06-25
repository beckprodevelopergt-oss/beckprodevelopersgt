"use client";

export default function BlogPlaceholder() {
  const features = [
    {
      title: "Editor de Artículos Rich-Text",
      desc: "Escribe y formatea artículos de blog de forma fluida con un editor visual potente que soporta imágenes, bloques de código, citas y videos."
    },
    {
      title: "Analizador SEO Integrado",
      desc: "Optimiza tus títulos, meta descripciones y densidad de palabras clave en tiempo real para posicionar mejor en buscadores."
    },
    {
      title: "Categorías e Indexación",
      desc: "Organiza tus artículos por temáticas de tecnología, marketing digital y negocios para una experiencia de usuario sobresaliente."
    },
    {
      title: "Programador de Publicaciones",
      desc: "Planifica tu calendario editorial programando la fecha y hora exacta en la que deseas que tus artículos se hagan públicos."
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
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </div>
        <span className="phase-badge">Fase de Expansión IV: Blog</span>
        <h2>Consola Editorial de Artículos (Blog)</h2>
        <p>
          Este módulo impulsará el marketing de contenidos y SEO de BeckPro, permitiendo publicar artículos técnicos, guías de desarrollo y novedades de software.
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
