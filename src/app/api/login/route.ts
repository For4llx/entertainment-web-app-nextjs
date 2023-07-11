import { prisma } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const currentUser = await prisma.user.findUnique({
    where: { email },
  });
  if (!currentUser) {
    throw new Error("This email is not attributed by a user.");
  }
  const correctPassword = await bcrypt.compare(password, currentUser.password);

  if (!correctPassword) {
    throw new Error("Bad password");
  }

  const token = jwt.sign({ userId: email.userId }, process.env.TOKEN_KEY, {
    expiresIn: "24h",
  });

  return NextResponse.json({ currentUser, token });
}
