import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";

// Actions:
import fetchCountries from "../actions/fetchCountries";

const useStyles = makeStyles((theme) => ({
  darkBlue: {
    height: 100,
    color: "white",
    marginTop: 100,
    backgroundColor: theme.palette.neutral.darkBlue,
  },
  veryDarkBlueDMBG: {
    height: 100,
    color: "white",
    backgroundColor: theme.palette.neutral.veryDarkBlueDMBG,
  },
  veryDarkBlueLMT: {
    height: 100,
    color: "white",
    backgroundColor: theme.palette.neutral.veryDarkBlueLMT,
  },
  darkGray: {
    height: 100,
    color: "white",
    backgroundColor: theme.palette.neutral.darkGray,
  },
  veryLightGray: {
    height: 100,
    backgroundColor: theme.palette.neutral.veryLightGray,
  },
  white: {
    height: 100,
    backgroundColor: theme.palette.neutral.white,
  },
}));
export default function App({ fetchCountries, countries }) {
  const styles = useStyles();
  return (
    <>
      <Header />
      <div className={styles.darkBlue}>Dark blue</div>
      <div className={styles.veryDarkBlueDMBG}>Very dark blue DMBG</div>
      <div className={styles.veryDarkBlueLMT}>Very dark blue LMT</div>
      <div className={styles.darkGray}>Dark gray</div>
      <div className={styles.veryLightGray}>Very light gray</div>
      <div className={styles.white}>white</div>
    </>
  );
}
