import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export async function GET() {
  const collectionTrending = await prisma.collection.findMany({
    where: {
      isTrending: true,
    },
    include: {
      Thumbnail: {
        include: {
          trending: true,
        },
      },
    },
  });

  return NextResponse.json({ collectionTrending });
}
