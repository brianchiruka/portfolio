import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#000",
    },
  },

  bold: {
    fontFamily: "Calibre Medium",
    margin: 0,
  },
  sectionMargin: {
    marginBottom: 200,
  },
});

theme.overrides = {
  MuiTypography: {
    h1: {
      fontFamily: "DR-RAYMOND Display",
      [theme.breakpoints.down("xs")]: {
        fontSize: 34,
      },
    },
    h2: {
      fontFamily: "DR-RAYMOND Display",
      [theme.breakpoints.down("xs")]: {
        fontSize: 24,
      },
    },

    body1: {
      fontFamily: "Calibre Light",
      fontSize: 24,
      marginBottom: 20,
      [theme.breakpoints.down("xs")]: {
        fontSize: 18,
      },
    },

    h6: {
      fontFamily: "Calibre Light",
      [theme.breakpoints.down("xs")]: {
        fontSize: 14,
      },
    },
    h5: {
      fontFamily: "Calibre Light",
      [theme.breakpoints.down("xs")]: {
        fontSize: 16,
      },
    },
    h4: {
      fontFamily: "Calibre Light",
      [theme.breakpoints.down("xs")]: {
        fontSize: 18,
      },
    },
    h3: {
      fontFamily: "DR-RAYMOND Display",
      [theme.breakpoints.down("xs")]: {
        fontSize: 22,
      },
    },
    subtitle1: {
      fontFamily: "Calibre Light",
      fontSize: 12,
    },
  },
};

export default theme;
