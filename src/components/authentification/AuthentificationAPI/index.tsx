import { prisma } from "@/app/db";
import { IUser } from "@/interfaces/user";

export async function getUser(email: string) {
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
  return user as IUser;
}
