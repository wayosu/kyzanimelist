"use client";

import { BookmarksSimple, Check } from "@phosphor-icons/react";
import React, { useState } from "react";

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_title,
  anime_image,
}) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, anime_title, anime_image };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const collection = await response.json();

    if (collection.isCreated) {
      setIsCreated(true);
    }
    return;
  };
  return (
    <>
      {isCreated ? (
        <span className="inline-flex gap-1 items-center px-2 py-1 rounded-md ">
          <Check size={24} /> Added to Collection
        </span>
      ) : (
        <button
          onClick={handleCollection}
          className="inline-flex gap-1 items-center bg-owned-primary-500 px-2 py-1 rounded-md hover:bg-owned-primary-300 transition-all"
        >
          <BookmarksSimple size={24} />
          Add to Collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
