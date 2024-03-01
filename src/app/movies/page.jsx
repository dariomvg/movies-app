"use client";
import CardMovie from "@/components/CardMovie";
import { MoviesApi } from "@/services/MoviesApi";
import "./movies.css";

const Movies = () => {
  const { movies } = MoviesApi();

  return (
    <section className="section-movies">
        <h1 className="title-page-movies">Movies</h1>
      <section className="sec-movies">
        {movies &&
          movies.map((item) => <CardMovie key={item.id} item={item} />)}
      </section>
    </section>
  );
};

export default Movies;
