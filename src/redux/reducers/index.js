import { combineReducers } from "redux";
import meetupReducer from "./meetupReducer";
import authReducer from "./authReducer";

export default combineReducers({
  meetups: meetupReducer,
  auth: authReducer
});
