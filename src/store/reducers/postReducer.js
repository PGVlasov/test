import { LOAD_POSTS } from "../types";

const defaultState = {
  allPosts: [],
};

export const PostsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return { ...state, allPosts: action.payload };
    default:
      return state;
  }
};
