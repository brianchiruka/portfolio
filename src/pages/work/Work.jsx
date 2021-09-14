import React from "react";
import useStyles from "./styles";
import { ReactComponent as Dot } from "./dot.svg";
import { Card } from "../../components/card/Card";
import { Container, Typography } from "@material-ui/core";
import store from "../../images/store.png";

const Work = () => {
  const classes = useStyles();
  return (
    <>
      <Container display="flex" style={{ marginBottom: 200 }}>
        <Dot style={{ position: "relative" }} />
        <Typography variant="h2" className={classes.work}>
          Selected Work
        </Typography>
        <Card
          title="e-commerce store"
          subtitle="Used: React, MaterialUI, CommerceJS, Stripe API, SendGrid API. 2021"
          img={store}
        />
      </Container>
      {/* Todo: 
      2. put a modal over the card to choose between view code and live demo 
      */}
    </>
  );
};

export default Work;
