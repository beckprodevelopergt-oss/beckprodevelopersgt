import { NextResponse } from "next/server";
import { db } from "../../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(request) {
  try {
    const body = await request.json();

    // Support both Spanish and English keys in incoming request
    const name = body.name || body.nombre;
    const email = body.email;
    const phone = body.phone || body.telefono;
    const projectType = body.projectType || body.tipoProyecto;
    const message = body.message || body.mensaje;

    // 1. Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: "El nombre completo es requerido." },
        { status: 400 }
      );
    }
    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: "El correo electrónico es requerido." },
        { status: 400 }
      );
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      return NextResponse.json(
        { error: "El correo electrónico ingresado no es válido." },
        { status: 400 }
      );
    }
    if (!phone || !phone.trim()) {
      return NextResponse.json(
        { error: "El teléfono es requerido." },
        { status: 400 }
      );
    }
    if (!projectType || !projectType.trim()) {
      return NextResponse.json(
        { error: "El tipo de proyecto es requerido." },
        { status: 400 }
      );
    }
    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: "El mensaje es requerido." },
        { status: 400 }
      );
    }

    const leadData = {
      status: body.status || "Nuevo",
      source: body.source || "Sitio Web",
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      projectType: projectType.trim(),
      message: message.trim(),
    };

    // 2. Prepare Emails for the next stage (Nodemailer / Resend)
    const emailAdmin = {
      to: process.env.ADMIN_EMAIL || "info@beckprodebeloper.com",
      subject: `[Nuevo Lead] ${leadData.name} - ${leadData.projectType}`,
      text: `Has recibido una nueva solicitud de diagnóstico digital desde el Sitio Web.

Detalles del Lead:
---------------------------------------------
Nombre: ${leadData.name}
Correo: ${leadData.email}
Teléfono: ${leadData.phone}
Tipo de Proyecto: ${leadData.projectType}
Mensaje: ${leadData.message}
Fecha de registro: ${new Date().toLocaleString("es-GT", {
        timeZone: "America/Guatemala",
      })}
---------------------------------------------`,
    };

    const emailClient = {
      to: leadData.email,
      subject: `Confirmación de Solicitud de Diagnóstico - BeckPro Developer`,
      text: `Hola ${leadData.name},

Gracias por ponerte en contacto con BeckPro Developer.

Hemos recibido con éxito tu solicitud de diagnóstico digital para tu proyecto de "${
        leadData.projectType
      }".

Detalles recibidos:
- Teléfono de contacto: ${leadData.phone}
- Mensaje/Idea: ${leadData.message}

Un especialista de nuestro equipo analizará tus requerimientos y se pondrá en contacto contigo en un plazo máximo de 24 horas hábiles a través de tu teléfono o este correo electrónico para coordinar tu diagnóstico.

Atentamente,
El equipo de BeckPro Developer
https://beckprodeveloper.com`,
    };

    console.log("--- PREPARACIÓN DE CORREOS (FASE 2) ---");
    console.log("Correo para Administrador listo:", emailAdmin);
    console.log("Correo para Cliente listo:", emailClient);
    console.log("---------------------------------------");

    // 3. Save to Firestore (Leads collection)
    if (db) {
      const docRef = await addDoc(collection(db, "Leads"), {
        ...leadData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      console.log(`[Firestore] Documento guardado con éxito. ID: ${docRef.id}`);
      return NextResponse.json({
        success: true,
        message: "Lead guardado correctamente en Firestore.",
        id: docRef.id,
        lead: {
          id: docRef.id,
          ...leadData,
          createdAt: new Date().toISOString(),
        },
        emailsPrepared: true,
      });
    } else {
      console.warn(
        "[Firestore] Base de datos no configurada. Simulación en logs exitosa:",
        leadData
      );
      return NextResponse.json({
        success: true,
        message:
          "Lead procesado (Simulación: Firebase no configurada en variables de entorno).",
        mock: true,
        id: "mock-id-12345",
        lead: {
          id: "mock-id-12345",
          ...leadData,
          createdAt: new Date().toISOString(),
        },
        emailsPrepared: true,
      });
    }
  } catch (error) {
    console.error("Error en /api/leads:", error);
    return NextResponse.json(
      { error: "Error interno del servidor al procesar la solicitud." },
      { status: 500 }
    );
  }
}
