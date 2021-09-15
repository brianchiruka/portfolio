import { Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  var currentYear = new Date(),
    date = currentYear.getFullYear();
  return (
    <>
      <Typography>Made with ❤️ by me. @ {date}</Typography>
    </>
  );
};

export default Footer;
