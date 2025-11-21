import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  const { email, mot_de_passe, nom_utilisateur } = await req.json();

  try {
    // Hash côté serveur
    const hash = await bcrypt.hash(mot_de_passe, 10);

    await prisma.utilisateurs.create({
      data: {
        email,
        mot_de_passe_hash: hash,
        nom_utilisateur: nom_utilisateur,
      },
    });


return new Response(JSON.stringify({ message: "Utilisateur créé !" }), {
  status: 201,
  headers: { "Content-Type": "application/json" },
});

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Erreur lors de l'inscription" }), { status: 500 });
  }
}
