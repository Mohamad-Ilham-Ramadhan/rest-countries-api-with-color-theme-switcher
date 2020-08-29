import { combineReducers } from "redux";
import countries from "./countries";
import colorScheme from "./colorScheme";

const reducer = combineReducers({ countries, colorScheme });

export default reducer;
