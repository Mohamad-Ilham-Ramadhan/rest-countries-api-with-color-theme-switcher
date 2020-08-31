export default function filter(state = "", action) {
  switch (action.type) {
    case "SELECT_FILTER":
      return action.filter;
    default:
      return state;
  }
}
