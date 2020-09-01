export default function getCountryDetail(name, countries) {
  console.log(name);
  const country = countries.find(
    (country) => country.name.toUpperCase() === name.toUpperCase()
  );
  console.log(country);
  return {
    type: "GET_COUNTRY_DETAIL",
    country: { ...country, bordersByName: bordersByName(country, countries) },
  };
}
function bordersByName(countryDetail, countries) {
  return countryDetail.borders.map(
    (border) => countries.find((country) => country.alpha3Code === border).name
  );
}
