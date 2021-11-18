import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import Modal from "../modal/Modal";
import { motion } from "framer-motion";

export const Card = ({ title, subtitle, img, demo, code }) => {
  const animateFrom = { y: -8 };
  const animateTo = { y: 0 };
  const classes = useStyles();

  return (
    <>
      <Box border={3} borderRadius={26} className={classes.project}>
        <Typography variant="h3" className={classes.projectTitle}>
          {title}
        </Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
        <motion.img
          initial={animateFrom}
          animate={animateTo}
          transition={{
            ease: "easeInOut",
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          src={img}
          className={classes.projectImage}
        />
        <Modal demo={demo} code={code} />
        <Grid container className={classes.mobileCardButtons}>
          <Grid item>
            <Button size="small" variant="outlined">
              <a
                href={code}
                target="_blank"
                rel="noreferrer"
                style={{ color: "black" }}
              >
                View Code
              </a>
            </Button>
            <Button size="small" variant="outlined">
              <a
                href={code}
                target="_blank"
                rel="noreferrer"
                style={{ color: "black" }}
              >
                Live Demo
              </a>
            </Button>
          </Grid>
        </Grid>
      </Box>
      <br />
    </>
  );
};
