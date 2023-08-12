import { connect } from "react-redux";
import React from "react";
import Header from "./Header";
import axios from "axios";
import { authAPI } from "../../api/api";
import { getAuthUserData } from "../../state/auth-reducer";
import { logout } from "../../state/auth-reducer";

class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.getAuthUserData();
    }
    render (){
        return <Header {...this.props}/>
    }
}

const mapStateToProps=(state)=>({
  isAuth:state.auth.isAuth,
  login:state.auth.login,
});

export default connect(mapStateToProps,{getAuthUserData,logout})(HeaderContainer);

