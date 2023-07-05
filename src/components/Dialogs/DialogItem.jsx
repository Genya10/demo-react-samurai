import React from "react";
import { NavLink } from "react-router-dom";
import cl from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
      <div>
        <div className={cl.item}>
          <img src="https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk"/>
          <NavLink to={path}>{props.name}</NavLink>
        </div>
      </div>
    );
  };

  export default DialogItem;