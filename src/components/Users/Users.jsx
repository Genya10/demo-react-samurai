import React from "react";
import cl from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

let Users=(props)=>{

    let pagesCount= Math.ceil(props.totalUsersCount / props.pageSize);

    let pages =[];
    for(let i = 1 ; i <= pagesCount; i++){
        pages.push(i);
    }
    pages.length=5
    if(props.currentPage===1){
      pages[1]=props.currentPage+1
      pages[2]=props.currentPage+2
      pages[3]=props.currentPage+3
      pages[4]=props.currentPage+4
    
    }else if(props.currentPage>=3){
      pages[0]=props.currentPage-2
      pages[1]=props.currentPage-1
      pages[2]=props.currentPage
      pages[3]=props.currentPage+1
      pages[4]=props.currentPage+2
    }else if(props.currentPage===pages.length){
      pages[0]=props.currentPage-4
      pages[1]=props.currentPage-3
      pages[2]=props.currentPage-2
      pages[3]=props.currentPage-1
      pages[4]=props.currentPage
    }
    

    return(
        <div>
        <div className={cl.pages}>
        {pages.map( p => {
          return <span className={cl.page}><span className={props.currentPage === p && cl.selectedPage}
           onClick={ (e) => {props.onPageChanged(p)}}>{p}</span></span> 
       
        })}
  </div>
  { 
        props.users.map((u) => (
          <div key={u.id}>
            <div className={cl.usersWrapper}>
              <div className={cl.usersBoxOne}>
                <div>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    className={cl.usersPhoto}
                  />
                </div>
                <div>
                  {u.followed ? (
                    <button
                      onClick={() => {
                        props.unfollow(u.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        props.follow(u.id);
                      }}
                    >
                      Follow
                    </button>
                  )}
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