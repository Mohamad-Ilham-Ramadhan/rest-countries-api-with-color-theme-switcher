import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";

// Actions:
import fetchCountries from "../actions/fetchCountries";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: (props) => ({
      backgroundColor:
        props.colorScheme == "dark"
          ? theme.palette.neutral.veryDarkBlueDMBG
          : theme.palette.neutral.veryLightGray,
    }),
  },
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
function App({ colorScheme }) {
  const styles = useStyles({ colorScheme });
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
function mapState(state) {
  return {
    colorScheme: state.colorScheme,
  };
}
export default connect(mapState)(App);