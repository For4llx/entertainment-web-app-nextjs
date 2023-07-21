"use client";

import AppHeading from "@/components/base/AppHeading";
import { AuthentificationContext } from "@/provider/AuthentificationProvider";
import { CollectionContext } from "@/provider/CollectionProvider";
import utilsStyles from "@/styles/Utils.module.scss";
import { useContext, useEffect } from "react";
import BrowsingCarouselList from "../BrowsingCarouselList";
import styles from "./BrowsingCarousel.module.scss";

export default function BrowsingCarousel() {
  const { trendings, setTrendings } = useContext(CollectionContext);
  const { token } = useContext(AuthentificationContext);

  useEffect(() => {
    fetch("http://localhost:3000/api/browsing/trending", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setTrendings(data.collection));
  }, []);

  return (
    <section className={`${styles.container} ${utilsStyles.container}`}>
      <AppHeading size="headingLarge" color={"pureWhite"}>
        Trending
      </AppHeading>
      <BrowsingCarouselList collections={trendings} />
    </section>
  );
}
