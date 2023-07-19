import {
  BrowsingCarousel,
  BrowsingCollection,
  BrowsingSearch,
} from "@/components/browsing";

export default function HomePage() {
  return (
    <>
      <BrowsingSearch placeholder={"Search for movies or TV series"} />
      <BrowsingCarousel />
      <BrowsingCollection title="Recommended for you" />
    </>
  );
}
