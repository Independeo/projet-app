import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import crypto from 'crypto';

const prisma = new PrismaClient();

async function main() {
  const migrationName = '000_baseline';
  const migrationFile = 'prisma/migrations/000_baseline/migration.sql';

  if (!fs.existsSync(migrationFile)) {
    console.error('Migration file not found:', migrationFile);
    process.exit(2);
  }

  const sql = fs.readFileSync(migrationFile, 'utf8');
  const checksum = crypto.createHash('sha256').update(sql).digest('hex');
  const now = new Date().toISOString();

  // Create _prisma_migrations if not exists
  await prisma.$executeRawUnsafe(`CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
    id text PRIMARY KEY,
    migration_name text NOT NULL,
    checksum text NOT NULL,
    started_at timestamptz,
    finished_at timestamptz,
    logs text,
    rolled_back boolean DEFAULT false,
    applied_steps_count int DEFAULT 0
  );`);

  // Check if migration already recorded
  const existing = await prisma.$queryRawUnsafe(`SELECT id FROM "_prisma_migrations" WHERE id = $1`, migrationName);
  if (existing && existing.length > 0) {
    console.log('Migration already recorded:', migrationName);
    await prisma.$disconnect();
    process.exit(0);
  }

  // Insert migration record (use now() for timestamps to avoid casting issues)
  await prisma.$executeRawUnsafe(`INSERT INTO "_prisma_migrations" (id, migration_name, checksum, started_at, finished_at, logs, rolled_back, applied_steps_count) VALUES ($1, $2, $3, now(), now(), $4, $5, $6)`,
    migrationName,
    migrationName,
    checksum,
    'baseline applied',
    false,
    0
  );

  console.log('Inserted baseline migration record:', migrationName);
  await prisma.$disconnect();
}

main().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
