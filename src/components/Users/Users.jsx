import React from "react";
import cl from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
  componentDidMount(){
  //constructor(props){
    //super(props);
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
  }

  onPageChanged=(pageNumber)=>{
    this.props.setCurrentPage(pageNumber);
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then((response) => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

render(){

let pagesCount= Math.ceil(this.props.totalUsersCount / this.props.pageSize);

let pages =[];
for(let i = 1 ; i <= pagesCount; i++){
    pages.push(i);
}
pages.length=5
if(this.props.currentPage===1){
  pages[1]=this.props.currentPage+1
  pages[2]=this.props.currentPage+2
  pages[3]=this.props.currentPage+3
  pages[4]=this.props.currentPage+4

}else if(this.props.currentPage>=3){
  pages[0]=this.props.currentPage-2
  pages[1]=this.props.currentPage-1
  pages[2]=this.props.currentPage
  pages[3]=this.props.currentPage+1
  pages[4]=this.props.currentPage+2
}else if(this.props.currentPage===pages.length){
  pages[0]=this.props.currentPage-4
  pages[1]=this.props.currentPage-3
  pages[2]=this.props.currentPage-2
  pages[3]=this.props.currentPage-1
  pages[4]=this.props.currentPage
}



  return (
    <div>
      <div className={cl.pages}>
      {pages.map( p => {
        return <span className={cl.page}><span className={this.props.currentPage === p && cl.selectedPage}
         onClick={ (e) => {this.onPageChanged(p)}}>{p}</span></span> 
     
      })}
</div>
     {/*} <div>
        <span className={cl.selectedPage}>1</span>       
        <span className={cl.selectedPage}>3</span>
        <span className={cl.selectedPage}>4</span>
        <span className={cl.selectedPage}>5</span>
    </div>*/}
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
//}

export default Users;

