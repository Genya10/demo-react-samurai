import React from "react";
import cl from "./ProfileInfo.module.css";
import ProfileStatusHooks from "./ProfileStatusHook";
import userPhoto from "../../../assets/images/user.png";
import { savePhoto } from "../../../state/profile-reducer";
  
const ProfileInfo =(props)=>{ 

if(!props.profile){
    return <div>JUST A MINUTE</div>
}

const onMainPhotoSelected=(e)=>{
if(e.target.files.length){
    props.savePhoto(e.target.files[0]);
}
}
    return(
        <div className={cl.profileInfo}>
{/* <div>
      <img src='https://www.shutterstock.com/image-photo/chairs-umbrella-palm-beach-tropical-260nw-559599520.jpg' />
    </div>*/}
    <div className={cl.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} className={cl.mainPhoto}/>
        {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
       <div>
        <b>Full name</b>: {props.profile.fullName}
       </div>
       <div>
        <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes':'no'}
       </div>
       <div>
        <b>My professional skills</b>:{props.profile.lookingForAJobDescription}
       </div>
       <div>
        <b>About me</b>:{props.profile.aboutMe}
        </div>       
        <div>
            <b>Contacs</b>: {Object.keys(props.profile.contacts).map(key=>{
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
        </div>
        <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
        {/*<div>{props.profile.aboutMe}</div>
        <div>{props.profile.contacts.github}</div>   */}    
    </div>
        </div>
    )
}

const Contact=({contactTitle,contactValue})=>{
return <div className={cl.contact}><b>{contactTitle}</b>:{contactValue}</div>
}

export default ProfileInfo;