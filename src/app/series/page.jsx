"use client"
import "./series.css";
import CardMovie from "@/components/CardMovie";
import { useMovies } from "@/context/MoviesContext";

const page = () => {
    const {series} = useMovies(); 
    
  return (
    <section className="section-series">
        <h1 className="title-page-series">series</h1>
        <section className="sec-series">
            {series && series.map((item) => <CardMovie key={item.id} item={item} />)}
        </section>
    </section>
  )
}

export default page