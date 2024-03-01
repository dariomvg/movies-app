import { useEffect, useState } from "react";
import { url_series, options } from "@/utils/options";


export function SeriesApi() {
  const [series, setSeries] = useState([]);
  const [error, SetError] = useState(null);

  useEffect(() => {
    const seriesApi = async () => {
      try {
        const res = await fetch(url_series,options);
        const data = await res.json();
        setSeries(data.results);
      } catch (error) {
        console.log(error);
        SetError(error);
      }
    };
    seriesApi();
  }, []);

  return { series, error };
}