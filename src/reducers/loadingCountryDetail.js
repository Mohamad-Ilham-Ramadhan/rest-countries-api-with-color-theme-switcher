export default function loadingCountryDetail(state = false, action) {
  switch (action.type) {
    case "FETCH_COUNTRY_DETAIL":
      return true;
    case "DONE_COUNTRY_DETAIL":
      return false;
    default:
      return state;
  }
}
