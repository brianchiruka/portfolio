import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
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
  pointer: {
    width: 25,
    bottom: 10,
    left: 190,
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      width: 50,
      bottom: 30,
      left: 400,
    },
  },
}));
