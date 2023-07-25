import { options } from "@/app/api/auth/[...nextauth]/options";
import { getUser } from "@/components/authentification/AuthentificationAPI";
import {
  BrowsingCarousel,
  BrowsingCollection,
  BrowsingSearch,
} from "@/components/browsing";
import {
  getCollections,
  getTrendings,
} from "@/components/browsing/BrowsingAPI";
import { getServerSession, Session } from "next-auth";

export default async function HomePage() {
  const session = (await getServerSession(options)) as Session;
  const collections = await getCollections();
  const trendings = await getTrendings();
  const user = await getUser(session.user!.email as string);
  console.log(collections);

  return (
    <>
      <BrowsingSearch placeholder={"Search for movies or TV series"} />
      <BrowsingCarousel trendings={trendings} />
      <BrowsingCollection
        collections={collections}
        user={user}
        title="Recommended for you"
      />
    </>
  );
}
