import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { UsersReducer, PostsReducer, CommentsReducer } from "./reducers";
import { strongTextReduser } from "./reducers/strongTextReduser";

const rootReduser = combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
  strongText: strongTextReduser,
});

export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(thunk))
);
