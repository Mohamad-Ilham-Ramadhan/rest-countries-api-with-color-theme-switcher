export default function searchCountries(countries) {
  return {
    type: "SEARCH_COUNTRIES",
    countries,
  };
}
