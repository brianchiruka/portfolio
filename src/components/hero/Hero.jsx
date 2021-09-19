import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import Photo from "../../images/potrait.jpg";

const Hero = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container justifyContent="center" className={classes.sectionMargin}>
        <Grid item lg={9} sm={12} style={{ flexGrow: 3 }}>
          <Typography variant="h1">
            Hi, I'm Brian,
          </Typography>
          <br />
          <Typography variant="body1">
            a <b>Junior Web Developer</b> in JHB, ZA.
          </Typography>
          <br />
          <Typography variant="body1">
            I am a curious individual who is passionate about science, math, and
            technology.
          </Typography>
          <br />
          <Typography variant="body1">
            I am a habitual knowledge seeker who loves knowing how things work.
            In my spare time I like to shoot 3-point baskets🏀 and play the
            piano🎹.
          </Typography>
          <br />
        </Grid>
        <Grid item lg={3} sm={12}>
          <img className={classes.heroPotrait} src={Photo} alt="" />
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
