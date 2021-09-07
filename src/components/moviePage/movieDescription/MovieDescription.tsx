import * as React from "react";
import { movieDescriptionI } from "types/movieDataI";
import { Grid, Typography } from "@material-ui/core";

interface movieDescriptionPropsI {
  movie: movieDescriptionI;
}

const getKeyValue =
  <U extends keyof T, T extends object>(key: U) =>
  (obj: T) => {
    if (key === "Ratings" || key === "Poster" || key === "Response") {
      return;
    }
    return obj[key];
  };

export const MovieDescription = ({
  movie,
}: movieDescriptionPropsI): JSX.Element => {
  type movieDescriptionKeys = keyof typeof movie;
  return (
    <Grid container justifyContent="center" direction="row">
      {Object.keys(movie).map((key) => {
        // if(key === "Ratings"){
        //   return (<Grid item xs={6}>
        //     <Typography gutterBottom variant="h5" component="span">
        //       {key}:
        //     </Typography>
        //     <Typography gutterBottom variant="h5" component="span">
        //       {getKeyValue<keyof movieDescriptionI, movieDescriptionI>(
        //         key as movieDescriptionKeys
        //       )(movie)}
        //     </Typography>
        //   </Grid>)
        // }
        return (
          <Grid item xs={6}>
            <Typography gutterBottom variant="h5" component="span">
              {key}:
            </Typography>
            <Typography gutterBottom variant="h5" component="span">
              {getKeyValue<keyof movieDescriptionI, movieDescriptionI>(
                key as movieDescriptionKeys
              )(movie)}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};
