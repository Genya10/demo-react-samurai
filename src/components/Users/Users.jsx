import React from "react";
import cl from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Preloader/FormsControls/Paginator";

let Users=(props)=>{

    return(
       <div>
<Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
       
        { props.users.map((u) => (
          <div key={u.id}>
            <div className={cl.usersWrapper}>
              <div className={cl.usersBoxOne}>
                <div>
                 <NavLink to={'/profile/'+ u.id}>                
                   <img   src={u.photos.small != null ? u.photos.small : userPhoto}
                    className={cl.usersPhoto}/>    
                 </NavLink>
                </div>
                <div>
                  {u.followed 
                     ? <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                     props.unfollow(u.id)
                     }}>Unfollow</button>                                     
                    :  <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {   
                      props.follow(u.id)            
                        }}> Follow </button>}                                                                                               
                </div>
              </div>
              <div className={cl.usersBoxTwo}>
                <div className={cl.mainUsers}>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </div>
                <div className={cl.mainUsers}>
                  <div>{"u.location.country"}</div>
                  <div>{"u.location.city"}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Users;