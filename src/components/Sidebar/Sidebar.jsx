import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Sidebar.module.css";
import Users from "../Users/Users";
import Friends from "./Friends/Friends";

const setActive = visit => visit.isActive ? cl.active:cl.item;


const Sidebar = () => {
//    let friendsElement=store.friendsData.map((elem)=>{
 // return <Friends name={elem.name}/>
//})
  return (
    <nav className={cl.nav}>
      <div className={cl.item}>
        <NavLink to="/profile" className={setActive}>Profile</NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to="/dialogs" className={setActive}>Message</NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to="/news" className={setActive}>News</NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to="/music" className={setActive}>Music</NavLink>
      </div>
      <div className={cl.item}>
      <NavLink to ="/setting" className={setActive}>Setting</NavLink>
      </div>
      <div className={cl.item}>
      <NavLink to ="/users" className={setActive}>Users</NavLink>
      </div>
      <div className={cl.item}>
        <div className={cl.friends}>Friends</div>
        <div className={cl.friendName}>
   {/*{friendsElement}*/}
   </div>
      </div>
    </nav>
  );
};

export default Sidebar;
