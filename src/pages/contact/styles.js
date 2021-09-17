import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  contact: {
    fontFamily: "DR-RAYMOND Display",
    position: "relative",
    bottom: 90,
    left: 40,
  },
  portrait2: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  sectionMargin: {
    marginBottom: 200,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 50,
    },
  },
  contactInvite: {
    marginBottom: 80,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 0,
    },
  },
  pointer: {
    width: 50,
    height: 30,
    bottom: 10,
    left: 190,
    rotate: `15deg`,
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      width: 110,
      height: 65,
      bottom: 20,
      left: 390,
    },
  },
}));
