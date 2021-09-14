import { makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export default makeStyles(() => ({
  info: {
    fontFamily: "Calibre Light",
  },
  link: {
    fontFamily: "Calibre Medium",
    textDecoration: "none",
    color: "black",
    position: "relative",
    "&:hover": {
      color: "grey",
    },
  },
  emoji: {
    position: "relative",
    right: 165,
    top: 10,
    scale: 0.7,
    "&:hover": {
      scale: 0.71,
    },
  },
}));
