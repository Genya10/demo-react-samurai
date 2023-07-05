import React from "react";
import cl from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {

  constructor(props){
    super(props);
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
 
  };

render(){
  return (
    <div>
      <button onClick={this.getUsers}>Get users</button>
{ 
      this.props.users.map((u) => (
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
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
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
  );
}
};

export default Users;

