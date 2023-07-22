"use client";

import { ICollection } from "@/interfaces/collection";
import { createContext, useContext, useState } from "react";

interface IContext {
  collections: ICollection[];
  setCollections: Function;
  trendings: ICollection[];
  setTrendings: Function;
  movies: ICollection[];
  setMovies: Function;
  tvSeries: ICollection[];
  setTVSeries: Function;
}

export const CollectionContext = createContext<IContext>({} as IContext);

interface IProps {
  children: React.ReactNode;
}

export function CollectionProvider({ children }: IProps) {
  const [collections, setCollections] = useState<ICollection[]>([]);
  const [movies, setMovies] = useState<ICollection[]>([]);
  const [tvSeries, setTVSeries] = useState<ICollection[]>([]);
  const [trendings, setTrendings] = useState<ICollection[]>([]);

  return (
    <CollectionContext.Provider
      value={{
        movies,
        setMovies,
        tvSeries,
        setTVSeries,
        collections,
        setCollections,
        trendings,
        setTrendings,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
}

export function useCollectionContext(): IContext {
  return useContext(CollectionContext);
}
