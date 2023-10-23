import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const result = await request.json();

  const user = await prisma.usuarios.create({
    data: { name: result.name, email: result.email, password: result.pass },
  });

  return NextResponse.json(user);
}
