"use client";

import {
  BrowsingCarousel,
  BrowsingCollection,
  BrowsingSearch,
} from "@/components/browsing";
import { useAuthentificationContext } from "@/provider/AuthentificationProvider";
import { useCollectionContext } from "@/provider/CollectionProvider";
import { useEffect } from "react";

export default function HomePage() {
  const { collections, setCollections } = useCollectionContext();
  const { token } = useAuthentificationContext();

  useEffect(() => {
    fetch("http://localhost:3000/api/browsing", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((data) => setCollections(data.collection));
  }, []);

  return (
    <>
      <BrowsingSearch placeholder={"Search for movies or TV series"} />
      <BrowsingCarousel />
      <BrowsingCollection
        collections={collections}
        title="Recommended for you"
      />
    </>
  );
}
