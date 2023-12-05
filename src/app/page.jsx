import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=12");

  let recomendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recomendedAnime = reproduce(recomendedAnime, 12);

  return (
    <>
      <div className="container mx-auto px-4 min-h-screen">
        <section>
          <Header
            title="Paling Populer"
            linkHref="/populer"
            linkTitle="Lihat Semua"
          />
          <AnimeList api={topAnime} />
        </section>

        <section>
          <Header title="Rekomendasi" />
          <AnimeList api={recomendedAnime} />
        </section>
      </div>
    </>
  );
};

export default Page;
