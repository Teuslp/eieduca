import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const professores = await prisma.professor.findMany();
    return NextResponse.json(professores);
  } catch (error: any) {

    console.error("Erro CRÍTICO Prisma:", error);
    
    return NextResponse.json(
      { 
        message: "Erro ao buscar dados", 
        error_code: error?.code, 
        error_detail: error?.message 
      }, 
      { status: 500 }
    );
  }
}