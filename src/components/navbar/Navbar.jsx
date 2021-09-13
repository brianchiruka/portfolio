import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import { ReactComponent as Logo } from "./logo.svg";
import { HashLink as Link } from "react-router-hash-link";
import { Box } from "@material-ui/core";

const Navbar = () => {
  const classes = useStyles();
  const theme = {
    spacing: [0, 2, 4, 8],
  };
  return (
    <Box display="flex" alignItems="center" className={classes.navbarContainer}>
      <Typography variant="h6" className={classes.logo}>
        <Logo />
        brianchiruka
      </Typography>
      <Box>
        <Box display="inline" alignItems="center" m={2}>
          <Link to="home" className={classes.links}>
            Work
          </Link>
        </Box>
        <Box display="inline" alignItems="center" m={2}>
          <Link to="home" className={classes.links}>
            Résumé
          </Link>
        </Box>
        <Box display="inline" alignItems="center" m={2}>
          <Link to="home" className={classes.links}>
            About
          </Link>
        </Box>
        <Box display="inline" alignItems="center" m={2}>
          <Link to="home" className={classes.links}>
            Contact
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
