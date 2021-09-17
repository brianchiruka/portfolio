import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  about: {
    fontFamily: "DR-RAYMOND Display",
    position: "relative",
    bottom: 90,
    left: 40,
  },
  bold: {
    fontFamily: "Calibre Medium",
    marginBottom: 20,
  },
  sectionMargin: {
    marginBottom: 200,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 50,
    },
  },
}));
