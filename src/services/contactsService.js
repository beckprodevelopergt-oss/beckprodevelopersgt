import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

// Seed data for local simulation mode
const seedContacts = [
  {
    id: "lead-1",
    name: "Luis Batres",
    email: "lbatres@ejemplo.com",
    phone: "+502 5539 2986",
    projectType: "Sitio Web Corporativo",
    message: "Necesito una cotización detallada para rediseñar la web corporativa de nuestra constructora. Buscamos diseño premium y SEO local.",
    status: "Nuevo",
    source: "Sitio Web",
    createdAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString(), // 2 hours ago
    updatedAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
  },
  {
    id: "lead-2",
    name: "María Jiménez",
    email: "maria.j@empresa.com",
    phone: "+502 4432 1109",
    projectType: "Tienda Online (E-commerce)",
    message: "Hola, me gustaría desarrollar una tienda en línea para mi marca de calzado artesanal. Requerimos pasarela de pagos integrada y panel de administración simple.",
    status: "En Proceso",
    source: "Sitio Web",
    createdAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString(), // 1 day ago
    updatedAt: new Date(Date.now() - 12 * 3600 * 1000).toISOString(),
  },
  {
    id: "lead-3",
    name: "Carlos Mendoza",
    email: "cmendoza@agencia.gt",
    phone: "+502 3312 9087",
    projectType: "Landing Page",
    message: "Necesitamos una landing page ultra rápida para capturar leads para una campaña de Google Ads que inicia el próximo mes. El diseño debe convertir muy bien.",
    status: "Completado",
    source: "Sitio Web",
    createdAt: new Date(Date.now() - 3 * 24 * 3600 * 1000).toISOString(), // 3 days ago
    updatedAt: new Date(Date.now() - 2 * 24 * 3600 * 1000).toISOString(),
  },
  {
    id: "lead-4",
    name: "Sofía Rivera",
    email: "sofia.rivera@clinica.com",
    phone: "+502 5908 4432",
    projectType: "Sistema a Medida",
    message: "Buscamos una clínica odontológica y requerimos un sistema web para reservar citas en línea, control de historial clínico de pacientes y facturación local.",
    status: "Archivado",
    source: "Sitio Web",
    createdAt: new Date(Date.now() - 7 * 24 * 3600 * 1000).toISOString(), // 7 days ago
    updatedAt: new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString(),
  },
  {
    id: "lead-5",
    name: "Javier Ortiz",
    email: "jortiz@marketing.gt",
    phone: "+502 4110 5589",
    projectType: "Automatización / Integración",
    message: "Queremos automatizar el traspaso de leads que caen en nuestro sitio hacia HubSpot, además de configurar disparadores de correos automatizados en WhatsApp.",
    status: "Nuevo",
    source: "Sitio Web",
    createdAt: new Date(Date.now() - 10 * 60 * 1000).toISOString(), // 10 minutes ago
    updatedAt: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
  },
];

const LOCAL_STORAGE_KEY = "beckpro_contacts";

const getLocalContacts = () => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(seedContacts));
    return seedContacts;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return seedContacts;
  }
};

const setLocalContacts = (contacts) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
};

export const contactsService = {
  // 1. Get all contacts sorted by createdAt descending
  async getContacts() {
    if (db) {
      try {
        const contactsCol = collection(db, "contacts");
        const q = query(contactsCol, orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        return snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            // Format timestamps to ISO Strings for client serialization
            createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : data.createdAt || new Date().toISOString(),
            updatedAt: data.updatedAt?.toDate ? data.updatedAt.toDate().toISOString() : data.updatedAt || new Date().toISOString(),
          };
        });
      } catch (error) {
        console.error("Error fetching contacts from Firestore, falling back to local storage:", error);
        return getLocalContacts();
      }
    } else {
      // Fallback local storage
      const contacts = getLocalContacts();
      // Sort descending by date
      return [...contacts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
  },

  // 2. Update contact status
  async updateStatus(id, status) {
    const updatedAt = new Date().toISOString();

    if (db && !id.startsWith("lead-")) {
      try {
        const docRef = doc(db, "contacts", id);
        await updateDoc(docRef, {
          status,
          updatedAt: serverTimestamp(),
        });
        return { success: true };
      } catch (error) {
        console.error("Error updating Firestore contact status, falling back to local storage:", error);
      }
    }

    // LocalStorage Fallback
    const contacts = getLocalContacts();
    const index = contacts.findIndex((c) => c.id === id);
    if (index !== -1) {
      contacts[index].status = status;
      contacts[index].updatedAt = updatedAt;
      setLocalContacts(contacts);
      return { success: true };
    }
    return { success: false, error: "Contacto no encontrado." };
  },

  // 3. Delete a contact
  async deleteContact(id) {
    if (db && !id.startsWith("lead-")) {
      try {
        const docRef = doc(db, "contacts", id);
        await deleteDoc(docRef);
        return { success: true };
      } catch (error) {
        console.error("Error deleting Firestore contact, falling back to local storage:", error);
      }
    }

    // LocalStorage Fallback
    const contacts = getLocalContacts();
    const filtered = contacts.filter((c) => c.id !== id);
    setLocalContacts(filtered);
    return { success: true };
  },
};
