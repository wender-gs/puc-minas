import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const seachParams = new URLSearchParams(new URL(request.url).search);

  const user = await prisma.usuarios.findUnique({
    where: { id: seachParams.get("id")! },
  });

  return NextResponse.json(user);
}
