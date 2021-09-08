import * as React from "react";
import { movieDescriptionI } from "types/movieDataI";
import { Grid, Typography } from "@material-ui/core";
import { getKeyValue } from "utils/getKeyValue";
import { MovieRatings } from "./movieRatings/MovieRatings";
interface movieDescriptionPropsI {
  movie: movieDescriptionI;
}

export const MovieDescription = ({
  movie,
}: movieDescriptionPropsI): JSX.Element => {
  type movieDescriptionKeys = keyof typeof movie;
  return (
    <Grid container justifyContent="center" direction="row">
      {Object.keys(movie).map((k) => {
        if (k === "Ratings") {
          return <MovieRatings key={k} />;
        }
        return (
          <Grid item xs={6} key={k}>
            <Typography gutterBottom variant="h5" component="span">
              {k}:
            </Typography>
            <Typography gutterBottom variant="h5" component="span">
              {getKeyValue<keyof movieDescriptionI, movieDescriptionI>(
                k as movieDescriptionKeys
              )(movie)}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};
