"use client";
import { useState } from "react";
import "../styles/form.css";
import { useMovies } from "@/context/MoviesContext";
import { useRouter } from "next/navigation";
import { SearchMovies } from "@/services/MoviesSearch";
import iconSearch from "../assets/icon-search.svg";

const FormSearch = () => {
  const [query, setQuery] = useState("");
  const { handleSearchMovies } = useMovies(); 
  const router = useRouter(); 

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query === "") {
      return;
    } else {
      const newMovies = await SearchMovies(query);
      handleSearchMovies(newMovies);
      setQuery("");
      router.push("/search");
    }
  };
  return (
    <form onSubmit={handleSearch} className="sec-buscador">
      <input
        type="text"
        placeholder="Movies, series, TV..."
        className="input-menu"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <button type="submit" className="btn-menu">
        <img src={iconSearch.src} alt="search" width={20} height={20} className="icon-search" />
      </button>
    </form>
  );
};

export default FormSearch;
