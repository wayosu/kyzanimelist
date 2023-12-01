import Image from "next/image";
import Link from "next/link";

const AnimeList = ({title, images, id}) => {
    return (
        <Link href={`/${id}`} className="cursor-pointer">
            <div className="kyz-card__image relative overflow-hidden">
                <Image src={images} alt="..." width={350} height={350} />
            </div>
            <div className="p-4">
                <h3 className="font-bold text-white text-md xl:text-xl">{title}</h3>
            </div>
        </Link>
    );
}

export default AnimeList