import React from "react";
import {
  addTextCreator,
  updateNewPostCreator,
} from "../../../state/profile-reducer";
import MyPosts from "./MyPosts";
import { connect, Connect } from "react-redux";

let mapStateToProps=(state)=>{
  return {
    postData:state.profilePage.postData,
    addNewText:state.profilePage.addNewText,
}
}
let mapDispatchToProps=(dispatch)=>{
  return{
    updateNewPostText:(text)=>{
      let action = updateNewPostCreator(text);
   dispatch(action);
    },
    addPost:()=>{
    dispatch(addTextCreator());
    }
}
}

const SuperMyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default SuperMyPostsContainer;
