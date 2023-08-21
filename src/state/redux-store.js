import {combineReducers,legacy_createStore as createStore,applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import ThunkMiddleware from "redux-thunk";
import {reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";
import { compose } from "redux";

let reduces = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reduces, composeEnhancers(applyMiddleware(ThunkMiddleware)));

//export let store = createStore(reduces,applyMiddleware(ThunkMiddleware));




