import React from "react";
import useStyles from "./styles";
import { ReactComponent as Dot } from "./dot.svg";
import { Card } from "../../components/card/Card";
import { Grid, Typography } from "@material-ui/core";
import store from "../../images/store.png";
import woolies from "../../images/woolies.png";

const Work = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container display="flex" className={classes.sectionMargin}>
        <Grid item>
          <Dot style={{ position: "relative" }} id="work" />
          <Typography variant="h2" className={classes.work}>
            Selected Work
          </Typography>
        </Grid>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Card
              title="e-commerce store"
              subtitle="Used: ReactJS, MaterialUI, CommerceJS, Stripe API."
              img={store}
              code="https://github.com/brysonrare/shopforever"
              demo="https://shopforever.netlify.app/"
            />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={classes.laggingCard}
          >
            <Card
              title="portfolio website"
              subtitle="Used: ReactJS, MaterialUI, Firebase."
              img={woolies}
              code="https://github.com/brysonrare/portfolio"
              demo="/"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Work;
