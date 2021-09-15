import React from "react";
import useStyles from "./styles";
import { ReactComponent as Dot } from "./dot.svg";
import { Container, Typography } from "@material-ui/core";

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Dot style={{ position: "relative" }} />
      <Typography variant="h2" className={classes.about}>
        About me
      </Typography>
      <Typography variant="h5" className={classes.bold}>
        Who am I?
      </Typography>
      <Typography variant="body1">
        My name is Marco Cornacchia, and I am a Product Designer and Visual
        Developer based in NY. I have a B.A. in Psychology, a M.S. in
        Information Design and a background in Front-End Development.
      </Typography>
      <Typography variant="h5" className={classes.bold}>
        What do I do?{" "}
      </Typography>
      <Typography variant="body1">
        I combine research, user flows, wireframing, prototyping, storytelling,
        and visual design & development to transform tricky problems into
        engaging solutions. With a background in Front-End Development, I
        understand the constraints of the web and am able to design and build
        around them effectively.
      </Typography>
      <Typography variant="h5" className={classes.bold}>
        What am I passionate about?
      </Typography>
      <Typography variant="body1">
        As a No-Code enthusiast, I believe that lowering the barrier of entry
        into development will empower more people to create ✨beautiful
        experiences✨
      </Typography>
      <Typography variant="body1">
        Because of this, I am always on the lookout for No-Code solutions (like
        Webflow—which this site is entirely built on) that help everyone work
        faster and place the focus on the design, accessibility, and execution
        of products. I am also extremely passionate about bridging the gap
        between designers & developers in order to create the best possible
        products.
      </Typography>
      <Typography variant="body1">
        But most importantly, I love working with diverse people who want to
        make the 🌎 a little better before we’re all DEAD 💀 Okay, what else? I
        ❤️ dogs. That’s it.
      </Typography>
    </>
  );
};

export default About;
