import * as React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";

export const NavBar = (): JSX.Element => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Movies</Typography>
          <Grid container alignItems="center" justifyContent="flex-end">
            <Link to="/movies">
              <Button>Movies</Button>
            </Link>
            <Link to="/about">
              <Button>About</Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
