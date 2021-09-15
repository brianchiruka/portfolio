import React from "react";
import useStyles from "./styles";
import { ReactComponent as Dot } from "./dot.svg";
import { Container, Typography } from "@material-ui/core";

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Dot style={{ position: "relative" }} />
      <Typography variant="h2" className={classes.contact}>
        Contact
      </Typography>
    </>
  );
};

export default Contact;
