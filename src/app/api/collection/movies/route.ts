import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export async function GET() {
  const collectionRecommanded = await prisma.collection.findMany({
    where: {
      category: "Movie",
    },
    include: {
      Thumbnail: {
        include: {
          regular: true,
        },
      },
    },
  });

  return NextResponse.json({ collectionRecommanded });
}