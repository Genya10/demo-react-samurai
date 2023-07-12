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
    //addNewMessage:state.dialogsPage.addNewMessage,
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

/*const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;*/

export default connect(mapStateToProps,mapDispatchToProps)(Dialogs);
