export default function filter(state = "All", action) {
  switch (action.type) {
    case "SELECT_FILTER":
      return action.filter;
    default:
      return state;
  }
}
