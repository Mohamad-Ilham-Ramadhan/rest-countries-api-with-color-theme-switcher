export default function countryDetail(state = {}, action) {
  switch (action.type) {
    case "GET_COUNTRY_DETAIL":
      return action.country;
    default:
      return state;
  }
}
