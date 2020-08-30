import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Backdrop from "@material-ui/core/Backdrop";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
    position: "relative",
    [theme.breakpoints.up("md")]: {
      marginLeft: "auto",
    },
  },
  select: {
    display: "flex",
    alignItems: "center",
    marginBottom: 4,
    position: "relative",
    zIndex: 12,
    "& button": {
      padding: [16, 16, 16, 24],
      width: "100%",
      [theme.breakpoints.up("md")]: {
        padding: [17, 16, 17, 24],
      },
    },
    "& p": {
      fontSize: ".765rem",
      fontWeight: 600,
      [theme.breakpoints.up("md")]: {
        fontSize: ".875rem",
      },
    },
    "& svg": {
      marginLeft: "auto",
      fontSize: "1rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.15rem",
      },
    },
    "&.dark-mode": {
      backgroundColor: theme.palette.neutral.darkBlue,
      color: "white",
    },
  },
  menu: {
    padding: [16, 16, 16, 24],
    position: "absolute",
    zIndex: 11,
    "& button": {
      width: "100%",
      justifyContent: "start",
      padding: [2, 0],
      "& p": {
        fontSize: ".765rem",
        fontWeight: 600,
      },
      [theme.breakpoints.up("md")]: {
        padding: [4, 0],
        "& p": {
          fontSize: ".85rem",
        },
      },
    },
    "&.dark-mode": {
      backgroundColor: theme.palette.neutral.darkBlue,
      color: "white",
    },
  },
  backdrop: {
    zIndex: 10,
    backgroundColor: "transparent",
  },
}));
// colorScheme == "dark" ? "dark-mode" : null
function Filter({ className, colorScheme }) {
  const [open, setOpen] = React.useState(false);
  const styles = useStyles();
  function handleClose() {
    setOpen(false);
  }
  return (
    <div className={clsx(styles.root, className)}>
      <Paper
        className={clsx(
          styles.select,
          colorScheme == "dark" ? "dark-mode" : null
        )}
        elevation={4}
      >
        <ButtonBase onClick={() => setOpen((open) => !open)}>
          <Typography>Filter by Region</Typography>
          <ExpandMoreIcon />
        </ButtonBase>
      </Paper>
      {open && (
        <>
          <Backdrop
            className={styles.backdrop}
            open={open}
            onClick={handleClose}
          />
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
        </>
      )}
    </div>
  );
}
function FilterItem({ className, children }) {
  return (
    <ButtonBase className={clsx(className)}>
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
