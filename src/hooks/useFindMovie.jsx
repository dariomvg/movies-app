"use client";
import { filterTrailer } from "@/services/filterTrailer";
import { getTrailerMovie } from "@/services/getTrailerMovie";
import { useEffect, useState } from "react";

export const useFindMovie = (id) => {
  const [trailer, setTrailer] = useState([]);
  const [infoMovie, setInfoMovie] = useState({});

  useEffect(() => {
    const getInfoData = async () => {
      const movieData = await getTrailerMovie(id);
      const foundTrailer = filterTrailer(movieData);
      setInfoMovie(movieData);
      setTrailer(foundTrailer[0]);
    };
    getInfoData();
  }, [id]);

  return { trailer, infoMovie };
};
