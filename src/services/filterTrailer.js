export const filterTrailer = (data) => {
  if (data.videos.results) {
    const trailer = data.videos.results.filter((video) =>
      video.name === "Official Trailer"
        ? video
        : video.name === "Teaser Trailer"
    );

    return trailer;
  }
};
