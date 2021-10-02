import { Typography } from "@material-ui/core";
import React from "react";

const Skills = (props) => {
  

  return (
    <>
      <Typography variant="h3" gutterBottom>
        {props.title}
      </Typography>
      <Typography variant="h5">
        <b>{props.text1}</b>
      </Typography>
      <Typography variant="h5">
        <b>{props.text2}</b>
      </Typography>
      <Typography variant="h5">
        <b>{props.text3}</b>
      </Typography>
      <Typography variant="h5">
        <b>{props.text4}</b>
      </Typography>
      <Typography variant="h5">
        <b>{props.text5}</b>
      </Typography>
      <Typography variant="h5">
        <b>{props.text6}</b>
      </Typography>
      <Typography variant="h5">
        <b>{props.text7}</b>
      </Typography>
    </>
  );
};

export default Skills;
