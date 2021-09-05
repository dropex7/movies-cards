import * as React from "react";
import { loadMovies } from "../../../store/movies/operations";
import { useDispatch, useSelector } from "react-redux";

export const SearchField = (): JSX.Element => {
  const dispatch = useDispatch();
  useSelector((state) => console.log(state));
  return (
    <>
      <input type="text" />
      <button onClick={() => dispatch(loadMovies("love"))}>
        Search movies
      </button>
    </>
  );
};
