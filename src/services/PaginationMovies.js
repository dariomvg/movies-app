import { api_url, options } from "@/utils/options";

export const paginationMovies = async (page) => {
  try {
    const res = await fetch(`${api_url}/discover/movie?page=${page}`, options);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
