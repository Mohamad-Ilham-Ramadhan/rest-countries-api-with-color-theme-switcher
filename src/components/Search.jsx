import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import ButtonBase from "@material-ui/core/ButtonBase";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    color: theme.palette.neutral.darkGray,
    display: "flex",
    alignItems: "center",
    paddingLeft: 16,
    "&.dark-mode": {
      backgroundColor: theme.palette.neutral.darkBlue,
      color: "white",
    },
  },
  searchIcon: {
    padding: 13,
    marginRight: 12,
    "& svg": {
      fontSize: "1.35rem",
    },
    "&.dark-mode": {
      color: "white",
    },
  },
  input: {
    width: "100%",
    color: theme.palette.neutral.darkBlue,
    "& input": {
      fontSize: ".85rem",
    },
    "&.dark-mode": {
      "& input": {
        color: "white",
        "&::placeholder": {
          opacity: 1,
        },
      },
    },
  },
}));

function Search({ className, colorScheme }) {
  const styles = useStyles();
  return (
    <Paper
      className={clsx(
        styles.root,
        className,
        colorScheme == "dark" ? "dark-mode" : null
      )}
      elevation={4}
    >
      <IconButton
        className={clsx(
          styles.searchIcon,
          colorScheme == "dark" ? "dark-mode" : null
        )}
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        className={clsx(
          styles.input,
          colorScheme == "dark" ? "dark-mode" : null
        )}
        placeholder="Search for a country..."
      />
    </Paper>
  );
}
function mapState(state) {
  return {
    colorScheme: state.colorScheme,
  };
}
function mapDispatch(dispatch) {
  return {};
}
export default connect(mapState, mapDispatch)(Search);
