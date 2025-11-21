"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Un email de réinitialisation a été envoyé !");
    } else {
      setMessage(data.error || "Erreur lors de la demande.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
  <form
  onSubmit={handleSubmit}
  className="flex flex-col gap-4 w-96 p-6 border rounded shadow"
>

        <h1 className="text-2xl font-bold text-center">Mot de passe oublié</h1>

        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 rounded"
        />

        <button className="bg-blue-600 text-white p-2 rounded" type="submit">
          Envoyer le lien
        </button>

        {message && <p className="text-sm text-center mt-2">{message}</p>}
      </form>
    </div>
  );
}
