import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`)
  const topAnime = await response.json()

  return (
      <>
        <section>
          <div className="container mx-auto px-4">
            <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua"  />
            <AnimeList api={topAnime} />
          </div>
        </section>
      </>
  )
}

export default Home
