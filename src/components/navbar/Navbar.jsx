import React from "react";
import MobileNavigation from "../menu/MobileNavigation";
import Navigation from "../menu/Navigation";
import classes from "../../components/menu/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <MobileNavigation />
      <Navigation />
    </div>
  );
};

export default Navbar;
