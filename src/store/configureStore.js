import { createStore, combineReducers, applyMiddleware } from "redux";
import user from "./movie/reducer";
import movies from "./movies/reducer";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    user,
    movies,
  }),
  applyMiddleware(thunk)
);

export default store;
