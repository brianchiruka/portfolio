import React from "react";
import useStyles from "./styles";
import { ReactComponent as Dot } from "./dot.svg";
import { Container, Typography } from "@material-ui/core";

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Dot style={{ position: "relative" }} />
        <Typography variant="h2" className={classes.about}>
          About me
        </Typography>
      </Container>
    </>
  );
};

export default About;
