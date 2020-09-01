import axios from "axios";

// A thunk
export default function fetchCountries() {
  return function (dispatch) {
    console.log("fetching bro!!!");
    dispatch({
      type: "FETCH_COUNTRIES",
    });
    dispatch({
      type: "FETCH_COUNTRY_DETAIL",
    });
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        dispatch({
          type: "GET_COUNTRIES",
          countries: response.data,
        });
      })
      .catch((response) => {
        dispatch({
          type: "ERROR_COUNTRIES",
        });
      })
      .finally(() => {
        dispatch({ type: "DONE_COUNTRIES" });
        dispatch({ type: "DONE_COUNTRY_DETAIL" });
      });
  };
}
