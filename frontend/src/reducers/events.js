import {
  GET_EVENTS,
  DELETE_EVENT,
  ADD_EVENT,
  LOGOUT_SUCCESS
} from "../actions/types.js";

const initialState = {
  someText: "sample text from event reducer",
  events: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    case DELETE_EVENT:
      return {
        ...state,
        // the id is being sent as the payload
        events: state.events.filter(event => event.id !== action.payload)
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload]
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,

        events: []
      };
    default:
      return state;
  }
}
