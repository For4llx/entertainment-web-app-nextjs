import {
  Authentification,
  AuthentificationHeader,
  AuthentificationMain,
} from "@/components/authentification";

export default function TvSeriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Authentification>
      <AuthentificationHeader />
      <AuthentificationMain>{children}</AuthentificationMain>
    </Authentification>
  );
}
