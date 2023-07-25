import { options } from "@/app/api/auth/[...nextauth]/options";
import { prisma } from "@/app/db";
import {
  BrowsingCarousel,
  BrowsingCollection,
  BrowsingSearch,
} from "@/components/browsing";
import { ICollection } from "@/interfaces/collection";
import { IUser } from "@/interfaces/user";
import { getServerSession, Session } from "next-auth";

async function getCollections() {
  const response = await fetch("http://localhost:3000/api/browsing", {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const data = await response.json();
  return data.collection as ICollection[];
}
/*
async function getBookmarked() {
  const response = await fetch(
    "http://localhost:3000/api/browsing/bookmarked",
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data.collection as ICollection[];
}
*/
async function getUser(email: string) {
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

export default async function HomePage() {
  /*

  */
  const session = (await getServerSession(options)) as Session;
  const user = await getUser(session.user!.email as string);
  const collections = await getCollections();

  return (
    <>
      <BrowsingSearch placeholder={"Search for movies or TV series"} />
      <BrowsingCarousel />
      <BrowsingCollection
        collections={collections}
        user={user}
        title="Recommended for you"
      />
    </>
  );
}
