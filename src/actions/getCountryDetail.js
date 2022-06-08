export default function getCountryDetail(name, countries) {
  const country = countries.find(
    (country) => country.name.toUpperCase() === name.toUpperCase()
  );
  return {
    type: "GET_COUNTRY_DETAIL",
    country: { ...country, bordersByName: bordersByName(country, countries) },
  };
}
function bordersByName(countryDetail, countries) {
  if (countryDetail.borders === undefined) {
    return [];
  }
  return countryDetail.borders.map(
    (border) => countries.find((country) => country.alpha3Code === border).name
  );
}
