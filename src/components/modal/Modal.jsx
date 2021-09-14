import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Modal = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.modal}>
        <span className={classes.modalCover} />
        <Button className={classes.live}>Live Demo</Button>
      </div>
    </>
  );
};

export default Modal;
