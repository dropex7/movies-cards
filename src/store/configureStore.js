import { createStore, combineReducers, applyMiddleware } from "redux";
import movie from "./movie/reducer";
import movies from "./movies/reducer";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    movie,
    movies,
  }),
  applyMiddleware(thunk)
);

export default store;
