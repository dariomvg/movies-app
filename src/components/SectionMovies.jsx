"use client";
import { useMovies } from "@/context/MoviesContext";
import Link from "next/link";
import CardMovie from "./CardMovie";
import "../styles/section-movies.css";

export default function SectionMovies() {
  const { movies, series } = useMovies();

  return (
    <section className="section-all-movies">
      <section className="section-container-movies">
        <div className="container">
          <h2 className="title-sec-movies">Movies</h2>
          <div className="sec-all-movies">
            <section className="line-movies">
              {movies &&
                movies
                  .slice(0, 10)
                  .map((item) => <CardMovie key={item.id} item={item} />)}
            </section>
            <section className="line-movies">
              {movies &&
                movies
                  .slice(10, 20)
                  .map((item) => <CardMovie key={item.id} item={item} />)}
            </section>
          </div>
          <Link href="/movies/1" className="link-all-movies">
            See more movies
          </Link>
        </div>
        <div className="container">
          <h2 className="title-sec-series">Series</h2>
          <div className="sec-all-series">
            {series &&
              series.map((item) => <CardMovie key={item.id} item={item} />)}
          </div>
          <Link href="/series" className="link-all-movies">
            See more series
          </Link>
        </div>
      </section>
    </section>
  );
}
