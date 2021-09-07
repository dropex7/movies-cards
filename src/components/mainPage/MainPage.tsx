import * as React from "react";
import { MoviesCards } from "./moviesCards/MoviesCards";
import { SearchField } from "./searchField/SearchField";
import { useSelector } from "react-redux";
import { getMoviesData } from "store/movies/selectors";
import { NotFoundList } from "./notFoundList/NotFoundList";
import { Grid } from "@material-ui/core";

export const MainPage = (): JSX.Element => {
  const { movies } = useSelector(getMoviesData);
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid>
        <SearchField />
      </Grid>
      <Grid>
        {movies && movies.length > 0 ? (
          <MoviesCards movies={movies} />
        ) : (
          <NotFoundList />
        )}
      </Grid>
    </Grid>
  );
};
