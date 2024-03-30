"use client";
import { image_url_500 } from "@/utils/options";
import "../styles/allMovies.css";
import { useRouter } from "next/navigation";
import { useMovies } from "@/context/MoviesContext";
import { filterTrailer } from "@/utils/filterTrailer";
import { movieTrailer } from "@/services/MoviesTrailer";
import Image from "next/image";

const CardMovie = ({ item }) => {
  const { showInfoMovie } = useMovies();
  const router = useRouter();

  const handleInfoMovie = async (item) => {
    const movieData = await movieTrailer(item.id);
    if (movieData.success === false) {
      return;
    } else {
      const trailer = filterTrailer(movieData);
      showInfoMovie(item, trailer);
      router.push("/info");
    }
  };

  return (
    <article className="card-movie" onClick={() => handleInfoMovie(item)}>
      <Image
        src={`${image_url_500}/${item.poster_path}`}
        alt={`${item.original_title}`}
        width={180}
        height={250}
        className="img-card-movie"
        loading="lazy"
      />
    </article>
  );
};

export default CardMovie;
