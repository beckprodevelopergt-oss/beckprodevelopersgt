"use client";

import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoProyecto: "",
    mensaje: "",
    botcheck: false, // Honeypot field
  });

  const [errors, setErrors] = useState({
    nombre: false,
    email: false,
    telefono: false,
    tipoProyecto: false,
    mensaje: false,
  });

  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const validateField = (name, value) => {
    let isValid = true;
    if (
      name === "nombre" ||
      name === "tipoProyecto" ||
      name === "mensaje" ||
      name === "telefono"
    ) {
      if (!value.trim()) isValid = false;
    }
    if (name === "email") {
      if (!value.trim()) {
        isValid = false;
      } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) isValid = false;
      }
    }
    setErrors((prev) => ({ ...prev, [name]: !isValid }));
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent double submission if already sending
    if (status === "submitting") return;

    // Honeypot antispam check: if filled, silently discard or reset
    if (formData.botcheck) {
      console.log("Honeypot filled. Bot detected.");
      setStatus("success");
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        tipoProyecto: "",
        mensaje: "",
        botcheck: false,
      });
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
      return;
    }

    // Validate all required fields
    const isNombreValid = validateField("nombre", formData.nombre);
    const isEmailValid = validateField("email", formData.email);
    const isTelefonoValid = validateField("telefono", formData.telefono);
    const isTipoValid = validateField("tipoProyecto", formData.tipoProyecto);
    const isMensajeValid = validateField("mensaje", formData.mensaje);

    if (
      isNombreValid &&
      isEmailValid &&
      isTelefonoValid &&
      isTipoValid &&
      isMensajeValid
    ) {
      setStatus("submitting");

      // Format date/time to local Guatemala timezone
      const now = new Date();
      const fechaHora = now.toLocaleString("es-GT", {
        timeZone: "America/Guatemala",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      try {
        const payload = {
          access_key: "156a8589-6afb-449c-a086-8d253d4e8e6b",
          subject: "🚀 Nuevo Lead - BeckPro Developer",
          from_name: "BeckPro Developer",
          botcheck: formData.botcheck,
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          tipoProyecto: formData.tipoProyecto,
          mensaje: formData.mensaje,
          fechaHora: fechaHora,
          origen: "Sitio Web",
        };

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          // ======================================================================
          // FUTURE INTEGRATION: FIREBASE / CRM SAVE
          // This is where you can easily save the lead to Firebase Firestore
          // or sync it to a CRM. The component is fully structured to support this:
          //
          // import { db } from "@/lib/firebase";
          // import { collection, addDoc, serverTimestamp } from "firebase/firestore";
          //
          // try {
          //   await addDoc(collection(db, "Leads"), {
          //     status: "Nuevo",
          //     source: "Sitio Web",
          //     name: formData.nombre,
          //     email: formData.email,
          //     phone: formData.telefono,
          //     projectType: formData.tipoProyecto,
          //     message: formData.mensaje,
          //     createdAt: serverTimestamp(),
          //     updatedAt: serverTimestamp(),
          //   });
          //   console.log("Lead successfully saved to Firebase.");
          // } catch (firebaseError) {
          //   console.error("Error saving lead to Firebase:", firebaseError);
          // }
          // ======================================================================

          setStatus("success");
          setFormData({
            nombre: "",
            email: "",
            telefono: "",
            tipoProyecto: "",
            mensaje: "",
            botcheck: false,
          });

          // Reset button to idle after 4 seconds
          setTimeout(() => {
            setStatus("idle");
          }, 4000);
        } else {
          console.error("Web3Forms submission error:", data);
          setStatus("error");
          setTimeout(() => {
            setStatus("idle");
          }, 4000);
        }
      } catch (error) {
        console.error("Network error when submitting to Web3Forms:", error);
        setStatus("error");
        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      }
    }
  };

  return (
    <section className="contacto" id="contacto">
      <div className="container">
        <div className="section-header reveal">
          <h2>Hablemos de tu proyecto</h2>
          <span className="accent-line"></span>
          <p>
            Cuéntanos tu idea y te ayudaremos a encontrar the mejor solución
            digital.
          </p>
        </div>

        <div className="contacto-grid">
          {/* Form */}
          <form
            className="contacto-form reveal"
            id="contactForm"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.nombre ? "invalid" : ""}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email ? "invalid" : ""}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono / WhatsApp *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.telefono ? "invalid" : ""}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="tipoProyecto">Tipo de proyecto *</label>
              <select
                id="tipoProyecto"
                name="tipoProyecto"
                value={formData.tipoProyecto}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.tipoProyecto ? "invalid" : ""}
                required
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="Desarrollo Web">Desarrollo Web</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Tienda Online (E-commerce)">
                  Tienda Online (E-commerce)
                </option>
                <option value="Sistema a Medida">Sistema a Medida</option>
                <option value="Automatización / Integración">
                  Automatización / Integración
                </option>
                <option value="Consultoría / Otro">Consultoría / Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Cuéntanos sobre tu proyecto *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.mensaje ? "invalid" : ""}
                required
              ></textarea>
            </div>

            {/* Honeypot field for antispam */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              checked={formData.botcheck}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="btn btn-primary"
              style={
                status === "success"
                  ? { background: "#25D366", color: "#fff", borderColor: "#25D366" }
                  : status === "error"
                  ? { background: "#e74c3c", color: "#fff", borderColor: "#e74c3c" }
                  : {}
              }
              disabled={status === "submitting"}
            >
              {status === "idle" && "Enviar solicitud"}
              {status === "submitting" && "Enviando..."}
              {status === "success" && "✅ Gracias. Hemos recibido tu solicitud correctamente. Nos comunicaremos contigo muy pronto."}
              {status === "error" && "❌ No fue posible enviar el formulario. Inténtalo nuevamente."}
            </button>
          </form>

          {/* Info & Social */}
          <div className="contacto-info reveal">
            <h3>Información de contacto</h3>
            <ul className="info-list">
              <li>
                <div className="info-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div className="info-text">
                  <strong>WhatsApp</strong>
                  <a
                    href="https://wa.me/50255392986"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +502 5539 2986
                  </a>
                </div>
              </li>

              <li>
                <div className="info-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="info-text">
                  <strong>Correo</strong>
                  <a href="mailto:info@beckprodebeloper.com">
                    info@beckprodebeloper.com
                  </a>
                </div>
              </li>

              <li>
                <div className="info-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="info-text">
                  <strong>Ubicación</strong>
                  <span>Ciudad de Guatemala, Guatemala</span>
                </div>
              </li>
            </ul>

            <h3>Síguenos</h3>
            <div className="redes-list">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
