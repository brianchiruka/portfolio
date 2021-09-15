import { Grid, Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  var currentYear = new Date(),
    date = currentYear.getFullYear();
  return (
    <>
      <Grid container justifyContent="center">
        <Typography>☠ {date} • Made with ❤️ in JHB. •</Typography>
      </Grid>
    </>
  );
};

export default Footer;
