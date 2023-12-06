"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();

    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("");
      router.refresh();
    }
    return;
  };

  return (
    <>
      <div className="flex flex-col gap-4 py-4 lg:w-6/12">
        {isCreated && (
          <div className="bg-green-500 text-white p-2 rounded-md">
            <p>Comment posted!</p>
          </div>
        )}
        <textarea
          onChange={handleInput}
          value={comment}
          className="text-owned-dark-500 p-2 h-32 rounded-md outline-none text-sm md:text-base"
        />
        <button
          onClick={handlePosting}
          className="bg-owned-primary-500 text-sm md:text-base text-white py-2 px-5 rounded-md inline-block w-fit"
        >
          Kirim
        </button>
      </div>
    </>
  );
};

export default CommentInput;
