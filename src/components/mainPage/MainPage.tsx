import * as React from "react";
import { MoviesCards } from "./moviesCards/MoviesCards";
import { SearchField } from "./searchField/SearchField";

export const MainPage = (): JSX.Element => {
  return (
    <>
      <SearchField />
      <MoviesCards />
    </>
  );
};
