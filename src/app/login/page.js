"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Next.js router
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { user, loading, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [customRouter, setCustomRouter] = useState(null);

  // Avoid SSR navigation issues by getting router on client mount
  useEffect(() => {
    // Dynamically import or use standard window redirect / next/navigation router
    import("next/navigation").then((mod) => {
      setCustomRouter(mod.useRouter());
    });
  }, []);

  useEffect(() => {
    if (user && customRouter) {
      customRouter.push("/admin");
    }
  }, [user, customRouter]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setErrorMsg("Por favor, ingresa tu correo y contraseña.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    const result = await login(email, password);
    if (result.success) {
      if (customRouter) {
        customRouter.push("/admin");
      } else {
        window.location.href = "/admin";
      }
    } else {
      setErrorMsg(result.error || "Error al iniciar sesión. Verifica tus credenciales.");
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="login-loading-container">
        <div className="spinner"></div>
        <p>Cargando sesión...</p>
        <style dangerouslySetInnerHTML={{ __html: `
          .login-loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: #0b111e;
            color: #ffffff;
            font-family: 'Poppins', sans-serif;
          }
          .spinner {
            border: 4px solid rgba(255, 255, 255, 0.1);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border-left-color: #12a2b3;
            animation: spin 1s linear infinite;
            margin-bottom: 20px;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}} />
      </div>
    );
  }

  return (
    <div className="login-page">
      {/* Scope CSS inside the page */}
      <style dangerouslySetInnerHTML={{ __html: `
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 50% 50%, #152238 0%, #0b111e 100%);
          font-family: 'Poppins', sans-serif;
          padding: 20px;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }
        
        .login-page::before {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: rgba(18, 162, 179, 0.15);
          filter: blur(100px);
          border-radius: 50%;
          top: -100px;
          right: -100px;
        }
        
        .login-page::after {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: rgba(18, 162, 179, 0.1);
          filter: blur(100px);
          border-radius: 50%;
          bottom: -100px;
          left: -100px;
        }

        .login-card {
          width: 100%;
          max-width: 420px;
          background: rgba(15, 23, 42, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 40px 30px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          z-index: 10;
          text-align: center;
        }

        .login-logo {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 8px;
          letter-spacing: 1px;
        }

        .login-logo span {
          color: #12a2b3;
        }

        .login-subtitle {
          color: #94a3b8;
          font-size: 14px;
          margin-bottom: 30px;
        }

        .form-group {
          margin-bottom: 20px;
          text-align: left;
        }

        .form-group label {
          display: block;
          font-size: 13px;
          color: #cbd5e1;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .form-group input {
          width: 100%;
          background: rgba(11, 17, 30, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px 16px;
          border-radius: 8px;
          color: #ffffff;
          font-size: 14px;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus {
          border-color: #12a2b3;
          outline: none;
          box-shadow: 0 0 0 3px rgba(18, 162, 179, 0.25);
        }

        .login-btn {
          width: 100%;
          background: linear-gradient(135deg, #12a2b3 0%, #0e808e 100%);
          border: none;
          color: #ffffff;
          padding: 14px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
          box-shadow: 0 4px 12px rgba(18, 162, 179, 0.3);
          font-family: inherit;
        }

        .login-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(18, 162, 179, 0.5);
        }

        .login-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .error-banner {
          background: rgba(231, 76, 60, 0.15);
          border: 1px solid rgba(231, 76, 60, 0.3);
          color: #f87171;
          font-size: 13px;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 20px;
          text-align: left;
        }

        .demo-box {
          background: rgba(18, 162, 179, 0.08);
          border: 1px dashed rgba(18, 162, 179, 0.3);
          border-radius: 8px;
          padding: 15px;
          margin-top: 25px;
          font-size: 12px;
          text-align: left;
          color: #cbd5e1;
        }

        .demo-box strong {
          color: #12a2b3;
          display: block;
          margin-bottom: 4px;
        }
        
        .demo-box code {
          background: rgba(0, 0, 0, 0.3);
          padding: 2px 6px;
          border-radius: 4px;
          color: #ffffff;
          font-family: monospace;
          font-size: 11px;
        }
      `}} />

      <div className="login-card">
        <h1 className="login-logo">
          BeckPro<span>Core</span>
        </h1>
        <p className="login-subtitle">Panel de Administración Corporativa</p>

        {errorMsg && <div className="error-banner">{errorMsg}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="ejemplo@beckpro.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isSubmitting}
              required
            />
          </div>

          <button type="submit" className="login-btn" disabled={isSubmitting}>
            {isSubmitting ? "Verificando..." : "Ingresar al Panel"}
          </button>
        </form>

        <div className="demo-box">
          <strong>🔒 Modo de Demostración Local</strong>
          Para probar la base administrativa de BeckPro sin configurar Firebase Auth, ingrese con las siguientes credenciales de simulación:
          <div style={{ marginTop: "8px" }}>
            Usuario: <code>admin@beckpro.com</code><br/>
            Contraseña: <code>admin123</code>
          </div>
        </div>
      </div>
    </div>
  );
}
