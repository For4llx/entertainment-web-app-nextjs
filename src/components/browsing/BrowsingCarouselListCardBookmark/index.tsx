import { ICollection } from "@/interfaces/collection";
import styles from "./BrowsingCarouselListCardBookmark.module.scss";

interface IProps {
  collection: ICollection;
}

export default function BrowsingCarouselListCardBookmark({
  collection,
}: IProps) {
  return (
    <>
      {collection.isTrending ? (
        <button className={styles.active}>
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      ) : (
        <button className={styles.container}>
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      )}
    </>
  );
}
