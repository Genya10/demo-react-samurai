
import {
  addTextCreator,
} from "../../../state/profile-reducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps=(state)=>{
  return {
    postData:state.profilePage.postData,
    addNewText:state.profilePage.addNewText,
}
}
let mapDispatchToProps=(dispatch)=>{
  return{
    addPost:(addNewText)=>{
    dispatch(addTextCreator(addNewText));
    }
}
}

const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
