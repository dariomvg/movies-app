"use client"
import { SeriesApi } from "@/services/SeriesApi";
import "./series.css";
import CardMovie from "@/components/CardMovie";

const page = () => {
    const {series} = SeriesApi(); 

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