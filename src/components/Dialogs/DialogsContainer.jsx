import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../state/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect, Connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth:state.auth.isAuth
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage:()=> {
      dispatch(sendMessageCreator());
    },    
     updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(Dialogs);
