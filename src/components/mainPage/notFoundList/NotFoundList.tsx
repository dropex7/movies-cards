import * as React from "react";
import { Grid } from "@material-ui/core";
import { notFoundImageSrc } from "constans/defaultUrl";

export const NotFoundList = (): JSX.Element => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <img src={notFoundImageSrc} alt="NOT FOUND LIST" />
      </Grid>
    </Grid>
  );
};
