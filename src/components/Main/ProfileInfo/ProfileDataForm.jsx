import React from "react";
import { reduxForm } from "redux-form";
import { createField,Input,Textarea } from "../../common/Preloader/FormsControls/FormsControls";
import cl from "./ProfileInfo.module.css";


const ProfileDataForm=({handleSubmit,profile,error})=>{
    return(
        <form onSubmit={handleSubmit}>          
        {<div><button >Save</button></div>}
        {error && <div className={cl.formError}>{error}
        </div>}
        <div>
        <b>Full name</b>: {createField('Full name','fullName',[],Input)}
       </div>
       <div>
        <b>Looking for a job</b>: 
        {createField('','lookingForAJob',[],Input,{type:'checkbox'})}
       </div>
       <div>
        <b>My professional skills</b>:{profile.lookingForAJobDescription}
        {createField('My professional skills','lookingForAJobDescription',[],Textarea)}
       </div>
       <div>
        <b>About me</b>:{profile.aboutMe}
        {createField('About me','aboutMe',[],Textarea)}
        </div> 
       <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key=>{
                return <div className={cl.contact}>
                    <b>{key}:{createField(key,'contacts.'+key,[],Input)}</b>
                </div>
            })}
        </div>
    </form> 
    )
}

const ProfileDataReduxForm=reduxForm({form:'edit-profile'})(ProfileDataForm);

export default ProfileDataReduxForm;