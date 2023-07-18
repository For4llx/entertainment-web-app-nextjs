"use client";

import AppHeading from "@/components/base/AppHeading";
import { CollectionContext } from "@/provider/CollectionProvider";
import utilsStyles from "@/styles/Utils.module.scss";
import { useContext, useEffect } from "react";
import BrowsingCarouselList from "../BrowsingCarouselList";

export default function BrowsingCarousel() {
  const { collections, setCollections } = useContext(CollectionContext);

  useEffect(() => {
    fetch("http://localhost:3000/api/browsing/trending")
      .then((response) => response.json())
      .then((data) => setCollections(data.collection));
  }, []);

  return (
    <section className={utilsStyles.container}>
      <AppHeading size="headingLarge" color={"pureWhite"}>
        Trending
      </AppHeading>
      <BrowsingCarouselList collections={collections} />
    </section>
  );
}
