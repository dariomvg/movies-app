import { url_popular, options } from "@/utils/options";


export const getMoviesPopular = async () => {
  const res = await fetch(url_popular,options);
  const data = await res.json();
  return data.results;
}