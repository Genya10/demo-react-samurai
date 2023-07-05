const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE,
  body: body,
});
export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        addNewMessage: action.body,
      };

    case SEND_MESSAGE:
      let body = state.addNewMessage;
      return {
        ...state,
        addNewMessage: "",
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export default dialogsReducer;
