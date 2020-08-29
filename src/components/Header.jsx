import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import IconMoon from "../icons/IconMoon";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";

import toggleColorScheme from "../actions/toggleColorScheme";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    color: theme.palette.neutral.veryDarkBlueLMT,
    padding: [12, 0],

    "&.dark-mode": {
      backgroundColor: theme.palette.neutral.darkBlue,
      color: "white",
    },
  },
  mode: {
    marginLeft: "auto",
    padding: {
      left: 0,
      right: 0,
    },
    "& span": {
      fontSize: ".775rem",
      fontWeight: 600,
    },
    "& svg": {
      fontSize: "1rem",
      marginRight: 8,
    },
  },
}));

function Header({ colorScheme, toggleColorScheme }) {
  const styles = useStyles();
  return (
    <AppBar
      className={clsx(styles.root, colorScheme == "dark" ? "dark-mode" : null)}
      position="relative"
      elevation={3}
    >
      <Toolbar>
        <Typography variant="h2" component="h1">
          Where in the world?
        </Typography>
        <Button
          className={styles.mode}
          color="inherit"
          onClick={toggleColorScheme}
        >
          {colorScheme == "dark" ? (
            <>
              <WbSunnyOutlinedIcon />
              Light mode
            </>
          ) : (
            <>
              <IconMoon />
              Dark mode
            </>
          )}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
function mapState(state) {
  return {
    colorScheme: state.colorScheme,
  };
}
function mapDispatch(dispatch) {
  return {
    toggleColorScheme: () => dispatch(toggleColorScheme()),
  };
}
export default connect(mapState, mapDispatch)(Header);
