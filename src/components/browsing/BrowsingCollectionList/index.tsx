import { ICollection } from "@/interfaces/collection";
import BrowsingCollectionListCard from "../BrowsingCollectionListCard";

interface IProps {
  collections: ICollection[];
}

export default function BrowsingCollectionlList({ collections }: IProps) {
  const browsingCarouselList = collections.map((collection) => (
    <li key={collection.id}>
      <BrowsingCollectionListCard collection={collection} />
    </li>
  ));
  return <ul>{browsingCarouselList}</ul>;
}
