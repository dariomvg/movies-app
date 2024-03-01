import { useEffect, useState } from "react";
import { url_popular, options } from "@/utils/options";


export function MoviesPopularApi() {
  const [popularMovies, setPopularMovies] = useState([])
  const [error, SetError] = useState(null);

  useEffect(() => {
    const moviesApi = async () => {
      try {
        const res = await fetch(url_popular,options);
        const data = await res.json();
        setPopularMovies(data.results);
      } catch (error) {
        console.log(error);
        SetError(error);
      }
    };
    moviesApi();
  }, []);

  return { popularMovies, error };
}