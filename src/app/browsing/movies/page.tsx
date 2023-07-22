"use client";

import { BrowsingCollection, BrowsingSearch } from "@/components/browsing";
import { useAuthentificationContext } from "@/provider/AuthentificationProvider";
import { useCollectionContext } from "@/provider/CollectionProvider";
import { useEffect } from "react";

export default function MoviesPage() {
  const { collections, setCollections } = useCollectionContext();
  const { token } = useAuthentificationContext();
  useEffect(() => {
    fetch("http://localhost:3000/api/browsing/movie", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setCollections(data.collection));
  }, []);
  return (
    <>
      <BrowsingSearch placeholder={"Search for movies"} />
      <BrowsingCollection collections={collections} title="Movies" />
    </>
  );
}
