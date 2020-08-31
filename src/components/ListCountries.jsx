import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import CardCountry from "./CardCountry";

import flagGerman from "../images/german-flag.svg";

import fetchCountries from "../actions/fetchCountries";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginLeft: -8,
    marginRight: -8,
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between",
    },
  },
  card: {
    marginBottom: 40,
    marginLeft: 8,
    marginRight: 8,
  },
  hack: {
    width: 263,
  },
}));

function ListCountries({ countries, filteredCountries }) {
  const styles = useStyles();

  console.log(countries);
  console.log(filteredCountries);
  return (
    <div className={styles.root}>
      {filteredCountries.length == 0
        ? countries.map((country) => (
            <CardCountry
              key={country.name}
              className={styles.card}
              name={country.name}
              image={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))
        : filteredCountries.map((country) => (
            <CardCountry
              key={country.name}
              className={styles.card}
              name={country.name}
              image={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
        <CardCountry
          key={key}
          className={styles.card}
          name="Germany"
          image={flagGerman}
          population="123,123,123"
          region="Europe"
          capital="Berlin"
        />
      ))} */}
      {/* Tambahin hacks nya untuk mendorong last item jika "lubang" semaking banyak saat (viewport semakin lebar) */}
      <i className={styles.hack} aria-hidden="true"></i>
      <i className={styles.hack} aria-hidden="true"></i>
      <i className={styles.hack} aria-hidden="true"></i>
      <i className={styles.hack} aria-hidden="true"></i>
    </div>
  );
}
const ListCountriesMemoized = React.memo(ListCountries);

function mapState(state) {
  return {
    countries: state.countries,
    filteredCountries: state.filteredCountries,
  };
}
// function mapDispatch(dispatch) {
//   return {
//     fetchCountries: () => dispatch(fetchCountries()),
//   };
// }

export default connect(mapState)(ListCountriesMemoized);
