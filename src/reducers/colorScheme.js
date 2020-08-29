export default function colorScheme(state = "light", action) {
  switch (action.type) {
    case "TOGGLE_COLOR_SCHEME":
      return state == "light" ? "dark" : "light";
    default:
      return state;
  }
}
