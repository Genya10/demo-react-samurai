import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS='INITIALIZED_SUCCESS';

let initialState={
    initializer:false,
}

const appReducer=(state=initialState,action)=>{
switch (action.type){
    case INITIALIZED_SUCCESS:
        return {
            ...state,
            initializer:true
        }
        default:
            return state;
}
}

export const initializedSuccess=()=>({type:INITIALIZED_SUCCESS});

export const initializeApp=() => (dispatch) => {
let promise= dispatch(getAuthUserData());
//dispatch(something())
Promise.all([promise])
.then(()=>{
dispatch(initializedSuccess());
});
}

export default appReducer;