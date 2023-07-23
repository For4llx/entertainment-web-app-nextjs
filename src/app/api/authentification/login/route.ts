import { prisma } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import { nanoid } from "nanoid";
import { getJwtSecretKey } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  const currentUser = await prisma.user.findUnique({
    where: { email },
    include: {
      collections: {
        select: {
          id: true,
        },
      },
    },
  });

  if (!currentUser) {
    throw new Error("This email is not attributed by a user.");
  }

  const correctPassword = await bcrypt.compare(password, currentUser.password);

  if (!correctPassword) {
    throw new Error("Bad password");
  }

  const token = await new SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime("60m")
    .sign(new TextEncoder().encode(getJwtSecretKey()));

  return NextResponse.json({ currentUser, token });
}
