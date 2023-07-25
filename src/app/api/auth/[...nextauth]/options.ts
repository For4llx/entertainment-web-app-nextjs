import { prisma } from "@/app/db";
import { IUser } from "@/interfaces/user";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email } = credentials;
        const user = await prisma.user.findUnique({
          where: { email },
          include: {
            collections: {
              select: {
                id: true,
              },
            },
          },
        });
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/authentification/login",
  },
  secret: process.env.TOKEN_KEY,
  callbacks: {
    async redirect({ url, baseUrl }) {
      return "http://localhost:3000/browsing/home";
    },
  },
};
/*
  callbacks: {
    async redirect({ url, baseUrl }) {
      return "http://localhost:3000/browsing/home";
    },
  },
*/
