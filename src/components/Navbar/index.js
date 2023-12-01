import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="kyz-nav p-4 bg-black">
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
                <Link href="/" className="font-bold text-white uppercase text-2xl">KyzAnimeList</Link>
                <input className="kyz-nav__search w-full md:w-auto h-10" placeholder="Cari anime..." />
            </div>
        </nav>
    )
}

export default Navbar