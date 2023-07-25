"use client";

import { ICollection } from "@/interfaces/collection";
import { useAuthentificationContext } from "@/provider/AuthentificationProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./AppBookmark.module.scss";

interface IProps {
  collection: ICollection;
  isBookmarkedInitial: boolean;
}

export default function AppBookmark({
  collection,
  isBookmarkedInitial,
}: IProps) {
  const [isBookmarked, setIsBookmkared] =
    useState<boolean>(isBookmarkedInitial);
  const router = useRouter();
  function handleBookmark(e) {
    e.preventDefault();
    const collectionId = e.currentTarget.id;

    fetch(`http://localhost:3000/api/browsing/bookmarked/${collectionId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 1,
        isBookmarked,
      }),
      cache: "no-store",
    });
    setIsBookmkared((value) => !value);
    router.refresh();
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

/*
  useEffect(() => {
    session.user.collections.map((collectionUser) => {
      console.log(collectionUser.id);
      if (collectionUser.id === collection.id) {
        setIsBookmkared(true);
      }
    });
  }, [user.collections, collection.id]);
*/
