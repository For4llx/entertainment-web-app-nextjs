import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export async function GET() {
  const collections = await prisma.collection.findMany({
    where: {
      category: "TV Series",
    },
    include: {
      thumbnail: {
        include: {
          regular: true,
        },
      },
    },
  });

  return NextResponse.json({ collections });
}
