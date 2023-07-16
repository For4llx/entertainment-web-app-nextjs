import AuthentificationHeader from "@/components/authentification/AuthentificationHeader";
import AuthentificationMain from "@/components/authentification/AuthentificationMain";
import AuthentificationLayout from "@/components/AuthentificationLayout";

export default function TvSeriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthentificationLayout>
      <AuthentificationHeader />
      <AuthentificationMain>{children}</AuthentificationMain>
    </AuthentificationLayout>
  );
}
