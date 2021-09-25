import * as React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { defaultUrl } from "constans/defaultUrl";
import { movieDataI } from "types/movieDataI";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadMovie } from "store/movie/operations";
import { makeTitleSmaller } from "utils/makeTitleSmaller";

const useStyles = makeStyles({
  card: {
    boxShadow: "4px 4px 9px 3px rgba(63, 81, 181, 0.22)",
  },
  cardActionArea: {
    width: "330px",
    height: "500px",
  },
  cardImage: { height: "250px" },
});

interface moviePropI {
  movie: movieDataI;
}

export const MovieCard = ({ movie }: moviePropI): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const openMoviePage = (id: string): void => {
    dispatch(loadMovie(id));
    setTimeout(() => history.push(`/movie`), 500);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea
        className={classes.cardActionArea}
        onClick={() => openMoviePage(movie.imdbID)}
      >
        <CardMedia
          className={classes.cardImage}
          component="img"
          alt="Contemplative Reptile"
          image={movie.Poster !== "N/A" ? movie.Poster : defaultUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {makeTitleSmaller(movie.Title)}
          </Typography>
          <Typography gutterBottom variant="h6">
            Year: {movie.Year}
          </Typography>
          <Typography gutterBottom variant="h6">
            Type: {movie.Type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
