import * as React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    border: "1px solid #ebf3fd",
    marginRight: "10px",
  },
  activeLink: {
    backgroundColor: "#58a5e1",
  },
  linkButton: {
    color: "#ebf3fd",
  },
});

export const NavBar = (): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Movies</Typography>
          <Grid container alignItems="center" justifyContent="flex-end">
            <NavLink
              to="/movies"
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              <Button className={classes.linkButton}>Movies</Button>
            </NavLink>
            <NavLink
              to="/about"
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              <Button className={classes.linkButton}>About</Button>
            </NavLink>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
