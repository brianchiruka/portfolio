import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  modal: {
    position: "relative",
    bottom: 695,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    "&:hover": {
      opacity: 1,
    },
  },
  modalCover: {
    height: 650,
    width: 450,
    borderRadius: 20,
    paddingTop: 65,
    paddingLeft: 30,
    paddingRight: 30,
    background: "black",
    "&:hover": {
      opacity: 0.5,
    },
  },
  live: {
    color: "white",
    position: "absolute",
    bottom: 390,
    left: 180,
    fontFamily: "Calibre",
    fontSize: 28,
  },
  code: {
    color: "white",
    position: "absolute",
    bottom: 300,
    left: 180,
    fontFamily: "Calibre",
    fontSize: 28,
  },
}));
