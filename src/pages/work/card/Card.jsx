import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import store from "../store.png";

export const Card = () => {
  const classes = useStyles();
  return (
    <>
        <Box border={5} className={classes.project}>
          <Typography variant="h3" className={classes.projectTitle}>
            e-commerce store
          </Typography>
          <Typography variant="subtitle1">
            Used: React, MaterialUI, CommerceJS, Stripe API, SendGrid API. 2021
          </Typography>
          <img src={store} style={{ width: 360, marginLeft: 50 }} />
        </Box>
    </>
  );
};
