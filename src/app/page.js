import AnimeList from "@/components/AnimeList"
import Link from "next/link"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const anime = await response.json()

  return (
      <div>
          <div className="flex justify-between items-center p-4">
            <h1 className="text-xl">Paling Populer</h1>
            <Link href="/populer" className="text-sm text-gray-500 hover:text-blue-600 transition-all">Lihat Semua</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
            {anime.data.map(data => {
              return (
                <div key={data.mal_id} className="kyz-card">
                  <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
                </div>
              )
            })}
          </div>
      </div>
  )
}

export default Home
