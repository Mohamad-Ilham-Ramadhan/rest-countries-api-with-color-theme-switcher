import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Header from "./Header";
import Search from "./Search";
import Filter from "./Filter";
import ListCountries from "./ListCountries";
import Detail from "./Detail";

// Actions:
import fetchCountries from "../actions/fetchCountries";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: (props) => ({
      backgroundColor:
        props.colorScheme == "dark"
          ? theme.palette.neutral.veryDarkBlueDMBG
          : theme.palette.neutral.veryLightGray,
    }),
  },
  containerSearch: {
    marginBottom: 32,
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
function App({ colorScheme }) {
  const styles = useStyles({ colorScheme });
  return (
    <>
      <Header className={styles.header} />
      <Container className={styles.containerSearch}>
        <Grid container>
          <Grid item xs={12} md={9}>
            <Search className={styles.search} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Filter />
          </Grid>
        </Grid>
      </Container>
      <Container className={styles.containerCountries}>
        <ListCountries />
      </Container>
      {/* <Container className={styles.containerDetail}>
        <Detail />
      </Container> */}
    </>
  );
}
function mapState(state) {
  return {
    colorScheme: state.colorScheme,
  };
}
export default connect(mapState)(App);
