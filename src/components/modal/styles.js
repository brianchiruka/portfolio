import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  modal: {
    display: "none",
    position: "relative",
    height: 715,
    width: 498,
    bottom: 130,
    right: 25,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    "&:hover": {
      opacity: 1,
    },
  },
  modalCover: {
    borderRadius: 20,
    width: `100%`,
    height: `100%`,
    background: "black",
    opacity: 0.5,
    "&:hover": {
      opacity: 0.5,
    },
  },

  cardButton: {
    display: "flex",
    position: "absolute",
    flexDirection: "column",
    justifyContent: "spaceBetween",
    padding: 5,
    bottom: 325,
    left: 194,
  },
}));
