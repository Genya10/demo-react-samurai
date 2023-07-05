import React from "react";
import cl from "./ProfileInfo.module.css";

const ProfileInfo =()=>{
    return(
        <div className={cl.profileInfo}>
 <div>
      <img src='https://www.shutterstock.com/image-photo/chairs-umbrella-palm-beach-tropical-260nw-559599520.jpg' />
    </div>
    <div className={cl.descriptionBlock}>ava+description
    </div>
        </div>
    )
}

export default ProfileInfo;