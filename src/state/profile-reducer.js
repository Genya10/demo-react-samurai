import { stopSubmit } from "redux-form";
import { usersAPI,profileAPI } from "../api/api";

const ADD_TEXT = "ADD-TEXT";
const SET_USER_PROFILE="SET_USER_PROFILE";
const SET_USER_STATUS="SET_USER_STATUS";
const SAVE_PHOTO_SUCCES="SAVE_PHOTO_SUCCES";

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
          case SAVE_PHOTO_SUCCES:{
            return{
              ...state,profile:{...state.profile,photos:action.photos}
            }
          }
            default:
                return state;
}
}

export const addTextCreator = (addNewText) => ({ type: ADD_TEXT,addNewText });
export const setUserProfile=(profile)=>({type:"SET_USER_PROFILE",profile});
export const setUserStatus=(status)=>({type:"SET_USER_STATUS",status});
export const savePhotoSucces=(photos)=>({type:"SAVE_PHOTO_SUCCES",photos})

export const getUsersProfile=(userId)=>async(dispatch)=>{
 let response=await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
      };

export const getUserStatus=(userId)=>async(dispatch)=>{
 let response= await profileAPI.getStatus(userId)       
        dispatch(setUserStatus(response.data));
      };

    export const updateStatus=(status)=>async(dispatch)=>{
    let response = await profileAPI.updateStatus(status)
            if(response.data.resultCode===0){
            dispatch(setUserStatus(status));
          }  
          };
        
          export const savePhoto=(file)=>async(dispatch)=>{
            let response = await profileAPI.savePhoto(file);
                   if(response.data.resultCode===0){
                   dispatch(savePhotoSucces(response.data.data.photos));
                 }
                 };

           export const saveProfile=(profile)=>async(dispatch,getState)=>{
            const userId=getState().auth.userId;
            let response = await profileAPI.saveProfile(profile);
                  if(response.data.resultCode===0){
                dispatch(getUsersProfile(userId));
                  }else{
                    dispatch(stopSubmit('edit-profile',{_error:response.data.messages[0]}));
                    //return Promise.reject(response.data.messages[0]);
                  }
                   };   

export default profileReducer;

