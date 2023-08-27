import React from "react";
import cl from "./ProfileInfo.module.css";
import ProfileStatusHooks from "./ProfileStatusHook";
import userPhoto from "../../../assets/images/user.png";
//import { savePhoto } from "../../../state/profile-reducer";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";
  
const ProfileInfo =(props)=>{ 

    const [editMode,setEditMode]=useState(false);

if(!props.profile){
    return <div>JUST A MINUTE</div>
}

const onMainPhotoSelected=(e)=>{
if(e.target.files.length){
    props.savePhoto(e.target.files[0]);
}
}

const onSubmit=(formData)=>{
   props.saveProfile(formData);  
    setEditMode(false);
}

    return(
        <div className={cl.profileInfo}>
    <div className={cl.descriptionBlock}>   
        <img src={props.profile.photos.large || userPhoto} className={cl.mainPhoto}/>
     {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
     {editMode 
      ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> 
      : <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={props.profile}
      isOwner={props.isOwner}/>}      
   
        <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
        {/*<div>{props.profile.aboutMe}</div>
        <div>{props.profile.contacts.github}</div>   */}    
    </div>
        </div>
    )
}

const ProfileData=(props)=>{
    return   <div>
        {props.isOwner &&<div><button onClick={props.goToEditMode}>Edit</button></div>}
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
    </div> 
}

export const Contact=({contactTitle,contactValue})=>{
return <div className={cl.contact}><b>{contactTitle}</b>:{contactValue}</div>
}

export default ProfileInfo;