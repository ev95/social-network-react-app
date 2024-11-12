import { API } from "../api/api";

// Action types
const GET_USER = "GET_USER";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USER_ID = "SET_USER_ID";
const SET_USER_LOGGED_IN = "SET_USER_LOGGED_IN";
const SET_USER_NAME = "SET_USER_NAME";

// Initial State
const initState = {
  userProfile: {},
  userId: null,
  isLoggedIn: false,
  userName: "",
};

// define Reducer
const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        userProfile: action.payload,
      };
    }
    case SET_USER_ID: {
      return {
        ...state,
        userId: action.payload,
      };
    }
    case SET_USER_LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    }
    case SET_USER_NAME: {
      return {
        ...state,
        userName: action.payload,
      };
    }
    default:
      return state;
  }
};

// Action creators
const getUserByIdAC = (user) => ({ type: GET_USER, payload: user });
const followUserAC = (userId) => ({ type: FOLLOW_USER, payload: userId });
const unfollowUserAC = (userId) => ({ type: UNFOLLOW_USER, payload: userId });
const setUserNameAC = (name) => ({ type: SET_USER_NAME, payload: name });
const setUserIdAC = (userId) => ({ type: SET_USER_ID, payload: userId });
const setUserLoggedInAC = (isLogin) => ({
  type: SET_USER_LOGGED_IN,
  payload: isLogin,
});

// ThunkCreator
export const getUsersByIdThunk = (id) => {
  return (dispatch) => {
    API.getUserById(id).then((res) => {
      dispatch(getUserByIdAC(res.data));
    });
  };
};

export const followUserThunk = (id) => {
  return () => {
    API.followUser(id).then((res) => {
      // ToDo: add user to followers list
      console.log(res.data);
    });
  };
};

export const unFollowUserThunk = (id) => {
  return () => {
    API.unfollowUser(id).then((res) => {
      // ToDo: remove user from followers list
      console.log(res.data);
    });
  };
};

export const LoginUserThunk = (email, password) => {
  return (dispatch) => {
    API.loginUser(email, password)
      .then((res) => {
        dispatch(setUserLoggedInAC(true));
        dispatch(setUserIdAC(res.data.data.userId));
      })
      .then(() => {
        dispatch(getMeThunk());
      });
  };
};

export const LogoutUserThunk = () => {
  return (dispatch) => {
    API.logoutUser()
      .then((res) => {
        dispatch(setUserLoggedInAC(false));
        dispatch(setUserIdAC(null));
        dispatch(setUserNameAC(""));
      })
      .then(() => {
        dispatch(getMeThunk());
      });
  };
};

export const getMeThunk = () => {
  return (dispatch) => {
    API.getMe().then((res) => {
      if (res.data.data.id) {
        dispatch(setUserLoggedInAC(true));
        dispatch(setUserNameAC(res.data.data.login));
        dispatch(setUserIdAC(res.data.data.id));
      } else {
        dispatch(setUserLoggedInAC(false));
        dispatch(setUserNameAC(""));
        dispatch(setUserIdAC(null));
      }
    });
  };
};

export default profileReducer;
