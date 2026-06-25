"use client";

import { useState, useEffect } from "react";
import { settingsService } from "@/services/settingsService";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    companyName: "",
    email: "",
    whatsapp: "",
    domain: "",
    logo: "",
    favicon: "",
    socials: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function loadSettings() {
      const data = await settingsService.getSettings();
      setSettings(data);
      setLoading(false);
    }
    loadSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      socials: {
        ...prev.socials,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setErrorMsg("");
    setShowSuccess(false);

    // Form validations
    if (!settings.companyName.trim()) {
      setErrorMsg("El nombre de la empresa es obligatorio.");
      setSaving(false);
      return;
    }
    if (!settings.email.trim()) {
      setErrorMsg("El correo del administrador es obligatorio.");
      setSaving(false);
      return;
    }

    const result = await settingsService.saveSettings(settings);
    setSaving(false);
    if (result.success) {
      setShowSuccess(true);
      // Hide success notification after 4 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    } else {
      setErrorMsg("Ocurrió un error al guardar la configuración.");
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "#64748b" }}>
        Cargando configuración corporativa...
      </div>
    );
  }

  return (
    <div className="settings-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .settings-page {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .settings-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .settings-section {
          background: rgba(30, 41, 59, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 24px;
          backdrop-filter: blur(10px);
        }

        .settings-section h2 {
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 12px;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .grid-inputs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 768px) {
          .grid-inputs {
            grid-template-columns: 1fr;
          }
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-field label {
          font-size: 13px;
          color: #cbd5e1;
          font-weight: 500;
        }

        .form-field input {
          background: rgba(11, 17, 30, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 12px 16px;
          color: #ffffff;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s ease;
        }

        .form-field input:focus {
          border-color: #12a2b3;
          outline: none;
        }

        .form-field input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* SAVE BUTTON ROW */
        .save-row {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 16px;
        }

        .btn-save {
          background: linear-gradient(135deg, #12a2b3 0%, #0e808e 100%);
          border: none;
          color: #ffffff;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(18, 162, 179, 0.25);
          font-family: inherit;
        }

        .btn-save:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(18, 162, 179, 0.45);
        }

        .btn-save:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* NOTIFICATIONS */
        .success-banner {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #34d399;
          font-size: 14px;
          padding: 14px 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .error-banner {
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #f87171;
          font-size: 14px;
          padding: 14px 20px;
          border-radius: 12px;
        }
      `}} />

      {showSuccess && (
        <div className="success-banner">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "18px", height: "18px" }}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Configuración guardada y sincronizada correctamente.
        </div>
      )}

      {errorMsg && <div className="error-banner">{errorMsg}</div>}

      <form className="settings-form" onSubmit={handleSubmit}>
        {/* Section 1: General Info */}
        <section className="settings-section">
          <h2>Datos Generales</h2>
          <div className="grid-inputs">
            <div className="form-field">
              <label htmlFor="companyName">Nombre de la Empresa</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={settings.companyName}
                onChange={handleChange}
                disabled={saving}
                placeholder="Ej. BeckPro Developer"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="domain">Dominio Web</label>
              <input
                type="text"
                id="domain"
                name="domain"
                value={settings.domain}
                onChange={handleChange}
                disabled={saving}
                placeholder="Ej. beckprodeveloper.com"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Contact Info */}
        <section className="settings-section">
          <h2>Canales de Contacto</h2>
          <div className="grid-inputs">
            <div className="form-field">
              <label htmlFor="email">Correo Administrador</label>
              <input
                type="email"
                id="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                disabled={saving}
                placeholder="Ej. info@beckprodeveloper.com"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="whatsapp">WhatsApp de Soporte</label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                value={settings.whatsapp}
                onChange={handleChange}
                disabled={saving}
                placeholder="Ej. +502 5539 2986"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Brand Assets */}
        <section className="settings-section">
          <h2>Identidad Visual</h2>
          <div className="grid-inputs">
            <div className="form-field">
              <label htmlFor="logo">Ruta del Logo</label>
              <input
                type="text"
                id="logo"
                name="logo"
                value={settings.logo}
                onChange={handleChange}
                disabled={saving}
                placeholder="Ej. /assets/logo.png"
              />
            </div>

            <div className="form-field">
              <label htmlFor="favicon">Ruta del Favicon</label>
              <input
                type="text"
                id="favicon"
                name="favicon"
                value={settings.favicon}
                onChange={handleChange}
                disabled={saving}
                placeholder="Ej. /favicon.ico"
              />
            </div>
          </div>
        </section>

        {/* Section 4: Social Networks */}
        <section className="settings-section">
          <h2>Redes Sociales</h2>
          <div className="grid-inputs">
            <div className="form-field">
              <label htmlFor="facebook">Facebook URL</label>
              <input
                type="url"
                id="facebook"
                name="facebook"
                value={settings.socials.facebook}
                onChange={handleSocialChange}
                disabled={saving}
                placeholder="https://facebook.com/pagina"
              />
            </div>

            <div className="form-field">
              <label htmlFor="instagram">Instagram URL</label>
              <input
                type="url"
                id="instagram"
                name="instagram"
                value={settings.socials.instagram}
                onChange={handleSocialChange}
                disabled={saving}
                placeholder="https://instagram.com/usuario"
              />
            </div>

            <div className="form-field">
              <label htmlFor="linkedin">LinkedIn URL</label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={settings.socials.linkedin}
                onChange={handleSocialChange}
                disabled={saving}
                placeholder="https://linkedin.com/company/empresa"
              />
            </div>
          </div>
        </section>

        {/* Save Button */}
        <div className="save-row">
          <button type="submit" className="btn-save" disabled={saving}>
            {saving ? "Guardando..." : "Guardar Cambios"}
          </button>
        </div>
      </form>
    </div>
  );
}
