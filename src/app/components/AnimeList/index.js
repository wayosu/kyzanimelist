import Image from "next/image";

const AnimeList = () => {
    return (
        <div className="bg-indigo-500">
            <Image src="https://placehold.co/600x400/png" alt="..." width={600} height={600} />
            <h3>Judul Anime</h3>
        </div>
    );
}

export default AnimeList