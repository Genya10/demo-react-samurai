import React from "react";
import cl from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import MessagesItem from "./MessagesItem";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validator";
import { Textarea } from "../common/Preloader/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messagesData.map((m) => (
    <MessagesItem message={m.message} key={m.id} />
  ));

  let addNewMessage = (values) => {
    // alert(values.newMessageBody)
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Navigate to="/login" />;

  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogsItems}>{dialogsElements}</div>
      <div className={cl.messages}>{messagesElements}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newMessageBody"
          placeholder="write somehing"
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        {" "}
        <button className={cl.btn}>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
