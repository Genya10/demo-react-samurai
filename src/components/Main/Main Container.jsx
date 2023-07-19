import React, { useEffect } from "react";
import Main from "./Main";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../state/profile-reducer";
import { useParams } from "react-router-dom";

/*function MainContainer(props){

  const {userId}=useParams();
    let currUserId = userId || 2
  useEffect(()=>{
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/profile/`+ currUserId)
    .then((response) => {
      props.setUserProfile(response.data);
    });
  },[userId]);
    
      return(
        <div>
      <Main profile={props.profile}/>
      </div>
      );
      }
  
  
  let mapStateToProps=(state)=>({
   profile:state.profilePage.profile
  });
  
  export default connect(mapStateToProps,{setUserProfile})( MainContainer) ;*/

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
      axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
    }
    
      render(){
        return(
        <Main {...this.props} profile={this.props.profile}/>
        )
      }
    };
    
    let mapStateToProps=(state)=>({
     profile:state.profilePage.profile
    });
    
    let WithUrlDataContainerComponent= withRouter(MainContainer);
    
    export default connect(mapStateToProps,{setUserProfile})( WithUrlDataContainerComponent)

/*class MainContainer extends React.Component {

componentDidMount(){
  let userId = this.props.match.params.userId;
  if(!userId){
    userId=2;
  }
  axios
  .get(`https://social-network.samuraijs.com/api/1.0/profile/2`+userId)
  .then((response) => {
    this.props.setUserProfile(response.data);
  });
}

  render(){
    return(
    <Main {...this.props} profile={this.props.profile}/>
    )
  }
};

let mapStateToProps=(state)=>({
 profile:state.profilePage.profile
});

let WithUrlDataContainerComponent= withRouter(MainContainer);

export default connect(mapStateToProps,{setUserProfile})( WithUrlDataContainerComponent) ;*/


