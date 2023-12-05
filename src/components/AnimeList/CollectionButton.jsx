"use client";

import React, { useState } from "react";

const CollectionButton = ({ anime_mal_id, user_email }) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email };

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
        <span className="inline-block bg-owned-primary-500 px-2 py-1">
          Added to Collection
        </span>
      ) : (
        <button
          onClick={handleCollection}
          className="bg-owned-primary-500 px-2 py-1 rounded-sm"
        >
          {isCreated ? "Added to Collection" : "Add to Collection"}
        </button>
      )}
    </>
  );
};

export default CollectionButton;
