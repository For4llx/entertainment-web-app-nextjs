import AppSearch from "@/components/BrowsingSearch";

export default function TvSeriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <AppSearch placeholder={"Search for TV series"} />
      {children}
    </main>
  );
}
