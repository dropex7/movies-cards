import * as React from "react";
import { movieDescriptionI } from "types/movieDataI";
import { Grid, Typography } from "@material-ui/core";
import { getKeyValue } from "utils/getKeyValue";
import { MovieRatings } from "./movieRatings/MovieRatings";
import { MoviePlot } from "./moviePlot/MoviePlot";

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
        const tempValue: string = getKeyValue<
          keyof movieDescriptionI,
          movieDescriptionI
        >(k as movieDescriptionKeys)(movie) as string;
        if (k !== "Plot" && tempValue && tempValue !== "N/A") {
          return (
            <Grid item xs={6} key={k}>
              <Typography gutterBottom variant="h6" component="span">
                <b>{k}: </b>
              </Typography>
              <Typography gutterBottom variant="h6" component="span">
                {tempValue}
              </Typography>
            </Grid>
          );
        }
        return <></>;
      })}
      <MoviePlot />
    </Grid>
  );
};
