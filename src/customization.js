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
    fontFamily: "Nunito Sans, Roboto, Helvetica, Arial, sans-serif",
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
    text: {
      primary: veryDarkBlueLMT,
    },
  },
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.06),0px 1px 1px 0px rgba(0,0,0,0.03),0px 1px 3px 0px rgba(0,0,0,0.02)",
    "0px 3px 1px -2px rgba(0,0,0,0.06),0px 2px 2px 0px rgba(0,0,0,0.03),0px 1px 5px 0px rgba(0,0,0,0.02)",
    "0px 3px 3px -2px rgba(0, 0, 0, 0.06),0px 3px 4px 0px rgba(0, 0, 0, 0.03),0px 1px 8px 0px rgba(0, 0, 0, 0.02)",
    "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 5px 0px rgba(0, 0, 0, 0.03), 0px 1px 10px 0px rgba(0, 0, 0, 0.02)",
    "0px 3px 5px -1px rgba(0,0,0,0.06),0px 5px 8px 0px rgba(0,0,0,0.03),0px 1px 14px 0px rgba(0,0,0,0.02)",
    "0px 3px 5px -1px rgba(0,0,0,0.06),0px 6px 10px 0px rgba(0,0,0,0.03),0px 1px 18px 0px rgba(0,0,0,0.02)",
    "0px 4px 5px -2px rgba(0,0,0,0.06),0px 7px 10px 1px rgba(0,0,0,0.03),0px 2px 16px 1px rgba(0,0,0,0.02)",
    "0px 5px 5px -3px rgba(0,0,0,0.06),0px 8px 10px 1px rgba(0,0,0,0.03),0px 3px 14px 2px rgba(0,0,0,0.02)",
    "0px 5px 6px -3px rgba(0,0,0,0.06),0px 9px 12px 1px rgba(0,0,0,0.03),0px 3px 16px 2px rgba(0,0,0,0.02)",
    "0px 6px 6px -3px rgba(0,0,0,0.06),0px 10px 14px 1px rgba(0,0,0,0.03),0px 4px 18px 3px rgba(0,0,0,0.02)",
    "0px 6px 7px -4px rgba(0,0,0,0.06),0px 11px 15px 1px rgba(0,0,0,0.03),0px 4px 20px 3px rgba(0,0,0,0.02)",
    "0px 7px 8px -4px rgba(0,0,0,0.06),0px 12px 17px 2px rgba(0,0,0,0.03),0px 5px 22px 4px rgba(0,0,0,0.02)",
    "0px 7px 8px -4px rgba(0,0,0,0.06),0px 13px 19px 2px rgba(0,0,0,0.03),0px 5px 24px 4px rgba(0,0,0,0.02)",
    "0px 7px 9px -4px rgba(0,0,0,0.06),0px 14px 21px 2px rgba(0,0,0,0.03),0px 5px 26px 4px rgba(0,0,0,0.02)", // asdf
    "0px 8px 9px -5px rgba(0,0,0,0.06),0px 15px 22px 2px rgba(0,0,0,0.03),0px 6px 28px 5px rgba(0,0,0,0.02)",
    "0px 8px 10px -5px rgba(0,0,0,0.06),0px 16px 24px 2px rgba(0,0,0,0.03),0px 6px 30px 5px rgba(0,0,0,0.02)",
    "0px 8px 11px -5px rgba(0,0,0,0.06),0px 17px 26px 2px rgba(0,0,0,0.03),0px 6px 32px 5px rgba(0,0,0,0.02)",
    "0px 9px 11px -5px rgba(0,0,0,0.06),0px 18px 28px 2px rgba(0,0,0,0.03),0px 7px 34px 6px rgba(0,0,0,0.02)",
    "0px 9px 12px -6px rgba(0,0,0,0.06),0px 19px 29px 2px rgba(0,0,0,0.03),0px 7px 36px 6px rgba(0,0,0,0.02)",
    "0px 10px 13px -6px rgba(0,0,0,0.06),0px 20px 31px 3px rgba(0,0,0,0.03),0px 8px 38px 7px rgba(0,0,0,0.02)",
    "0px 10px 13px -6px rgba(0,0,0,0.06),0px 21px 33px 3px rgba(0,0,0,0.03),0px 8px 40px 7px rgba(0,0,0,0.02)",
    "0px 10px 14px -6px rgba(0,0,0,0.06),0px 22px 35px 3px rgba(0,0,0,0.03),0px 8px 42px 7px rgba(0,0,0,0.02)",
    "0px 11px 14px -7px rgba(0,0,0,0.06),0px 23px 36px 3px rgba(0,0,0,0.03),0px 9px 44px 8px rgba(0,0,0,0.02)",
    "0px 11px 15px -7px rgba(0,0,0,0.06),0px 24px 38px 3px rgba(0,0,0,0.03),0px 9px 46px 8px rgba(0,0,0,0.02)",
  ],
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [nunitoSans300, nunitoSans600, nunitoSans800],
        body: {
          fontFamily: "Nunito Sans, Roboto, Helvetica, Arial, sans-serif",
          color: veryDarkBlueLMT,
        },
        button: {
          fontFamily: "inherit",
        },
        ".weight-600": {
          fontWeight: "600 !important",
        },
      },
    },

    MuiButton: {
      root: {
        textTransform: "none",
        transition: "background-color 0ms",
      },
      contained: {
        //light mode
        "&:hover": {
          backgroundColor: "white",
        },
        "&.dark-mode:hover": {
          backgroundColor: lighten(darkBlue, 0.1),
        },
      },
    },
  },
});
customizedTheme.typography.h1 = {
  fontSize: "1.35rem",
  fontWeight: "800",
  [customizedTheme.breakpoints.up("md")]: {
    fontSize: "1.35rem",
  },
};
customizedTheme.typography.h2 = {
  fontSize: "1.15rem",
  fontWeight: "800",
};
customizedTheme.typography.h3 = {
  fontSize: "1rem",
  fontWeight: "800",
};
customizedTheme.typography.h4 = {
  fontSize: ".875rem",
  fontWeight: "800",
  [customizedTheme.breakpoints.up("md")]: {
    fontSize: "1.475rem",
  },
};
customizedTheme.overrides.MuiContainer = {
  maxWidthLg: {
    [customizedTheme.breakpoints.up("lg")]: {
      maxWidth: 1280,
    },
  },
};

export default customizedTheme;
