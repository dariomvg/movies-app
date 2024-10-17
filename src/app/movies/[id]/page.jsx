"use client";
import CardMovie from "@/components/CardMovie";
import { usePagination } from "@/hooks/usePagination";
import "./movies.css";

const Movies = ({ params }) => {
  const { changePage, movies } = usePagination(params.id);

  return (
    <section className="section-movies">
      <h1 className="title-page-movies">Movies</h1>
      <section className="sec-movies">
        {movies &&
          movies.map((item) => <CardMovie key={item.id} item={item} />)}
      </section>
      <button onClick={changePage} className="btn-more-movies">
        more movies
      </button>
    </section>
  );
};

export default Movies;
