import React from "react";
import cl from "./Main.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";
import SuperMyPostsContainer from "./My Posts/MyPostsContainer";

const Main = (props) => {

  return (
    <div className={cl.main}>
      <ProfileInfo profile={props.profile}/>
      <SuperMyPostsContainer />
    </div>
  );
};

export default Main;
//store={props.store}