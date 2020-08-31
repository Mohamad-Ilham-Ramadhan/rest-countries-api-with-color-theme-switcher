import React, { useState } from "react";
import Fuse from "fuse.js";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import ButtonBase from "@material-ui/core/ButtonBase";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";

import SearchIcon from "@material-ui/icons/Search";

import searchCountries from "../actions/searchCountries";
import selectFilter from "../actions/selectFilter";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    color: theme.palette.neutral.darkGray,
    display: "flex",
    alignItems: "center",
    minHeight: 50,
    paddingLeft: 16,
    "&.dark-mode": {
      backgroundColor: theme.palette.neutral.darkBlue,
      color: "white",
    },
    [theme.breakpoints.up("md")]: {
      minHeight: 55,
      maxWidth: 480,
    },
  },
  searchIcon: {
    padding: 13,
    marginRight: 12,
    "& svg": {
      fontSize: "1.35rem",
      color: theme.palette.neutral.darkGray,
      [theme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
      },
    },
    "&.dark-mode": {
      color: "white",
    },
  },
  input: {
    width: "100%",
    color: theme.palette.neutral.darkBlue,
    "& input": {
      fontSize: ".9rem",
      height: "unset",
      fontWeight: 600,
      "&::placeholder": {
        fontSize: ".85rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
      },
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

function Search({
  className,
  colorScheme,
  countries,
  filteredCountries,
  searchCountries,
  selectFilter,
}) {
  const styles = useStyles();
  const [value, setValue] = useState();
  function onChange(e) {
    setValue(e.target.value);
  }
  function onKeyDown(value, e) {
    if (e.key == "Enter") {
      selectFilter("All");
      const options = {
        threshold: 0.6,
        // ignoreLocation: true,
        keys: ["name"],
      };

      const fuse = new Fuse(countries, options);

      searchCountries(
        fuse.search(value).map((country) => ({ ...country.item }))
      );
    }
  }
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
        value={value}
        onChange={onChange}
        onKeyDown={(e) => onKeyDown(value, e)}
      />
    </Paper>
  );
}
function mapState(state) {
  return {
    colorScheme: state.colorScheme,
    countries: state.countries,
  };
}
function mapDispatch(dispatch) {
  return {
    searchCountries: (countries) => dispatch(searchCountries(countries)),
    selectFilter: (region) => dispatch(selectFilter(region)),
  };
}
export default connect(mapState, mapDispatch)(Search);
