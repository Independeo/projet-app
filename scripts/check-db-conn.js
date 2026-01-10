import 'dotenv/config';
import net from 'net';

function parseHostPort(databaseUrl) {
  try {
    const url = new URL(databaseUrl);
    return { host: url.hostname, port: url.port ? Number(url.port) : 5432 };
  } catch (e) {
    console.error('Invalid DATABASE_URL:', e.message);
    process.exit(2);
  }
}

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  console.error('DATABASE_URL not set');
  process.exit(2);
}

const { host, port } = parseHostPort(dbUrl);
const socket = net.createConnection({ host, port }, () => {
  console.log('✅ TCP OK', `${host}:${port}`);
  socket.end();
  process.exit(0);
});

socket.on('error', (e) => {
  console.error('❌ TCP ERROR', e.message);
  process.exit(1);
});
