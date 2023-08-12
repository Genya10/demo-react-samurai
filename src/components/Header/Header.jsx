import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Header.module.css"
//console.log(cl)
const Header=(props)=>{
    return(      
<header className={cl.header}>
<img src='https://img.freepik.com/premium-psd/logo-mockup-on-grey-wall_35913-2122.jpg'></img>
<div className={cl.loginBlock}>
    {props.isAuth 
    ?<div>{ props.login} <button onClick={props.logout}>Log out</button> </div>
    :<NavLink to={'/login'}>Login</NavLink>}
    
</div>
</header>

)
}

export default Header;