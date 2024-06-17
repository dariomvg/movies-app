"use client";
import { MoviesApi } from "@/services/MoviesApi";
import { SeriesApi } from "@/services/SeriesApi";
import CardMovie from "./CardMovie";
import "../styles/allMovies.css";
import Link from "next/link";

export default function AllMovies() {
  const { movies } = MoviesApi();
  const { series } = SeriesApi();
  return (
    <section className="section-all-movies">
      <section className="section-container-movies">
        <div className="container">
          <h2 className="title-sec-movies">Latest releases...</h2>
          <div className="sec-all-movies">
            {movies &&
              movies.map((item) => <CardMovie key={item.id} item={item} />)}
          </div>
          <Link href="/movies/1" className="link-all-movies">
            See more movies
          </Link>
        </div>
        <div className="container">
          <h2 className="title-sec-series">series that may interest you</h2>
          <div className="sec-all-movies">
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
