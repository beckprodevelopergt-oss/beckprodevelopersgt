export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <a href="#inicio" className="logo" style={{ marginBottom: "1.2rem" }}>
              <img
                src="assets/logo-beckpro-app.png"
                alt="BeckPro Developer"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="logo-text">
                <strong>BeckPro</strong>
                <span>Developer</span>
              </div>
            </a>
            <p>Código que transforma. Soluciones que impulsan.</p>
          </div>

          {/* Column 2: Menu */}
          <div>
            <h4>Menú</h4>
            <ul className="footer-links">
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#servicios">Servicios</a>
              </li>
              <li>
                <a href="#proceso">Proceso</a>
              </li>
              <li>
                <a href="#planes">Planes</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4>Servicios</h4>
            <ul className="footer-links">
              <li>
                <a href="#servicios">Desarrollo web</a>
              </li>
              <li>
                <a href="#servicios">Landing pages</a>
              </li>
              <li>
                <a href="#servicios">Automatización</a>
              </li>
              <li>
                <a href="#servicios">Tiendas online</a>
              </li>
              <li>
                <a href="#servicios">Sistemas a medida</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4>Contacto</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://wa.me/50255392986"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +502 5539 2986
                </a>
              </li>
              <li>
                <a href="mailto:info@beckprodebeloper.com">
                  Email: info@beckprodebeloper.com
                </a>
              </li>
              <li>
                <span style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.7)" }}>
                  Guatemala
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} BeckPro Developer. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
