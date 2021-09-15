import React from "react";
import useStyles from "./styles";
import { ReactComponent as Dot } from "./dot.svg";
import { Card } from "../../components/card/Card";
import { Grid, Typography } from "@material-ui/core";
import store from "../../images/store.png";

const Work = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container display="flex" style={{ marginBottom: 200 }}>
        <Grid item>
          <Dot style={{ position: "relative" }} />
          <Typography variant="h2" className={classes.work}>
            Selected Work
          </Typography>
        </Grid>
        <Grid container spacing={6}>
          <Grid item>
            <Card
              title="woolies twin"
              subtitle="Used: React, MaterialUI, CommerceJS, Stripe API, SendGrid API. 2021"
              img={store}
            />
          </Grid>
          <Grid item style={{ marginTop: 100 }}>
            <Card
              title="e-commerce store"
              subtitle="Used: React, MaterialUI, CommerceJS, Stripe API, SendGrid API. 2021"
              img={store}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Work;
