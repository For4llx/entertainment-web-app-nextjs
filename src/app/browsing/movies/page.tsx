import { options } from "@/app/api/auth/[...nextauth]/options";
import { getUser } from "@/components/authentification/AuthentificationAPI";
import { BrowsingCollection, BrowsingSearch } from "@/components/browsing";
import { getMovies } from "@/components/browsing/BrowsingAPI";
import { getServerSession, Session } from "next-auth";

export default async function MoviesPage() {
  const session = (await getServerSession(options)) as Session;
  const collections = await getMovies();
  const user = await getUser(session.user!.email as string);
  console.log(collections);

  return (
    <>
      <BrowsingSearch placeholder={"Search for movies"} />
      <BrowsingCollection
        collections={collections}
        title="Movies"
        user={user}
      />
    </>
  );
}
