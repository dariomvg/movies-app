"use client";
import { createContext, useContext, useState } from "react";

export const MoviesContext = createContext();

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) throw new Error("useMovies most used within a provider");
  return context;
};

export default function MoviesProvider({ children }) {
  const [infoMovie, setInfoMovie] = useState({});
  const [searchMovie, setSearchMovie] = useState([]);
  const [trailer, setTrailer] = useState([]);

  const showInfoMovie = (info, trailerMovie) => {
    setInfoMovie(info);
    setTrailer(trailerMovie[0]);
  };

  const handleSearchMovies = (movies) => {
    setSearchMovie(movies); 
  }

  return (
    <MoviesContext.Provider value={{ showInfoMovie, infoMovie, trailer, handleSearchMovies, searchMovie }}>
      {children}
    </MoviesContext.Provider>
  );
}
