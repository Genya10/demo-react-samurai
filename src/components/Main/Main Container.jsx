import React, { useEffect } from "react";
import Main from "./Main";
import { connect } from "react-redux";
import { getUsersProfile } from "../../state/profile-reducer";
import { Navigate, useParams } from "react-router-dom";
import { usersAPI } from "../../api/api";

  export function withRouter(Children){
    return(props)=>{
      const match ={params:useParams()};
      return<Children {...props} match={match}/>
    }
  }

  class MainContainer extends React.Component {

    componentDidMount(){
    
      let userId = this.props.match.params.userId;
      if(!userId){
       userId=2;
     }
     this.props.getUsersProfile(userId);
    }
    
      render(){
        
   if(!this.props.isAuth) return <Navigate to="/login"/>

        return(
        <Main {...this.props} profile={this.props.profile}/>
        )
      }
    };
    
    let mapStateToProps=(state)=>({
     profile:state.profilePage.profile,
     isAuth:state.auth.isAuth
    });
    
    let WithUrlDataContainerComponent= withRouter(MainContainer);
    
    export default connect(mapStateToProps,{getUsersProfile})( WithUrlDataContainerComponent)




