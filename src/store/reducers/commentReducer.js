import { LOAD_COMMENTS } from "../types";

const defaultState = {
  allComments: [],
};

export const CommentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return { ...state, allComments: action.payload };
    default:
      return state;
  }
};
