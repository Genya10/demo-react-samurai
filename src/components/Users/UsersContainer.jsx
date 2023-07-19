import React from "react";
import { connect,Connect } from "react-redux";
import { follow,unfollow,setUsers,setCurrentPage,
  setUsersTotalCount,toggleIsFetching } from "../../state/users-reducer";
import Users from "./Users";
import axios from "axios";
import preloader from "../../assets/images/loading.gif"
//import Preloader from "../common/Preloader/Preloader";

class UsersComponent extends React.Component {
  componentDidMount(){
    this.props.toggleIsFetching(true);
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setUsersTotalCount(response.data.totalCount);
        });
  }

  onPageChanged=(pageNumber)=>{
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true)
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then((response) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setUsersTotalCount(response.data.totalCount);
    });
  }

render(){
  
return <>
{this.props.isFetching ? <img src={preloader}/>:null}
<Users TotalUsersCount={this.props.TotalUsersCount}
    pageSize={this.props.pageSize} 
     currentPage={this.props.currentPage}
     onPageChanged={this.onPageChanged}
     users={this.props.users}
     follow={this.props.follow}
     unfollow={this.props.unfollow}
     />
     </>
}
}


let mapStateToProps=(state)=>{
  return{    
    users:state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currentPage:state.usersPage.currentPage,
    //isFetching:state.userPage.isFetching,
  }
}

export default connect(mapStateToProps,{ 
  follow,unfollow,setUsers,setCurrentPage, setUsersTotalCount,toggleIsFetching,})
  (UsersComponent);

/*
let mapDispatchToProps=(dispatch)=>{
  return{
  follow:(userId)=>{
    dispatch(followAC(userId));
  },
  unfollow:(userId)=>{
    dispatch(unfollowAC(userId));
  },
  setUsers:(users)=>{
    dispatch(setUsersAC(users));
  },
  setCurrentPage:(pageNumber)=>{
    dispatch(setCurrentPageAC(pageNumber))
  },
  setTotalUsersCount:(totalCount)=>{
    dispatch(setUsersTotalCountAC(totalCount))
  },
  toggleIsFetching:(isFetching)=>{
    dispatch(toggleIsFetchingAC(isFetching))
  }

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UsersComponent);*/

