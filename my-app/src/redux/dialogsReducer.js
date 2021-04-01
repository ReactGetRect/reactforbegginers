const MESSAGE_ADD = 'MESSAGE-ADD';
const MESSAGE_CHANGE = 'MESSAGE-CHANGE';

let initialState = {
    dialogs: [
        { name: 'Bill', id: 1 },
        { name: 'Samson', id: 2 },
        { name: 'Vazgen', id: 3 },
        { name: 'Gnida', id: 4 },
        { name: 'Boris', id: 5 },
    ],

    messages: [
        { message: 'Where is my money', id: 1 },
        { message: 'I will rape your dog, bitch', id: 2 },
        { message: 'I am already by your door', id: 3 },
        { message: 'fuck off', id: 4 }
    ],

    valueTAdialog: 'type message'
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case MESSAGE_ADD:

            let newMessage = {
                message: state.valueTAdialog,
                id: 4,
            };
            state.messages.push(newMessage);
            state.valueTAdialog = '';
            return state;

        case MESSAGE_CHANGE:
            state.valueTAdialog = action.message;
            return state;

        default:
            return state;
    }
}

export const messageAddActionCreator = () => ({ type: MESSAGE_ADD });
export const messageChangeActionCreator = (message) => ({ type: MESSAGE_CHANGE, message: message });

export default dialogsReducer;