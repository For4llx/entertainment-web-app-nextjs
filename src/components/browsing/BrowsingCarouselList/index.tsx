import { ICollection } from "@/interfaces/collection";
import BrowsingCarouselListCard from "../BrowsingCarouselListCard";
import styles from "./BrowsingCarouselList.module.scss";

interface IProps {
  collections: ICollection[];
}

export default function BrowsingCarouselList({ collections }: IProps) {
  const browsingCarouselList = collections.map((collection) => (
    <li key={collection.id}>
      <BrowsingCarouselListCard collection={collection} />
    </li>
  ));
  return <ul className={styles.container}>{browsingCarouselList}</ul>;
}
