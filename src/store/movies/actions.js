import {
  GET_MOVIES_LOADING,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
} from "./types";

export const getMoviesSuccess = (movies) => ({
  type: GET_MOVIES_SUCCESS,
  payload: movies,
});

export const getMoviesLoading = {
  type: GET_MOVIES_LOADING,
};

export const getMoviesError = (error) => ({
  type: GET_MOVIES_ERROR,
  payload: error,
});
