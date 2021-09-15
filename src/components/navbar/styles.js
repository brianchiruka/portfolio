import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  logo: {
    display: "flex",
    alignItems: "center",
    fontFamily: "DR-RAYMOND Display",
    flexGrow: 2,
  },

  navbarContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 60,
  },

  links: {
    fontFamily: "Calibri",
    fontSize: 18,
    color: "black",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
