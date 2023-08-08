import React, { useEffect } from "react";
import Main from "./Main";
import { connect } from "react-redux";
import { getUsersProfile,getUserStatus,updateStatus } from "../../state/profile-reducer";
import { withAuthNavigate } from "../hoc/withAuthNavigate";
import { useParams } from "react-router-dom";
import { compose } from "redux";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class MainContainer extends React.Component {
  componentDidMount() {
    
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 29717;
    }
    this.props.getUsersProfile(userId);
    this.props.getUserStatus(userId);
  }
  render() {
    return <Main {...this.props} profile={this.props.profile}
    status={this.props.status} updateStatus={this.props.updateStatus}/>;
  }
}

let AuthNavigateComponent = withAuthNavigate(MainContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status:state.profilePage.status
});

//let WithUrlDataContainerComponent = withRouter(AuthNavigateComponent);

/*export default compose(
  connect(mapStateToProps, { getUsersProfile,getUserStatus,updateStatus }),
withAuthNavigate)(WithUrlDataContainerComponent);*/



export default compose(
  connect(mapStateToProps, { getUsersProfile,getUserStatus,updateStatus }),
withRouter)(MainContainer);
 