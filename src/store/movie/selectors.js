export const getMovieData = (store) => store.movie;
export const getMovieRatings = (store) => {
  if (store.movie.movie.Ratings !== "N/A") {
    return store.movie.movie.Ratings;
  }
  return null;
};

export const getMoviePlot = (store) => store.movie.movie.Plot;
