"use client";
import { useEffect, useState } from "react";
import { image_url, image_url_500 } from "@/utils/options";
import { MoviesApi } from "@/services/MoviesApi";
import { useMovies } from "@/context/MoviesContext";
import { useRouter } from "next/navigation";
import { movieTrailer } from "@/services/MoviesTrailer";
import { filterTrailer } from "@/utils/filterTrailer";
import "../styles/slider.css";

export default function SliderMovies() {
  const [selected, setSelected] = useState(0);
  const { movies } = MoviesApi();
  const { showInfoMovie } = useMovies();
  const slider = movies.slice(0, 5);
  const topMovies = slider.slice(0, 2);
  const router = useRouter();

  const next = () => {
    setSelected(selected === slider.length - 1 ? 0 : selected + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 10000);

    return () => clearInterval(interval);
  }, [selected]);

  const handleInfoMovie = async (item) => {
    const movieData = await movieTrailer(item.id);
    const trailer = filterTrailer(movieData);
    showInfoMovie(item, trailer);
    router.push("/info");
  };

  return (
    <section className="section-slider">
      <div className="container-cards">
        {slider &&
          slider.map(
            (item, index) =>
              selected === index && (
                <article className="card-movie-slider" key={item.id}>
                  <img
                    className="img-fondo"
                    src={`${image_url}${item.backdrop_path}.src`}
                    alt={item.original_title}
                    width="100%"
                    height="100%"
                  />
                  <section className="sec-details">
                    <h1
                      className="title-slider"
                      onClick={() => handleInfoMovie(item)}>
                      {item.original_title}
                    </h1>

                    <p className="sec-description">{item.overview}</p>
                  </section>
                </article>
              )
          )}
      </div>
      <div className="images-posters">
        {topMovies.length > 0 &&
          topMovies.map((item) => (
            <img
              key={item.id}
              src={`${image_url_500}${item.poster_path}.src`}
              alt={item.original_title}
              width={180}
              height={250}
              onClick={() => handleInfoMovie(item)}
              className="img-poster"
            />
          ))}
      </div>
    </section>
  );
}
