import React from "react";
import useStyles from "./styles";
import { ReactComponent as Dot } from "./dot.svg";
import { Box, Typography } from "@material-ui/core";

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.sectionMargin}>
        <Dot style={{ position: "relative" }} id="about" />
        <Typography variant="h2" className={classes.about}>
          About me
        </Typography>
        <Typography variant="h4" className={classes.bold}>
          Who am I?
        </Typography>
        <Typography variant="body1">
          My name is Brian Chiruka, and I am a junior Web developer and Visual
          Designer based in JHB, ZA. My technical experience started with me
          using breadboards and microprocessors to do things like control LEDs
          and sensors. This introduced me to writing code in C and Assembly and
          eventually studying Electrical Engineering at CUT. After university I
          then went on to get professional experience as a technician and roles
          that focused on client experience for commercial services
        </Typography>
        <Typography variant="h4" className={classes.bold}>
          What do I do?
        </Typography>
        <Typography variant="body1">
          I combine research, user flows, wireframing, prototyping,
          storytelling, and visual design & development to transform tricky
          problems into engaging solutions. With a background in computing
          achitecture, I understand the constraints of the web and am able to
          build around them effectively.
        </Typography>
        <Typography variant="h4" className={classes.bold}>
          What am I passionate about?
        </Typography>
        <Typography variant="body1">
          I believe that lowering the barrier of entry into development will
          empower more people to create ✨beautiful experiences✨
        </Typography>
        <Typography variant="body1">
          But most importantly, I love working with diverse people who want to
          make the 🌎 a little better.
        </Typography>
        <Typography variant="body1">Okay, what else?</Typography>
        <Typography variant="body1">I ❤️ dogs. That’s it.</Typography>
      </Box>
    </>
  );
};

export default About;
