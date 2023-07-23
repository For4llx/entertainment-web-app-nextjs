"use client";

import { ICollection } from "@/interfaces/collection";
import { useAuthentificationContext } from "@/provider/AuthentificationProvider";
import { useEffect, useState } from "react";
import styles from "./AppBookmark.module.scss";

interface IProps {
  collection: ICollection;
}

export default function AppBookmark({ collection }: IProps) {
  const { token, user } = useAuthentificationContext();
  const [isBookmarked, setIsBookmkared] = useState<boolean>(false);
  useEffect(() => {
    user.collections.map((collectionUser) => {
      if (collectionUser.id === collection.id) {
        setIsBookmkared(true);
      }
    });
  }, [user.collections, collection.id]);

  function handleBookmark(e) {
    e.preventDefault();
    const collectionId = e.currentTarget.id;

    fetch(`http://localhost:3000/api/browsing/bookmarked/${collectionId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: user.id,
        isBookmarked,
      }),
      cache: "no-store",
    });
  }
  return (
    <button
      id={collection.id.toString()}
      onClick={(e) => handleBookmark(e)}
      className={isBookmarked ? styles.active : styles.bookmark}
    >
      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
}

/*
  const router = useRouter();
  const { token, user } = useAuthentificationContext();
  const [isBookmarked, setIsBookmkared] = useState<boolean>(false);
  useEffect(() => {
    user.collections.map((collectionUser) => {
      if (collectionUser.id === collection.id) {
        setIsBookmkared(true);
      }
    });
  }, [user.collections, collection.id]);

  function handleBookmark(e) {
    e.preventDefault();
    const collectionId = e.currentTarget.id;

    fetch(`http://localhost:3000/api/browsing/bookmarked/${collectionId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: user.id,
        isBookmarked,
      }),
      cache: "no-store",
    });
    router.refresh();
  }
*/
