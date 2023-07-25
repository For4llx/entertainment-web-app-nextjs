import { ICollection } from "@/interfaces/collection";

export async function getCollections() {
  const response = await fetch("http://localhost:3000/api/browsing", {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const data = await response.json();
  return data.collections as ICollection[];
}

export async function getBookmarked(userId: number) {
  const response = await fetch(
    `http://localhost:3000/api/browsing/bookmarked/${userId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data.movies[0].collections);
  console.log(data.tvSeries[0].collections);
  return data;
}

export async function getMovies() {
  const response = await fetch("http://localhost:3000/api/browsing/movie", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.collections as ICollection[];
}

export async function getTvSeries() {
  const response = await fetch("http://localhost:3000/api/browsing/tv-serie", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.collections as ICollection[];
}

export async function getTrendings() {
  const response = await fetch("http://localhost:3000/api/browsing/trending", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.collections as ICollection[];
}
