import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getMoviePlot } from "store/movie/selectors";

export const MoviePlot = (): JSX.Element => {
  const moviePlot = useSelector(getMoviePlot);
  if (moviePlot !== "N/A") {
    return (
      <Grid item xs={12} key={"Plot"}>
        <Typography gutterBottom variant="h6" component="span">
          <b>Plot: </b>
        </Typography>
        <Typography gutterBottom variant="h6" component="span">
          {moviePlot}
        </Typography>
      </Grid>
    );
  }
  return <></>;
};
