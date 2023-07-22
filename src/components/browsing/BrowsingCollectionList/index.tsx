import { ICollection } from "@/interfaces/collection";
import BrowsingCollectionListCard from "../BrowsingCollectionListCard";
import styles from "./BrowsingCollectionList.module.scss";
interface IProps {
  collections: ICollection[];
}

export default function BrowsingCollectionlList({ collections }: IProps) {
  const browsingCarouselList = collections.map((collection) => (
    <li key={collection.id}>
      <BrowsingCollectionListCard collection={collection} />
    </li>
  ));
  return <ul className={styles.container}>{browsingCarouselList}</ul>;
}
