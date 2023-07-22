"use client";

import BrowsingCollection from "@/components/browsing/BrowsingCollection";
import AppSearch from "@/components/browsing/BrowsingSearch";
import { useAuthentificationContext } from "@/provider/AuthentificationProvider";
import { useCollectionContext } from "@/provider/CollectionProvider";
import { useEffect } from "react";

export default function TvSeriesPage() {
  const { collections, setCollections } = useCollectionContext();
  const { token } = useAuthentificationContext();
  useEffect(() => {
    fetch("http://localhost:3000/api/browsing/tv-serie", {
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
      <AppSearch placeholder={"Search for TV series"} />
      <BrowsingCollection collections={collections} title="TV Series" />
    </>
  );
}
