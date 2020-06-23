import React from "react";
import Sidebar from "../bars/Sidebar";
import useStyles from "./style";
import Typography from '@material-ui/core/Typography'

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Sidebar />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
            
        </Typography>
      </main>
    </div>
  );
}
