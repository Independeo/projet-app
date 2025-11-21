import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email requis" }, { status: 400 });
    }

    const user = await prisma.utilisateurs.findUnique({
      where: { email },
    });

    if (!user) {
      // Réponse neutre pour ne pas révéler si l'email existe ou non
      return NextResponse.json({ message: "Si cet email existe, un lien a été envoyé" });
    }

    // Générer un token sécurisé
    const token = crypto.randomBytes(32).toString("hex");

    // Mettre à jour l'utilisateur avec le token et l'expiration
    await prisma.utilisateurs.update({
      where: { id: user.id },
      data: {
        reset_token: token,
        reset_token_expires: new Date(Date.now() + 1000 * 60 * 15), // 15 minutes
      },
    });

    // Construire le lien de réinitialisation
    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;

    // Configurer Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Envoyer l'email
    await transporter.sendMail({
      from: `"Support APEC" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Réinitialisation de mot de passe",
      html: `
        <p>Pour réinitialiser votre mot de passe, cliquez sur le lien ci-dessous :</p>
        <a href="${resetLink}">Réinitialiser mon mot de passe</a>
        <p>Ce lien expire dans 15 minutes.</p>
      `,
    });

    return NextResponse.json({ message: "Email envoyé" });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
