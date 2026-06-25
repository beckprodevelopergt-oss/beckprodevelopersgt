"use client";

import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Beneficios from "../components/Beneficios";
import Servicios from "../components/Servicios";
import Proceso from "../components/Proceso";
import Planes from "../components/Planes";
import Casos from "../components/Casos";
import SobreNosotros from "../components/SobreNosotros";
import VisionMisionValores from "../components/VisionMisionValores";
import CtaFinal from "../components/CtaFinal";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import WhatsappFloat from "../components/WhatsappFloat";

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
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

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Beneficios />
        <Servicios />
        <Proceso />
        <Planes />
        <Casos />
        <SobreNosotros />
        <VisionMisionValores />
        <CtaFinal />
        <Contacto />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
