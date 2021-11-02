import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  project: {
    position: "relative",
    height: "68%",
    width: "75%",
    borderRadius: "2.5%",
    paddingTop: 50,
    paddingLeft: 25,
    paddingRight: 25,
  },

  mobileCardButtons: {
    display: "none",
  },

  projectTitle: {
    fontFamily: "DR-RAYMOND Display",
  },

  projectImage: {
    // width: 360,
    width: "68%",
    marginLeft: 50,
    position: "absolute",
  },

  [theme.breakpoints.only("xs")]: {
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
