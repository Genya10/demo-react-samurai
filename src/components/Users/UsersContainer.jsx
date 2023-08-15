import React from "react";
import { connect } from "react-redux";
import { follow,unfollow,setCurrentPage,
 toggleFollowingProgress,getUsers }
   from "../../state/users-reducer";
import Users from "./Users";
import preloader from "../../assets/images/loading.gif";
import { withAuthNavigate } from "../hoc/withAuthNavigate";
import { compose } from "redux";
import { getPageSize,getUsersSelector,getTotalUsersCount,
  getCurrentPage,getFollowingInProgress,getIsFetching } from "../../state/selectorsUsers";
//import Preloader from "../common/Preloader/Preloader";

class UsersComponent extends React.Component {
  componentDidMount(){
 this.props.getUsers(this.props.currentPage,this.props.pageSize);
  }

  onPageChanged=(pageNumber)=>{
    this.props.getUsers(pageNumber,this.props.pageSize);
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
     //toggleFollowingProgress={this.props.toggleFollowingProgress}
     followingInProgress={this.props.followingInProgress}
     />
     </>
}
}

/*let mapStateToProps=(state)=>{
  return{    
    users:state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currentPage:state.usersPage.currentPage,
   followingInProgress:state.usersPage.followingInProgress,
    //isFetching:state.userPage.isFetching,
  }
}*/

let mapStateToProps=(state)=>{
  return{    
    users:getUsersSelector(state),
    pageSize:getPageSize(state),
    totalUsersCount:getTotalUsersCount(state),
    currentPage:getCurrentPage(state),
   followingInProgress:getFollowingInProgress(state),
    //isFetching:getIsFetching(state),
  }
}
  
 export default compose(connect(mapStateToProps, 
  {follow,unfollow,setCurrentPage, toggleFollowingProgress, 
  getUsers}))(UsersComponent);
 

