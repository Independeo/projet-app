import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        mot_de_passe: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.mot_de_passe) {
          throw new Error("Email et mot de passe requis");
        }

        // Chercher l'utilisateur par email
        const user = await prisma.utilisateurs.findUnique({
          where: { email: credentials.email },
        });

        if (!user) throw new Error("Utilisateur introuvable");

        // Vérifier que le mot de passe existe
        if (!user.mot_de_passe_hash) throw new Error("Mot de passe invalide");

        // Comparer le mot de passe
        const isValid = await bcrypt.compare(
          credentials.mot_de_passe,
          user.mot_de_passe_hash
        );

        if (!isValid) throw new Error("Mot de passe incorrect");

        // Retourner l'utilisateur pour la session
        return {
  id: user.id.toString(),      // <-- converti BigInt en string
  email: user.email,
  role: user.role,
  nom_utilisateur: user.nom_utilisateur,
};

      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
};

// Exporter le handler pour GET et POST
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
