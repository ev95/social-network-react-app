import { API } from "../api/api";

// Action types
const GET_USER = "GET_USER";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";

// Initial State
const initState = {
  userProfile: {},
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
    default:
      return state;
  }
};

// Action creators
const getUserByIdAC = (user) => ({ type: GET_USER, payload: user });
const followUserAC = (userId) => ({ type: FOLLOW_USER, payload: userId });
const unfollowUserAC = (userId) => ({ type: UNFOLLOW_USER, payload: userId });

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
      console.log(res.data);
    });
  };
};

export const unFollowUserThunk = (id) => {
  return () => {
    API.unfollowUser(id).then((res) => {
      console.log(res.data);
    });
  };
};

export default profileReducer;
