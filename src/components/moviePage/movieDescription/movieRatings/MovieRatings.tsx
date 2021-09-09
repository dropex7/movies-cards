import * as React from "react";
import { ratingI } from "types/movieDataI";
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getMovieRatings } from "store/movie/selectors";

export const MovieRatings = (): JSX.Element => {
  const ratings: ratingI[] | null = useSelector(getMovieRatings);

  if (ratings) {
    return (
      <>
        {ratings.map((rating: ratingI) => {
          return (
            <Grid item xs={6} key={rating.Source}>
              <Typography gutterBottom variant="h6" component="span">
                <b>{rating.Source}: </b>
              </Typography>
              <Typography gutterBottom variant="h6" component="span">
                {rating.Value}
              </Typography>
            </Grid>
          );
        })}
      </>
    );
  }
  return <></>;
};
