import {
  RESET_MOVIE,
  GET_MOVIE_LOADING,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_ERROR,
} from "./types";

const initialState = {
  movie: null,
  isLoading: false,
  error: null,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_LOADING:
      return { ...state, isLoading: true };
    case GET_MOVIE_SUCCESS:
      return { ...state, isLoading: false, movie: action.payload };
    case GET_MOVIE_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case RESET_MOVIE:
      return { ...state, movie: null };
    default:
      return state;
  }
}
