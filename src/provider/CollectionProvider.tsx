"use client";

import { ICollection } from "@/interfaces/collection";
import { createContext, useState } from "react";

interface IContext {
  collections: ICollection[];
  setCollections: Function;
}

export const CollectionContext = createContext<IContext>({} as IContext);

interface IProps {
  children: React.ReactNode;
}

export default function CollectionProvider({ children }: IProps) {
  const [collections, setCollections] = useState<ICollection[]>([]);

  return (
    <CollectionContext.Provider value={{ collections, setCollections }}>
      {children}
    </CollectionContext.Provider>
  );
}
