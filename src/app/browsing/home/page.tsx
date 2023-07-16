import AppSearch from "@/components/browsing/BrowsingSearch";
import Collection from "@/components/BrowsingCollection";
import Carousel from "@/components/Carousel";

export default function HomePage() {
  return (
    <>
      <AppSearch placeholder={"Search for movies or TV series"} />
      <Carousel />
      <Collection />
    </>
  );
}
