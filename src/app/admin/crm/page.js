"use client";

import { useState, useEffect } from "react";
import { contactsService } from "@/services/contactsService";

export default function CrmPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos");
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    setLoading(true);
    const data = await contactsService.getContacts();
    setContacts(data);
    setLoading(false);
  };

  const handleStatusChange = async (id, newStatus) => {
    const result = await contactsService.updateStatus(id, newStatus);
    if (result.success) {
      // Update local state
      setContacts((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status: newStatus, updatedAt: new Date().toISOString() } : c))
      );
      // If the currently selected contact is updated, sync its details
      if (selectedContact && selectedContact.id === id) {
        setSelectedContact((prev) => ({ ...prev, status: newStatus }));
      }
    }
  };

  const handleDelete = async (id, name) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el lead de "${name}"? Esta acción no se puede deshacer.`);
    if (confirmDelete) {
      const result = await contactsService.deleteContact(id);
      if (result.success) {
        setContacts((prev) => prev.filter((c) => c.id !== id));
        if (selectedContact && selectedContact.id === id) {
          setSelectedContact(null);
        }
      }
    }
  };

  // Search and filter logic
  const filteredContacts = contacts.filter((c) => {
    const query = search.toLowerCase().trim();
    const matchesSearch =
      c.name.toLowerCase().includes(query) ||
      c.email.toLowerCase().includes(query) ||
      c.phone.toLowerCase().includes(query) ||
      c.projectType.toLowerCase().includes(query);

    const matchesStatus = statusFilter === "Todos" || c.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusClass = (status) => {
    switch (status) {
      case "Nuevo": return "badge-new";
      case "En Proceso": return "badge-process";
      case "Completado": return "badge-done";
      case "Archivado": return "badge-archived";
      default: return "badge-archived";
    }
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("es-GT", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="crm-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .crm-page {
          display: flex;
          flex-direction: column;
          gap: 25px;
          position: relative;
        }

        /* FILTERS & SEARCH ROW */
        .crm-controls {
          display: flex;
          gap: 16px;
          background: rgba(30, 41, 59, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 20px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
          flex-wrap: wrap;
          align-items: center;
        }

        .search-input-wrapper {
          flex-grow: 1;
          position: relative;
          min-width: 250px;
        }

        .search-input-wrapper input {
          width: 100%;
          background: rgba(11, 17, 30, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 12px 16px;
          color: #ffffff;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s ease;
        }

        .search-input-wrapper input:focus {
          border-color: #12a2b3;
          outline: none;
        }

        .filter-select-wrapper {
          min-width: 180px;
        }

        .filter-select-wrapper select {
          width: 100%;
          background: rgba(11, 17, 30, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 12px 16px;
          color: #ffffff;
          font-size: 14px;
          font-family: inherit;
          cursor: pointer;
        }

        /* REFRESH BUTTON */
        .refresh-btn {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: #cbd5e1;
          padding: 12px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-family: inherit;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
        }

        .refresh-btn:hover {
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
        }

        /* CRM GRID LAYOUT FOR DETAILS SIDE DRAWER */
        .crm-content-layout {
          display: flex;
          gap: 25px;
          align-items: flex-start;
        }

        .table-panel {
          flex-grow: 1;
          background: rgba(30, 41, 59, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 24px;
          backdrop-filter: blur(10px);
          min-width: 0; /* Prevents overflow */
        }

        /* DETAIL DRAWER */
        .detail-drawer {
          width: 380px;
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 24px;
          backdrop-filter: blur(20px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex-shrink: 0;
          position: sticky;
          top: 30px;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @media (max-width: 1200px) {
          .crm-content-layout {
            flex-direction: column;
          }
          .detail-drawer {
            width: 100%;
            position: static;
          }
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 12px;
        }

        .drawer-header h3 {
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
        }

        .close-drawer-btn {
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }

        .close-drawer-btn:hover {
          color: #ffffff;
        }

        .drawer-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-size: 14px;
        }

        .detail-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .detail-group label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #475569;
          font-weight: 600;
        }

        .detail-group span, .detail-group a {
          color: #cbd5e1;
        }

        .detail-group a {
          text-decoration: none;
          color: #12a2b3;
        }

        .detail-group a:hover {
          text-decoration: underline;
        }

        .detail-message-box {
          background: rgba(11, 17, 30, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 14px;
          font-size: 13.5px;
          color: #cbd5e1;
          line-height: 1.5;
          white-space: pre-wrap;
        }

        /* TABLE */
        .table-responsive {
          overflow-x: auto;
        }

        .crm-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .crm-table th {
          font-size: 12px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 12px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          font-weight: 600;
        }

        .crm-table td {
          padding: 14px 16px;
          font-size: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          color: #cbd5e1;
        }

        .crm-table tbody tr {
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .crm-table tbody tr:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        .crm-table tbody tr.selected {
          background: rgba(18, 162, 179, 0.05);
          border-left: 3px solid #12a2b3;
        }

        .crm-table tbody tr.selected td {
          padding-left: 13px; /* Offset border */
        }

        /* INLINE STATUS SELECT */
        .status-select {
          background: rgba(11, 17, 30, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 12.5px;
          font-family: inherit;
          cursor: pointer;
        }

        /* ACTION BUTTONS */
        .action-cell {
          display: flex;
          align-items: center;
          gap: 12px;
          /* Stop click propagation on actions cell to avoid opening drawer */
        }

        .action-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease;
        }

        .btn-view { color: #12a2b3; }
        .btn-view:hover { color: #0e808e; }
        .btn-delete { color: #f87171; }
        .btn-delete:hover { color: #ef4444; }

        .action-btn svg {
          width: 16px;
          height: 16px;
        }

        /* BADGES */
        .badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          text-align: center;
        }

        .badge-new { background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.2); }
        .badge-process { background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.2); }
        .badge-done { background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.2); }
        .badge-archived { background: rgba(148, 163, 184, 0.15); color: #cbd5e1; border: 1px solid rgba(148, 163, 184, 0.2); }

        .empty-results {
          padding: 50px;
          text-align: center;
          color: #64748b;
        }

        .empty-results p {
          margin-top: 10px;
        }
      `}} />

      {/* CRM Search and Filter Controls */}
      <div className="crm-controls">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Buscar por nombre, correo, teléfono o tipo de proyecto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-select-wrapper">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="Todos">Todos los Estados</option>
            <option value="Nuevo">Nuevos</option>
            <option value="En Proceso">En Proceso</option>
            <option value="Completado">Completados</option>
            <option value="Archivado">Archivados</option>
          </select>
        </div>

        <button className="refresh-btn" onClick={loadContacts}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "16px", height: "16px" }}>
            <path d="M23 4v6h-6" />
            <path d="M1 20v-6h6" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
          </svg>
          Sincronizar
        </button>
      </div>

      {/* CRM Layout content */}
      <div className="crm-content-layout">
        {/* Table Panel */}
        <div className="table-panel">
          {loading ? (
            <div style={{ textAlign: "center", padding: "50px", color: "#64748b" }}>
              Cargando registros...
            </div>
          ) : filteredContacts.length === 0 ? (
            <div className="empty-results">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "40px", height: "40px", color: "#475569" }}>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <p>No se encontraron contactos que coincidan con la búsqueda.</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="crm-table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Contacto</th>
                    <th>Proyecto</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContacts.map((contact) => (
                    <tr
                      key={contact.id}
                      className={selectedContact && selectedContact.id === contact.id ? "selected" : ""}
                      onClick={() => setSelectedContact(contact)}
                    >
                      <td className="lead-name">{contact.name}</td>
                      <td>
                        <div>{contact.email}</div>
                        <div style={{ fontSize: "12px", color: "#64748b" }}>{contact.phone}</div>
                      </td>
                      <td>{contact.projectType}</td>
                      <td>{formatDate(contact.createdAt)}</td>
                      <td onClick={(e) => e.stopPropagation()}>
                        {/* Inline status select */}
                        <select
                          value={contact.status}
                          onChange={(e) => handleStatusChange(contact.id, e.target.value)}
                          className="status-select"
                        >
                          <option value="Nuevo">Nuevo</option>
                          <option value="En Proceso">En Proceso</option>
                          <option value="Completado">Completado</option>
                          <option value="Archivado">Archivado</option>
                        </select>
                      </td>
                      <td onClick={(e) => e.stopPropagation()}>
                        <div className="action-cell">
                          <button
                            className="action-btn btn-view"
                            onClick={() => setSelectedContact(contact)}
                            title="Ver detalles"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          </button>
                          <button
                            className="action-btn btn-delete"
                            onClick={() => handleDelete(contact.id, contact.name)}
                            title="Eliminar"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1="10" y1="11" x2="10" y2="17" />
                              <line x1="14" y1="11" x2="14" y2="17" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Selected Contact Details Drawer */}
        {selectedContact && (
          <div className="detail-drawer">
            <div className="drawer-header">
              <h3>Detalles del Lead</h3>
              <button
                className="close-drawer-btn"
                onClick={() => setSelectedContact(null)}
              >
                ✕
              </button>
            </div>

            <div className="drawer-body">
              <div className="detail-group">
                <label>Nombre Completo</label>
                <span className="lead-name" style={{ fontSize: "16px" }}>
                  {selectedContact.name}
                </span>
              </div>

              <div className="detail-group">
                <label>Estado</label>
                <div>
                  <span className={`badge ${getStatusClass(selectedContact.status)}`}>
                    {selectedContact.status}
                  </span>
                </div>
              </div>

              <div className="detail-group">
                <label>Correo Electrónico</label>
                <a href={`mailto:${selectedContact.email}`}>
                  {selectedContact.email}
                </a>
              </div>

              <div className="detail-group">
                <label>Teléfono / WhatsApp</label>
                <a
                  href={`https://wa.me/${selectedContact.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedContact.phone}
                </a>
              </div>

              <div className="detail-group">
                <label>Tipo de Proyecto</label>
                <span>{selectedContact.projectType}</span>
              </div>

              <div className="detail-group">
                <label>Mensaje / Idea</label>
                <div className="detail-message-box">
                  {selectedContact.message}
                </div>
              </div>

              <div className="detail-group">
                <label>Origen de Captura</label>
                <span>{selectedContact.source}</span>
              </div>

              <div className="detail-group">
                <label>Fecha y Hora de Envío</label>
                <span>{formatDate(selectedContact.createdAt)}</span>
              </div>

              {selectedContact.updatedAt && (
                <div className="detail-group">
                  <label>Última Actualización</label>
                  <span>{formatDate(selectedContact.updatedAt)}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
