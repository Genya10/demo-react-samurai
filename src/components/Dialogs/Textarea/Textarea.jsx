import React from "react";
import cl from './Textarea.module.css'
import { updateNewMessageBodyCreator,sendMessageCreator } from "../../../state/dialogs-reducer";

const Textarea =(props) => { 

const newMessageBody = props.store.addNewMessage;

let onSendMessageClick=()=>{
props.store.dispatch(sendMessageCreator());
}
let onNewMessageChange=(e)=>{
let body=e.target.value;
props.store.dispatch(updateNewMessageBodyCreator(body));
}

return(
  <div>
    <textarea value={newMessageBody} onChange={onNewMessageChange}
      placeholder="write something"   
    cols="15" rows="5" className={cl.textArea}>
    </textarea>
    <button onClick={onSendMessageClick}  className={cl.btn}>Send text</button>
  </div>
)
  };

  export default Textarea;