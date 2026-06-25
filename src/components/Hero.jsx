"use client";

import { useState } from "react";

export default function Hero() {
  const [logoError, setLogoError] = useState(false);

  return (
    <section className="hero" id="inicio">
      <div className="hero-bg"></div>
      <div className="hero-pattern"></div>

      <div className="container hero-inner">
        <div className="hero-content">
          <h1>
            <span className="highlight">Código que transforma.</span>
            Soluciones que impulsan.
          </h1>
          <p>
            Desarrollamos sitios web, automatizaciones y sistemas digitales para
            negocios que quieren crecer, vender mejor y trabajar con más orden.
          </p>
          <div className="btn-group">
            <a href="#contacto" className="btn btn-primary">
              Solicitar diagnóstico digital
            </a>
            <a href="#servicios" className="btn btn-secondary">
              Ver servicios
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-logo-container">
            {logoError ? (
              <svg
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "65%" }}
              >
                <rect width="120" height="120" rx="30" fill="#17B7C8" />
                <text
                  x="50%"
                  y="54%"
                  fontFamily="Poppins"
                  fontSize="40"
                  fontWeight="700"
                  fill="#0D3240"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  B
                </text>
              </svg>
            ) : (
              <img
                src="logo-beckpro-appc.png"
                alt="BeckPro Developer Logo"
                onError={() => setLogoError(true)}
              />
            )}
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
