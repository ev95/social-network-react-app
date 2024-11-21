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
    return API.getUsers(page, usersPerPage);
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
    loading: false,
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
      state.loading = false;
      state.users = action.payload.data.items;
      state.totalUsers = action.payload.data.totalCount;
    });
    builder.addCase(getUsersThunk.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { getUsers, changePage, setTotalUsersCount } = usersSlice.actions;

export default usersSlice.reducer;
