import BrowsingCollection from "@/components/browsing/BrowsingCollection";
import AppSearch from "@/components/browsing/BrowsingSearch";

export default function TvSeriesPage() {
  return (
    <>
      <AppSearch placeholder={"Search for tv series"} />
      <BrowsingCollection />
    </>
  );
}
