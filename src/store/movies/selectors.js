import { makeUniqMoviesData } from "utils/makeUniqMovieData";

export const getMoviesData = (store) => {
  if (store.movies.movies && store.movies.movies.length > 0) {
    return makeUniqMoviesData(store.movies.movies);
  }
  return store.movies.movies;
};

export const getMoviesLength = (store) =>
  store.movies.movies ? store.movies.movies.length : undefined;
