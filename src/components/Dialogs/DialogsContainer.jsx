import React from "react";
import {
  sendMessageCreator,
} from "../../state/dialogs-reducer";
import { connect} from "react-redux";
import { withAuthNavigate } from "../hoc/withAuthNavigate";
import { compose } from "redux";
import Dialogs from "./Dialogs";


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
  };
};


export default compose(
connect(mapStateToProps,mapDispatchToProps),
withAuthNavigate)(Dialogs);
