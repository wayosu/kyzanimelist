"use client";

import Image from "next/image";

const CommentList = ({ comments }) => {
  return (
    <div className="flex flex-col gap-4 py-4 lg:w-6/12">
      {comments.map((item, index) => {
        return (
          <div key={index} className="flex flex-row gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="https://avatars.githubusercontent.com/u/684547456?v=4"
                alt="avatar"
                width={48}
                height={48}
              />
            </div>
            <div className="flex flex-col gap-0">
              <div className="text-sm md:text-base">
                <span className="font-semibold">{item.username}</span>
              </div>
              <div className="text-sm md:text-base">
                <p className="font-light">{item.comment}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
