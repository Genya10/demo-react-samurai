import { usersAPI,profileAPI } from "../api/api";

const ADD_TEXT = "ADD-TEXT";
const SET_USER_PROFILE="SET_USER_PROFILE";
const SET_USER_STATUS="GET_USER_STATUS";

let initialState={
  postData: [
    { id: 1, message: "How are you?", like: 12 },
    { id: 2, message: "Yo,Yo,bro", like: 25 },
    { id: 3, message: "Everyone,hi!", like: 8 },
  ],
  profile:null,
  status:"",
}

const profileReducer=(state=initialState,action)=>{
switch(action.type){
    case ADD_TEXT:{
         return {
          ...state,
          addNewText:'',
          postData:[...state.postData,{id: 4,
            message:action.addNewText,
            like: 0}],          
         };
        }
           case SET_USER_STATUS:{
            return{
              ...state,status:action.status
            }
          }
          case SET_USER_PROFILE:{
            return{
              ...state,profile:action.profile
            }
          }
            default:
                return state;
}
}

export const addTextCreator = (addNewText) => ({ type: ADD_TEXT,addNewText });
export const setUserProfile=(profile)=>({type:"SET_USER_PROFILE",profile});
export const setUserStatus=(status)=>({type:"SET_USER_STATUS",status});

export const getUsersProfile=(userId)=>(dispatch)=>{
  usersAPI.getProfile(userId)
      .then((response) => {
        dispatch(setUserProfile(response.data));
      });
}
export const getUserStatus=(userId)=>(dispatch)=>{
  profileAPI.getStatus(userId)
      .then((response) => {
        
        dispatch(setUserStatus(response.data));
      });
    }

    export const updateStatus=(status)=>(dispatch)=>{
      profileAPI.updateStatus(status)
          .then((response) => {
            if(response.data.resultCode===0){
            dispatch(setUserStatus(status));
          }
          });
        }


export default profileReducer;

