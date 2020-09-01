import Fuse from "fuse.js";
import selectFilter from "./selectFilter";

export default function searchCountries(value, countries) {
  const options = {
    threshold: 0.4,
    keys: ["name"],
  };

  const fuse = new Fuse(countries, options);
  return {
    type: "SEARCH_COUNTRIES",
    countries: fuse.search(value).map((country) => ({ ...country.item })),
  };
}
