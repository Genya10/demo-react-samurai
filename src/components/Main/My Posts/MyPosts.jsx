import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm } from "redux-form";
import { required,maxLengthCreator } from "../../../utils/validators/validator";
import { Textarea } from "../../common/Preloader/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  let postElements = props.postData.map((post) => {
    return <Post key={post.id} message={post.message} like={post.like} />;
  });

  const onAddPost = (values) => {
    props.addPost(values.addNewText);
  };

  return (
    <div className={cl.myPosts}>
     <h3> My post </h3>
<AddPostFormRedux onSubmit={onAddPost}/>
<div className={cl.posts}>{postElements}</div>
    </div>
  );
};

const addPostForm=(props)=>{
    return (
       <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name='addNewText' placeholder='enter message'
        validate={[required,maxLength10]}/>        
     <div><button >Add post</button></div> 
     </form>
    )
}

const AddPostFormRedux=reduxForm({form:'profileAddNewText'})(addPostForm)

export default MyPosts;