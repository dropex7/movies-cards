import * as React from "react";
import { useSelector } from "react-redux";
import { getMoviesData } from "../../../store/movies/selectors";
// import { loadMovie } from "../../../store/movie/operations";

interface movieDataI {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export const MoviesCards = (): JSX.Element => {
  // const dispatch = useDispatch();
  const { movies, isLoading, error } = useSelector(getMoviesData);
  console.log(isLoading, error);
  return (
    <>
      {movies.map((movie: movieDataI) => {
        return <h3 key={movie.imdbID}>{movie.Title}</h3>;
      })}
    </>
  );
};
