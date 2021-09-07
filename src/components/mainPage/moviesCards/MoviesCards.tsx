import * as React from "react";
import { Grid, Card, CardContent } from "@material-ui/core";
import { MovieCard } from "./movieCard/MovieCard";
import { movieDataI } from "types/movieDataI";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  movieCardsContainer: {
    backgroundColor: "#edefee",
    padding: "10px 0px",
    boxShadow: "0px 1px 7px 10px rgba(63, 81, 181, 0.2)",
    margin: "5px 1%",
    width: "98%",
  },
});

interface moviesProps {
  movies: movieDataI[];
}

export const MoviesCards = ({ movies }: moviesProps): JSX.Element => {
  const classes = useStyles();
  return (
    <Card className={classes.movieCardsContainer}>
      <CardContent>
        <Grid container spacing={2}>
          {movies.map((movie: movieDataI) => {
            return (
              <Grid key={movie.imdbID} item xs={4}>
                <Grid container justifyContent="center">
                  <MovieCard movie={movie} />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
};
