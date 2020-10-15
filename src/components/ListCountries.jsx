import React, { useEffect } from "react";
import numeral from "numeral";
import { connect } from "react-redux";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
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

function ListCountries({
  countries,
  filteredCountries,
  offset = null,
  perPage = null,
}) {
  const styles = useStyles();
  let renderCountries;
  filteredCountries.length == 0 ? countries : filteredCountries;
  if (offset == null || perPage == null) {
    renderCountries =
      filteredCountries.length == 0 ? countries : filteredCountries;
  } else {
    const start = offset * perPage;
    const end = (offset + 1) * perPage;
    renderCountries =
      filteredCountries.length == 0
        ? countries.slice(start, end)
        : filteredCountries.slice(start, end);
  }
  return (
    <div className={styles.root}>
      {renderCountries.map((country) => (
        <CardCountry
          key={country.name}
          className={styles.card}
          name={country.name}
          image={country.flag}
          population={numeral(country.population).format("0,0")}
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

export default connect(mapState)(ListCountriesMemoized);
