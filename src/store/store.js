import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./userReducer";
import { thunk } from "redux-thunk";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  usersState: userReducer,
  profileState: profileReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
