import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { AppContext } from 'App'
import ListItem from "components/ListItem"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

const List: React.FC = () => {
  const classes = useStyles();
  const appContext = useContext(AppContext)
  return (
    <div className={classes.root}>
      <p>List : {appContext.query}</p>
      <Grid container spacing={3}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </Grid>
    </div>
  );
};

export default List;
