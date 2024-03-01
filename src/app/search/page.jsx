"use client"
import CardMovie from "@/components/CardMovie";
import { useMovies } from "@/context/MoviesContext";
import "./search.css";

const SearchPage = () => {
  const { searchMovie } = useMovies();

  return (
    <section className="section-search-movies">
      {searchMovie.length > 0 ? (
        searchMovie.map((item) => <CardMovie key={item.id} item={item} />)
      ) : (
        <h1>la busqueda no arrojo resultados</h1>
      )}
    </section>
  );
};

export default SearchPage;
