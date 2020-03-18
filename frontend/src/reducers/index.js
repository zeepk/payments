import { combineReducers } from "redux";
import leads from "./leads";
import events from "./events";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  events,
  leads,
  errors,
  messages,
  auth
});
