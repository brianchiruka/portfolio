import React from "react";
import NavLinks from "./NavLinks";
import { Grid, Typography } from "@material-ui/core";
import { ReactComponent as Logo } from "./logo.svg";
import classes from "./Navbar.module.css";

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <Grid item>
        <Typography variant="h5" className={classes.Logo}>
          <Logo />
          <b>brianchiruka</b>
        </Typography>
      </Grid>
      <NavLinks
        style={{ position: "relative" }}
  
      />
    </nav>
  );
};

export default Navigation;
