import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  project: {
    position: "relative",
    height: "40rem",
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
    width: "68%",
    height: "68%",
    marginLeft: "10%",
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
      bottom: "68%",
      left: "60%",
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
      left: "58%",
    },
  },
}));
