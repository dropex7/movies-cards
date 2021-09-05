import { getMoviesError, getMoviesSuccess, getMoviesLoading } from "./actions";

export const loadMovies = (searchField) => (dispatch) => {
  dispatch(getMoviesLoading);
  fetch(`${process.env.REACT_APP_API_URL}&s=${searchField}`)
    .then((response) => response.json())
    .then((data) => {
      dispatch(getMoviesSuccess(data.Search));
    })
    .catch((error) => dispatch(getMoviesError(error)));
};
