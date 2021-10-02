import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  sectionMargin: {
    marginBottom: 150,
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
