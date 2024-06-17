"use client";
import CardMovie from "@/components/CardMovie";
import "./movies.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { moviesApi } from "@/services/PaginationMovies";

const Movies = ({ params }) => {
    const [movies, setMovies] = useState(null);
    const router = useRouter();
    const {id} = params; 

    useEffect(() => {
      if (id) {
        const handleData = async () => {
           const data = await moviesApi(id);
           setMovies(data);
        } 
        handleData();
      }
    }, [id]);
  
    const incrementId = () => {
      const newId = parseInt(id) + 1;
      router.push(`/movies/${newId}`);
    };

  return (
    <section className="section-movies">
      <h1 className="title-page-movies">Movies</h1>
      <section className="sec-movies">
        {movies &&
          movies.map((item) => <CardMovie key={item.id} item={item} />)}
      </section>
      <button onClick={incrementId} className="btn-more-movies">
        more movies
      </button>
    </section>
  );
};

export default Movies;
