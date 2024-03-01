"use client";
import { useEffect, useState } from "react";
import { image_url } from "@/utils/options";
import { MoviesApi } from "@/services/MoviesApi";
import { useMovies } from "@/context/MoviesContext";
import { useRouter } from "next/navigation";
import "../styles/slider.css";
import { movieTrailer } from "@/services/MoviesTrailer";
import { filterTrailer } from "@/utils/filterTrailer";

export default function SliderMovies() {
  const [selected, setSelected] = useState(0);
  const { movies } = MoviesApi();
  const { showInfoMovie } = useMovies();
  const slider = movies.slice(0, 5);
  const router = useRouter();

  const next = () => {
    setSelected(selected === slider.length - 1 ? 0 : selected + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [selected]);

  const handleInfoMovie = async (item) => {
    const movieData = await movieTrailer(item.id);
    const trailer = filterTrailer(movieData);
    showInfoMovie(item, trailer);
    router.push("/info");
  };

  return (
    <section className="container-slider">
      {slider &&
        slider.map(
          (item, index) =>
            selected === index && (
              <article
                key={item.id}
                className={`card-movie-slider ${
                  selected === index ? "active" : ""
                }`}>
                <img
                  width={"100%"}
                  height={"100%"}
                  src={image_url + item.backdrop_path}
                  alt={item.original_title}
                  loading="lazy"
                  className="img-fondo"
                />
                <section className="sec-details">
                  <h1 className="title-slider">{item.original_title}</h1>
                  <p className="sec-description">{item.overview}</p>
                  <button
                    className="link-slider"
                    onClick={() => handleInfoMovie(item)}>
                    Info
                  </button>
                </section>
              </article>
            )
        )}
    </section>
  );
}
