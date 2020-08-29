import { createMuiTheme, lighten } from "@material-ui/core/styles";
import { nunitoSans300, nunitoSans600, nunitoSans800 } from "./fonts";

// <== Colors ==>
// ### Neutral
const darkBlue = "hsl(209, 23%, 22%)"; // (Dark Mode Elements)
const veryDarkBlueDMBG = "hsl(207, 26%, 17%)"; // (Dark Mode Background)
const veryDarkBlueLMT = "hsl(200, 15%, 8%)"; // (Light Mode Text)
const darkGray = "hsl(0, 0%, 52%)"; // (Light Mode Input)
const veryLightGray = "hsl(0, 0%, 98%)"; // (Light Mode Background)
const white = "hsl(0, 0%, 100%)"; // (Dark Mode Text & Light Mode Elements)

const customizedTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: "Nunito Sans",
  },
  palette: {
    neutral: {
      darkBlue,
      veryDarkBlueDMBG,
      veryDarkBlueLMT,
      darkGray,
      veryLightGray,
      white,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [nunitoSans300, nunitoSans600, nunitoSans800],
        body: {
          fontFamily: "Nunito Sans, Roboto, Helvetica, Arial, sans-serif",
          backgroundColor: veryLightGray,
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
});
customizedTheme.typography.h2 = {
  fontSize: ".875rem",
  fontWeight: "800",
};

export default customizedTheme;
