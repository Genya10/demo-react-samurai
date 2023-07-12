const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE="SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT";

let initialState = {
  users: [/*
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
  pageSize:5,
  totalUsersCount:0,
  currentPage:1
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      }
    case SET_USERS:{
      return { ...state, users:action.users }
    }
      case SET_CURRENT_PAGE:{
        return { ...state, currentPage:action.currentPage }
      }
      case SET_TOTAL_USERS_COUNT:{
        return {...state,totalUsersCount:action.count}
      }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: "FOLLOW", userId });
export const unfollowAC = (userId) => ({ type: "UNFOLLOW", userId });
export const setUsersAC = (users) => ({ type: "SET_USERS", users });
export const setCurrentPageAC=(currentPage)=>({type:"SET_CURRENT_PAGE",currentPage});
export const setUsersTotalCountAC=(totalUsersCount)=>({type:"SET_TOTAL_USERS_COUNT",count:totalUsersCount});


export default usersReducer;
