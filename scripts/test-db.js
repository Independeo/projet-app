import 'dotenv/config';
import { prisma } from '../lib/prisma.js';

async function main() {
  try {
    await prisma.$connect();
    console.log('✅ Connexion à la base: OK');

    // Test simple: compter les utilisateurs si la table existe
    try {
      const count = await prisma.utilisateurs.count();
      console.log('ℹ️  Nombre d\'utilisateurs:', count);
    } catch (e) {
      console.warn('⚠️  La requête de test a échoué (table peut-être absente):', e.message);
    }

    await prisma.$disconnect();
    process.exit(0);
  } catch (err) {
    console.error('❌ Échec de la connexion à la base:', err.message || err);
    process.exit(1);
  }
}

main();
