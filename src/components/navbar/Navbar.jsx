import React from "react";
import useStyles from "./styles";
import { Grid, Typography } from "@material-ui/core";
import { ReactComponent as Logo } from "./logo.svg";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={6}
      alignItems="center"
      className={classes.navbarContainer}
    >
      <Grid item lg={8} md={6} sm={6} xs={12}>
        <Typography variant="h6" className={classes.logo}>
          <Logo />
          brianchiruka
        </Typography>
      </Grid>
      <Grid item alignItems="center" m={1}>
        <Link to="home" className={classes.links}>
          Work
        </Link>
      </Grid>
      <Grid item alignItems="center" m={1}>
        <Link to="home" className={classes.links}>
          Résumé
        </Link>
      </Grid>
      <Grid item alignItems="center" m={1}>
        <Link to="home" className={classes.links}>
          About
        </Link>
      </Grid>
      <Grid item alignItems="center" m={1}>
        <Link to="home" className={classes.links}>
          Contact
        </Link>
      </Grid>
    </Grid>
  );
};

export default Navbar;
