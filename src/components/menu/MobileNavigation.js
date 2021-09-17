import React from "react";
import NavLinksMobile from "./NavLinksMobile";
import classes from "./Navbar.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { ReactComponent as Logo } from "./logo.svg";
import { motion } from "framer-motion";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const animateFrom = { opacity: 0, scale: 0 };
  const animateTo = { opacity: 1, scale: 1 };
  const hamburgerIcon = (
    <MenuIcon
      className={classes.Hamburger}
      color="inherit"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <>
      <Grid item>
        <motion.span initial={animateFrom} animate={animateTo}>
          <Typography variant="h6" className={classes.MobileLogo}>
            <Logo />
            brianchiruka
          </Typography>
        </motion.span>
      </Grid>
      <CloseIcon
        className={classes.Hamburger}
        color="black"
        onClick={() => setOpen(!open)}
      />
    </>
  );

  const closeMobileMenu = () => setOpen(false);
  return (
    <nav className={classes.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && (
        <NavLinksMobile isMobile={true} closeMobileMenu={closeMobileMenu} />
      )}
    </nav>
  );
};

export default MobileNavigation;
