import { combineReducers } from "redux";
import meetupReducer from "./meetupReducer";

export default combineReducers({
  meetups: meetupReducer
});
