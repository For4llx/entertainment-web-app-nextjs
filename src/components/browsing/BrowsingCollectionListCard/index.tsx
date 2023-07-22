import AppBookmark from "@/components/base/AppBookmark";
import AppHeading from "@/components/base/AppHeading";
import AppParagraph from "@/components/base/AppParagraph";
import AppThumbnail from "@/components/base/AppThumbnail";
import { ICollection } from "@/interfaces/collection";
import BrowsingCollectionLisItemCategory from "../BrowsingCollectionListItemCategory";
import styles from "./BrowsingCollectionListCard.module.scss";

interface IProps {
  collection: ICollection;
}

export default function BrowsingCollectionListCard({ collection }: IProps) {
  return (
    <article className={styles.container}>
      <AppBookmark collection={collection} />
      <div className={styles.thumbnail}>
        <AppThumbnail size="medium" collection={collection} />
      </div>
      <div className={styles.description}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <AppParagraph size={"bodyMedium"} color={"pureWhite"}>
              {collection.year.toString()}
            </AppParagraph>
          </li>
          <li className={styles.item}>
            ·<BrowsingCollectionLisItemCategory collection={collection} />
          </li>
          <li className={styles.item}>
            ·
            <AppParagraph size={"bodyMedium"} color={"pureWhite"}>
              {collection.rating}
            </AppParagraph>
          </li>
        </ul>
        <AppHeading size={"headingXSmall"} color={"pureWhite"}>
          {collection.title}
        </AppHeading>
      </div>
    </article>
  );
}
