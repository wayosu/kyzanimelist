import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentList from "@/components/AnimeList/CommentList";

const Page = async ({ params: { id } }) => {
  const animeDetail = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });
  const comments = await prisma.comment.findMany({
    where: { anime_mal_id: id },
  });
  const totalComments = await prisma.comment.count({
    where: { anime_mal_id: id },
  });

  return (
    <>
      <section>
        <div className="container mx-auto px-4 min-h-screen">
          <div className="py-4 mb-1">
            <h1 className="text-xl md:text-2xl font-semibold">
              {animeDetail.data.title}
            </h1>
            <h3 className="text-sm md:text-lg text-owned-grey-500">
              {animeDetail.data.title_english}
            </h3>
            <div className="flex gap-2 my-2">
              <span className="border border-owned-primary-500 text-xs md:text-sm px-2 rounded-md">
                Ranked #{animeDetail.data.rank}
              </span>
              <span className="border border-owned-accent-100 text-xs md:text-sm px-2 rounded-md">
                Popularity #{animeDetail.data.popularity}
              </span>
              <span className="border border-owned-secondary-100 text-xs md:text-sm px-2 rounded-md">
                Members #{animeDetail.data.members}
              </span>
            </div>
            <div className="mt-3">
              {!collection && user && (
                <CollectionButton
                  anime_mal_id={id}
                  user_email={user.email}
                  anime_title={animeDetail.data.title}
                  anime_image={animeDetail.data.images.webp.image_url}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4">
              <Image
                src={animeDetail.data.images.webp.image_url}
                alt={animeDetail.data.images.jpg.image_url}
                width={300}
                height={400}
                className="rounded-md w-full h-fit"
              />
              <div className="flex flex-row gap-4">
                <div className="flex flex-col w-full items-center p-5 border border-owned-light-500 rounded-md">
                  <span className="text-xl font-light">
                    {animeDetail.data.score}
                  </span>
                  <span className="text-xs font-semibold uppercase">score</span>
                </div>
                <div className="flex flex-col w-full items-center p-5 border border-owned-light-500 rounded-md">
                  <span className="text-xl font-light">
                    {animeDetail.data.scored_by}
                  </span>
                  <span className="text-xs font-semibold uppercase">users</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm md:text-base">
                  <span className="font-semibold">Type: </span>
                  <span className="font-light">{animeDetail.data.type}</span>
                </div>
                <div className="text-sm md:text-base">
                  <span className="font-semibold">Source: </span>
                  <span className="font-light">
                    {animeDetail.data.episodes}
                  </span>
                </div>
                <div className="text-sm md:text-base">
                  <span className="font-semibold">Studios: </span>
                  <span className="font-light">
                    {animeDetail.data.studios
                      .map((studio) => studio.name)
                      .join(", ")}
                  </span>
                </div>
                <div className="text-sm md:text-base">
                  <span className="font-semibold">Status: </span>
                  <span className="font-light">{animeDetail.data.status}</span>
                </div>
                <div className="text-sm md:text-base">
                  <span className="font-semibold">Season: </span>
                  <span className="font-light">{animeDetail.data.season}</span>
                </div>
                <div className="text-sm md:text-base">
                  <span className="font-semibold">Genre: </span>
                  <span className="font-light">
                    {animeDetail.data.genres
                      .map((genre) => genre.name)
                      .join(", ")}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 pb-4">
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-1">
                  Synopsis
                </h3>
                <p className="text-sm md:text-base font-light text-justify">
                  {animeDetail.data.synopsis}
                </p>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-1">
                  Background
                </h3>
                <p className="text-sm md:text-base font-light text-justify">
                  {animeDetail.data.background}
                </p>
              </div>
            </div>
          </div>
          <div className="py-4 mt-1">
            <h3 className="text-lg lg:text-xl font-semibold mb-1">
              {totalComments} Comments
            </h3>
            {comments.length === 0 ? (
              <p className="text-sm md:text-base font-light text-justify">
                No comments yet. Be the first one to comment!
              </p>
            ) : (
              <CommentList comments={comments} />
            )}
            {user && (
              <CommentInput
                anime_mal_id={id}
                user_email={user?.email}
                username={user?.name}
                anime_title={animeDetail.data.title}
              />
            )}
          </div>
        </div>
      </section>

      <div>
        <VideoPlayer youtubeId={animeDetail.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
