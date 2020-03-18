import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
import { GET_EVENTS, DELETE_EVENT, ADD_EVENT } from "./types";

// GET EVENTS
export const getEvents = () => (dispatch, getState) => {
  axios
    .get("/api/events/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_EVENTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE EVENT
export const deleteEvent = id => (dispatch, getState) => {
  axios
    .delete(`/api/events/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteEvent: "Event Deleted" }));
      dispatch({
        type: DELETE_EVENT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD EVENT
export const addEvent = event => (dispatch, getState) => {
  axios
    .post("/api/events/", event, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addEvent: "Event Added" }));

      dispatch({
        type: ADD_EVENT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
