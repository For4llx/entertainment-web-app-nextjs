import { options } from "@/app/api/auth/[...nextauth]/options";
import { prisma } from "@/app/db";
import { BrowsingCollection, BrowsingSearch } from "@/components/browsing";
import { IUser } from "@/interfaces/user";
import { getServerSession, Session } from "next-auth";

async function getBookmarked(userId: number) {
  const response = await fetch(
    `http://localhost:3000/api/browsing/bookmarked/${userId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data.movies[0].collections);
  console.log(data.tvSeries[0].collections);
  return data;
}

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
  const session = (await getServerSession(options)) as Session;
  const user = await getUser(session.user!.email as string);
  const { movies, tvSeries } = await getBookmarked(user.id);

  return (
    <>
      <BrowsingSearch placeholder={"Search for bookmarked shows"} />
      <BrowsingCollection
        collections={movies[0].collections}
        title="Bookmarked Movies"
        user={user}
      />
      <BrowsingCollection
        user={user}
        collections={tvSeries[0].collections}
        title="Bookmarked TV Series"
      />
    </>
  );
}
