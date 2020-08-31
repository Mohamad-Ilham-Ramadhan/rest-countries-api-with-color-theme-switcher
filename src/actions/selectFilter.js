export default function selectFilter(region) {
  return {
    type: "SELECT_FILTER",
    filter: region,
  };
}
