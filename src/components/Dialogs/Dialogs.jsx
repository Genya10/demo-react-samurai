import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import MessagesItem from "./MessagesItem";

const Dialogs = (props) => {
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

  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogsItems}>{dialogsElements}</div>
      <div className={cl.messages}>
        {" "}
        {messagesElements}
        <div>
          <textarea
            value={newMessageBody}
            placeholder="write somehing"
            cols="15"
            rows="5"
            onChange={onNewMessageChange}
          ></textarea>
          <div>
            {" "}
            <button className={cl.btn} onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
