import AppSearch from "@/components/BrowsingSearch";

export default function BookmarkedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <AppSearch placeholder={"Search for bookmarked shows"} />
      {children}
    </main>
  );
}
