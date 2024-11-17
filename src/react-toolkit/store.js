import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice.js";

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

export default store;
