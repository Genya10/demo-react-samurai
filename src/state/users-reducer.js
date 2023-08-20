import { usersAPI } from "../api/api";
import { updateObjectArray } from "../utils/validators/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [
    /*
   {
      id: 1,
      photoUrl:"https://m.media-amazon.com/images/I/517X8TDNm+L._AC_UF1000,1000_QL80_.jpg",
      followed: true,
      name: "Jenya",
      status: "I am a softdeveloper",
      location: { city: "Kiyv", country: "Ukraine" },
    },
    {
      id: 2,
      photoUrl:"https://m.media-amazon.com/images/I/517X8TDNm+L._AC_UF1000,1000_QL80_.jpg",
      followed: true,
      name: "Ben",
      status: "I am a manadger",
      location: { city: "Boston", country: "USA" },
    },
    {
      id: 3,
      photoUrl:"https://m.media-amazon.com/images/I/517X8TDNm+L._AC_UF1000,1000_QL80_.jpg",
      followed: false,
      name: "Pavel",
      status: "I am a backend-developer",
      location: { city: "Krakov", country: "Polska" },
    },
    {
      id: 4,
      photoUrl:"https://m.media-amazon.com/images/I/517X8TDNm+L._AC_UF1000,1000_QL80_.jpg",
      followed: true,
      name: "Dima",
      status: "I am a QA",
      location: { city: "Koshice", country: "Slovakia" },
    },*/
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectArray(state.users,action.userId,
          "id",{followed:true}),
        /*  users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),*/
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectArray(state.users,action.userId,
          "id",{followed:false}),
       /* users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),*/
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};

export const followSucces = (userId) => ({ type: "FOLLOW", userId });
export const unfollowSucces = (userId) => ({ type: "UNFOLLOW", userId });
export const setUsers = (users) => ({ type: "SET_USERS", users });
export const setCurrentPage = (currentPage) => ({
  type: "SET_CURRENT_PAGE",
  currentPage,
});
export const setUsersTotalCount = (totalUsersCount) => ({
  type: "SET_TOTAL_USERS_COUNT",
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode == 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      followSucces
    );
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      unfollowSucces
    );
  };
};

export default usersReducer;
