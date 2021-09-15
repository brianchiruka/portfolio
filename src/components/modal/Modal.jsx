import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Modal = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.modal}>
        <canvas className={classes.modalCover} />

        <Button
          variant="contained"
          href="https://shopforever.netlify.app/"
          target="_blank"
          className={classes.live}
        >
          Live Demo
        </Button>
        <Button
          variant="contained"
          href="https://shopforever.netlify.app/"
          target="_blank"
          className={classes.code}
        >
          View code
        </Button>
      </div>
    </>
  );
};

export default Modal;
