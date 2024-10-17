"use client";
import { image_url } from "@/utils/options";
import { useMovies } from "@/context/MoviesContext";
import Link from "next/link";
import "../styles/section-landing.css";

export default function SectionLanding() {
  const { movies } = useMovies();
  const indexAleatory = Math.floor(Math.random() * movies.length);
  const movie = movies[indexAleatory];

  return (
    <section className="section-landing">
      {movie && (
        <article className="card-movie-landing">
          <img
            className="img-fondo"
            src={`${image_url}${movie.backdrop_path}.src`}
            alt={movie.original_title}
            width="100%"
            height="100%"
          />
          <section className="sec-details">
            <Link href={`movie/${movie.id}`} className="title-landing">
              {movie.original_title}
            </Link>
            <p className="sec-description">{movie.overview}</p>
          </section>
        </article>
      )}
    </section>
  );
}
