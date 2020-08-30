import React from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";

import CardCountry from "./CardCountry";

import flagGerman from "../images/german-flag.svg";

const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    marginBottom: 40,
  },
}));

const countries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function ListCountries() {
  const styles = useStyles();
  return (
    <>
      {countries.map((key) => (
        <CardCountry
          key={key}
          className={styles.card}
          name="Germany"
          image={flagGerman}
          population="81,770,900"
          region="Europe"
          capital="Berlin"
        />
      ))}
    </>
  );
}
const ListCountriesMemoized = React.memo(ListCountries);
export default ListCountriesMemoized;
