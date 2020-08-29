import axios from "axios";

// A thunk
export default function fetchCountries() {
  return function (dispatch) {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      dispatch({
        type: "FETCH_COUNTRIES",
        countries: response.data,
      });
    });
  };
}
