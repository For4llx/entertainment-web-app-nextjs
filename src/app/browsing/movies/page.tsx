import { BrowsingCollection, BrowsingSearch } from "@/components/browsing";

export default function MoviesPage() {
  return (
    <>
      <BrowsingSearch placeholder={"Search for movies"} />
      <BrowsingCollection title="Movies" />
    </>
  );
}
