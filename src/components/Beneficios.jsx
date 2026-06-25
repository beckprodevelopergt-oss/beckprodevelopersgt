export default function Beneficios() {
  return (
    <section className="beneficios" id="beneficios">
      <div className="container">
        <div className="section-header reveal">
          <h2>Tecnología pensada para resultados reales</h2>
          <span className="accent-line"></span>
          <p>
            Creamos herramientas digitales claras, funcionales y escalables para
            que tu negocio tenga una presencia profesional y procesos más
            eficientes.
          </p>
        </div>

        <div className="beneficios-grid">
          {/* Card 1 */}
          <div className="beneficio-card reveal">
            <div className="beneficio-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <h3>Presencia profesional</h3>
            <p>Sitios modernos que transmiten confianza desde el primer contacto.</p>
          </div>

          {/* Card 2 */}
          <div className="beneficio-card reveal">
            <div className="beneficio-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3>Procesos más ordenados</h3>
            <p>Automatizaciones que reducen tareas repetitivas y errores manuales.</p>
          </div>

          {/* Card 3 */}
          <div className="beneficio-card reveal">
            <div className="beneficio-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8 10h.01M12 10h.01M16 10h.01" />
              </svg>
            </div>
            <h3>Mejor atención al cliente</h3>
            <p>Formularios, WhatsApp y respuestas automatizadas para atender más rápido.</p>
          </div>

          {/* Card 4 */}
          <div className="beneficio-card reveal">
            <div className="beneficio-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3>Crecimiento digital</h3>
            <p>Soluciones diseñadas para vender, captar clientes y escalar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
