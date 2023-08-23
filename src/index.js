import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./state/redux-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerender = (state) => { 
  root.render(
<BrowserRouter basename={process.env.PUBLIC_URL}>
<Provider store={store}>
    <App  />
 </Provider>
</BrowserRouter>
    );
};

rerender(store.getState());




/*store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});*/

//state={state} dispatch={store.dispatch.bind(store)} store={store}