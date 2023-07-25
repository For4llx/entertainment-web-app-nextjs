"use client";

import AppHeading from "@/components/base/AppHeading";
import { ICollection } from "@/interfaces/collection";
import utilsStyles from "@/styles/Utils.module.scss";
import BrowsingCollectionlList from "../BrowsingCollectionList";
import styles from "./BrowsingCollection.module.scss";

interface IProps {
  title: string;
  collections: ICollection[];
  user: any;
}

export default function BrowsingCollection({
  title,
  collections,
  user,
}: IProps) {
  return (
    <section className={`${styles.container} ${utilsStyles.container}`}>
      <AppHeading size="headingLarge" color={"pureWhite"}>
        {title}
      </AppHeading>
      <BrowsingCollectionlList user={user} collections={collections} />
    </section>
  );
}
