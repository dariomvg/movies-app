"use client"
import CardMovie from "@/components/CardMovie";
import "./search.css";
import { useSearchParams } from "next/navigation";
import { useSearchMovie } from "@/hooks/useSearchMovie";

const SearchPage = () => {
  const searchParams = useSearchParams(); 
  const query = searchParams.get("movies")
  const {searchMovie} = useSearchMovie(query);

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
