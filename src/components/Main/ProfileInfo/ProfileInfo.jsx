import React from "react";
import cl from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

  
const ProfileInfo =(props)=>{ 

if(!props.profile){
    return <div>JUST A MINUTE</div>
}
    return(
        <div className={cl.profileInfo}>
{/* <div>
      <img src='https://www.shutterstock.com/image-photo/chairs-umbrella-palm-beach-tropical-260nw-559599520.jpg' />
    </div>*/}
    <div className={cl.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.contacts.github}</div>       
    </div>
        </div>
    )
}

export default ProfileInfo;