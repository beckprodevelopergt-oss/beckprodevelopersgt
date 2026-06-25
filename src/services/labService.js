import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

// Seed Data for BeckPro Lab - General Vision
const defaultVision = {
  vision: "Ser la plataforma de desarrollo de software a medida líder en la región, impulsando la transformación digital de empresas mediante arquitectura modular y escalabilidad.",
  mision: "Facilitar soluciones tecnológicas de alta costura, integrando procesos de automatización y software de alta calidad, liberando el potencial operativo de nuestros clientes.",
  objetivoActual: "Finalizar BeckPro CRM",
  porcentajeObjetivo: 85,
};

// Seed Data for Roadmap Sprints
const defaultRoadmap = [
  {
    id: "sprint-1",
    sprintName: "Sprint 1: Réplica Visual y Next.js",
    status: "Completado",
    percentage: 100,
    date: "Junio 2026",
    responsible: "BeckPro Team",
    details: "Migración de la landing page estática index.html a componentes modulares en React/Next.js con estilos encapsulados y responsive idéntico."
  },
  {
    id: "sprint-2",
    sprintName: "Sprint 2: BeckPro Core y CRM",
    status: "Completado",
    percentage: 100,
    date: "Junio 2026",
    responsible: "BeckPro Team",
    details: "Desarrollo de la base administrativa de la plataforma, integración de Firebase Authentication, panel CRM de contactos, y módulo de configuración corporativa."
  },
  {
    id: "sprint-3",
    sprintName: "Sprint 3: BeckPro Lab",
    status: "En Desarrollo",
    percentage: 30,
    date: "Junio 2026",
    responsible: "BeckPro Team",
    details: "Creación del centro de visión, estrategia e innovación de BeckPro como la consola central de control en /admin."
  },
  {
    id: "sprint-4",
    sprintName: "Sprint 4: Módulo CMS y Blog",
    status: "Planeado",
    percentage: 0,
    date: "Julio 2026",
    responsible: "BeckPro Team",
    details: "Desarrollo de los editores visuales dinámicos de CMS para modificar secciones del sitio público y el gestor de artículos de blog."
  },
  {
    id: "sprint-5",
    sprintName: "Sprint 5: Módulo IA y Cotizaciones",
    status: "Planeado",
    percentage: 0,
    date: "Julio 2026",
    responsible: "BeckPro Team",
    details: "Conexión con la API de Gemini para análisis de leads y generador interactivo de propuestas comerciales PDF."
  }
];

// Seed Data for Kanban Ideas
const defaultIdeas = [
  {
    id: "idea-1",
    title: "Integración con Calcom para citas",
    description: "Sincronizar el formulario del cliente con Cal.com para permitir reservar citas de diagnóstico de forma inmediata tras el envío.",
    priority: "Media",
    status: "Investigación",
    date: "2026-06-25",
    responsible: "Asesor Técnico",
  },
  {
    id: "idea-2",
    title: "Scoring automático de leads con IA",
    description: "Analizar el mensaje del cliente con Gemini Pro en el backend para pre-clasificar la viabilidad comercial de 1 a 5 estrellas.",
    priority: "Alta",
    status: "Nueva",
    date: "2026-06-25",
    responsible: "Ingeniero IA",
  },
  {
    id: "idea-3",
    title: "Optimización de carga de imágenes en Hero",
    description: "Migrar el fondo animado del Hero del sitio público a formatos WebP/AVIF y optimizar el peso global de los scripts.",
    priority: "Baja",
    status: "Diseño",
    date: "2026-06-24",
    responsible: "Frontend Dev",
  },
  {
    id: "idea-4",
    title: "Notificaciones por WhatsApp en leads",
    description: "Configurar un webhook con la API oficial de WhatsApp para enviar una confirmación interactiva al cliente al caer su solicitud.",
    priority: "Alta",
    status: "Desarrollo",
    date: "2026-06-23",
    responsible: "Backend Dev",
  },
  {
    id: "idea-5",
    title: "Integración final con Web3Forms",
    description: "Desarrollar el envío asíncrono asilado con Web3Forms, validación en cliente, honeypot antispam y timeout de botón.",
    priority: "Alta",
    status: "Implementada",
    date: "2026-06-25",
    responsible: "Frontend Dev",
  },
];

// Seed Data for Decision Logs
const defaultDecisions = [
  {
    id: "dec-1",
    title: "Migración de Leads a Colección Contacts",
    description: "Se decidió cambiar el nombre de la colección de Leads a contacts en Firestore para unificar nomenclaturas y facilitar la integración del CRM.",
    impact: "Medio",
    responsible: "Arquitecto de Software",
    date: "2026-06-25",
  },
  {
    id: "dec-2",
    title: "Adopción de Next.js App Router",
    description: "Se eligió Next.js App Router en lugar de Vite estático para dar soporte nativo a APIs serverless, enrutamiento dinámico y pre-renderizado óptimo.",
    impact: "Alto",
    responsible: "Líder Técnico",
    date: "2026-06-25",
  },
  {
    id: "dec-3",
    title: "Implementación de Web3Forms como API de Contacto",
    description: "Se adoptó Web3Forms para habilitar pruebas de envío de correos en tiempo real inmediatas, sin dependencias de servidores SMTP propios.",
    impact: "Medio",
    responsible: "Líder Técnico",
    date: "2026-06-25",
  },
];

// Seed Data for Inspirations Gallery
const defaultInspirations = [
  {
    id: "insp-1",
    name: "Linear",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=60",
    url: "https://linear.app",
    notes: "Acento de color sutil, tipografía limpia, interfaz extremadamente ágil y organización de tareas fluida.",
  },
  {
    id: "insp-2",
    name: "Stripe",
    imageUrl: "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?w=400&auto=format&fit=crop&q=60",
    url: "https://stripe.com",
    notes: "Uso de gradientes complejos interactivos, tablas de alta densidad informativa y bordes pulidos.",
  },
  {
    id: "insp-3",
    name: "Vercel",
    imageUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&auto=format&fit=crop&q=60",
    url: "https://vercel.com",
    notes: "Estética purista minimalista, uso del negro y blanco, bordes semi-transparentes y cajas colapsables rápidas.",
  },
];

// Seed Data for Project Evolution Timeline
const defaultTimeline = [
  {
    id: "time-1",
    date: "2026-06-24",
    title: "Inicio del Proyecto",
    description: "Inicialización del repositorio, análisis de index.html original y planeamiento de la arquitectura modular en Next.js.",
    responsible: "Product Owner",
  },
  {
    id: "time-2",
    date: "2026-06-25",
    title: "Fase 1 Completada",
    description: "Estructura del sitio y réplica visual del 100% terminada y compilada con éxito.",
    responsible: "Frontend Team",
  },
  {
    id: "time-3",
    date: "2026-06-25",
    title: "Fase 2 y 2A Completadas",
    description: "Configuración de servicios Firebase, API de leads y conexión e integración final con Web3Forms con pruebas reales exitosas.",
    responsible: "Fullstack Team",
  },
  {
    id: "time-4",
    date: "2026-06-25",
    title: "Sprint 2 Completado",
    description: "Creación del área administrativa (login, dashboard corporativo, CRM de contactos con panel de detalles y módulo de configuración).",
    responsible: "Core Team",
  },
];

// Citas de innovación
const defaultThoughts = [
  "La mejor forma de predecir el futuro es creándolo. — Alan Kay",
  "El software es una gran combinación entre arte y ciencia. — Bill Gates",
  "La simplicidad es la sofisticación suprema. — Leonardo da Vinci",
  "La innovación es lo que distingue a un líder de un seguidor. — Steve Jobs",
  "No te preocupes si no funciona bien. Si todo funcionara bien, estarías despedido. — Ley de Mosher",
  "La tecnología es mejor cuando une a la gente. — Matt Mullenweg",
  "El diseño no es solo lo que se ve y se siente. El diseño es cómo funciona. — Steve Jobs"
];

// Helper functions for Local Storage
const getLocal = (key, fallback) => {
  if (typeof window === "undefined") return fallback;
  const stored = localStorage.getItem(key);
  if (!stored) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return fallback;
  }
};

const setLocal = (key, data) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(data));
};

export const labService = {
  // ==========================================
  // VISION & OBJECTIVES
  // ==========================================
  async getVision() {
    if (db) {
      try {
        const docRef = doc(db, "lab", "vision");
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          return { ...defaultVision, ...snap.data() };
        } else {
          await setDoc(docRef, defaultVision);
          return defaultVision;
        }
      } catch (e) {
        console.error("Error fetching vision from Firestore, using local:", e);
        return getLocal("beckpro_lab_vision", defaultVision);
      }
    }
    return getLocal("beckpro_lab_vision", defaultVision);
  },

  async saveVision(visionData) {
    if (db) {
      try {
        const docRef = doc(db, "lab", "vision");
        await setDoc(docRef, visionData, { merge: true });
        return { success: true };
      } catch (e) {
        console.error("Error saving vision to Firestore, using local:", e);
      }
    }
    setLocal("beckpro_lab_vision", visionData);
    return { success: true };
  },

  // ==========================================
  // ROADMAP SPRINTS
  // ==========================================
  async getRoadmap() {
    // In Fase 1, we just return the local seed data. Under future phases we can fetch from Firestore
    return getLocal("beckpro_lab_roadmap", defaultRoadmap);
  },

  // ==========================================
  // KANBAN IDEAS
  // ==========================================
  async getIdeas() {
    return getLocal("beckpro_lab_ideas", defaultIdeas);
  },

  async saveIdeas(ideas) {
    setLocal("beckpro_lab_ideas", ideas);
    return { success: true };
  },

  // ==========================================
  // DECISION LOG
  // ==========================================
  async getDecisions() {
    return getLocal("beckpro_lab_decisions", defaultDecisions);
  },

  async saveDecisions(decisions) {
    setLocal("beckpro_lab_decisions", decisions);
    return { success: true };
  },

  // ==========================================
  // INSPIRATIONS GALLERY
  // ==========================================
  async getInspirations() {
    return getLocal("beckpro_lab_inspiration", defaultInspirations);
  },

  async saveInspirations(inspirations) {
    setLocal("beckpro_lab_inspiration", inspirations);
    return { success: true };
  },

  // ==========================================
  // TIMELINE EVOLUTION
  // ==========================================
  async getTimeline() {
    return getLocal("beckpro_lab_timeline", defaultTimeline);
  },

  // ==========================================
  // THOUGHT OF THE DAY
  // ==========================================
  getThought() {
    if (typeof window === "undefined") return defaultThoughts[0];
    // Pick a random thought
    const index = Math.floor(Math.random() * defaultThoughts.length);
    return defaultThoughts[index];
  }
};
