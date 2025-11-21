"use client";
import { useSession } from "next-auth/react";

export default function AdminPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Chargement...</p>;

  if (!session || session.user.role !== "admin") {
    return <p>Accès refusé</p>;
  }

  return <h1>Espace Admin</h1>;
}
