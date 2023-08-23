//import logo from "./logo.svg";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import UsersContainer from "./components/Users/UsersContainer";
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MainContainer from "./components/Main/Main Container";
import Login from "./components/Login/Login";
import { Component, Suspense } from "react";
import { connect } from "react-redux";
import { withRouter } from "./components/Main/Main Container";
import { compose } from "redux";
import { initializeApp } from "./state/app-reducer";

class App extends Component {
  componentDidMount(){
    this.props.initializeApp();
}
  render(){
    if(!this.props.initializer){
      return <div>Loading...</div>
    }
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Sidebar />
        <div className="app-content">
          <Suspense fallback={<div>Loading</div>}>
          <Routes>            
            <Route path="/profile/*" element={<MainContainer />} />
            <Route path={"profile/:userId"} element={<MainContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />}/>                                     
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/users" element={<UsersContainer/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
          </Suspense>
        </div>
      </div>
  );
}
}

const mapStateToProps=(state)=>({
  initializer:state.app.initializer
})

export default compose(
  withRouter,
 connect( mapStateToProps,{initializeApp}))(App);

/*
function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Sidebar />
        <div className="app-content">
          <Routes>      
            <Route path="/profile/*" element={<MainContainer />} />
            <Route path={"profile/:userId"} element={<MainContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />}/>                                     
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/users" element={<UsersContainer/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}*/


//export default App;

