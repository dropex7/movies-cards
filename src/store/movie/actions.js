import {
  RESET_MOVIE,
  GET_MOVIE_ERROR,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_LOADING,
} from "./types";

export const getMovieLoading = (user) => ({
  type: GET_MOVIE_LOADING,
});

export const getMovieSuccess = (movie) => ({
  type: GET_MOVIE_SUCCESS,
  payload: movie,
});

export const getMovieError = (error) => ({
  type: GET_MOVIE_ERROR,
  payload: error,
});

export const resetUser = {
  type: RESET_MOVIE,
};
