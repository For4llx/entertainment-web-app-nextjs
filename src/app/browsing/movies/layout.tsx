import AppSearch from "@/components/BrowsingSearch";

export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <AppSearch placeholder={"Search for movies"} />
      {children}
    </main>
  );
}
