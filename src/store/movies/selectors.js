export const getMoviesData = (store) => store.movies;
export const getMoviesLength = (store) =>
  store.movies.movies ? store.movies.movies.length : undefined;
