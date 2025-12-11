export async function GET() {
  return Response.json({
    env_vars: {
      DATABASE_URL: process.env.DATABASE_URL ? "✓ Défini" : "✗ Manquant",
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ? "✓ Défini" : "✗ Manquant",
      NEXTAUTH_URL: process.env.NEXTAUTH_URL || "non défini",
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "non défini",
      NODE_ENV: process.env.NODE_ENV,
    },
    message: "Vérification des variables d'environnement"
  });
}
