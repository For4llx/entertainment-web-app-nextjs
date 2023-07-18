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
      <div className={styles.description}>
        <ul className={styles.list}>
          <li>
            <AppParagraph size={"bodyMedium"} color={"pureWhite"}>
              {collection.year.toString()}
            </AppParagraph>
          </li>
          <li>
            <AppParagraph size={"bodyMedium"} color={"pureWhite"}>
              {collection.category}
            </AppParagraph>
          </li>
          <li>
            <AppParagraph size={"bodyMedium"} color={"pureWhite"}>
              {collection.rating}
            </AppParagraph>
          </li>
        </ul>
        <AppHeading size={"headingSmall"} color={"pureWhite"}>
          {collection.title}
        </AppHeading>
      </div>
    </article>
  );
}
