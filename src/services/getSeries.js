import { url_series, options } from "@/utils/options";

export const getSeries = async () => {
  const res = await fetch(url_series, options);
  const data = await res.json();
  return data.results;
};
