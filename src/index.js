import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./state/redux-store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(()=>{
  store.dispatch({type:"FAKE"});
},1000);

let rerender = (state) => { 
  root.render(
<Provider store={store}>
    <App  />
 </Provider>
    );
};

rerender(store.getState());




/*store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});*/

//state={state} dispatch={store.dispatch.bind(store)} store={store}