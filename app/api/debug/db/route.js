import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const res = await prisma.$queryRaw`SELECT 1 as ok`;
    return new Response(JSON.stringify({ db: "reachable", result: res }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ db: "unreachable", error: String(err) }), { status: 500 });
  }
}
