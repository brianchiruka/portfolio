import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  work: {
    fontFamily: "DR-RAYMOND Display",
    position: "relative",
    bottom: 90,
    left: 40,
  },
  sectionMargin: {
    marginBottom: 200,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 50,
    },
  },

  [theme.breakpoints.up("sm")]: {
    laggingCard: {
      marginTop: 100,
    },
  },
}));
