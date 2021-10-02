import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
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
