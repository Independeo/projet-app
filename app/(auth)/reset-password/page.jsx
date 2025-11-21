"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // récupère le token depuis l'URL

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setMessage("Les mots de passe ne correspondent pas");
      return;
    }

    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Mot de passe mis à jour !");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } else {
      setMessage(data.error || "Erreur");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-96 p-6 bg-white shadow rounded flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center">
          Réinitialiser le mot de passe
        </h1>

        <input
          type="password"
          placeholder="Nouveau mot de passe"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirmer"
          className="border p-2 rounded"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        <button className="bg-green-600 text-white p-2 rounded">
          Réinitialiser
        </button>

        {message && (
          <p className="text-sm text-center mt-2 text-red-600">{message}</p>
        )}
      </form>
    </div>
  );
}
