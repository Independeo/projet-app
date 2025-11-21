import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// Middleware pour protéger les pages et gérer les rôles
export default withAuth(
  function middleware(req) {
    // Exemple : vérifier le rôle admin
    const url = req.nextUrl.clone();
    const session = req.nextauth?.token;

    // Si l'utilisateur est connecté mais pas admin et essaie d'accéder à /admin
    if (url.pathname.startsWith("/admin") && session?.role !== "admin") {
      url.pathname = "/login"; // redirection vers login
      return NextResponse.redirect(url);
    }

    // Par défaut, on laisse passer
    return NextResponse.next();
  },
  {
    // Pages protégées
    callbacks: {
      authorized: ({ token }) => !!token, // true si connecté
    },
  }
);

// Configuration des routes à protéger
export const config = {
  matcher: [
    "/dashboard/:path*", // protège toutes les routes sous /dashboard
    "/admin/:path*",     // protège toutes les routes sous /admin (optionnel)
  ],
};
