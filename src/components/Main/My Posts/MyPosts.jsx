import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.postData.map((post) => {
    return <Post message={post.message} like={post.like} />;
  });

  let createNewPost = React.createRef();

  const onAddPost = () => {
     props.addPost();
  };

  let onChangePost = () => {
    let text = createNewPost.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={cl.myPosts}>
      My posts
      <div>
        <textarea
          onChange={onChangePost}
          ref={createNewPost}
          value={props.addNewText}
        />
      </div>
      <button onClick={onAddPost}>Add post</button>
      <div className={cl.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
