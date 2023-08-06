import React, { useEffect } from "react";
import Main from "./Main";
import { connect } from "react-redux";
import { getUsersProfile } from "../../state/profile-reducer";
import { Navigate, useParams } from "react-router-dom";
import { withAuthNavigate } from "../hoc/withAuthNavigate";

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

        return(
        <Main {...this.props} profile={this.props.profile}/>
        )
      }
    };

    let AuthNavigateComponent=withAuthNavigate(MainContainer);
   
    
    let mapStateToProps=(state)=>({
     profile:state.profilePage.profile,
     isAuth:state.auth.isAuth
    });
    
    let WithUrlDataContainerComponent= withRouter(AuthNavigateComponent);
    
    export default connect(mapStateToProps,{getUsersProfile})( WithUrlDataContainerComponent)




