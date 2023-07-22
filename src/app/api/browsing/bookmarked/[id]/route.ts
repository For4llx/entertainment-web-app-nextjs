import { prisma } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { userId, isBookmarked } = await request.json();
  const collectionId = Number(params.id);
  let UpdatedUser = null;

  if (isBookmarked) {
    UpdatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        collections: { disconnect: { id: collectionId } },
      },
    });
  }

  if (!isBookmarked) {
    UpdatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        collections: { connect: { id: collectionId } },
      },
    });
  }

  return NextResponse.json({ UpdatedUser });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = Number(params.id);

  const movies = await prisma.user.findMany({
    where: { id: userId },
    select: {
      collections: {
        where: { category: "Movie" },
        include: {
          thumbnail: {
            include: {
              regular: true,
            },
          },
        },
      },
    },
  });

  const tvSeries = await prisma.user.findMany({
    where: { id: userId },
    select: {
      collections: {
        where: { category: "TV Series" },
        include: {
          thumbnail: {
            include: {
              regular: true,
            },
          },
        },
      },
    },
  });
  return NextResponse.json({ movies, tvSeries });
}

/*
    include: {
      collections: {
        where: { category: "TV Series" },
        include: {
          thumbnail: {
            include: {
              regular: true,
            },
          },
        },
      },
    },
*/
