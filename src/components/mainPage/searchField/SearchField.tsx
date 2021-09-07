import * as React from "react";
import { Grid } from "@material-ui/core";
import { loadMovies } from "store/movies/operations";
import { useDispatch, useSelector } from "react-redux";
import { OutlinedInput, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  searchContainer: {
    margin: "10px 10px",
  },
  searchField: {
    width: "300px",
  },
  searchBtn: {
    marginRight: "10px",
    backgroundColor: "#3f51b5",
    color: "#fff",
    marginLeft: "10px",
    padding: "10px 15px",
    "&:hover": {
      backgroundColor: "#58a5e1",
    },
  },
});

export const SearchField = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useSelector((state) => console.log(state));
  const [searchField, setSearchField] = React.useState("");
  const searchByClickEnter = (event: any): void => {
    if (event.key === "Enter") {
      searchByField();
    }
  };

  const searchByField = (): void => {
    dispatch(loadMovies(searchField));
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.searchContainer}
    >
      <Grid item>
        <OutlinedInput
          className={classes.searchField}
          id="outlined-adornment-weight"
          value={searchField}
          onChange={(event): void => setSearchField(event.target.value)}
          aria-describedby="outlined-weight-helper-text"
          placeholder="Type movie name..."
          onKeyPress={searchByClickEnter}
          labelWidth={0}
        />
        <Button className={classes.searchBtn} onClick={searchByField}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};
