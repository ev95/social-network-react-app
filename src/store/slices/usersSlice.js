import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../api/api";

// export const getUsersThunk = (page, count) => {
//   return (dispatch) => {
//     API.getUsers(page, count).then((res) => {
//       dispatch(getUsersAC(res.data.items));
//       dispatch(setTotaalUsersCountAC(res.data.totalCount));
//     });
//   };
// };

export const getUsersThunk = createAsyncThunk(
  "getUsersThunk",
  async ({ page, usersPerPage }) => {
    const res = API.getUsers(page, usersPerPage);
    return res.data;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(getUsersThunk.fulfilled, (state, action) => {
      state.users = action.payload.items;
      state.totalUsers = action.payload.totalCount;
    });
  },
});

export const { getUsers, changePage, setTotalUsersCount } = usersSlice.actions;

export default usersSlice.reducer;
