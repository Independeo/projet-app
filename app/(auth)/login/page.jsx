"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      mot_de_passe: motDePasse, // ⚡ correspond au nom utilisé dans [...nextauth]/route.js
    });

    if (res?.ok) {
      router.push("/dashboard"); // redirection après login
    } else {
      alert(res?.error || "Erreur de connexion");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-96 p-6 border rounded shadow bg-white"
      >
        <h1 className="text-2xl font-bold text-center">Connexion</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          required
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Se connecter
        </button>
        <a
  href="/forgot"
  className="text-sm text-blue-600 underline text-center"
>
  Mot de passe oublié ?
</a>

      </form>
    </div>
  );
}
