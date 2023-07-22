import {
  BrowsingLayout,
  BrowsingMain,
  BrowsingHeader,
} from "@/components/browsing";
import { CollectionProvider } from "@/provider/CollectionProvider";

export default function TvSeriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CollectionProvider>
      <BrowsingLayout>
        <BrowsingHeader />
        <BrowsingMain>{children}</BrowsingMain>
      </BrowsingLayout>
    </CollectionProvider>
  );
}
