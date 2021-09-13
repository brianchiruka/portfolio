import React from "react";
import useStyles from "./styles";
import { ReactComponent as Dot } from "./dot.svg";
import { Card } from "./card/Card";
import { Container, Typography } from "@material-ui/core";

const Work = () => {
  const classes = useStyles();
  return (
    <>
      <Container display="flex" style={{ marginBottom: 200 }}>
        <Dot style={{ position: "relative" }} />
        <Typography variant="h2" className={classes.work}>
          Selected Work
        </Typography>
        <Card />
      </Container>
      {/* Todo: 
      1. Use props to render card
      2. put a modal over the card to choose between view code and live demo 
      */}
    </>
  );
};

export default Work;
