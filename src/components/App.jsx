import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

import Header from "./Header";
import Search from "./Search";
import Filter from "./Filter";
import ListCountries from "./ListCountries";
import Detail from "./Detail";
import Pagination from "./Pagination";

// Actions:
import fetchCountries from "../actions/fetchCountries";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: (props) => ({
      backgroundColor:
        props.colorScheme == "dark"
          ? theme.palette.neutral.veryDarkBlueDMBG
          : theme.palette.neutral.veryLightGray,
      color:
        props.colorScheme == "dark"
          ? "white"
          : theme.palette.neutral.veryDarkBlueLMT,
    }),
  },
  containerSearch: {
    marginBottom: 32,
  },
  loading: {
    marginTop: 150,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  containerCountries: {
    paddingLeft: 56,
    paddingRight: 56,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
  containerDetail: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  header: {
    marginBottom: 24,
  },
  search: {
    marginBottom: 32,
  },
}));
function App({
  colorScheme,
  fetchCountries,
  countries,
  filteredCountries,
  filter,
  loadingCountries,
}) {
  const styles = useStyles({ colorScheme });
  const [pageOffset, setPageOffset] = useState(0);
  const [perPage, setPerPage] = useState(20);
  const [pageCount, setPageCount] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  useEffect(() => {
    if (countries.length === 0) {
      fetchCountries();
    }
  }, []);
  // countries mah cuma buat initial load/fetch doang
  useEffect(() => {
    setPageCount(Math.ceil(countries.length / perPage));
  }, [countries]);
  useEffect(() => {
    // when no search keywords provided
    if (filteredCountries.length == 0) {
      setPageCount(Math.ceil(countries.length / perPage));
    } else {
      setPageCount(Math.ceil(filteredCountries.length / perPage));
    }
    // reset selected page dan rendered countries mulai dari awal
    setSelectedPage(0);
    setPageOffset(0);
  }, [filteredCountries]);
  function handlePageClick(data) {
    const selected = data.selected;
    setPageOffset(selected);
    setSelectedPage(selected);
  }
  return (
    <Router>
      <Header className={styles.header} />
      <Switch>
        <Route path="/detail/:name">
          <Container className={styles.containerDetail}>
            <Detail />
          </Container>
        </Route>
        <Route path="/">
          <Container className={styles.containerSearch}>
            <Grid container>
              <Grid item xs={12} md={9}>
                <Search className={styles.search} />
              </Grid>
              <Grid item xs={12} md={3}>
                <Filter />
              </Grid>
            </Grid>
            <Typography variant="h1">{filter}</Typography>
          </Container>

          <Container className={styles.containerCountries}>
            {loadingCountries ? (
              <CircularProgress className={styles.loading} size={80} />
            ) : (
              <ListCountries offset={pageOffset} perPage={perPage} />
            )}
          </Container>
          <Container>
            <Pagination
              pageCount={pageCount}
              handlePageClick={handlePageClick}
              selectedPage={selectedPage}
            />
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}
function mapState(state) {
  return {
    colorScheme: state.colorScheme,
    countries: state.countries,
    filteredCountries: state.filteredCountries,
    countryDetail: state.countryDetail,
    filter: state.filter,
    loadingCountries: state.loadingCountries,
  };
}
function mapDispatch(dispatch) {
  return {
    fetchCountries: () => dispatch(fetchCountries()),
  };
}
export default connect(mapState, mapDispatch)(App);
