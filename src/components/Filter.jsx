import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
  },
  select: {
    display: "flex",
    alignItems: "center",
    padding: [16, 16, 16, 24],
    marginBottom: 4,
    "& p": {
      fontSize: ".725rem",
      fontWeight: 600,
    },
    "& svg": {
      marginLeft: "auto",
      fontSize: "1rem",
    },
  },
  menu: {},
}));
// colorScheme == "dark" ? "dark-mode" : null
function Filter({ className, colorScheme }) {
  const styles = useStyles();
  return (
    <div className={clsx(styles.root, className)}>
      <Paper
        className={clsx(
          styles.select,
          colorScheme == "dark" ? "dark-mode" : null
        )}
        elevation={4}
      >
        <Typography>Filter By Region</Typography>
        <ExpandMoreIcon />
      </Paper>
      <Paper
        className={clsx(
          styles.menu,
          colorScheme == "dark" ? "dark-mode" : null
        )}
        elevation={4}
      >
        <FilterItem>Africa</FilterItem>
        <FilterItem>America</FilterItem>
        <FilterItem>Asia</FilterItem>
        <FilterItem>Europe</FilterItem>
        <FilterItem>Oceania</FilterItem>
      </Paper>
    </div>
  );
}
function FilterItem({ className, children }) {
  return (
    <ButtonBase>
      <Typography>{children}</Typography>
    </ButtonBase>
  );
}
function mapState(state) {
  return {
    colorScheme: state.colorScheme,
  };
}

export default connect(mapState)(Filter);
