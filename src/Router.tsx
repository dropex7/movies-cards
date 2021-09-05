import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "./components/mainPage/MainPage";
import { AboutPage } from "./components/aboutPage/AboutPage";
import { NavBar } from "./components/NavBar";

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route path="/movies">
          <MainPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route>
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </HashRouter>
  );
};
