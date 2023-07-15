import { prisma } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  const { email, password, passwordRepeated } = await request.json();

  const userAlreadyExist = await prisma.user.findUnique({
    where: { email },
  });

  if (!(password === passwordRepeated)) {
    throw new Error("the password and the confirmation password doesnt match");
  }

  if (userAlreadyExist) {
    throw new Error("This email is already attributed to a user");
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const token = jwt.sign({ userId: email.userId }, process.env.TOKEN_KEY, {
    expiresIn: "24h",
  });
  const newUser = await prisma.user.create({
    data: { email, password: passwordHash },
  });
  return NextResponse.json({ newUser, token });
}
