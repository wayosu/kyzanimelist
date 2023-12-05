"use client";

import { ArrowCircleLeft } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();

  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between items-center py-4">
      <button
        onClick={handleBack}
        className="flex gap-1 items-center text-owned-light-500 hover:text-owned-primary-500 transition-all"
      >
        <ArrowCircleLeft size={25} />
        <span>Back</span>
      </button>
      <h1 className="text-xl">{title}</h1>
    </div>
  );
};

export default Header;
