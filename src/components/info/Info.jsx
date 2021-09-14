import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { ReactComponent as Icon } from "./link.svg";

const Info = ({ heading, title, description, dates, link }) => {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h3"
        style={{ fontFamily: "DR-RAYMOND Display", marginBottom: 40 }}
      >
        {heading}
      </Typography>
      <Typography variant="h4" className={classes.info}>
        <a href={link} target="_blank" className={classes.link}>
          {title}
          <Icon className={classes.emoji} />
        </a>
      </Typography>
      <Typography variant="h5" className={classes.info}>
        {description}
      </Typography>
      <Typography variant="h6" className={classes.info}>
        <i>{dates}</i>
      </Typography>
    </>
  );
};

export default Info;
