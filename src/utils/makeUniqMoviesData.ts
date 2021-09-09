import { movieDataI } from "types/movieDataI";

export const makeUniqMoviesData = (movies: movieDataI[]): movieDataI[] => {
  const uniqMoviesIds: string[] = [];
  return movies.filter((movie: movieDataI) => {
    if (uniqMoviesIds.includes(movie.imdbID)) {
      return false;
    }
    uniqMoviesIds.push(movie.imdbID);
    return true;
  });
};
