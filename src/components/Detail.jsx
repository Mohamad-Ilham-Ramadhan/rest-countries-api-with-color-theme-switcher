import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { useParams } from "react-router-dom";
import { makeStyles, lighten } from "@material-ui/core/styles";
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

function Detail({ className, colorScheme, countryDetail, countries }) {
  const styles = useStyles();
  const params = useParams();
  window.countryDetail = countryDetail;
  window.countries = countries;
  console.log(window.countryDetail);
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
          <img className={styles.flag} src={countryDetail.flag} alt="Flag" />
        </Grid>
        <Grid className={styles.gridDetail} item xs={12} md={6}>
          <Typography className={styles.h1} variant="h1">
            {countryDetail.name}
          </Typography>
          <Grid className={styles.detail} container>
            <Grid className={styles.detail1} item xs={12} md={6}>
              <Typography>
                Native Name: <span>{countryDetail.nativeName}</span>
              </Typography>
              <Typography>
                Population: <span>{countryDetail.population}</span>
              </Typography>
              <Typography>
                Region: <span>{countryDetail.region}</span>
              </Typography>
              <Typography>
                Sub Region: <span>{countryDetail.subregion}</span>
              </Typography>
              <Typography>
                Capital: <span>{countryDetail.capital}</span>
              </Typography>
            </Grid>
            <Grid className={styles.detail2} item xs={12} md={6}>
              <Typography>
                Top Level Domain:{" "}
                <span>{countryDetail.topLevelDomain.toString()}</span>
              </Typography>
              <Typography>
                Currencies:{" "}
                <span>
                  {countryDetail.currencies
                    .map((currency) => currency.name)
                    .join(", ")}
                </span>
              </Typography>
              <Typography>
                Languages:{" "}
                <span>
                  {countryDetail.languages
                    .map((language) => language.name)
                    .join(", ")}
                </span>
              </Typography>
            </Grid>
            <div className={styles.wrapperBorders}>
              <Typography variant="h3" component="h2">
                Border Countries:
              </Typography>
              {countryDetail.bordersByName.map((border) => (
                <Button
                  className={clsx(
                    styles.bc,
                    colorScheme == "dark" ? "dark-mode" : null
                  )}
                  variant="contained"
                >
                  {border}
                </Button>
              ))}
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
    countryDetail: state.countryDetail,
    countries: state.countries,
  };
}
export default connect(mapState)(Detail);
