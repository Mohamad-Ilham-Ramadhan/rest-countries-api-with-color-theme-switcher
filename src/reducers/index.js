import { combineReducers } from "redux";
import colorScheme from "./colorScheme";
import countries from "./countries";
import countryDetail from "./countryDetail";
import filteredCountries from "./filteredCountries";
import filterMenu from "./filterMenu";
import filter from "./filter";
import loadingCountries from "./loadingCountries";

const reducer = combineReducers({
  colorScheme,
  countries,
  countryDetail,
  filteredCountries,
  filterMenu,
  filter,
  loadingCountries,
});

export default reducer;
