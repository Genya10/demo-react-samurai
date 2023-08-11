
import React from "react";
//import { NavLink } from "react-router-dom";
import cl from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import MessagesItem from "./MessagesItem";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const DialogsForm = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map((d) => (
      <DialogItem name={d.name} key={d.id} id={d.id} />
    ));
    let messagesElements = state.messagesData.map((m) => (
      <MessagesItem message={m.message} key={m.id} />
    ));
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
      props.sendMessage();
    };
  
    let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body);
    };
    if(!props.isAuth) return <Navigate to="/login"/>;
  return (
        <div>            
            <form onSubmit={props.handleSubmit}>
          <Field
            value={newMessageBody}
            placeholder="write somehing"
            cols="15"
            rows="5"
            onChange={onNewMessageChange}
            name={'loginTextarea'}
            component={'textarea'}
          ></Field>
          <div>
            {" "}
            <button className={cl.btn} onClick={onSendMessageClick}>Send</button>
          </div>
          </form>
        </div>
  );
};

const DialogsReduxForm=reduxForm({form:'loginTextarea'})(DialogsForm)

const LoginDialogs =(props)=>{
    const onSubmit=(formData)=>{
        console.log(formData)
    }
  
    return (
      <div className={cl.dialogs}>
<DialogsReduxForm onSubmit={onSubmit}/>
      </div>
    );
  };
  

export default LoginDialogs;
