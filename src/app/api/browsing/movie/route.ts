import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export async function GET() {
  const collection = await prisma.collection.findMany({
    where: {
      category: "Movie",
    },
    include: {
      thumbnail: {
        include: {
          regular: true,
        },
      },
    },
  });

  return NextResponse.json({ collection });
}
