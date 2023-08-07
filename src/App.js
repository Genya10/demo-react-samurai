//import logo from "./logo.svg";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import UsersContainer from "./components/Users/UsersContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MainContainer from "./components/Main/Main Container";
import Login from "./components/Login/Login";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Sidebar />
        <div className="app-content">
          <Routes>
            {/*<Route path="/profile/:userId?" element={<MainContainer />} />*/}            
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
}

export default App;

//store={props.store}

//Sidebar----state={props.state.sidebar}