import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  bold: {
    fontFamily: "Calibre Medium",
    margin: 0,
    textDecoration: "dashed underline",
  },
  heroPotrait: {
    width: 300,
    borderRadius: 9999,
    [theme.breakpoints.down("xs")]: {
      width: 150,
    },
  },
  sectionMargin: {
    marginTop: 45,
    marginBottom: 200,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 50,
    },
  },
}));
