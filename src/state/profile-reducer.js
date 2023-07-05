import { type } from "@testing-library/user-event/dist/type";

const ADD_TEXT = "ADD-TEXT";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
export const addTextCreator = () => ({ type: ADD_TEXT });
export const updateNewPostCreator = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text,
});

let initialState={
  postData: [
    { id: 1, message: "How are you?", like: 12 },
    { id: 2, message: "Yo,Yo,bro", like: 25 },
    { id: 3, message: "Everyone,hi!", like: 8 },
  ],
  addNewText: "it-kamasutra",
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
            default:
                return state;
}
}
export default profileReducer;


/*const profileReducer=(state=initialState,action)=>{
  switch(action.type){
      case ADD_TEXT:{
          let newPost = {
              id: 4,
              message:state.addNewText,
              like: 0,
            };
            let stateCopy={...state};
            stateCopy.postData=[...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.addNewText='';
            //state.postData.push(newPost);
            //state.addNewText = "";
            return stateCopy;
            }
            case UPDATE_NEW_POST:{
              let stateCopy={...state};
              stateCopy.addNewText = action.newText;
              return stateCopy;
            }
              default:
                  return state;
  }
  }*/