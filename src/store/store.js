import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice.js";
import profileSlice from "./slices/profileSlice.js";

const store = configureStore({
  reducer: {
    usersState: usersSlice,
    profileState: profileSlice,
  },
});

export default store;
