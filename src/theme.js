import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  bold: {
    fontFamily: "Calibre Medium",
    margin: 0,
    
  },
});

theme.overrides = {
  MuiTypography: {
    h1: {
      fontFamily: "DR-RAYMOND Display",
    },
    
    body1: {
      fontFamily: "Calibre Light",
      fontSize: 24,
      marginBottom: 20,
    },
  },
};

export default theme;
