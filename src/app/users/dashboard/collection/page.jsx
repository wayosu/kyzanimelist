import Header from "@/components/Dashboard/Header";
import { getAnimeResponse } from "@/libs/api-libs";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <>
      <div className="container mx-auto px-4 min-h-screen">
        <Header title={"My Collection"} />
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {collection.map(async (item, index) => {
            const animeDetail = await getAnimeResponse(
              `anime/${item.anime_mal_id}`
            );

            return (
              <Link
                key={index}
                href={`/anime/${item.anime_mal_id}`}
                className="relative"
              >
                <Image
                  src={animeDetail.data.images.webp.image_url}
                  alt=""
                  width={350}
                  height={350}
                  className="w-full"
                />
                <div className="absolute flex items-center justify-center bottom-0 w-full bg-owned-dark-500 bg-opacity-50 h-16 p-3">
                  <h3 className="font-bold text-white xl:text-xl">
                    {animeDetail.data.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
