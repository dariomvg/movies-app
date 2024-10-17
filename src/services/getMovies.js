import { api_url, options } from "@/utils/options";

export const getMovies = async () => {
  const res = await fetch(`${api_url}/discover/movie`, options);
  const data = await res.json();
  return data.results; 
};

