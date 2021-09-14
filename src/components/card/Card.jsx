import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import Modal from "../modal/Modal";

export const Card = ({ title, subtitle, img }) => {
  const classes = useStyles();
  return (
    <>
      <Box border={5} className={classes.project}>
        <Typography variant="h3" className={classes.projectTitle}>
          {title}
        </Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
        <img src={img} style={{ width: 360, marginLeft: 50 }} />
        <Modal />
      </Box>
    </>
  );
};
