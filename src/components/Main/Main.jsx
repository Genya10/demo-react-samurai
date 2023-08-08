import React from "react";
import cl from "./Main.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";

const Main = (props) => {

  return (
    <div className={cl.main}>
      <ProfileInfo profile={props.profile}
      status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  );
};

export default Main;
//store={props.store}