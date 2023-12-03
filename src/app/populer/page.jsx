"use client";

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "../../libs/api-libs";

const PopulerPage = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <div className="container mx-auto px-4 min-h-screen mb-5">
        <HeaderMenu title={`Anime Terpopuler #${page}`} />
        <div className="mb-4">
          <Pagination
            page={page}
            lastPage={topAnime.pagination?.last_visible_page}
            setPage={setPage}
          />
        </div>
        <AnimeList api={topAnime} />
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </div>
    </>
  );
};

export default PopulerPage;
