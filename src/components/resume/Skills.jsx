import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import useStyles from "./style";

export default function Skills(props) {
  const classes = useStyles();

  const theme = useTheme();

  return (
    <Card className={classes.root2}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.skillsInfo[props.index]}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.svg}
        title={props.skillsInfo[props.index]}
      />
    </Card>
  );
}
