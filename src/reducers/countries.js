export default function countries(state = [], action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return [...action.countries];
    default:
      return state;
  }
}
