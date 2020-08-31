export default function filterMenu(state = false, action) {
  switch (action.type) {
    case "CLOSE_FILTER_MENU":
      return false;
    case "TOGGLE_FILTER_MENU":
      return !state;
    default:
      return state;
  }
}
