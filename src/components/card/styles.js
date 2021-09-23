import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  project: {
    position: "relative",
    height: 650,
    width: 450,
    borderRadius: 20,
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
  },

  mobileCardButtons: {
    display: "none",
  },

  projectTitle: {
    fontFamily: "DR-RAYMOND Display",
  },

  projectImage: {
    width: 360,
    marginLeft: 50,
    position: "absolute",
  },

  [theme.breakpoints.only("xs")]: {
    project: {
      width: 250,
      height: 380,
      paddingTop: 30,
      paddingLeft: 10,
      paddingRight: 10,
    },
    projectImage: {
      width: 200,
      marginLeft: 30,
    },

    mobileCardButtons: {
      display: "flex",
      position: "absolute",
      MozTransform: "rotate(0.75turn)",
      WebkitTransform: "rotate(0.75turn)",
      OTransform: "rotate(0.75turn)",
      MsTransform: "rotate(0.75turn)",
      bottom: 230,
      left: 170,
    },
  },

  [theme.breakpoints.between("sm", "md")]: {
    mobileCardButtons: {
      display: "flex",
      position: "absolute",
      MozTransform: "rotate(0.75turn)",
      WebkitTransform: "rotate(0.75turn)",
      OTransform: "rotate(0.75turn)",
      MsTransform: "rotate(0.75turn)",
      bottom: 510,
      left: 300,
    },
  },
}));
