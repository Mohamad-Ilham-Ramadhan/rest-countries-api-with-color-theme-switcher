import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import flag from "../images/german-flag.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    "&.dark-mode": {
      color: "white",
    },
  },
  back: {
    backgroundColor: "white",
    padding: [4, 24],
    marginBottom: 62,
    boxShadow:
      "0px 3px 3px -2px rgba(0,0,0,0.06), 0px 3px 3px 2px rgba(0,0,0,0.03), 0px 2px 6px 2px rgba(0,0,0,0.02)",
    "& svg": {
      marginRight: 8,
    },
    "&.dark-mode": {
      backgroundColor: theme.palette.neutral.darkBlue,
      color: "white",
    },
  },
  gridFlag: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      paddingRight: 24,
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: 32,
    },
    [theme.breakpoints.up("xl")]: {
      paddingRight: 61,
    },
  },
  gridDetail: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: 24,
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 32,
    },
    [theme.breakpoints.up("xl")]: {
      paddingLeft: 61,
    },
  },
  flag: {
    width: "100%",
    marginBottom: 38,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 432,
    },
  },
  h1: {
    marginBottom: 20,
  },
  detail: {
    wordBreak: "break-all",
    "& p": {
      fontSize: ".875rem",
      fontWeight: 600,
      marginBottom: 11,
      "& span": {
        fontWeight: 400,
      },
    },
  },
  detail1: {
    marginBottom: 32,
  },
  detail2: {
    marginBottom: 32,
  },
  wrapperBorders: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    "& h2": {
      fontWeight: 600,
      marginBottom: 16,
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "auto",
        marginBottom: 10,
        marginRight: 16,
      },
    },
  },
  bc: {
    backgroundColor: "white",
    padding: [4, 24],
    fontSize: ".775rem",
    marginRight: 10,
    marginBottom: 10,
    boxShadow:
      "0px 3px 3px -2px rgba(0,0,0,0.06), 0px 3px 3px 2px rgba(0,0,0,0.03), 0px 2px 6px 2px rgba(0,0,0,0.02)",
    "&:last-child": {
      marginRight: 0,
    },
    "&.dark-mode": {
      backgroundColor: theme.palette.neutral.darkBlue,
      color: "white",
    },
  },
}));

function Detail({ className, colorScheme }) {
  const styles = useStyles();
  return (
    <section
      className={clsx(
        styles.root,
        className,
        colorScheme == "dark" ? "dark-mode" : null
      )}
    >
      <Button
        className={clsx(
          styles.back,
          colorScheme == "dark" ? "dark-mode" : null
        )}
        variant="contained"
      >
        <KeyboardBackspaceIcon />
        Back
      </Button>
      <Grid container>
        <Grid className={styles.gridFlag} item xs={12} md={6}>
          <img className={styles.flag} src={flag} alt="Flag" />
        </Grid>
        <Grid className={styles.gridDetail} item xs={12} md={6}>
          <Typography className={styles.h1} variant="h1">
            Germany
          </Typography>
          <Grid className={styles.detail} container>
            <Grid className={styles.detail1} item xs={12} md={6}>
              <Typography>
                Native Name: <span>Deutschland</span>
              </Typography>
              <Typography>
                Population: <span>81,770,900</span>
              </Typography>
              <Typography>
                Region: <span>Europe</span>
              </Typography>
              <Typography>
                Sub Region: <span>Western Europe</span>
              </Typography>
              <Typography>
                Capital: <span>Berlin</span>
              </Typography>
            </Grid>
            <Grid className={styles.detail2} item xs={12} md={6}>
              <Typography>
                Top Level Domain: <span>.de</span>
              </Typography>
              <Typography>
                Currencies: <span>Euro</span>
              </Typography>
              <Typography>
                Languages: <span>German</span>
              </Typography>
            </Grid>
            <div className={styles.wrapperBorders}>
              <Typography variant="h3" component="h2">
                Border Countries:
              </Typography>
              <Button
                className={clsx(
                  styles.bc,
                  colorScheme == "dark" ? "dark-mode" : null
                )}
                variant="contained"
              >
                Austria
              </Button>
              <Button
                className={clsx(
                  styles.bc,
                  colorScheme == "dark" ? "dark-mode" : null
                )}
                variant="contained"
              >
                Belgium
              </Button>
              <Button
                className={clsx(
                  styles.bc,
                  colorScheme == "dark" ? "dark-mode" : null
                )}
                variant="contained"
              >
                Czech Republic
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
function mapState(state) {
  return {
    colorScheme: state.colorScheme,
  };
}
export default connect(mapState)(Detail);
