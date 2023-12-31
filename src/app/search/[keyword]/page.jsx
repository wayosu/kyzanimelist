import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${keyword}`);

  return (
    <>
      <section>
        <div className="container mx-auto px-4 min-h-screen">
          <Header title={`Pencarian untuk ${decodeKeyword}...`} />
          <AnimeList api={searchAnime} />
        </div>
      </section>
    </>
  );
};

export default Page;
