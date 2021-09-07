import * as React from "react";
import { useSelector } from "react-redux";
import { getMovieData } from "store/movie/selectors";
import { Grid, Card, CardContent } from "@material-ui/core";
import { MovieDescription } from "./movieDescription/MovieDescription";
import { defaultUrl } from "constans/defaultUrl";

export const MoviePage = (): JSX.Element => {
  const { movie } = useSelector(getMovieData);

  return (
    <Card style={{ margin: "30px 10px", border: "1px solid black" }}>
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3}>
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : defaultUrl}
              alt={movie.Title}
            />
          </Grid>
          <Grid item xs={9}>
            <MovieDescription movie={movie} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
