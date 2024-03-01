import { useEffect, useState } from "react";
import { api_url, options } from "@/utils/options";


export function MoviesApi() {
  const [movies, setMovies] = useState([]);
  const [error, SetError] = useState(null);

  useEffect(() => {
    const moviesApi = async () => {
      try {
        const res = await fetch(
          `${api_url}/discover/movie`,
          options
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
        SetError(error);
      }
    };
    moviesApi();
  }, []);

  return { movies, error };
}