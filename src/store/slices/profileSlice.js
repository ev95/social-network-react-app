import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api/api";

export const getUsersByIdThunk = createAsyncThunk(
  "getUsersByIdThunk",
  async (id) => {
    const res = await API.getUserById(id);
    return res.data;
  }
);

export const followUserThunk = createAsyncThunk(
  "followUserThunk",
  async (id) => {
    const res = await API.followUser(id);

    return res.data;
  }
);

export const unFollowUserThunk = createAsyncThunk(
  "unFollowUserThunk",
  async (id) => {
    const res = await API.unfollowUser(id);
    return res.data;
  }
);

export const LoginUserThunk = createAsyncThunk(
  "LoginUserThunk",
  async ({ email, password }) => {
    const res = API.loginUser(email, password);
    return res.data;
  }
);

export const getMeThunk = createAsyncThunk("getMeThunk", async () => {
  const res = API.getMe();
  return res.data;
});

export const LogoutUserThunk = createAsyncThunk("LogoutUserThunk", async () => {
  const res = API.logoutUser();
  return res.data;
});

const profileSlice = createSlice({
  name: "profileSlice",
  initialState: {
    userProfile: {},
    userId: null,
    isLoggedIn: false,
    userName: "",
  },
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
    setISerLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersByIdThunk.fulfilled, (state, action) => {
      state.userProfile = action.payload;
    });
    builder.addCase(followUserThunk.fulfilled, () => {
      console.log("User followed succdessfully");
    });
    builder.addCase(unFollowUserThunk.fulfilled, () => {
      console.log("User unfollowed succdessfully");
    });
    builder.addCase(LoginUserThunk.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.userId = action.payload.userId;

      // dispatch(getMeThunk());
    });
    builder.addCase(getMeThunk.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.userName = action.payload.data.login;
      state.userId = action.payload.data.id;
    });
    builder.addCase(getMeThunk.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.userName = "";
      state.userId = null;
    });
    builder.addCase(LogoutUserThunk.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.userName = "";
      state.userId = null;
      // .then(() => {
      //   dispatch(getMeThunk());
      // });
    });
  },
});

export default profileSlice.reducer;
