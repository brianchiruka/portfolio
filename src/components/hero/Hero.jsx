import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import Photo from "../../images/potrait.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const classes = useStyles();
  const heading = {
    hidden: { opacity: 0, x: -200 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1,
        duration: 0.7,
        x: { type: "spring", stiffness: 100 },
      },
    },
  };
  const paragraph = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <Grid container justifyContent="center" className={classes.sectionMargin}>
        <Grid item lg={9} md={9} sm={12} style={{ flexGrow: 3 }}>
          <Typography variant="h1">
            <motion.p variants={heading} initial="hidden" animate="show">
              Hi, I'm Brian,
            </motion.p>
          </Typography>
          <br />
          <Typography variant="body1">
            <motion.p
              variants={paragraph}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.4, staggerDirection: -1, duration: 0.5 }}
            >
              a <b>Junior Web Developer</b> in JHB, ZA.
            </motion.p>
          </Typography>
          <br />
          <Typography variant="body1">
            <motion.p
              variants={paragraph}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.6, staggerDirection: -1, duration: 0.5 }}
            >
              I am a curious individual who is passionate about science, math,
              and technology.
            </motion.p>
          </Typography>
          <br />
          <Typography variant="body1">
            <motion.p
              variants={paragraph}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.9, staggerDirection: -1, duration: 0.5 }}
            >
              I am a habitual knowledge seeker who loves knowing how things
              work. In my spare time I like to shoot 3-point baskets🏀 and play
              the piano🎹.
            </motion.p>
          </Typography>
          <br />
        </Grid>
        <Grid item lg={3} md={3} sm={12}>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={classes.heroPotrait}
            src={Photo}
            alt=""
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
