import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export async function GET() {
  const collectionTvSeries = await prisma.collection.findMany({
    where: {
      category: "TV Series",
    },
    include: {
      Thumbnail: {
        include: {
          regular: true,
        },
      },
    },
  });

  return NextResponse.json({ collectionTvSeries });
}
