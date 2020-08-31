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
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between",
    },
  },
  card: {
    marginBottom: 40,
  },
  hack: {
    width: 263,
  },
}));
const Row = ({ index, style }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Row {index}
  </div>
);

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
