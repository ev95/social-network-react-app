import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "usersSlice",
  initialState: {
    users: [],
    page: 1,
    usersPerPage: 100,
    totalUsers: 26842,
    searchText: "",
  },
  reducers: {
    getUsers(state, action) {
      state.users = action.payload;
    },
    changePage(state, action) {
      state.page = action.payload;
    },
    setTotalUsersCount(state, action) {
      state.totalUsers = action.payload;
    },
  },
});

export const { getUsers, changePage, setTotalUsersCount } = usersSlice.actions;

export default usersSlice.reducer;
