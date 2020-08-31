export default function countriesByRegion(state = [], action) {
  switch (action.type) {
    case "FILTER_COUNTRIES":
      return [...action.countries];
    case "SEARCH_COUNTRIES":
      return [...action.countries];
    default:
      return state;
  }
}
