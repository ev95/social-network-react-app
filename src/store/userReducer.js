import { API } from "../api/api";

// Action types
const GET_USERS = "GET_USERS";
const CHANGE_PAGE = "CHANGE_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

// Initial State
const initState = {
  users: [],
  page: 1,
  usersPerPage: 100,
  totalUsers: 26842,
  searchText: "",
};

// define Reducer
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsers: action.payload,
      };
    }

    default:
      return state;
  }
};

// Action creators
const getUsersAC = (users) => ({ type: GET_USERS, payload: users });
export const changePageAC = (page) => ({ type: CHANGE_PAGE, payload: page });
export const setTotaalUsersCountAC = (users) => ({
  type: SET_TOTAL_USERS_COUNT,
  payload: users,
});

// ThunkCreator

export const getUsersThunk = (page, count) => {
  return (dispatch) => {
    API.getUsers(page, count).then((res) => {
      dispatch(getUsersAC(res.data.items));
      dispatch(setTotaalUsersCountAC(res.data.totalCount));
    });
  };
};

export default userReducer;
