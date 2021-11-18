import React, { useState } from "react";
import MobileNavigation from "../menu/MobileNavigation";
import Navigation from "../menu/Navigation";
import classes from "../../components/menu/Navbar.module.css";

const Navbar = () => {
  const [navigationIsOpen, setNavigationIsOpen] = useState(true);

  const navigation = () => {
    window.scrollY >= 80
      ? setNavigationIsOpen(false)
      : setNavigationIsOpen(true);
  };

  window.addEventListener("scroll", navigation);

  return (
    <div className={classes.Navbar}>
      <MobileNavigation />
      {navigationIsOpen && <Navigation />}
    </div>
  );
};

export default Navbar;
