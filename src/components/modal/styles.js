import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  modal: {
    position: "relative",
    bottom: 695,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  modalCover: {
    height: 650,
    width: 450,
    borderRadius: 20,
    paddingTop: 65,
    paddingLeft: 30,
    paddingRight: 30,
    background: "black",
    opacity: 1,

    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
    live: {
      position: "relative",
      bottom: 500,
    },
  },
}));
