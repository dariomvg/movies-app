"use client"
import CardMovie from "@/components/CardMovie";
import { MoviesPopularApi } from "@/services/MoviesPopularApi";
import "./upcoming.css";

const Upcoming = () => {
  const { popularMovies } = MoviesPopularApi();
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
