export default function filterCountries(region, countries) {
  return {
    type: "FILTER_COUNTRIES",
    countries:
      region == "All"
        ? countries
        : countries.filter((country) => country.region == region),
  };
}
