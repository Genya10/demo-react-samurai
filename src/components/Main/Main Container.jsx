import React, { useEffect } from "react";
import Main from "./Main";
import { connect } from "react-redux";
import { getUsersProfile,getUserStatus,updateStatus,savePhoto,saveProfile } from "../../state/profile-reducer";
//import { withAuthNavigate } from "../hoc/withAuthNavigate";
import { useParams } from "react-router-dom";
import { compose } from "redux";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class MainContainer extends React.Component {
 
  refreshMain(){
        let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizeUserId;
      if(!userId){
        this.props.navigate.push('/login');
      }
    }
    this.props.getUsersProfile(userId);
     this.props.getUserStatus(userId);
  }
 
  componentDidMount() {  
   this.refreshMain();
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    if(this.props.match.params.userId != prevProps.match.params.userId){
      this.refreshMain();
    }
  }


  render() {
    //console.log('Render main')
    return <Main {...this.props}
    isOwner={!this.props.match.params.userId}
     profile={this.props.profile}
    status={this.props.status}
     updateStatus={this.props.updateStatus}
     savePhoto={this.props.savePhoto}/>;
  }
}

let mapStateToProps = (state) => ( {
  profile: state.profilePage.profile,
  status:state.profilePage.status,
  authorizeUserId:state.auth.userId,
  isAuth:state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, { getUsersProfile,getUserStatus,updateStatus,savePhoto,saveProfile }),
withRouter)(MainContainer);




