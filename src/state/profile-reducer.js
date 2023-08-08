import { usersAPI,profileAPI } from "../api/api";

const ADD_TEXT = "ADD-TEXT";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const SET_USER_PROFILE="SET_USER_PROFILE";
const SET_USER_STATUS="GET_USER_STATUS";

let initialState={
  postData: [
    { id: 1, message: "How are you?", like: 12 },
    { id: 2, message: "Yo,Yo,bro", like: 25 },
    { id: 3, message: "Everyone,hi!", like: 8 },
  ],
  addNewText: "it-frontend",
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
            message:state.addNewText,
            like: 0}],          
         };
        }
          case UPDATE_NEW_POST:{
            return {
              ...state,
            addNewText:action.newText,
            }
          }
          case SET_USER_PROFILE:{
            return{
              ...state,profile:action.profile
            }
          }
          case SET_USER_STATUS:{
            return{
              ...state,status:action.status
            }
          }
            default:
                return state;
}
}

export const addTextCreator = () => ({ type: ADD_TEXT });
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
export const updateNewPostCreator = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text,
});


export default profileReducer;

