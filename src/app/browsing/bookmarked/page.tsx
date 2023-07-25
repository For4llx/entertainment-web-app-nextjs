import { options } from "@/app/api/auth/[...nextauth]/options";
import { getUser } from "@/components/authentification/AuthentificationAPI";
import { BrowsingCollection, BrowsingSearch } from "@/components/browsing";
import { getBookmarked } from "@/components/browsing/BrowsingAPI";
import { getServerSession, Session } from "next-auth";

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
