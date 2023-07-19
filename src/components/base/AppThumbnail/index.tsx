import AppHeading from "@/components/base/AppHeading";
import { ICollection } from "@/interfaces/collection";
import Image from "next/image";
import styles from "./AppThumbnail.module.scss";

interface IProps {
  collection: ICollection;
  children?: React.ReactNode;
}

export default function AppThumbnail({ collection, children }: IProps) {
  return (
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
      {children}
    </div>
  );
}
