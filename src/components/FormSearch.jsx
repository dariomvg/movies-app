"use client";
import { useState } from "react";
import "../styles/form.css";
import { useMovies } from "@/context/MoviesContext";
import { useRouter } from "next/navigation";
import { SearchMovies } from "@/services/MoviesSearch";

const FormSearch = () => {
  const [query, setQuery] = useState("");
  const { handleSearchMovies } = useMovies(); 
  const router = useRouter(); 

  const handleSearch = async () => {
    if (query === "") {
      return;
    } else {
      const newMovies = await SearchMovies(query);
      handleSearchMovies(newMovies);
      setQuery("");
      router.push("/search")
    }
  };
  return (
    <div className="sec-buscador">
      <input
        type="text"
        placeholder="Movies, series, TV..."
        className="input-menu"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <button className="btn-menu" onClick={handleSearch}>
        search
      </button>
    </div>
  );
};

export default FormSearch;
