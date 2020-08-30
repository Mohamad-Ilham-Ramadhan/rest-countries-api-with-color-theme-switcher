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
    },
    "& p": {
      fontSize: ".75rem",
      fontWeight: 600,
    },
    "& svg": {
      marginLeft: "auto",
      fontSize: "1rem",
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
        fontSize: ".75rem",
        fontWeight: 600,
      },
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
          <Typography>Filter By Region</Typography>
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
