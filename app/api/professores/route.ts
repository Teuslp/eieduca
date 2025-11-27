import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Busca todos os professores usando o Prisma
    // Ele usa automaticamente a DATABASE_URL que configuramos na Vercel
    const professores = await prisma.professor.findMany();

    return NextResponse.json(professores);
  } catch (error) {
    console.error("Erro ao buscar professores:", error);
    return NextResponse.json(
      { error: "Erro interno ao buscar professores" },
      { status: 500 }
    );
  }
}