import 'dotenv/config';
import { prisma } from '../lib/prisma.js';
import bcrypt from 'bcrypt';

const TEST_EMAIL = 'copilot-test+auth@example.com';
const TEST_PASSWORD = 'Test1234!';

async function main() {
  try {
    // Cleanup any previous test user
    await prisma.utilisateurs.deleteMany({ where: { email: TEST_EMAIL } });

    // Hash password and create user (similar to register route)
    const hash = await bcrypt.hash(TEST_PASSWORD, 10);
    const user = await prisma.utilisateurs.create({
      data: {
        email: TEST_EMAIL,
        mot_de_passe_hash: hash,
        nom_utilisateur: 'Copilot Test',
      },
    });
    console.log('✅ Utilisateur de test créé:', user.email);

    // Emuler authorize() de next-auth
    const fetched = await prisma.utilisateurs.findUnique({ where: { email: TEST_EMAIL } });
    if (!fetched) throw new Error('Utilisateur non trouvé après création');

    const isValid = await bcrypt.compare(TEST_PASSWORD, fetched.mot_de_passe_hash);
    if (isValid) {
      console.log('✅ Authentification: mot de passe correct (authorize OK)');
    } else {
      console.error('❌ Authentification: mot de passe incorrect');
    }

    // Nettoyage
    await prisma.utilisateurs.delete({ where: { id: user.id } });
    console.log('🧼 Utilisateur de test supprimé');

    await prisma.$disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Erreur test-auth-flow:', err.message || err);
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();
