"use client";
import { getMovies } from "@/services/getMovies";
import { getMoviesPopular } from "@/services/getMoviesPopular";
import { getSeries } from "@/services/getSeries";
import { createContext, useContext, useState, useEffect } from "react";

export const MoviesContext = createContext();

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) throw new Error("useMovies most used within a provider");
  return context;
};

export default function MoviesProvider({ children }) {

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const foundMovies = await getMovies();
        const foundSeries = await getSeries();
        const foundPopular = await getMoviesPopular(); 
        setPopularMovies(foundPopular);
        setMovies(foundMovies);
        setSeries(foundSeries);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);


  return (
    <MoviesContext.Provider
      value={{
        movies,
        series,
        popularMovies
      }}>
      {children}
    </MoviesContext.Provider>
  );
}
