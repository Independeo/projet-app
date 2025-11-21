import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { token, password } = await req.json();

    if (!token || !password)
      return NextResponse.json({ error: "Données manquantes" }, { status: 400 });

    const user = await prisma.utilisateurs.findFirst({
      where: {
        reset_token: token,
        reset_token_expires: { gte: new Date() }, // valide si pas expiré
      },
    });

    if (!user)
      return NextResponse.json({ error: "Token invalide ou expiré" }, { status: 400 });

    const hash = await bcrypt.hash(password, 10);

    await prisma.utilisateurs.update({
      where: { id: user.id },
      data: {
        mot_de_passe_hash: hash,
        reset_token: null,
        reset_token_expires: null,
      },
    });

    return NextResponse.json({ message: "Mot de passe mis à jour !" });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
