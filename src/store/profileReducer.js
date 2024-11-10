import { API } from "../api/api";

// Action types
const GET_USER = "GET_USER";

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

// ThunkCreator
export const getUsersByIdThunk = (id) => {
  return (dispatch) => {
    API.getUserById(id).then((res) => {
      console.log(res.data);
      dispatch(getUserByIdAC(res.data));
    });
  };
};

export default profileReducer;
