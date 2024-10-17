"use client"
import CardMovie from "@/components/CardMovie";
import "./upcoming.css";
import { useMovies } from "@/context/MoviesContext";

const Upcoming = () => {
  const { popularMovies } = useMovies(); 
  return (
    <section className="section-upcoming">
      <h1 className="title-page-upcoming">Upcoming and popular</h1>
      <section className="sec-upcoming">
        {popularMovies &&
          popularMovies.map((item) => <CardMovie key={item.id} item={item} />)}
      </section>
    </section>
  );
};

export default Upcoming;
