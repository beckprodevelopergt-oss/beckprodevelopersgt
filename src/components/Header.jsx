"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const getLink = (hash) => isHome ? hash : `/${hash}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    if (!menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMenu = () => {
    setMenuActive(false);
    document.body.style.overflow = "";
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`} id="mainHeader">
      <div className="container header-inner">
        <a href={isHome ? "#inicio" : "/"} className="logo" onClick={closeMenu}>
          <img
            src="assets/logo-beckpro-appc.png"
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

        <nav className="nav">
          <ul className={`nav-list ${menuActive ? "active" : ""}`} id="navList">
            <li>
              <a href={getLink("#inicio")} className="nav-link" onClick={closeMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href={getLink("#servicios")} className="nav-link" onClick={closeMenu}>
                Servicios
              </a>
            </li>
            <li>
              <a href={getLink("#proceso")} className="nav-link" onClick={closeMenu}>
                Proceso
              </a>
            </li>
            <li>
              <a href={getLink("#planes")} className="nav-link" onClick={closeMenu}>
                Planes
              </a>
            </li>
            <li>
              <a href={getLink("#contacto")} className="nav-link" onClick={closeMenu}>
                Contacto
              </a>
            </li>
            <li>
              <a
                href={getLink("#contacto")}
                className="btn btn-primary nav-cta"
                onClick={closeMenu}
              >
                Solicitar diagnóstico
              </a>
            </li>
          </ul>

          <button
            className={`menu-toggle ${menuActive ? "active" : ""}`}
            id="menuToggle"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
