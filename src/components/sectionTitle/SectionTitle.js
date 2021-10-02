import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const SectionTitle = (props) => {
  const classes = useStyles();
  return (
    <Grid item>
      {props.children}
      <Typography variant="h2" className={classes.sectionTitle}>
        {props.title}
      </Typography>
    </Grid>
  );
};

export default SectionTitle;
