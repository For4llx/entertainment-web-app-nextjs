import BrowsingSideBar from "@/components/browsing/BrowsingSideBar";
import CollectionProvider from "@/provider/CollectionProvider";

export default function TvSeriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CollectionProvider>
      <BrowsingSideBar />
      {children}
    </CollectionProvider>
  );
}
