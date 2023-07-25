import { options } from "@/app/api/auth/[...nextauth]/options";
import { getUser } from "@/components/authentification/AuthentificationAPI";
import { getTvSeries } from "@/components/browsing/BrowsingAPI";
import BrowsingCollection from "@/components/browsing/BrowsingCollection";
import AppSearch from "@/components/browsing/BrowsingSearch";
import { getServerSession, Session } from "next-auth";

export default async function TvSeriesPage() {
  const session = (await getServerSession(options)) as Session;
  const collections = await getTvSeries();
  const user = await getUser(session.user!.email as string);

  return (
    <>
      <AppSearch placeholder={"Search for TV series"} />
      <BrowsingCollection
        collections={collections}
        title="TV Series"
        user={user}
      />
    </>
  );
}
