import AppIconMovie from "@/components/base/AppIconMovie";
import AppIconTVSeries from "@/components/base/AppIconTVSeries";
import AppParagraph from "@/components/base/AppParagraph";
import { ICollection } from "@/interfaces/collection";
import styles from "./BrowsingCollectionListItemCategory.module.scss";
interface IProps {
  collection: ICollection;
}

export default function BrowsingCollectionLisItemCategory({
  collection,
}: IProps) {
  return (
    <div className={styles.container}>
      {collection.category === "Movie" ? <AppIconMovie /> : <AppIconTVSeries />}
      <AppParagraph size={"bodyMedium"} color={"pureWhite"}>
        {collection.category}
      </AppParagraph>
    </div>
  );
}
