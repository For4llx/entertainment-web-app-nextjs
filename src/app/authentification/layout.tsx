import {
  AuthentificationLayout,
  AuthentificationHeader,
  AuthentificationMain,
} from "@/components/authentification";

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
