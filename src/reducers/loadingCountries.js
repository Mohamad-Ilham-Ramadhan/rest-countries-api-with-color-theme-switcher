export default function loadingCountries(state = false, action) {
  switch (action.type) {
    case "FETCH_COUNTRIES":
      return true;
    case "DONE_COUNTRIES":
      return false;
    default:
      return state;
  }
}
