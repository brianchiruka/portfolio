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
    MozTransform: "scale(0.4)",
    WebkitTransform: "scale(0.4)",
    OTransform: "scale(0.4)",
    MsTransform: "scale(0.4)",
    "&:hover": {
      MozTransform: "scale(0.51),",
      WebkitTransform: "scale(0.51),",
      OTransform: "scale(0.51),",
      MsTransform: "scale(0.51),",
    },
    [theme.breakpoints.down("xs")]: {
      MozTransform: "scale(0.25)",
      WebkitTransform: "scale(0.25)",
      OTransform: "scale(0.25)",
      MsTransform: "scale(0.25)",
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
