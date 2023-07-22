"use client";

import { BrowsingCollection, BrowsingSearch } from "@/components/browsing";
import { useAuthentificationContext } from "@/provider/AuthentificationProvider";
import { useCollectionContext } from "@/provider/CollectionProvider";
import { useEffect } from "react";

export default function HomePage() {
  const { movies, setMovies, tvSeries, setTVSeries } = useCollectionContext();
  const { token, user } = useAuthentificationContext();

  useEffect(() => {
    const userId = user.id;
    fetch(`http://localhost:3000/api/browsing/bookmarked/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.movies[0].collections),
          setTVSeries(data.tvSeries[0].collections);
      });
  }, []);

  return (
    <>
      <BrowsingSearch placeholder={"Search for bookmarked shows"} />
      <BrowsingCollection collections={movies} title="Bookmarked Movies" />
      <BrowsingCollection collections={tvSeries} title="Bookmarked TV Series" />
    </>
  );
}
