
const SEND_MESSAGE = "SEND-MESSAGE";


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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
   case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE, newMessageBody
});

export default dialogsReducer;
