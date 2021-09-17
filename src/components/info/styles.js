import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
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
    right: 5,
    top: -10,
    scale: 0.4,
    "&:hover": {
      scale: 0.51,
    },
    [theme.breakpoints.down("xs")]: {
      scale: 0.35,
      right: 6,
      top: 0,
    },
  },
  infoSpacing: {
    marginBottom: 40,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 0,
    },
  },
}));
