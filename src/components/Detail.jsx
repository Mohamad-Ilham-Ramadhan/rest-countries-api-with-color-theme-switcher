import React, { useEffect } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { Link, Redirect, useParams } from "react-router-dom";
import { makeStyles, lighten } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import flag from "../images/german-flag.svg";

// Actions
import getCountryDetail from "../actions/getCountryDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    "&.dark-mode": {
      color: "white",
    },
  },
  loading: {
    marginTop: 150,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  back: {
    textDecoration: "none",
    "&.dark-mode": {
      "& button": {
        backgroundColor: theme.palette.neutral.darkBlue,
        color: "white",
        "&:hover": {
          backgroundColor: lighten(theme.palette.neutral.darkBlue, 0.1),
        },
      },
    },
    "& button": {
      backgroundColor: "white",
      padding: [4, 24],
      marginBottom: 62,
      boxShadow:
        "0px 3px 3px -2px rgba(0,0,0,0.06), 0px 3px 3px 2px rgba(0,0,0,0.03), 0px 2px 6px 2px rgba(0,0,0,0.02)",
      "& svg": {
        marginRight: 8,
      },
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
    textDecoration: "none",
    marginRight: 10,
    marginBottom: 10,
    "&.dark-mode": {
      "& button": {
        backgroundColor: theme.palette.neutral.darkBlue,
        color: "white",
        "&:hover": {
          backgroundColor: lighten(theme.palette.neutral.darkBlue, 0.1),
        },
      },
    },
    "& button": {
      backgroundColor: "white",
      padding: [4, 24],
      fontSize: ".775rem",
      boxShadow:
        "0px 3px 3px -2px rgba(0,0,0,0.06), 0px 3px 3px 2px rgba(0,0,0,0.03), 0px 2px 6px 2px rgba(0,0,0,0.02)",
      "&:last-child": {
        marginRight: 0,
      },
    },
  },
}));

function Detail({
  className,
  colorScheme,
  countryDetail,
  countries,
  getCountryDetail,
  loadingCountryDetail,
}) {
  const styles = useStyles();
  const params = useParams();
  useEffect(() => {
    if (countries.length > 0) {
      getCountryDetail(params.name, countries);
    }
  }, [countries]);

  return (
    <>
      {loadingCountryDetail === true ? (
        <CircularProgress className={styles.loading} size={80} />
      ) : (
        <section
          className={clsx(
            styles.root,
            className,
            colorScheme == "dark" ? "dark-mode" : null
          )}
        >
          <Link
            to="/"
            className={clsx(
              styles.back,
              colorScheme == "dark" ? "dark-mode" : null
            )}
          >
            <Button variant="contained">
              <KeyboardBackspaceIcon />
              Back
            </Button>
          </Link>
          <Grid container>
            <Grid className={styles.gridFlag} item xs={12} md={6}>
              <img
                className={styles.flag}
                src={countryDetail.flag}
                alt="Flag"
              />
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
                    <span>
                      {countryDetail.topLevelDomain === undefined
                        ? null
                        : countryDetail.topLevelDomain.join(", ")}
                    </span>
                  </Typography>
                  <Typography>
                    Currencies:{" "}
                    <span>
                      {countryDetail.currencies === undefined
                        ? null
                        : countryDetail.currencies
                            .map((currency) => currency.name)
                            .join(", ")}
                    </span>
                  </Typography>
                  <Typography>
                    Languages:{" "}
                    <span>
                      {countryDetail.languages === undefined
                        ? null
                        : countryDetail.languages
                            .map((language) => language.name)
                            .join(", ")}
                    </span>
                  </Typography>
                </Grid>
                <div className={styles.wrapperBorders}>
                  <Typography variant="h3" component="h2">
                    Border Countries:
                  </Typography>
                  {countryDetail.bordersByName === undefined
                    ? null
                    : countryDetail.bordersByName.map((border) => (
                        <Link
                          key={border}
                          to={`/detail/${border}`}
                          onClick={() => {
                            getCountryDetail(border, countries);
                          }}
                          className={clsx(
                            styles.bc,
                            colorScheme == "dark" ? "dark-mode" : null
                          )}
                        >
                          <Button variant="contained">{border}</Button>
                        </Link>
                      ))}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </section>
      )}
    </>
  );
}
function mapState(state) {
  return {
    colorScheme: state.colorScheme,
    countryDetail: state.countryDetail,
    countries: state.countries,
    loadingCountryDetail: state.loadingCountryDetail,
  };
}
function mapDispatch(dispatch) {
  return {
    getCountryDetail: (border, countries) => {
      dispatch(getCountryDetail(border, countries));
    },
  };
}
export default connect(mapState, mapDispatch)(Detail);
