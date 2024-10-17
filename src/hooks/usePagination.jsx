"use client"

import { paginationMovies } from "@/services/PaginationMovies";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export const usePagination = (id) => {
    const [movies, setMovies] = useState(null);
    const router = useRouter();
 
    useEffect(() => {
      if (id) {
        const handleData = async () => {
           const data = await paginationMovies(id);
           setMovies(data);
        } 
        handleData();
      }
    }, [id]);
  
    const changePage = () => {
      const newId = parseInt(id) + 1;
      router.push(`/movies/${newId}`);
    };


    return {changePage, movies}
}