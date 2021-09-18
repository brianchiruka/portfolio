import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  resume: {
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
  cvButton: {
    padding: 20,
    backgroundColor: "#ecede2",
    [theme.breakpoints.down("xs")]: {
      padding: 4,
      backgroundColor: "#fff",
    },
  },
}));
