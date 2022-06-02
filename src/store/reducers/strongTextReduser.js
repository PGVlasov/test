import { NOT_STRONG_TEXT } from "../types";
import { STRONG_TEXT } from "../types";

const defaultState = {
  strongText: false,
};

export const strongTextReduser = (state = defaultState, action) => {
  switch (action.type) {
    case NOT_STRONG_TEXT:
      return { ...state, strongText: false };
    case STRONG_TEXT:
      return { ...state, strongText: true };
    default:
      return state;
  }
};

export const notStrongTextAction = (payload) => ({
  type: NOT_STRONG_TEXT,
  payload,
});
export const strongTextAction = (payload) => ({ type: STRONG_TEXT, payload });
