import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const defaultSettings = {
  companyName: "BeckPro Developer",
  email: "info@beckprodebeloper.com",
  whatsapp: "+502 5539 2986",
  domain: "beckprodeveloper.com",
  logo: "/assets/logo-beckpro-appc-hero.png",
  favicon: "/favicon.ico",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
};

const LOCAL_STORAGE_KEY = "beckpro_settings";

const getLocalSettings = () => {
  if (typeof window === "undefined") return defaultSettings;
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultSettings));
    return defaultSettings;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return defaultSettings;
  }
};

const setLocalSettings = (settings) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(settings));
};

export const settingsService = {
  // 1. Get settings
  async getSettings() {
    if (db) {
      try {
        const docRef = doc(db, "settings", "general");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          return { ...defaultSettings, ...docSnap.data() };
        } else {
          // If Firestore is empty, seed it with defaults
          await setDoc(docRef, defaultSettings);
          return defaultSettings;
        }
      } catch (error) {
        console.error("Error fetching settings from Firestore, falling back to local storage:", error);
        return getLocalSettings();
      }
    } else {
      return getLocalSettings();
    }
  },

  // 2. Save settings
  async saveSettings(newSettings) {
    if (db) {
      try {
        const docRef = doc(db, "settings", "general");
        await setDoc(docRef, newSettings, { merge: true });
        return { success: true };
      } catch (error) {
        console.error("Error saving settings to Firestore, falling back to local storage:", error);
      }
    }

    // LocalStorage Fallback
    setLocalSettings(newSettings);
    return { success: true };
  },
};
