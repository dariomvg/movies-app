"use client";
import { image_url_500 } from "@/utils/options";
import Link from "next/link";
import "../styles/card-movie.css";

const CardMovie = ({ item }) => {
  return (
    <Link href={`/movie/${item.id}`} className="card-movie">
      <img
        src={`${image_url_500}/${item.poster_path}.src`}
        alt={`${item.original_title}`}
        width={180}
        height={250}
        className="img-card-movie"
        loading="lazy"
      />
    </Link>
  );
};

export default CardMovie;
