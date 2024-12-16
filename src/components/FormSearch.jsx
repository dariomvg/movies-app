"use client";
import { useState } from "react";
import "../styles/form.css";
import { useRouter } from "next/navigation";
import iconSearch from "../assets/icon-search.svg";

const FormSearch = () => {
  const [query, setQuery] = useState("");
  const router = useRouter(); 

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query === "") {
      return;
    } else {
      router.push(`/search?movies=${query}`);
      setQuery("");
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
        data-testid="input"
        required
      />
      <button type="submit" className="btn-menu">
        <img src={iconSearch.src} alt="search" width={20} height={20} className="icon-search" data-testid="button" />
      </button>
    </form>
  );
};

export default FormSearch;
