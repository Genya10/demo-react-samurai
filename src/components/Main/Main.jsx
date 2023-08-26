import React from "react";
import cl from "./Main.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";

const Main = (props) => {

  return (
    <div className={cl.main}>
      <ProfileInfo savePhoto={props.savePhoto} 
      isOwner={props.isOwner} profile={props.profile}
      status={props.status} saveProfile={props.saveProfile}
       updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  );
};

export default Main;
//store={props.store}