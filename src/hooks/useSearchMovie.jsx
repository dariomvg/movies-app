"use client"
import { getSearchMovie } from "@/services/getSearchMovie";
import { useEffect, useState } from "react";

export const useSearchMovie = (query) => {
  const [searchMovie, setSearchMovie] = useState([]);

    useEffect(() => {
    if(query) {
        const handleSearchMovie = async () => {
            const data = await getSearchMovie(query);
            setSearchMovie(data); 
        }
        handleSearchMovie() 
    }
    }, [])
    
    return {searchMovie}

}