import { getMovieError, getMovieSuccess, getMovieLoading } from "./actions";

export const loadMovie = (id) => (dispatch) => {
  dispatch(getMovieLoading);
  fetch(`${process.env.REACT_APP_API_URL}&i=${id}`)
    .then((response) => response.json())
    .then((data) => dispatch(getMovieSuccess(data)))
    .catch((error) => dispatch(getMovieError(error)));
};
