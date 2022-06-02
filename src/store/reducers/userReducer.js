import { LOAD_USERS } from "../types";

const defaultState = {
  allUsers: [],
};

export const UsersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return { ...state, allUsers: action.payload };
    default:
      return state;
  }
};
