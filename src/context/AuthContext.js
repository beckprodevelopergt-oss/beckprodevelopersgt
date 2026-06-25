"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  signOut as fbSignOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext({
  user: null,
  loading: true,
  isSimulation: false,
  login: async (email, password) => {},
  logout: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSimulation, setIsSimulation] = useState(false);

  useEffect(() => {
    // 1. If Firebase Auth is available, listen to real auth changes
    if (auth) {
      setIsSimulation(false);
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            isMock: false,
          });
        } else {
          setUser(null);
        }
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
      // 2. If Firebase Auth is NOT available, fall back to Simulation Mode (localStorage)
      setIsSimulation(true);
      const savedSession = localStorage.getItem("beckpro_session");
      if (savedSession) {
        setUser({
          uid: "mock-admin-uid",
          email: "admin@beckpro.com",
          isMock: true,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      if (auth) {
        // Real Firebase Login
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const fbUser = userCredential.user;
        setUser({
          uid: fbUser.uid,
          email: fbUser.email,
          isMock: false,
        });
        return { success: true };
      } else {
        // Mock Login for Simulation Mode
        if (
          email.trim().toLowerCase() === "admin@beckpro.com" &&
          password === "admin123"
        ) {
          setUser({
            uid: "mock-admin-uid",
            email: "admin@beckpro.com",
            isMock: true,
          });
          localStorage.setItem("beckpro_session", "true");
          return { success: true };
        } else {
          throw new Error("Credenciales inválidas. En modo simulación use: admin@beckpro.com / admin123");
        }
      }
    } catch (error) {
      setLoading(false);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      if (auth) {
        await fbSignOut(auth);
      } else {
        localStorage.removeItem("beckpro_session");
      }
      setUser(null);
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, isSimulation, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
