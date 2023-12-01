import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const SearchPage = async ({params}) => {
    const { keyword } = params

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
    const topAnime = await response.json()
  
    return (
        <>
          <section>
            <div className="container mx-auto px-4">
                <Header title={`Pencarian untuk ${keyword}...`} />
                <AnimeList api={topAnime} />
            </div>
          </section>
        </>
    )
}

export default SearchPage