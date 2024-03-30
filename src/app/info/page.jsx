"use client";
import { useMovies } from "@/context/MoviesContext";
import { image_url, image_url_500, url_trailer } from "@/utils/options";
import { MoviesApi } from "@/services/MoviesApi";
import ReactPlayer from "react-player/youtube";
import Image from "next/image";
import "./info.css";

const InfoTodo = () => {
  const { infoMovie, trailer } = useMovies();
  const { movies } = MoviesApi();

  return (
    <section className="section-info-todo">
      <section className="sec-details-movie">
        <div className="fondo">
          <Image
          src={`${image_url}${infoMovie.backdrop_path}`}
          alt={`${infoMovie.title}`}
          className="img-info-fondo"
          sizes="100vw"
          fill
        />
        </div>
        <div className="info-details-movie">
          <Image
            src={`${image_url_500}${infoMovie.poster_path}`}
            alt={`${infoMovie.title}`}
            className="poster"
            width={240}
            height={300}
          />
          <div className="cont-details">
            <div className="sec-title">
              <h2 className="title-info">
                {infoMovie.original_title}
                {infoMovie.original_name}
              </h2>
              <p className="vote-info">
                {Math.round(infoMovie.vote_average)}/10
              </p>
            </div>
            <strong className="date-info">
              {infoMovie.release_date}
              {infoMovie.first_air_date}
            </strong>
            <p className="overview-info">{infoMovie.overview}</p>
          </div>
        </div>
      </section>
      <section className="sec-video">
        {trailer && (
          <ReactPlayer
            url={`${url_trailer}${trailer.key}`}
            controls
            width={640}
            height={360}
            className="container-video"
          />
        )}
      </section>
      <section className="sec-recomendado">
        <h3 className="title-recomendado">
        Other titles that may interest you
        </h3>
        <div className="sec-other-movies">
          {movies &&
            movies.slice(0, 6).map((item) => (
              <article key={item.id} className="box-movie">
                <Image
                  src={`${image_url_500}/${item.poster_path}`}
                  alt={item.original_title}
                  width={180}
                  height={250}
                  className="img-box-movie"
                  loading="lazy"
                />
                <div className="details-box-movie">
                  <h3 className="title-box">{item.original_title}</h3>
                  <div className="info-box">
                    <strong className="vote-box">
                      {Math.round(item.vote_average)}/10
                    </strong>
                    <p className="data-box">{item.release_date}</p>
                  </div>
                  <p className="detail-box">{item.overview}</p>
                </div>
              </article>
            ))}
        </div>
      </section>
    </section>
  );
};

export default InfoTodo;
