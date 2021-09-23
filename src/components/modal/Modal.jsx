import { Box, Button } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Modal = ({ demo, code }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.modal}>
        <canvas className={classes.modalCover} />
        <Box className={classes.cardButton}>
          <Button
            variant="outlined"
            style={{ color: "white", marginBottom: 10 }}
            href={demo}
            target="_blank"
          >
            Live Demo
          </Button>
          <Button
            variant="outlined"
            style={{ color: "white" }}
            href={code}
            target="_blank"
          >
            View code
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Modal;
