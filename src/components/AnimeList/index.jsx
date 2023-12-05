import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="kyz-card bg-owned-dark-300 cursor-pointer hover:text-owned-primary-500 overflow-hidden"
            key={index}
          >
            <div className="kyz-card__image relative rounded-md overflow-hidden">
              <Image
                src={anime.images.webp.image_url}
                alt="..."
                width={350}
                height={350}
                className="rounded-md"
                priority={false}
              />
            </div>
            <div className="py-3">
              <h3 className="font-bold text-white xl:text-xl">{anime.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
