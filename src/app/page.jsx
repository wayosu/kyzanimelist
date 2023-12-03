import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "../libs/api-libs";

const Home = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=12");

  let recomendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recomendedAnime = { data: recomendedAnime.slice(0, 12) };

  return (
    <>
      <section>
        <div className="container mx-auto px-4 min-h-screen">
          <Header
            title="Paling Populer"
            linkHref="/populer"
            linkTitle="Lihat Semua"
          />
          <AnimeList api={topAnime} />
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 min-h-screen">
          <Header title="Rekomendasi" />
          <AnimeList api={recomendedAnime} />
        </div>
      </section>
    </>
  );
};

export default Home;
