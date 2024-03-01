"use client";
import { MoviesApi } from "@/services/MoviesApi";
import { MoviesPopularApi } from "@/services/MoviesPopularApi";
import { SeriesApi } from "@/services/SeriesApi";
import CardMovie from "./CardMovie";
import "../styles/allMovies.css";

export default function AllMovies() {
  const { movies } = MoviesApi();
  const { series } = SeriesApi();
  return (
    <section className="section-all-movies">
      <div className="divide-section">
        <section className="section-movies">
          <h2 className="title-sec-movies">Latest releases...</h2>
          <div className="sec-all-movies">
            {movies &&
              movies.map((item) => <CardMovie key={item.id} item={item} />)}
          </div>

          <h2 className="title-sec-series">series that may interest you</h2>
          <div className="sec-all-movies">
            {series &&
              series.map((item) => <CardMovie key={item.id} item={item} />)}
          </div>
        </section>
      </div>
    </section>
  );
}
