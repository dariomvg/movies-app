import { api_key, api_url, options } from "@/utils/options";

export const movieTrailer = async (id) => {
  try {
    const response = await fetch(
      `${api_url}/movie/${id}?api_key=${api_key}&append_to_response=videos`,
      options
    );
    const res = await response.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};
