import { BrowsingCarousel, BrowsingSearch } from "@/components/browsing";

export default function HomePage() {
  return (
    <>
      <BrowsingSearch placeholder={"Search for movies or TV series"} />
      <BrowsingCarousel />
    </>
  );
}
