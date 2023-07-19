import { BrowsingCollection, BrowsingSearch } from "@/components/browsing";

export default function HomePage() {
  return (
    <>
      <BrowsingSearch placeholder={"Search for bookmarked shows"} />
      <BrowsingCollection title="Bookmarked Movies" />
      <BrowsingCollection title="Bookmarked TV Series" />
    </>
  );
}
