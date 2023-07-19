import AppHeading from "@/components/base/AppHeading";
import AppParagraph from "@/components/base/AppParagraph";
import { ICollection } from "@/interfaces/collection";
import Image from "next/image";
import styles from "./BrowsingCarouselListCard.module.scss";

interface IProps {
  collection: ICollection;
}

export default function BrowsingCarouselListCard({ collection }: IProps) {
  return (
    <article className={styles.container}>
      <button className={styles.bookmark}>
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            strokeWidth="1.5"
          />
        </svg>
      </button>
      <div className={styles.thumbnail}>
        <picture>
          <source srcSet={`/${collection.thumbnail[0].trending[0].large}`} />
          <source srcSet={`/${collection.thumbnail[0].trending[0].small}`} />
          <Image
            className={styles.image}
            width={40}
            height={40}
            src={`/${collection.thumbnail[0].trending[0].large}`}
            alt={collection.title}
          />
        </picture>
        <div className={styles.overlay}>
          <div className={styles.button}>
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
                fill="#FFF"
              />
            </svg>
            <AppHeading size={"headingXSmall"} color={"pureWhite"}>
              Play
            </AppHeading>
          </div>
        </div>
        <div className={styles.description}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <AppParagraph size={"bodyMedium"} color={"pureWhite"}>
                {collection.year.toString()}
              </AppParagraph>
            </li>
            <li className={styles.item}>
              ·
              {collection.category === "Movie" && (
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                    fill="#FFF"
                  />
                </svg>
              )}
              <AppParagraph size={"bodyMedium"} color={"pureWhite"}>
                {collection.category}
              </AppParagraph>
            </li>
            <li className={styles.item}>
              ·
              <AppParagraph size={"bodyMedium"} color={"pureWhite"}>
                {collection.rating}
              </AppParagraph>
            </li>
          </ul>
          <AppHeading size={"headingSmall"} color={"pureWhite"}>
            {collection.title}
          </AppHeading>
        </div>
      </div>
    </article>
  );
}
