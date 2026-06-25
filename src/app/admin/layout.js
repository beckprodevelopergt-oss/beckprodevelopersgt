"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({ children }) {
  const { user, loading, isSimulation, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auth Guard
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  if (loading || !user) {
    return (
      <div className="admin-loading-screen">
        <div className="spinner"></div>
        <p>Cargando panel de administración...</p>
        <style dangerouslySetInnerHTML={{ __html: `
          .admin-loading-screen {
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

  const menuItems = [
    {
      label: "BeckPro Lab",
      path: "/admin",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="9" rx="1" />
          <rect x="14" y="3" width="7" height="5" rx="1" />
          <rect x="14" y="12" width="7" height="9" rx="1" />
          <rect x="3" y="16" width="7" height="5" rx="1" />
        </svg>
      ),
    },
    {
      label: "CRM Contactos",
      path: "/admin/crm",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      label: "Configuración",
      path: "/admin/settings",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
  ];

  const futureItems = [
    { label: "Gestor CMS", path: "/admin/cms" },
    { label: "Portafolio", path: "/admin/portfolio" },
    { label: "Blog", path: "/admin/blog" },
    { label: "Cotizaciones", path: "/admin/quotes" },
    { label: "Módulo IA", path: "/admin/ai" },
    { label: "Automatizaciones", path: "/admin/automations" },
  ];

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  const getPageTitle = () => {
    if (pathname === "/admin") return "Dashboard";
    if (pathname === "/admin/crm") return "CRM Contactos";
    if (pathname === "/admin/settings") return "Configuración";
    
    const futureItem = futureItems.find(item => item.path === pathname);
    return futureItem ? futureItem.label : "BeckPro Core";
  };

  return (
    <div className="admin-layout">
      {/* Self-contained responsive dashboard styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .admin-layout {
          display: flex;
          min-height: 100vh;
          background: #0b111e;
          font-family: 'Poppins', sans-serif;
          color: #f1f5f9;
        }

        /* SIDEBAR PANEL */
        .sidebar {
          width: ${sidebarCollapsed ? "70px" : "260px"};
          background: #0f172a;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 100;
          flex-shrink: 0;
        }

        .sidebar-brand {
          height: 70px;
          display: flex;
          align-items: center;
          padding: 0 ${sidebarCollapsed ? "18px" : "24px"};
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          white-space: nowrap;
          overflow: hidden;
        }

        .sidebar-brand h2 {
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .sidebar-brand h2 span {
          color: #12a2b3;
        }

        .sidebar-menu {
          padding: 24px 12px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .menu-section-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #475569;
          padding: 10px 12px 6px;
          font-weight: 600;
          display: ${sidebarCollapsed ? "none" : "block"};
        }

        .menu-item {
          display: flex;
          align-items: center;
          padding: 12px;
          border-radius: 8px;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.2s ease;
          gap: 12px;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
        }

        .menu-item svg {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .menu-item:hover {
          background: rgba(255, 255, 255, 0.02);
          color: #cbd5e1;
        }

        .menu-item.active {
          background: rgba(18, 162, 179, 0.1);
          color: #12a2b3;
          font-weight: 600;
        }

        /* FUTURE MODULES */
        .future-modules-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .future-item {
          font-size: 13px;
          padding: 10px 12px;
          color: #64748b;
          text-decoration: none;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: ${sidebarCollapsed ? "center" : "flex-start"};
          gap: 8px;
          transition: all 0.2s ease;
        }

        .future-item::before {
          content: '•';
          color: #475569;
          display: ${sidebarCollapsed ? "none" : "inline"};
        }

        .future-item:hover {
          color: #94a3b8;
          background: rgba(255, 255, 255, 0.01);
        }

        .future-item.active {
          color: #12a2b3;
          font-weight: 600;
          background: rgba(18, 162, 179, 0.05);
        }

        .sidebar-footer {
          padding: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .collapse-btn {
          width: 100%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: #94a3b8;
          padding: 8px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: inherit;
        }

        /* MAIN SECTION */
        .main-container {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          min-width: 0; /* Prevents flex children from stretching */
        }

        /* TOPBAR */
        .topbar {
          height: 70px;
          background: #0f172a;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 30px;
          flex-shrink: 0;
        }

        .topbar-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .menu-toggle {
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .menu-toggle svg {
          width: 24px;
          height: 24px;
        }

        .page-title {
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
        }

        /* SIMULATION BANNER */
        .simulation-badge {
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.25);
          color: #f59e0b;
          font-size: 12px;
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .simulation-badge::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          background: #f59e0b;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(245, 158, 11, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(245, 158, 11, 0); }
        }

        .topbar-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #cbd5e1;
        }

        .user-avatar {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #12a2b3 0%, #0e808e 100%);
          color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }

        .logout-btn {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #f87171;
          font-size: 13px;
          padding: 6px 12px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: inherit;
        }

        .logout-btn:hover {
          background: rgba(239, 68, 68, 0.2);
          color: #ffffff;
        }

        /* MAIN CONTENT AREA */
        .main-content {
          flex-grow: 1;
          padding: 30px;
          overflow-y: auto;
        }

        /* MOBILE MENU DRAWER Overlay */
        .mobile-overlay {
          display: none;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 992px) {
          .sidebar {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            width: 260px;
            transform: translateX(${mobileMenuOpen ? "0" : "-100%"});
            transition: transform 0.3s ease;
          }

          .mobile-overlay {
            display: ${mobileMenuOpen ? "block" : "none"};
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(4px);
            z-index: 90;
          }

          .topbar {
            padding: 0 20px;
          }

          .main-content {
            padding: 20px;
          }
        }
      `}} />

      {/* Mobile Drawer Overlay */}
      <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}></div>

      {/* Sidebar Panel */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <h2>
            BeckPro{!sidebarCollapsed && <span>Core</span>}
          </h2>
        </div>

        <nav className="sidebar-menu">
          <span className="menu-section-label">Módulos Activos</span>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`menu-item ${pathname === item.path ? "active" : ""}`}
            >
              {item.icon}
              {!sidebarCollapsed && <span>{item.label}</span>}
            </Link>
          ))}

          <span className="menu-section-label" style={{ marginTop: "20px" }}>Fases de Expansión</span>
          <div className="future-modules-list">
            {futureItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`future-item ${pathname === item.path ? "active" : ""}`}
              >
                {!sidebarCollapsed ? item.label : "•"}
              </Link>
            ))}
          </div>
        </nav>

        <div className="sidebar-footer">
          <button
            className="collapse-btn"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            {sidebarCollapsed ? "»" : "« Contraer"}
          </button>
        </div>
      </aside>

      {/* Main Container */}
      <div className="main-container">
        {/* Topbar */}
        <header className="topbar">
          <div className="topbar-left">
            {/* Hamburger button for mobile, toggle for desktop */}
            <button
              className="menu-toggle"
              onClick={() => {
                // On mobile, open drawer. On desktop, toggle collapse.
                if (window.innerWidth <= 992) {
                  setMobileMenuOpen(!mobileMenuOpen);
                } else {
                  setSidebarCollapsed(!sidebarCollapsed);
                }
              }}
              aria-label="Toggle Menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <h1 className="page-title">{getPageTitle()}</h1>

            {isSimulation && (
              <span className="simulation-badge">
                Modo Simulación Activo (Local)
              </span>
            )}
          </div>

          <div className="topbar-right">
            <div className="user-profile">
              <div className="user-avatar">
                {user.email ? user.email.charAt(0).toUpperCase() : "A"}
              </div>
              <span style={{ display: window.innerWidth <= 768 ? "none" : "block" }}>
                {user.email}
              </span>
            </div>

            <button className="logout-btn" onClick={handleLogout}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "16px", height: "16px" }}>
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Cerrar sesión
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
