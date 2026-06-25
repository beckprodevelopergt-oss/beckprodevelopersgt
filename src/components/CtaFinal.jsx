export default function CtaFinal() {
  return (
    <section className="cta-final">
      <div className="container reveal">
        <h2>¿Listo para construir tu próxima solución digital?</h2>
        <p>
          Hablemos de tu proyecto y encontremos la mejor forma de convertir tu
          idea en una herramienta funcional para tu negocio.
        </p>
        <div className="btn-group">
          <a href="#contacto" className="btn btn-primary">
            Solicitar diagnóstico
          </a>
          <a
            href="https://wa.me/50255392986"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ width: "20px", height: "20px" }}
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
