import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "How are you?", like: 12 },
        { id: 2, message: "Yo,Yo,bro", like: 25 },
        { id: 3, message: "Everyone,hi!", like: 8 },
      ],
      addNewText: "it-kamasutra",
    },

    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Vasya" },
        { id: 2, name: "Artem" },
        { id: 3, name: "Boris" },
        { id: 4, name: "Gena" },
        { id: 5, name: "Egen" },
      ],
      messagesData: [
        { id: 1, message: "Hi,hi" },
        { id: 2, message: "Are you sure" },
        { id: 3, message: "Yo,yo" },
        { id: 4, message: "How are you?" },
        { id: 5, message: "Hello" },
      ],
      addNewMessage: "",
    },

    sidebar: {
      friendsData: [
        { name: "Kirill", id: 1 },
        { name: "Dasha", id: 2 },
        { name: "Peter", id: 3 },
        { name: "Nastya", id: 4 },
        { name: "Gosha", id: 5 },
      ],
    },
  },
  _callSubscriber() {
    console.log("Hi,i am rerender");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

this._state.profilePage=profileReducer(this._state.profilePage,action);
this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
this._state.sidebar=sidebarReducer(this._state.sidebar,action);
this._callSubscriber(this._state)
},
};

export default store;
