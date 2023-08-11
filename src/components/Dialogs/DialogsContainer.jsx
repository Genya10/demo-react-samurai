import React from "react";
import {
  sendMessageCreator,
 // updateNewMessageBodyCreator,
} from "../../state/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect} from "react-redux";
import { withAuthNavigate } from "../hoc/withAuthNavigate";
import { compose } from "redux";
import LoginDialogs from "./DialogsForm";
import Dialogs1 from "./Dialogs1";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage:(newMessageBody)=> {
      dispatch(sendMessageCreator(newMessageBody));
    },    
  //   updateNewMessageBody: (body) => {
      //dispatch(updateNewMessageBodyCreator(body));
   // },
  };
};


export default compose(
connect(mapStateToProps,mapDispatchToProps),
withAuthNavigate)(Dialogs1);
