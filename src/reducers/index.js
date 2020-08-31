import { combineReducers } from "redux";
import colorScheme from "./colorScheme";
import countries from "./countries";
import countryDetail from "./countryDetail";
import filteredCountries from "./filteredCountries";
import filterMenu from "./filterMenu";
import filter from "./filter";

const reducer = combineReducers({
  countries,
  countryDetail,
  filteredCountries,
  filterMenu,
  filter,
  colorScheme,
});

export default reducer;
