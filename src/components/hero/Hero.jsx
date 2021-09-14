import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import Photo from "../../images/potrait.jpg";

const Hero = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container style={{ marginBottom: 200 }}>
        <Grid item lg={9} sm={12} style={{ flexGrow: 3 }}>
          <Typography variant="h1" className={classes.heading}>
            Hi, I'm Brian,
          </Typography>
          <br />
          <Typography className={classes.paragraph}>
            a <span className={classes.bold}>Junior Developer</span> in JHB, ZA.
          </Typography>
          <br />
          <Typography className={classes.paragraph}>
            I am a curious individual who is passionate about science, math, and
            technology.
          </Typography>
          <br />
          <Typography className={classes.paragraph}>
            I am a habitual knowledge seeker who loves knowing how things work.
            In my spare time I like to shoot 3-point baskets🏀 and play the
            piano🎹.
          </Typography>
          <br />
        </Grid>
        <Grid item lg={3} sm={12} style={{ flexShrink: 2 }}>
          <img
            style={{
              width: 300,
              borderRadius: 9999,
              position: "relative",
            }}
            src={Photo}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
