export default function countries(state = [], action) {
  switch (action.type) {
    case "FETCH_COUNTRIES":
      return [...action.countries];
    default:
      return state;
  }
}
