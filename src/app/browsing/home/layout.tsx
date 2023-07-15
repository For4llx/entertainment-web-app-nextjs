import AppSearch from "@/components/BrowsingSearch";

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <AppSearch placeholder={"Search for movies or TV series"} />
      {children}
    </main>
  );
}
