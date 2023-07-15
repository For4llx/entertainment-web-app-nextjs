import AppSideBar from "@/components/AppSideBar";
import CollectionProvider from "@/provider/CollectionProvider";

export default function TvSeriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CollectionProvider>
      <AppSideBar />
      {children}
    </CollectionProvider>
  );
}
