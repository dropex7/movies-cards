import {
  GET_MOVIES_LOADING,
  GET_MOVIES_ERROR,
  GET_MOVIES_SUCCESS,
} from "./types";

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_LOADING:
      return { ...state, isLoading: true };
    case GET_MOVIES_SUCCESS:
      return { ...state, isLoading: false, movies: action.payload };
    case GET_MOVIES_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
