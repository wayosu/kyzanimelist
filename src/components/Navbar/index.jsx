import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <nav className="px-4 py-5 bg-owned-dark-500 sticky top-0 z-10 bg-opacity-60 backdrop-blur-lg">
      <div className="container mx-auto px-0 xl:px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
          <Link
            href="/"
            className="font-bold text-owned-light-500 uppercase text-2xl"
          >
            <span className="font-normal text-lg">Kyz</span>AnimeList
          </Link>
          <div className="flex gap-2 justify-between items-center">
            <InputSearch />
            <UserActionButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
