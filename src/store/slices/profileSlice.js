import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api/api";

export const getUsersByIdThunk = createAsyncThunk(
  "getUsersByIdThunk",
  async ({ id, navigation }) => {
    return await API.getUserById(id);
  }
);

export const followUserThunk = createAsyncThunk(
  "followUserThunk",
  async (id) => {
    return await API.followUser(id);
  }
);

export const unFollowUserThunk = createAsyncThunk(
  "unFollowUserThunk",
  async (id) => {
    return await API.unfollowUser(id);
  }
);

export const LoginUserThunk = createAsyncThunk(
  "LoginUserThunk",
  async ({ email, password }, { dispatch }) => {
    return API.loginUser(email, password);
    // .then(() => {
    // dispatch(getMeThunk());
    // navigate("/home");
    // });
  }
);

export const getMeThunk = createAsyncThunk("getMeThunk", async () => {
  return API.getMe();
});

export const LogoutUserThunk = createAsyncThunk("LogoutUserThunk", async () => {
  return API.logoutUser();
});

const profileSlice = createSlice({
  name: "profileSlice",
  initialState: {
    userProfile: {},
    userId: null,
    isLoggedIn: false,
    userName: "",
    errorMessage: "",
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
      state.userProfile = action.payload.data;
    });
    builder.addCase(followUserThunk.fulfilled, () => {
      console.log("User followed succdessfully");
    });
    builder.addCase(unFollowUserThunk.fulfilled, () => {
      console.log("User unfollowed succdessfully");
    });
    builder.addCase(LoginUserThunk.fulfilled, (state, action) => {
      if (!action.payload.data.data.userId) {
        state.errorMessage = "Something went wrong, please try again";
      } else {
        state.isLoggedIn = true;
        state.userId = action.payload.data.data.userId;
        state.errorMessage = "";
      }
      // TODO redirect to home
      // dispatch(getMeThunk());
    });
    builder.addCase(getMeThunk.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.userName = action.payload.data.data.login;
      state.userId = action.payload.data.data.id;
    });
    builder.addCase(getMeThunk.rejected, (state) => {
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
