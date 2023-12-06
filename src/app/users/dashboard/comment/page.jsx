import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });
  return (
    <>
      <div className="container mx-auto px-4 min-h-screen">
        <Header title={"My Comment"} />
        <div className="grid gap-4 grid-cols-1">
          {comments.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/anime/${item.anime_mal_id}`}
                className="relative border border-owned-grey-100 p-3 rounded-md overflow-hidden"
              >
                <h3 className="font-bold text-base lg:text-lg">
                  {item.anime_title}
                </h3>
                <p className="font-light text-sm lg:text-base">
                  Komentar: <span className="italic">{item.comment}</span>
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
