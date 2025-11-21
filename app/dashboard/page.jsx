"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Si l'utilisateur n'est pas connecté, tu peux rediriger (optionnel)
  if (status === "loading") return <p>Chargement...</p>;
  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-3xl font-bold">Bienvenue, {session.user.nom_utilisateur || session.user.email} !</h1>
      
      {/* Bouton Logout */}
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="bg-red-600 text-white p-2 rounded"
      >
        Déconnexion
      </button>
      
      {/* Exemple de contenu Dashboard */}
      <div className="mt-4 p-4 border rounded w-96 text-center">
        <p>L'application est construction</p>
      </div>
    </div>
  );
}
