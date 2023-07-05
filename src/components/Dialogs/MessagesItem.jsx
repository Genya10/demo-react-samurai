import React from "react";
import cl from "./Dialogs.module.css";


const MessagesItem = (props) => {
    return <div className={cl.message}>{props.message}
    </div>;
  };
  

  export default MessagesItem;