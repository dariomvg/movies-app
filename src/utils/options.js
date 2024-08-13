export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:process.env.NEXT_PUBLIC_OPTIONS,
  },
};

export const api_key = process.env.NEXT_PUBLIC_API_KEY;
export const api_url = process.env.NEXT_PUBLIC_API_URL;
export const base_url = process.env.NEXT_PUBLIC_BASE_URL;
export const image_url = process.env.NEXT_PUBLIC_IMAGE_URL;
export const image_url_500 = process.env.NEXT_PUBLIC_IMAGE_URL_500;
export const url_trailer = process.env.NEXT_PUBLIC_URL_TRAILER;
export const url_series = process.env.NEXT_PUBLIC_URL_SERIES;
export const url_popular = process.env.NEXT_PUBLIC_URL_POPULA;

