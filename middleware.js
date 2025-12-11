import { NextResponse } from "next/server";

// Middleware désactivée pour rendre l'application publique
export function middleware(req) {
  // Ne fait rien : laisse toutes les requêtes passer
  return NextResponse.next();
}

// Aucun matcher : middleware non appliquée
export const config = {
  matcher: [],
};
