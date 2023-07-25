import { ICollection } from "@/interfaces/collection";
import BrowsingCollectionListCard from "../BrowsingCollectionListCard";
import styles from "./BrowsingCollectionList.module.scss";
interface IProps {
  collections: ICollection[];
  user: any;
}

export default function BrowsingCollectionlList({ collections, user }: IProps) {
  const browsingCarouselList = collections.map((collection) => (
    <>
      <li key={collection.id}>
        <BrowsingCollectionListCard
          isBookmarkedInitial={user.collections.some(
            (item) => item.id === collection.id
          )}
          collection={collection}
        />
      </li>
    </>
  ));
  return <ul className={styles.container}>{browsingCarouselList}</ul>;
}
