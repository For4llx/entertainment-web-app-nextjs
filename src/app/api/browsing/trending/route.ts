import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export async function GET() {
  const collections = await prisma.collection.findMany({
    where: {
      isTrending: true,
    },
    include: {
      thumbnail: {
        include: {
          trending: true,
        },
      },
    },
  });

  return NextResponse.json({ collections });
}
