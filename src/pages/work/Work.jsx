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
      <Grid container display="flex" className={classes.sectionMargin}>
        <Grid item>
          <Dot style={{ position: "relative" }} />
          <Typography variant="h2" className={classes.work}>
            Selected Work
          </Typography>
        </Grid>
        <Grid container>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Card
              title="woolies twin"
              subtitle="Used: React, MaterialUI, CommerceJS, Stripe API, Firebase. Completed 2021"
              img={store}
              code="https://github.com/brysonrare"
              demo="https://shopforever.netlify.app/"
            />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={6}
            xs={12}
            className={classes.laggingCard}
          >
            <Card
              title="e-commerce store"
              subtitle="Used: React, MaterialUI, CommerceJS, Stripe API, Firebase. Completed 2021"
              img={store}
              code="https://github.com/brysonrare"
              demo="https://shopforever.netlify.app/"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Work;
