import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "./components/mainPage/MainPage";
import { AboutPage } from "./components/aboutPage/AboutPage";
import { NavBar } from "./components/NavBar";
import { MoviePage } from "./components/moviePage/MoviePage";
import { useSelector } from "react-redux";
import { getMoviesLength } from "./store/movies/selectors";

export const Router: React.FC = () => {
  const moviesLength = useSelector(getMoviesLength);
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route exact path="/movies" component={MainPage} />
        <Route path="/about" component={AboutPage} />
        <Route
          path="/movie"
          render={() =>
            moviesLength > 0 ? <MoviePage /> : <Redirect to="/movies" />
          }
        />
        <Route>
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </HashRouter>
  );
};
