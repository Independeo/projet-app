import dotenv from 'dotenv';
dotenv.config();
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log("Connexion réussie !");
  } catch (e) {
    console.error("Erreur de connexion :", e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
