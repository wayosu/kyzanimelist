import AnimeList from "@/app/components/AnimeList"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
  const anime = await response.json()

  return (
      <div>
        <h1>Paling Populer</h1>
        <div className="grid grid-cols-3 gap-4">
          {anime.data.map(data => {
            return <AnimeList title={data.title} images={data.images.webp.image_url} />
          })}
        </div>
      </div>
  )
}

export default Home
